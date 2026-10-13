# CASYS 2027

Website for **CASYS 2027: Conference on Agentic & Scalable AI Systems**.
*Building the Systems, Runtime Engine, and Hardware Foundations for Autonomous AI*
October 18–21, 2027 · Boston, MA / Hybrid · https://casys.js.org

A zero-dependency static site. All content lives in `data/*.json`, and a ~50-line Node script renders it to `dist/`.

## Quick start

```sh
npm run dev      # build + serve at http://localhost:8080
npm test         # build + check titles, descriptions, internal links, JSON
```

Requires Node 20+. There is nothing to `npm install`.

## Layout

```
data/            site.json, committee.json, dates.json, tracks.json  <- edit these
src/layout.mjs   shared HTML shell, nav, SEO + schema.org Event metadata
src/pages/*.mjs  one module per page (slug, title, description, render)
src/assets/      style.css, site.js, favicon.svg
public/          copied verbatim to dist/ (CNAME, .nojekyll)
scripts/         build.mjs, check.mjs, serve.mjs
.github/workflows/deploy.yml   test on PRs, deploy to GitHub Pages on main
```

## Updating content

- **Organizers:** `data/committee.json`. A member with an empty `name` renders as *To be announced*. Add names only after each person has confirmed their role in writing.
- **Deadlines:** `data/dates.json`. An empty `date` renders as *TBA*.
- **Topics / submission types:** `data/tracks.json`.
- **Contact email:** `site.json` → `contactEmail` (footer and sponsors page fall back to "coming soon").
- **New page:** add `src/pages/NN-name.mjs` exporting `slug`, `title`, `description`, `render(data)`, and add it to `nav` in `src/layout.mjs`.

## Deploying to casys.js.org

1. Push to a GitHub repo and set **Settings → Pages → Source** to *GitHub Actions*.
2. Request the subdomain by opening a PR to [js-org/js.org](https://github.com/js-org/js.org) that adds `"casys": "<user>.github.io/<repo>"` to `cnames_active.js`. js.org reviews requests for legitimate content.
3. Once the PR merges, `public/CNAME` already points Pages at `casys.js.org`. Enable *Enforce HTTPS*.
