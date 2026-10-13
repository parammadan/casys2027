import { esc, tba } from "../layout.mjs";
export const slug = "dates";
export const title = "Important Dates";
export const description = "CASYS 2027 submission, notification and conference dates.";
export const render = ({ dates }) => `
<section class="wrap">
  <h1>Important Dates</h1>
  <p>All deadlines are Anywhere on Earth (AoE) unless noted. Dates marked TBA have not been set.</p>
  <table class="dates"><tbody>
  ${dates.deadlines.map((d) => `<tr><td>${esc(d.label)}</td><td>${tba(d.date)}</td></tr>`).join("")}
  </tbody></table>
</section>`;
