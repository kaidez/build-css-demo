###
scrollNav code starts
###
scroll = do ->
  $(".row").scrollNav({
    showTopLink: false
    showHeadline: false
    sectionElem: "div"
    speed: 600
    insertTarget: this.headerElements
    insertLocation: "appendTo"
    onRender: () ->
      $("li.scroll-nav__item a").addClass "btn btn-info"
      return
  });
  return
###
scrollNav code ends
###
