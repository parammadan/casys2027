#!/usr/bin/env node
// Post-build checks: every internal link resolves, every page has a title + description, JSON data is well-formed.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
if (!existsSync(dist)) { console.error("dist/ missing — run npm run build first"); process.exit(1); }

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const htmlFiles = walk(dist).filter((f) => f.endsWith(".html"));
const errors = [];
const base = (JSON.parse(readFileSync(join(root, "data", "site.json"), "utf8")).basePath || "").replace(/\/$/, "");

for (const f of htmlFiles) {
  const html = readFileSync(f, "utf8");
  const rel = f.slice(dist.length);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${rel}: missing <title>`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) errors.push(`${rel}: missing description`);
  for (let [, href] of html.matchAll(/(?:href|src)="(\/[^"#?]*)"/g)) {
    if (base && !href.startsWith(base + "/")) { errors.push(`${rel}: link outside basePath ${href}`); continue; }
    href = href.slice(base.length);
    const target = href.endsWith("/") ? join(dist, href, "index.html") : join(dist, href);
    if (!existsSync(target)) errors.push(`${rel}: broken link ${href}`);
  }
}

for (const f of readdirSync(join(root, "data"))) {
  try { JSON.parse(readFileSync(join(root, "data", f), "utf8")); } catch (e) { errors.push(`data/${f}: ${e.message}`); }
}

if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`ok: ${htmlFiles.length} pages, no broken internal links`);
