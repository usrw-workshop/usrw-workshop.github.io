(function () {
  window.USRWDeck.registerSlide({
    id: "block-5-logged-path",
    title: "A shared log preserves how the user moved",
    layout: "block-five",
    mode: "core",
    modeLabel: "Block 5 · Shared data",
    duration: "33:30-37:00",
    status: "DRAFT",
    showMeta: false,
    role: "KuaiSAR records where each event happened, what the system showed, how the user responded, and how search began.",
    citations: ["sun2023kuaisar"],
    html: [
      "<div class=\"logged-path-slide\">",
      "  <figure class=\"event-trace\">",
      "    <figcaption>ILLUSTRATIVE TRACE USING KUAISAR FIELDS <sup class=\"citation-marker\" data-cite=\"sun2023kuaisar\"></sup></figcaption>",
      "    <table>",
      "      <thead><tr><th>time</th><th>surface</th><th>system record</th><th>context preserved</th></tr></thead>",
      "      <tbody>",
      "        <tr><td>10:31:08</td><td><strong>recommendation</strong></td><td>video shown, then skipped</td><td>exposure + negative feedback</td></tr>",
      "        <tr><td>10:31:14</td><td><strong>transition</strong></td><td>search opened from that video</td><td>entry source</td></tr>",
      "        <tr><td>10:31:20</td><td><strong>search</strong></td><td>query issued, one result clicked</td><td>query + positive feedback</td></tr>",
      "      </tbody>",
      "    </table>",
      "    <small>Schematic example, not a row from the dataset.</small>",
      "  </figure>",
      "  <section class=\"kuaisar-scale\" data-fragment aria-label=\"KuaiSAR dataset scale\">",
      "    <p><strong>25,877</strong><span>dual-service users</span></p>",
      "    <p><strong>19 days</strong><span>one app</span></p>",
      "    <p><strong>19.7M</strong><span>search + recommendation actions</span></p>",
      "  </section>",
      "  <p class=\"dataset-boundary\" data-fragment><strong>KuaiSAR provides the joint data.</strong><span>The paper reports no model comparison.</span></p>",
      "  <p class=\"block-six-question\" data-fragment>Aligned data opens the next question: <strong>which model layers should be shared?</strong></p>",
      "</div>"
    ].join("")
  });
}());
