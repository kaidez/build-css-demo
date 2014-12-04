###
http://stackoverflow.com/questions/16734068/cycle2-initialization-events-not-firing
###
$( '#chelseaPlayers' ).on 'cycle-before', (event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) ->
  $targetEl = $(incomingSlideEl).attr "id"
  console.log $targetEl

playersInfo = $.getJSON "js/playersInfo.json", ( data ) ->
  items = []
  $.each data, ( key, val )->
    console.log key, val
