import { esc } from "../layout.mjs";
export const slug = "program";
export const title = "Program";
export const description = "CASYS 2027 program, keynotes and sessions.";
export const render = ({ site }) => `
<section class="wrap">
  <h1>Program</h1>
  <p>${esc(site.name)} runs ${esc(site.dates.display)}. The detailed program, including keynotes, paper sessions, tutorials and the artifact showcase, will be published after paper notifications.</p>
  <div class="grid">
    <article class="card"><h3>Day 1 · Oct 18</h3><p>Tutorials and workshops</p></article>
    <article class="card"><h3>Day 2 · Oct 19</h3><p>Main conference</p></article>
    <article class="card"><h3>Day 3 · Oct 20</h3><p>Main conference</p></article>
    <article class="card"><h3>Day 4 · Oct 21</h3><p>Main conference and artifact showcase</p></article>
  </div>
  <p class="muted">The day-by-day split is provisional.</p>
</section>`;
