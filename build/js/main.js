var scroll = (function() {
  $(".container").scrollNav({
    showTopLink: false,
    sectionElem: "div",
    speed: 600,
    insertTarget: this.headerElements,
    insertLocation: "prependTo"
  });
})();
