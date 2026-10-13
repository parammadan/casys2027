import { esc } from "../layout.mjs";
export const slug = "venue";
export const title = "Venue & Hybrid Attendance";
export const description = "CASYS 2027 venue in Boston, MA and hybrid participation.";
export const render = ({ site }) => `
<section class="wrap">
  <h1>Venue &amp; Hybrid Attendance</h1>
  <p>${esc(site.name)} takes place in <strong>Boston, Massachusetts</strong>, with full remote participation.</p>
  <h2>In person</h2>
  <p>The venue, hotel block and travel information will be announced here.</p>
  <h2>Remote</h2>
  <ul>
    <li>All main-track talks are livestreamed and recorded.</li>
    <li>Remote attendees can ask questions through a moderated Q&amp;A channel.</li>
    <li>Authors who cannot travel may present remotely.</li>
  </ul>
  <h2>Visa letters</h2>
  <p>Invitation letters for registered attendees will be available after registration opens.</p>
</section>`;
