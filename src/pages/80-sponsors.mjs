import { esc } from "../layout.mjs";
export const slug = "sponsors";
export const title = "Sponsors";
export const description = "Sponsor CASYS 2027.";
export const render = ({ site }) => `
<section class="wrap">
  <h1>Sponsors</h1>
  <p>${esc(site.name)} is supported by organizations building AI infrastructure. Sponsorship funds student travel grants, remote-attendance infrastructure and compute for artifact evaluation.</p>
  <p>${site.contactEmail ? `To discuss sponsorship, email <a href="mailto:${esc(site.contactEmail)}">${esc(site.contactEmail)}</a>.` : "Sponsorship contact details coming soon."}</p>
</section>`;
