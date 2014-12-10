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
  });
  return
###
scrollNav code ends
###
