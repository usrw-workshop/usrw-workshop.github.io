(function () {
  window.USRWDeck.registerSlide({
    id: "block-1-query-profile-hook",
    title: "When a query becomes a profile",
    layout: "block-one",
    mode: "core",
    modeLabel: "Block 1 · Shared machinery",
    status: "DRAFT",
    showMeta: false,
    role: "The same request can guide one search or influence future recommendations.",
    citations: ["luhn1958business", "goldberg1992tapestry"],
    html: [
      "<div class=\"query-profile-slide\">",
      "  <section class=\"intent-contrast\" aria-label=\"How one request can be used by search and recommendation\">",
      "    <p class=\"example-intent\"><span>Example request:</span> “jazz piano for working”</p>",
      "    <div class=\"contrast-columns\">",
      "      <article class=\"contrast-side is-search\" aria-labelledby=\"search-response-title\">",
      "        <div class=\"contrast-context\">Search</div>",
      "        <h2 class=\"contrast-action\" id=\"search-response-title\">Answer now</h2>",
      "        <span class=\"contrast-detail\">Rank the catalogue for this request.</span>",
      "        <span class=\"contrast-outcome\">A profile update is optional.<br>Recorded search outcomes can improve ranking.</span>",
      "      </article>",
      "      <article class=\"contrast-side is-persistent\" aria-labelledby=\"recommendation-response-title\">",
      "        <div class=\"contrast-context\">Recommendation</div>",
      "        <h2 class=\"contrast-action\" id=\"recommendation-response-title\">Remember for later</h2>",
      "        <span class=\"contrast-detail\">Add this interest to the user's profile. <sup class=\"citation-marker\" data-cite=\"luhn1958business\"></sup></span>",
      "        <span class=\"contrast-outcome\">Use it in future recommendations.</span>",
      "      </article>",
      "    </div>",
      "  </section>",
      "  <aside class=\"history-line\" data-fragment>",
      "    <h2 class=\"term-label\">Collaborative filtering has IR roots</h2>",
      "    <p>Tapestry (1992) let saved searches use other people's annotations. It called this <strong>collaborative filtering</strong>. <sup class=\"citation-marker\" data-cite=\"goldberg1992tapestry\"></sup></p>",
      "  </aside>",
      "</div>"
    ].join("")
  });
}());
