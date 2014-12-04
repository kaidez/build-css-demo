
/*
http://stackoverflow.com/questions/16734068/cycle2-initialization-events-not-firing
 */

/*
Stop those pain-in-the-ass console statements that Cycle2 fires off
 */
var playersInfo;

$(".cycle-slideshow").cycle({
  log: false
});

$("#chelseaPlayers").on("cycle-before", function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
  var $targetEl;
  $targetEl = $(incomingSlideEl).attr("id");
  return console.log($targetEl);
});

playersInfo = $.getJSON("js/playersInfo.json", function(data) {
  var items;
  items = [];
  return $.each(data, function(key, val) {
    return console.log(key, val);
  });
});
