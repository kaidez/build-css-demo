###
http://stackoverflow.com/questions/16734068/cycle2-initialization-events-not-firing
###

###
Stop those pain-in-the-ass console statements that Cycle2 fires off
###
$( ".cycle-slideshow" ).cycle
  log: false


$( "#chelseaPlayers" ).on "cycle-before", ( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) ->
  $targetEl = $( incomingSlideEl ).attr "id"
  console.log $targetEl


playersInfo = $.getJSON "js/playersInfo.json", ( data ) ->
  items = []
  $.each data, ( key, val ) ->
    console.log key, val
