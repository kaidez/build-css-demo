###
Scroll nav code starts
###
scroll = do ->
$(".container").scrollNav({
  showTopLink: false
  sectionElem: "div"
  speed: 600
  insertTarget: this.headerElements
  insertLocation: "prependTo"
});
return
###
Scroll nav code ends
###
