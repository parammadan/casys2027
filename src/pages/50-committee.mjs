import { esc } from "../layout.mjs";
export const slug = "committee";
export const title = "Organizers";
export const description = "CASYS 2027 organizing committee.";
const person = (m) =>
  m.name && m.name.trim()
    ? `<li><strong>${esc(m.name)}</strong>${m.affiliation ? `<span>${esc(m.affiliation)}</span>` : ""}</li>`
    : `<li><span class="tba">To be announced</span></li>`;
export const render = ({ committee }) => `
<section class="wrap">
  <h1>Organizing Committee</h1>
  <div class="grid">
  ${committee.roles.map((r) => `<article class="card"><h3>${esc(r.role)}</h3><ul class="people">${r.members.map(person).join("")}</ul></article>`).join("")}
  </div>
  <p class="muted">The program committee and artifact evaluation committee will be listed here once invitations are accepted.</p>
</section>`;
