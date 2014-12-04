###
http://stackoverflow.com/questions/16734068/cycle2-initialization-events-not-firing
###

###
Stop those pain-in-the-ass console statements that Cycle2 fires off
###
$( ".cycle-slideshow" ).cycle
  log: false

  playersInfo = $.getJSON "js/playersInfo.json", ( data ) ->
    $.each data, ( key, val ) ->
      frag = document.createDocumentFragment()
      allInfo = document.createElement ( "div" )
      allInfoName = document.createElement ( "h3" )
      allInfo.setAttribute "id", key
      allInfoName.innerHTML = this.name
      allInfo.appendChild allInfoName
      console.log allInfo
      return

$( "#chelseaPlayers" ).on "cycle-before", ( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) ->
  $targetEl = $( incomingSlideEl )
