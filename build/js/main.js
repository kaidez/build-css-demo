
/*
http://stackoverflow.com/questions/16734068/cycle2-initialization-events-not-firing
 */

/*
Stop those pain-in-the-ass console statements that Cycle2 fires off
 */
var playersInfo;

$(".cycle-slideshow").cycle({
  log: false
}, playersInfo = $.getJSON("js/playersInfo.json", function(data) {
  return $.each(data, function(key, val) {
    var allInfo, allInfoName, frag;
    frag = document.createDocumentFragment();
    allInfo = document.createElement("div");
    allInfoName = document.createElement("h3");
    allInfo.setAttribute("id", key);
    allInfoName.innerHTML = this.name;
    allInfo.appendChild(allInfoName);
    console.log(allInfo);
  });
}));

$("#chelseaPlayers").on("cycle-before", function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
  var $targetEl;
  return $targetEl = $(incomingSlideEl);
});
