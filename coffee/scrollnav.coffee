###
http://stackoverflow.com/questions/16734068/cycle2-initialization-events-not-firing
###
setPlayer = do ->
  frag = document.createDocumentFragment()
  playerData = {
    "courtois": {
      "name":"Thibault Courtois"
      "position": "Goalkeeper"
    },
    "fabregas": {
      "name":"Cesc Fabregas"
      "position": "Attacking Midfielder"
    },
    "drogba": {
      "name":"Didier Drogba"
      "position": "Center Forward"
    },
   "terry": {
      "name":"John Terry"
      "position": "Center Fullback"
    }
  }

  for key of playerData
    playerName = document.createElement "h3"
    playerPosition = document.createElement "div"
  return
###
Stop those pain-in-the-ass console statements that Cycle2 fires off
###
$( ".cycle-slideshow" ).cycle
  log: false

# var setInfo = function() {
#   var playersInfo = $.getJSON("js/playersInfo.json", function(data) {
#     $.each(data, function(key, val) {
#       var allInfo, allInfoName, allInfoPosition, frag;
#       frag = document.createDocumentFragment();
#       allInfo = document.createElement("article");
#       allInfoName = document.createElement("h3");
#       allInfoPosition = document.createElement("div");
#       allInfo.setAttribute("id", key);
#       allInfoName.innerHTML = this.name;
#       allInfoPosition.innerHTML = this.position;
#       allInfo.appendChild(allInfoName);
#       allInfo.appendChild(allInfoPosition);
#       frag.appendChild(allInfo);
#       frag;
#       return this;
#     });
#   });
# };
#   })();



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
