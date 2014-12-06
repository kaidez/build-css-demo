
/*
Stop those pain-in-the-ass console statements that Cycle2 fires off
 */
var setPlayer;

$(".cycle-slideshow").cycle({
  log: false
});


/*
Function for building out player pages
 */

setPlayer = (function() {
  var frag, key, playerData, playerName, playerPosition, targetEl, targetID;
  frag = document.createDocumentFragment();
  playerData = {
    "courtois": {
      "name": "Thibault Courtois",
      "position": "Goalkeeper"
    },
    "fabregas": {
      "name": "Cesc Fabregas",
      "position": "Attacking Midfielder"
    },
    "drogba": {
      "name": "Didier Drogba",
      "position": "Center Forward"
    },
    "terry": {
      "name": "John Terry",
      "position": "Center Fullback"
    }
  };
  for (key in playerData) {
    targetID = "#" + key;
    targetEl = $(targetID);
    playerName = document.createElement("h3");
    playerPosition = document.createElement("div");
    playerName.innerText = playerData[key].name;
    playerName.setAttribute("class", "player-name");
    playerPosition.innerText = playerData[key].position;
    frag.appendChild(playerName);
    frag.appendChild(playerPosition);
    $(frag).appendTo(targetEl);
  }
})();
