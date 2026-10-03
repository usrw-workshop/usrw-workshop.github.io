(function () {
  function papersFor(slide) {
    var plan = window.USRWPaperPlan || {};
    return slide.papers || plan[slide.id] || [];
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function render(slide) {
    var papers = papersFor(slide);
    if (!papers.length) {
      return "<p class=\"muted\">No specific paper planned for this block.</p>";
    }
    return "<ul class=\"paper-plan-list\">" + papers.map(renderPaper).join("") + "</ul>";
  }

  function renderPaper(paper) {
    var by = paper.by ? "<span class=\"paper-by\">" + escapeHtml(paper.by) + "</span>" : "";
    var status = paper.status ? "<span class=\"paper-status\">" + escapeHtml(paper.status) + "</span>" : "";
    return [
      "<li>",
      "<span class=\"paper-title\">" + escapeHtml(paper.paper) + by + status + "</span>",
      "<span class=\"paper-why\">" + escapeHtml(paper.why) + "</span>",
      "</li>"
    ].join("");
  }

  window.USRWPaperPlanUI = {
    render: render
  };
}());
