export const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export const tba = (v) => (v && String(v).trim() ? esc(v) : `<span class="tba">TBA</span>`);

const nav = [
  ["", "Home"],
  ["cfp", "Call for Papers"],
  ["dates", "Important Dates"],
  ["program", "Program"],
  ["artifacts", "Artifact Evaluation"],
  ["committee", "Organizers"],
  ["venue", "Venue & Hybrid"],
  ["registration", "Registration"],
  ["sponsors", "Sponsors"],
];

export function layout({ data, slug, title, description, body }) {
  const { site } = data;
  const pageTitle = slug === "" ? `${site.name} — ${site.fullName}` : `${title} · ${site.name}`;
  const desc = description || `${site.name}: ${site.tagline}. ${site.dates.display}, ${site.location}.`;
  const canonical = `${site.url}/${slug && slug !== "404" ? slug + "/" : ""}`;
  const ld = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${site.name} (${site.fullName})`,
    description: site.tagline,
    startDate: site.dates.start,
    endDate: site.dates.end,
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: [
      { "@type": "Place", name: "Boston, MA", address: { "@type": "PostalAddress", addressLocality: "Boston", addressRegion: "MA", addressCountry: "US" } },
      { "@type": "VirtualLocation", url: site.url },
    ],
    url: site.url,
  };
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(pageTitle)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#0b1220">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/style.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${site.concept ? `<div class="concept" role="note"><div class="wrap"><strong>Concept site.</strong> CASYS 2027 is a design and engineering concept, not an announced event. Don't submit papers or make travel plans based on this page.</div></div>` : ""}
<header class="top">
  <div class="wrap bar">
    <a class="brand" href="/">CASYS<span>2027</span></a>
    <button class="menu" aria-expanded="false" aria-controls="nav">Menu</button>
    <nav id="nav" aria-label="Main">
      ${nav.map(([s, l]) => `<a href="/${s ? s + "/" : ""}"${s === slug ? ' aria-current="page"' : ""}>${l}</a>`).join("\n      ")}
    </nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="foot">
  <div class="wrap">
    <p><strong>${esc(site.name)}</strong> · ${esc(site.fullName)}</p>
    <p>${esc(site.dates.display)} · ${esc(site.location)}</p>
    <p>${site.contactEmail ? `Contact: <a href="mailto:${esc(site.contactEmail)}">${esc(site.contactEmail)}</a>` : "Contact details coming soon."}</p>
  </div>
</footer>
<script src="/assets/site.js" defer></script>
</body>
</html>
`;
}
