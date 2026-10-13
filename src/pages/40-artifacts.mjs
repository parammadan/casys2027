import { esc } from "../layout.mjs";
export const slug = "artifacts";
export const title = "Artifact Evaluation";
export const description = "CASYS 2027 artifact evaluation and benchmarking process and badges.";
export const render = ({ site }) => `
<section class="wrap">
  <h1>Artifact Evaluation &amp; Benchmarking</h1>
  <p>${esc(site.name)} treats reproducibility as part of the research contribution. Authors of accepted papers may submit code, data and scripts to be evaluated by an independent committee.</p>
  <h2>Badges</h2>
  <table><thead><tr><th>Badge</th><th>Requirement</th></tr></thead><tbody>
    <tr><td>Available</td><td>The artifact is archived at a permanent, public location with a DOI or stable identifier.</td></tr>
    <tr><td>Functional</td><td>The artifact is documented, complete and runs, exercising the paper's main claims.</td></tr>
    <tr><td>Results Reproduced</td><td>Evaluators reproduce the paper's key results within reasonable tolerance.</td></tr>
  </tbody></table>
  <h2>What to submit</h2>
  <ul>
    <li>A README with hardware and software requirements, setup steps and expected run time.</li>
    <li>Scripts that map directly to each figure or table being evaluated.</li>
    <li>Container images or lockfiles that pin dependencies.</li>
    <li>For accelerator-dependent results, the exact device model and count, plus a reduced-scale configuration if the full run needs resources evaluators may not have.</li>
  </ul>
  <h2>Benchmarking guidelines</h2>
  <ul>
    <li>Report the full configuration: model, batch size, sequence lengths, precision and parallelism.</li>
    <li>Report variance across repeated runs, not just the best run.</li>
    <li>Compare against tuned baselines on the same hardware.</li>
    <li>Release or describe workload traces so others can replay them.</li>
  </ul>
</section>`;
