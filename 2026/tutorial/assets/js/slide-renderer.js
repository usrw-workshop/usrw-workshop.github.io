(function () {
  function htmlList(items, className) {
    if (!items || !items.length) {
      return "";
    }
    return "<ul class=\"" + className + "\">" + items.map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    }).join("") + "</ul>";
  }

  function renderCitationFooter(keys) {
    var ui = window.USRWCitationUI;
    if (!ui || !keys || !keys.length) {
      return "";
    }
    return ui.renderFooter(keys);
  }

  function renderReferences(slide) {
    var ui = window.USRWCitationUI;
    return ui ? ui.renderReferences(slide.references) : "";
  }

  function renderPaperPlan(slide) {
    var ui = window.USRWPaperPlanUI;
    return ui ? ui.render(slide) : "";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function slideClass(slide) {
    return [
      "slide",
      "slide-" + (slide.layout || "placeholder"),
      slide.mode === "extension" ? "is-extension" : "is-core"
    ].join(" ");
  }

  function meta(slide) {
    if (slide.showMeta === false) {
      return "";
    }
    return [
      "<footer class=\"slide-meta\">",
      "  <span>" + escapeHtml(slide.duration || "timing tbd") + "</span>",
      "  <span>" + escapeHtml(slide.status || "PLACEHOLDER") + "</span>",
      "</footer>"
    ].join("");
  }

  function renderBrandStamp() {
    return [
      "<div class=\"slide-brand-stamp\" aria-label=\"Spotify\">",
      "  <img src=\"assets/media/spotify.svg\" alt=\"\" aria-hidden=\"true\">",
      "  <span>Spotify</span>",
      "</div>"
    ].join("");
  }

  function render(slide) {
    var section = document.createElement("section");
    section.className = slideClass(slide);
    section.dataset.slideId = slide.id;
    section.setAttribute("aria-labelledby", slide.id + "-title");

    var customHtml = slide.html || (slide.references ? renderReferences(slide) : "");
    section.innerHTML = customHtml ? customSlide(slide, customHtml) : placeholderSlide(slide);
    if (window.USRWCitationUI && window.USRWCitationUI.hydrateMarkers) {
      window.USRWCitationUI.hydrateMarkers(section);
    }
    return section;
  }

  function customSlide(slide, customHtml) {
    return [
      "<div class=\"slide-kicker\">" + escapeHtml(slide.modeLabel || slide.mode || "core") + "</div>",
      "<h1 id=\"" + slide.id + "-title\">" + escapeHtml(slide.title) + "</h1>",
      slide.role ? "<p class=\"slide-role\">" + escapeHtml(slide.role) + "</p>" : "",
      "<div class=\"slide-content\">",
      customHtml,
      "</div>",
      renderCitationFooter(slide.citations || []),
      meta(slide),
      renderBrandStamp()
    ].join("");
  }

  function placeholderSlide(slide) {
    var evidence = htmlList(slide.evidence || [], "evidence-list");
    var placeholders = htmlList(slide.placeholders || [], "placeholder-list");
    return [
      "<div class=\"slide-kicker\">" + escapeHtml(slide.modeLabel || slide.mode || "core") + "</div>",
      "<h1 id=\"" + slide.id + "-title\">" + escapeHtml(slide.title) + "</h1>",
      "<p class=\"slide-role\">" + escapeHtml(slide.role || "PLACEHOLDER") + "</p>",
      "<div class=\"slide-grid\">",
      "  <div class=\"placeholder-card\">",
      "    <h2>" + escapeHtml(slide.planLabel || "Papers planned for this block") + "</h2>",
      renderPaperPlan(slide),
      "  </div>",
      "  <div class=\"evidence-card\">",
      "    <h2>Block notes</h2>",
      placeholders,
      "    <h2 class=\"secondary-heading\">Review/source leads</h2>",
      evidence || "<p class=\"muted\">No evidence assigned yet.</p>",
      "  </div>",
      "</div>",
      meta(slide),
      renderBrandStamp()
    ].join("");
  }

  window.USRWSlideRenderer = {
    render: render
  };
}());
