(function () {
  window.USRWDeck.registerSlide({
    id: "block-4-joint-vision",
    title: "Joint learning across search and recommendation",
    layout: "block-four",
    mode: "core",
    modeLabel: "Block 4 · The bridge back",
    duration: "27:00-30:00",
    status: "DRAFT",
    showMeta: false,
    role: "26 years later, Zamani and Croft (2018) revisit the same question with joint neural learning.",
    citations: ["belkin1992information", "zamani2018joint"],
    html: [
      "<div class=\"joint-return-slide\">",
      "  <section class=\"joint-history joint-history-1992\" aria-labelledby=\"joint-history-title\">",
      "    <span class=\"joint-return-year\"><a class=\"paper-recall-link\" href=\"#block-1-belkin-croft-contract\">Back to Block 1</a> · Belkin &amp; Croft, 1992 <sup class=\"citation-marker\" data-cite=\"belkin1992information\"></sup></span>",
      "    <h2 id=\"joint-history-title\">Two sides of the same coin?</h2>",
      "    <p>A common model for matching texts to queries or interest profiles.</p>",
      "    <p class=\"joint-history-gap\">No joint search–recommendation training in this paper.</p>",
      "  </section>",
      "  <section class=\"joint-history joint-history-2018\" data-fragment aria-labelledby=\"joint-opportunity-title\">",
      "    <span class=\"joint-return-year\">2018 · Zamani &amp; Croft <sup class=\"citation-marker\" data-cite=\"zamani2018joint\"></sup></span>",
      "    <h2 id=\"joint-opportunity-title\">Can one task improve the other?</h2>",
      "    <p>On shopping sites, both tasks use the same products.</p>",
      "    <p>Neural models can learn shared representations.</p>",
      "  </section>",
      "  <section class=\"joint-return-contribution\" data-fragment aria-labelledby=\"joint-contribution-title\">",
      "    <h2 id=\"joint-contribution-title\">Joint Search–Recommendation (JSR) <sup class=\"citation-marker\" data-cite=\"zamani2018joint\"></sup></h2>",
      "    <p class=\"joint-return-loss\">search loss + recommendation loss</p>",
      "    <p>Shared word embeddings and term weights. Separate task scorers.</p>",
      "  </section>",
      "  <aside class=\"joint-return-gap\" data-fragment aria-label=\"Remaining evaluation gap and bridge to Block 5\">",
      "    <strong>Next step: real search–recommendation logs <sup class=\"citation-marker\" data-cite=\"zamani2018joint\"></sup></strong>",
      "    <p>The preliminary study used synthetic queries from product categories.</p>",
      "  </aside>",
      "</div>"
    ].join("")
  });
}());
