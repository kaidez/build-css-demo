
/*
http://stackoverflow.com/questions/16734068/cycle2-initialization-events-not-firing
 */
var playersInfo;

$('#chelseaPlayers').on('cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
  var $targetEl;
  $targetEl = $(incomingSlideEl).attr("id");
  return console.log($targetEl);
});

playersInfo = $.getJSON("js/playersInfo.json", function() {
  return console.log("yup");
});
