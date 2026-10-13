#!/usr/bin/env node
// Zero-dependency static site build: data/*.json + src/pages/*.mjs -> dist/
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist");

const load = (f) => JSON.parse(readFileSync(join(root, "data", f), "utf8"));
const data = {
  site: load("site.json"),
  committee: load("committee.json"),
  dates: load("dates.json"),
  tracks: load("tracks.json"),
};

const { layout } = await import(pathToFileURL(join(root, "src", "layout.mjs")));

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const pagesDir = join(root, "src", "pages");
const pages = readdirSync(pagesDir).filter((f) => f.endsWith(".mjs")).sort();
const sitemap = [];

for (const file of pages) {
  const page = await import(pathToFileURL(join(pagesDir, file)));
  const { slug, title, description, render } = page;
  const html = layout({ data, slug, title, description, body: render(data) });
  const dest = slug === "" ? join(out, "index.html") : join(out, slug, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, html);
  sitemap.push(`${data.site.url}/${slug ? slug + "/" : ""}`);
  console.log(`built /${slug}`);
}

cpSync(join(root, "src", "assets"), join(out, "assets"), { recursive: true });
if (existsSync(join(root, "public"))) cpSync(join(root, "public"), out, { recursive: true });

writeFileSync(
  join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap
    .map((u) => `  <url><loc>${u}</loc></url>`)
    .join("\n")}\n</urlset>\n`
);
writeFileSync(join(out, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${data.site.url}/sitemap.xml\n`);
writeFileSync(join(out, "404.html"), layout({ data, slug: "404", title: "Page not found", description: "", body: `<section class="wrap"><h1>Page not found</h1><p><a href="/">Back to home</a></p></section>` }));

console.log(`done: ${pages.length} pages -> dist/`);
