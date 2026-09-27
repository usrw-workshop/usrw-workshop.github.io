#!/usr/bin/env node
// Export the website's poster list as portable JSON for lightning-pitch tools.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const siteDir = path.resolve(__dirname, "../2026");
const context = vm.createContext({ window: {} });
for (const filename of ["accepted-papers-data.js", "paper-sessions.js"]) {
  vm.runInContext(fs.readFileSync(path.join(siteDir, filename), "utf8"), context, {
    filename,
    timeout: 1000,
  });
}

const sessions = context.window.PAPER_SESSIONS;
const posters = context.window.ACCEPTED_PAPERS
  .filter((paper) => (sessions[paper.id] || "Poster") === "Poster")
  .map(({ pdf, ...paper }) => ({
    ...paper,
    session: "Poster",
    pdf: pdf ? new URL(pdf, "https://usrw-workshop.github.io/2026/").href : null,
  }));

const output = path.join(siteDir, "poster-papers.json");
fs.writeFileSync(output, `${JSON.stringify(posters, null, 2)}\n`);
console.log(`Exported ${posters.length} poster papers to ${output}`);
