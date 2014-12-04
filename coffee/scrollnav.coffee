###
http://stackoverflow.com/questions/16734068/cycle2-initialization-events-not-firing
###

`var playerData = {
    "tCourtois": {
      "name":"Thibault Courtois",
      "position": "Goalkeeper"
    },
    "cFabregas": {
    "name":"Cesc Fabregas",
    "position": "Attacking Midfielder"
  },
  "dDrogba": {
    "name":"Didier Drogba",
    "position": "Center Forward"
    },
  "jTerry": {
    "name":"John Terry",
    "position": "Center Fullback"
    },
}


$("#chelseaPlayers").on("cycle-before", function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {

  var $targetEl = $(incomingSlideEl).attr("id");
  console.log(playerData);
  console.log($targetEl);
});



var setInfo = function() {
  var playersInfo = $.getJSON("js/playersInfo.json", function(data) {
    $.each(data, function(key, val) {
      var allInfo, allInfoName, allInfoPosition, frag;
      frag = document.createDocumentFragment();
      allInfo = document.createElement("article");
      allInfoName = document.createElement("h3");
      allInfoPosition = document.createElement("div");
      allInfo.setAttribute("id", key);
      allInfoName.innerHTML = this.name;
      allInfoPosition.innerHTML = this.position;
      allInfo.appendChild(allInfoName);
      allInfo.appendChild(allInfoPosition);
      frag.appendChild(allInfo);
      frag;
      return this;
    });
  });
};`

###
Stop those pain-in-the-ass console statements that Cycle2 fires off
###
$( ".cycle-slideshow" ).cycle
  log: false

# setInfo = () ->
#   playersInfo = $.getJSON "js/playersInfo.json", ( data ) ->
#     $.each data, ( key, val ) ->
#       frag = document.createDocumentFragment()
#       allInfo = document.createElement ( "article" )
#       allInfoName = document.createElement ( "h3" )
#       allInfoPosition = document.createElement ( "div" )
#       allInfo.setAttribute "id", key
#       allInfoName.innerHTML = this.name
#       allInfoPosition.innerHTML = this.position
#       allInfo.appendChild allInfoName
#       allInfo.appendChild allInfoPosition
#       frag.appendChild allInfo
#       frag;
#       return this
# setInfo()
# $( "#chelseaPlayers" ).on "cycle-before", ( event, optionHash,
#   outgoingSlideEl, incomingSlideEl, forwardFlag ) ->
#   $targetEl = $( incomingSlideEl ).attr "id"
#   kai = $($targetEl).find "#dDrogba"
#   console.log kai
