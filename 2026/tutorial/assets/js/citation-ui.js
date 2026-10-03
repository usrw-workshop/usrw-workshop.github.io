(function () {
  function registry() {
    return window.USRWCitations || { keys: [], entries: {} };
  }

  function entryFor(key) {
    var entries = registry().entries || {};
    return entries[key] || { key: key, label: key };
  }

  function citationOrder() {
    var seen = Object.create(null);
    var ordered = [];

    function add(key) {
      if (!key || seen[key]) {
        return;
      }
      seen[key] = true;
      ordered.push(key);
    }

    if (window.USRWDeck && window.USRWDeck.getSlides) {
      window.USRWDeck.getSlides().forEach(function (slide) {
        (slide.citations || []).forEach(add);
      });
    }

    (registry().keys || []).forEach(add);
    return ordered;
  }

  function numberMap() {
    var numbers = Object.create(null);
    citationOrder().forEach(function (key, index) {
      numbers[key] = index + 1;
    });
    return numbers;
  }

  function numberFor(key) {
    return numberMap()[key] || citationOrder().length + 1;
  }

  function parseKeys(value) {
    if (Array.isArray(value)) {
      return value;
    }
    return String(value || "")
      .split(/[\s,]+/)
      .map(function (key) { return key.trim(); })
      .filter(Boolean);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function linkFor(key) {
    var entry = entryFor(key);
    var label = escapeHtml(entry.label || key);
    var title = escapeHtml(entry.title || key);
    var href = entry.link || entry.url || "";
    if (!href) {
      return "<span class=\"citation-link\" title=\"" + title + "\">" + label + "</span>";
    }
    return [
      "<a class=\"citation-link\" href=\"",
      escapeHtml(href),
      "\" target=\"_blank\" rel=\"noopener\" title=\"",
      title,
      "\">",
      label,
      "</a>"
    ].join("");
  }

  function footerItem(key) {
    var entry = entryFor(key);
    var marker = "[" + numberFor(key) + "]";
    var label = escapeHtml(entry.label || key);
    var title = escapeHtml(entry.title || key);
    var href = entry.link || entry.url || "";
    var text = [
      "<span class=\"citation-number\">",
      marker,
      "</span> ",
      label,
      title ? " — <span class=\"citation-title\">" + title + "</span>" : ""
    ].join("");
    if (!href) {
      return "<span class=\"citation-item\">" + text + "</span>";
    }
    return [
      "<a class=\"citation-item citation-link\" href=\"",
      escapeHtml(href),
      "\" target=\"_blank\" rel=\"noopener\" title=\"",
      title,
      "\">",
      text,
      "</a>"
    ].join("");
  }

  function keysFor(referenceSpec) {
    if (referenceSpec === "all") {
      return citationOrder();
    }
    return referenceSpec || [];
  }

  function renderFooter(keys) {
    var sortedKeys = keys.slice().sort(function (left, right) {
      return numberFor(left) - numberFor(right);
    });
    return "<footer class=\"slide-citations\" aria-label=\"Slide citations\">" +
      sortedKeys.map(footerItem).join("") +
      "</footer>";
  }

  function hydrateMarkers(root) {
    Array.prototype.forEach.call(root.querySelectorAll("[data-cite]"), function (marker) {
      var keys = parseKeys(marker.dataset.cite);
      var numbers = keys.map(numberFor);
      marker.textContent = "[" + numbers.join(", ") + "]";
      marker.title = keys.map(function (key) {
        return entryFor(key).label || key;
      }).join("; ");
      marker.setAttribute("aria-label", "Citation " + numbers.join(", "));
    });
  }

  function renderReferences(referenceSpec) {
    var keys = keysFor(referenceSpec);
    if (!keys.length) {
      return "<p class=\"muted\">No references have been added to the BibTeX registry yet.</p>";
    }
    return "<ol class=\"reference-list\">" + keys.map(renderReference).join("") + "</ol>";
  }

  function renderReference(key) {
    var entry = entryFor(key);
    var detail = referenceDetail(entry);
    return [
      "<li value=\"",
      numberFor(key),
      "\">",
      linkFor(key),
      ". <span class=\"reference-title\">",
      escapeHtml(entry.title || key),
      "</span>",
      detail ? "<span class=\"reference-detail\"> " + escapeHtml(detail) + ".</span>" : "",
      entry.doi ? " <span class=\"reference-doi\">doi:" + escapeHtml(entry.doi) + "</span>" : "",
      "</li>"
    ].join("");
  }

  function referenceDetail(entry) {
    return [
      entry.journal || entry.booktitle || "",
      entry.volume && entry.number ? entry.volume + "(" + entry.number + ")" : "",
      entry.pages ? "pp. " + entry.pages : ""
    ].filter(Boolean).join(", ");
  }

  window.USRWCitationUI = {
    hydrateMarkers: hydrateMarkers,
    renderFooter: renderFooter,
    renderReferences: renderReferences
  };
}());
