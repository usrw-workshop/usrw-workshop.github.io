(function () {
  window.USRWNavigation = {
    bind: function (actions) {
      var slider = document.querySelector("[data-slide-seek]");

      document.addEventListener("keydown", function (event) {
        var key = event.key === "Unidentified" ? event.code : event.key;
        if (event.defaultPrevented || event.repeat || event.altKey || event.ctrlKey || event.metaKey ||
            event.target.closest("input, select, textarea, [contenteditable]") ||
            ((key === " " || key === "Spacebar" || key === "Enter" || key === "NumpadEnter") &&
              event.target.closest("a, button, summary, [role=button]"))) return;
        var action = {
          ArrowRight: actions.next, ArrowDown: actions.next,
          " ": actions.next, Spacebar: actions.next, Space: actions.next,
          Enter: actions.next, NumpadEnter: actions.next,
          PageDown: actions.next, MediaTrackNext: actions.next,
          ArrowLeft: actions.previous, ArrowUp: actions.previous,
          Backspace: actions.previous, PageUp: actions.previous,
          MediaTrackPrevious: actions.previous,
          Home: actions.first, End: actions.last,
          f: actions.fullscreen, r: actions.reset
        }[key] || { f: actions.fullscreen, r: actions.reset }[key.toLowerCase()];
        if (event.shiftKey && (key === " " || key === "Spacebar" || key === "Space" || key === "Enter")) {
          action = actions.previous;
        }
        if (action) {
          event.preventDefault();
          action();
        }
      });

      document.addEventListener("click", function (event) {
        var button = event.target.closest("[data-action]");
        if (button && actions[button.dataset.action]) {
          actions[button.dataset.action]();
          return;
        }
        if (event.button === 0 && event.target.closest("[data-deck]") &&
            !event.target.closest("a, button, input, select, textarea, label, summary, details, [role=button], [contenteditable]")) {
          actions.next();
        }
      });

      slider.addEventListener("input", function () {
        var value = Number(slider.value);
        if (Number.isFinite(value)) actions.seek(Math.round(value) - 1);
      });

      // A mouse drag should not leave the range input capturing clicker arrow keys.
      slider.addEventListener("pointerup", function () { slider.blur(); });

      return {
        update: function (index, slides) {
          slider.max = String(slides.length);
          slider.value = String(index + 1);
          slider.disabled = slides.length < 2;
          var label = "Slide " + (index + 1) + " of " + slides.length + ": " + slides[index].title;
          slider.setAttribute("aria-valuetext", label);
          slider.title = label;
          slider.style.setProperty("--seek-progress", (slides.length > 1 ? index / (slides.length - 1) * 100 : 0) + "%");
        }
      };
    }
  };
}());
