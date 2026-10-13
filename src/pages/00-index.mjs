import { esc } from "../layout.mjs";
export const slug = "";
export const title = "Home";
export const description = "";
export const render = ({ site, tracks }) => `
<section class="hero">
  <div class="wrap">
    <p class="eyebrow">${esc(site.dates.display)} · ${esc(site.location)}</p>
    <h1>${esc(site.name)}</h1>
    <p class="full">${esc(site.fullName)}</p>
    <p class="tagline">${esc(site.tagline)}</p>
    <div class="cta">
      <a class="btn" href="/cfp/">Call for Papers</a>
      <a class="btn ghost" href="/dates/">Important Dates</a>
    </div>
  </div>
</section>
<section class="wrap">
  <h2>About</h2>
  <p>${esc(site.name)} brings together the people who build the systems underneath autonomous AI: agent runtimes and orchestration layers, inference engines, ML compilers and kernels, and the hardware they run on. The conference focuses on work that is measured, reproducible and grounded in real workloads.</p>
  <h3>Who it is for</h3>
  <ul class="pills">${site.audience.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
</section>
<section class="wrap">
  <h2>Topics</h2>
  <div class="grid">
    ${tracks.topics.map((t) => `<article class="card"><h3>${esc(t.title)}</h3><ul>${t.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></article>`).join("")}
  </div>
</section>`;
