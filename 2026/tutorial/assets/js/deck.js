(function () {
  var state = {
    slideIndex: 0,
    fragmentIndex: 0
  };

  var deck;
  var slides;
  var navigation;
  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function renderDeck() {
    deck.innerHTML = "";
    slides.forEach(function (slide) {
      deck.appendChild(window.USRWSlideRenderer.render(slide));
    });
  }

  function currentSlideElement() {
    return deck.querySelectorAll(".slide")[state.slideIndex];
  }

  function updateVisibility() {
    var allSlides = deck.querySelectorAll(".slide");
    allSlides.forEach(function (slide, index) {
      slide.hidden = index !== state.slideIndex;
    });

    updateFragments();
    updateControls();
    updateHash();
  }

  function fragmentGroups() {
    var visibleFragments = Array.prototype.filter.call(
      currentSlideElement().querySelectorAll(".placeholder-list li, .evidence-list li, [data-fragment]"),
      function (fragment) {
        return fragment.offsetParent !== null;
      }
    );
    var groups = [];
    var grouped = Object.create(null);

    visibleFragments.forEach(function (fragment) {
      var key = fragment.dataset.fragmentGroup;
      if (!key) {
        groups.push([fragment]);
        return;
      }
      if (!grouped[key]) {
        grouped[key] = [];
        groups.push(grouped[key]);
      }
      grouped[key].push(fragment);
    });
    return groups;
  }

  function updateFragments() {
    var slide = currentSlideElement();
    if (slide) {
      slide.dataset.fragmentIndex = String(state.fragmentIndex);
    }
    fragmentGroups().forEach(function (group, index) {
      var isVisible = index < state.fragmentIndex;
      group.forEach(function (fragment) {
        fragment.classList.toggle("is-visible", isVisible);
        fragment.setAttribute("aria-hidden", isVisible ? "false" : "true");
      });
    });
  }

  function updateControls() {
    var counter = document.querySelector("[data-slide-counter]");
    counter.textContent = (state.slideIndex + 1) + " / " + slides.length;
    navigation.update(state.slideIndex, slides);
  }

  function updateSlideScale() {
    var root = document.documentElement;
    var scale;
    if (document.fullscreenElement) {
      scale = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
    } else {
      var bounds = deck.getBoundingClientRect();
      scale = Math.min(bounds.width / 1280, bounds.height / 720);
    }
    if (!Number.isFinite(scale) || scale <= 0) {
      scale = 1;
    }
    root.style.setProperty("--slide-scale", String(scale));
    root.style.setProperty("--scaled-slide-width", (1280 * scale) + "px");
  }

  function updateHash() {
    var id = slides[state.slideIndex].id;
    if (location.hash.slice(1) !== id) {
      history.replaceState(null, "", location.pathname + location.search + "#" + id);
    }
  }

  function goToSlide(index) {
    state.slideIndex = clamp(index, 0, slides.length - 1);
    state.fragmentIndex = 0;
    updateVisibility();
  }

  function next() {
    if (state.fragmentIndex < fragmentGroups().length) {
      state.fragmentIndex += 1;
      updateVisibility();
      return;
    }
    goToSlide(state.slideIndex + 1);
  }

  function previous() {
    if (state.fragmentIndex > 0) {
      state.fragmentIndex -= 1;
      updateVisibility();
      return;
    }
    goToSlide(state.slideIndex - 1);
  }

  function reset() {
    state.fragmentIndex = 0;
    updateVisibility();
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      return;
    }
    document.exitFullscreen();
  }

  function fromHash() {
    var id = location.hash.slice(1);
    if (!id) {
      return 0;
    }
    var index = slides.findIndex(function (slide) {
      return slide.id === id;
    });
    return index === -1 ? 0 : index;
  }

  function init() {
    deck = document.querySelector("[data-deck]");
    slides = window.USRWDeck.getSlides();
    // Set the canvas scale before SVG text gets its first layout.
    updateSlideScale();
    renderDeck();
    navigation = window.USRWNavigation.bind({
      seek: goToSlide, next: next, previous: previous, reset: reset,
      first: function () { goToSlide(0); },
      last: function () { goToSlide(slides.length - 1); },
      fullscreen: toggleFullscreen
    });
    state.slideIndex = fromHash();
    updateVisibility();
    document.addEventListener("fullscreenchange", function () {
      updateSlideScale();
    });
    window.addEventListener("resize", updateSlideScale);
    window.addEventListener("hashchange", function () {
      goToSlide(fromHash());
    });
    window.requestAnimationFrame(updateSlideScale);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}());
