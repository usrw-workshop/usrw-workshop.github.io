(function () {
  window.USRWDeck.registerSlide({
    id: "behavior-transfer",
    title: "Industry let signals cross the boundary",
    layout: "block-four",
    mode: "core",
    modeLabel: "Block 4 · The bridge back",
    duration: "24:00-27:00",
    status: "DRAFT",
    showMeta: false,
    role: "YouTube used search history inside recommendation—without jointly training the two tasks.",
    citations: ["covington2016youtube"],
    html: [
      "<div class=\"industry-bridge-slide\">",
      "  <figure class=\"google-paper-figure\">",
      "    <div class=\"google-figure-crop\">",
      "      <img src=\"assets/media/diagrams/youtube-candidate-generation.svg\" alt=\"Adapted from Covington et al., Figure 3: embedded watch history and search tokens feed a deep network, with softmax training and nearest-neighbor candidate retrieval.\">",
      "      <span class=\"figure-marker marker-search\" data-fragment data-fragment-group=\"youtube-step-1\">1</span>",
      "      <span class=\"figure-marker marker-network\" data-fragment data-fragment-group=\"youtube-step-2\">2</span>",
      "      <span class=\"figure-marker marker-serving\" data-fragment data-fragment-group=\"youtube-step-3\">3</span>",
      "    </div>",
      "    <figcaption>Adapted from Figure 3 · Covington, Adams &amp; Sargin (2016) <sup class=\"citation-marker\" data-cite=\"covington2016youtube\"></sup></figcaption>",
      "  </figure>",
      "  <div class=\"industry-bridge-reading\">",
      "    <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"youtube-step-1\">",
      "      <b>1</b><p><strong>Search behavior becomes an input</strong><span>Recent query tokens form a search-history vector.</span></p>",
      "    </section>",
      "    <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"youtube-step-2\">",
      "      <b>2</b><p><strong>One DNN mixes the signals</strong><span>Search, watches, and context become one user vector.</span></p>",
      "    </section>",
      "    <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"youtube-step-3\">",
      "      <b>3</b><p><strong>The task stays recommendation</strong><span>Predict a future watch; retrieve candidate videos by ANN.</span></p>",
      "    </section>",
      "  </div>",
      "  <p class=\"industry-bridge-takeaway\" data-fragment><strong>Deep learning supplies reusable machinery:</strong> embeddings, feature mixing, and vector retrieval.</p>",
      "</div>"
    ].join("")
  });
}());
