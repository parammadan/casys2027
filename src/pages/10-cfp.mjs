import { esc } from "../layout.mjs";
export const slug = "cfp";
export const title = "Call for Papers";
export const description = "CASYS 2027 Call for Papers: agent runtimes, inference serving, kernels, compilers, hardware, training systems and benchmarking.";
export const render = ({ site, tracks }) => `
<section class="wrap">
  <h1>Call for Papers</h1>
  <p>${esc(site.name)} invites submissions on the design, implementation and evaluation of systems for agentic and large-scale AI. We welcome work spanning the stack, from hardware and kernels to runtimes, serving and orchestration.</p>
  <h2>Topics of interest</h2>
  ${tracks.topics.map((t) => `<h3>${esc(t.title)}</h3><ul>${t.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`).join("")}
  <h2>Submission types</h2>
  <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
  ${tracks.submissionTypes.map((s) => `<tr><td>${esc(s.type)}</td><td>${esc(s.detail)}</td></tr>`).join("")}
  </tbody></table>
  <h2>Format and policies</h2>
  <p>Page limits, templates, the anonymity policy and the submission portal link will be posted here once finalized. See <a href="/dates/">Important Dates</a> for the timeline.</p>
  <h2>Artifacts</h2>
  <p>Authors of accepted papers are encouraged to submit artifacts for evaluation. See <a href="/artifacts/">Artifact Evaluation</a>.</p>
</section>`;
