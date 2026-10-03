(function () {
  window.USRWDeck.registerSlide({
    id: "block-2-profile-reuse",
    title: "Content profiles in early recommenders",
    layout: "block-two",
    mode: "core",
    modeLabel: "Block 2 · Profile reuse",
    status: "DRAFT",
    showMeta: false,
    role: "Words from rated Web pages described each user's interests.",
    citations: ["pazzani1996syskill", "balabanovic1997fab"],
    html: [
      "<div class=\"profile-reuse-slide\">",
      "  <div class=\"profile-stories\">",
      "    <section class=\"profile-story syskill-story\" aria-labelledby=\"syskill-profile-title\">",
      "      <span class=\"paper-year\">1996</span>",
      "      <h2 id=\"syskill-profile-title\">Syskill &amp; Webert <sup class=\"citation-marker\" data-cite=\"pazzani1996syskill\"></sup></h2>",
      "      <p class=\"profile-use\"><strong>Recommend pages</strong><span>Score page text against learned interests.</span></p>",
      "      <p class=\"profile-use\"><strong>Assist Web search</strong><span>Turn profile words into a Web-search query.</span></p>",
      "    </section>",
      "    <section class=\"profile-story fab-story\" data-fragment aria-labelledby=\"fab-profile-title\">",
      "      <span class=\"paper-year\">1997</span>",
      "      <h2 id=\"fab-profile-title\">Fab <sup class=\"citation-marker\" data-cite=\"balabanovic1997fab\"></sup></h2>",
      "      <p class=\"profile-use\"><strong>Match users by interests</strong><span>Compare the words in their content profiles.</span></p>",
      "      <p class=\"profile-use\"><strong>Share highly rated pages</strong><span>Recommend them to users with similar profiles.</span></p>",
      "    </section>",
      "  </div>",
      "  <aside class=\"profile-boundary\" data-fragment>",
      "    <strong>Content profiles connected search and recommendation.</strong>",
      "    <span>Retrieval, preference scoring, and page sharing remained separate operations.</span>",
      "  </aside>",
      "</div>"
    ].join("")
  });
}());
