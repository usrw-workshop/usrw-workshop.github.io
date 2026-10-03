(function () {
  window.USRWDeck.registerSlide({
    id: "common-roots",
    title: "Search tools behind content profiles",
    layout: "block-two",
    mode: "core",
    modeLabel: "Block 2 · Content representations",
    status: "DRAFT",
    showMeta: false,
    role: "Two ideas from information retrieval: IDF term weighting and the vector space model.",
    citations: ["sparckJones1972termSpecificity", "salton1975vectorSpace"],
    html: [
      "<div class=\"content-foundations\">",
      "  <div class=\"content-foundation-papers\">",
      "    <section class=\"content-paper specificity-paper\" aria-labelledby=\"specificity-paper-title\">",
      "      <span class=\"content-paper-year\">1972</span>",
      "      <h2 id=\"specificity-paper-title\">IDF term weighting <sup class=\"citation-marker\" data-cite=\"sparckJones1972termSpecificity\"></sup></h2>",
      "      <p class=\"content-paper-idea\"><strong>Weight words by collection frequency</strong><span>Words in fewer documents get more weight.</span></p>",
      "    </section>",
      "    <section class=\"content-paper vector-paper\" data-fragment aria-labelledby=\"vector-paper-title\">",
      "      <span class=\"content-paper-year\">1975</span>",
      "      <h2 id=\"vector-paper-title\">Vector space model <sup class=\"citation-marker\" data-cite=\"salton1975vectorSpace\"></sup></h2>",
      "      <p class=\"content-paper-idea\"><strong>Match weighted word vectors</strong><span>Compare queries and documents by similarity.</span></p>",
      "    </section>",
      "  </div>",
      "  <aside class=\"content-foundation-insight\" data-fragment aria-label=\"Tutorial synthesis\">",
      "    <span class=\"content-insight-bulb\" aria-hidden=\"true\">💡</span>",
      "    <strong>Search and recommendation can share a content space.</strong>",
      "    <div class=\"content-foundation-comparisons\">",
      "      <p><strong>Search</strong><span>Compare a query with items.</span></p>",
      "      <p><strong>Content-based recommendation</strong><span>Compare a user profile with items.</span></p>",
      "    </div>",
      "  </aside>",
      "</div>"
    ].join("")
  });
}());
