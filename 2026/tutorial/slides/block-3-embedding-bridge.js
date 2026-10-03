(function () {
  window.USRWDeck.registerSlide({
    id: "block-3-embedding-bridge",
    title: "Matrix factorization was an embedding model",
    layout: "block-three",
    mode: "core",
    modeLabel: "Block 3 · The embedding bridge",
    duration: "23:00-24:00",
    status: "DRAFT",
    showMeta: false,
    role: "Collaborative filtering and word2vec used similar vector scoring, but learned from different signals.",
    citations: [
      "koren2009matrix",
      "bengio2003neural",
      "mikolov2013word2vec",
      "levy2014implicit"
    ],
    html: [
      "<div class=\"embedding-bridge-slide\">",
      "  <section class=\"embedding-comparison\" aria-label=\"Vector models learned from behavior and text\">",
      "    <article class=\"embedding-example recsys-embedding-example\" aria-labelledby=\"embedding-mf-title\">",
      "      <span class=\"embedding-year\">By 2009 · Recommendation</span>",
      "      <h2 id=\"embedding-mf-title\">Matrix factorization <sup class=\"citation-marker\" data-cite=\"koren2009matrix\"></sup></h2>",
      "      <p class=\"embedding-training\">Learns from ratings and interactions.</p>",
      "      <div class=\"embedding-vector-pair\" role=\"math\" aria-label=\"Dot product of a user vector and an item vector\"><span>user vector</span><i>·</i><span>item vector</span></div>",
      "      <p class=\"embedding-output\">Estimates a user's preference for an item.</p>",
      "    </article>",
      "    <article class=\"embedding-example nlp-embedding-example\" data-fragment aria-labelledby=\"embedding-word2vec-title\">",
      "      <span class=\"embedding-year\">2013 · Language</span>",
      "      <h2 id=\"embedding-word2vec-title\">Word2vec <sup class=\"citation-marker\" data-cite=\"mikolov2013word2vec\"></sup></h2>",
      "      <p class=\"embedding-training\">Learns from nearby words in text.</p>",
      "      <div class=\"embedding-vector-pair\" role=\"math\" aria-label=\"Dot product of a word vector and a context vector\"><span>word vector</span><i>·</i><span>context vector</span></div>",
      "      <p class=\"embedding-output\">Scores how well a word fits its context.</p>",
      "      <p class=\"embedding-caveat\">Word vectors existed earlier; 2013 was a scale-up. <sup class=\"citation-marker\" data-cite=\"bengio2003neural\"></sup></p>",
      "    </article>",
      "  </section>",
      "  <aside class=\"embedding-connection\" data-fragment aria-label=\"Tutorial synthesis\">",
      "    <strong>Similar vector machinery, learned from different signals. <sup class=\"citation-marker\" data-cite=\"levy2014implicit\"></sup></strong>",
      "    <p>Scalable text embeddings helped reconnect search and recommendation.</p>",
      "  </aside>",
      "</div>"
    ].join("")
  });
}());
