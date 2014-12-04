
/*
http://stackoverflow.com/questions/16734068/cycle2-initialization-events-not-firing
 */
$( '#chelseaPlayers' ).on( 'cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
  var $targetEl = $(incomingSlideEl).attr("id");
  console.log($targetEl)
});
;
var jqxhr;

jqxhr = $.getJSON("js/playersInfo.json", function() {
  return console.log("yup");
});
