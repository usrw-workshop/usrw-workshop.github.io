(function () {
  var slides = Object.create(null);
  var order = [];

  window.USRWDeck = {
    registerSlide: function registerSlide(slide) {
      if (!slide || !slide.id) {
        throw new Error("Slide registration requires a stable id.");
      }
      slides[slide.id] = slide;
    },
    setOrder: function setOrder(nextOrder) {
      order = nextOrder.slice();
    },
    getSlides: function getSlides() {
      return order.map(function byId(id) {
        if (!slides[id]) {
          throw new Error("Manifest references missing slide: " + id);
        }
        return slides[id];
      });
    }
  };
}());
