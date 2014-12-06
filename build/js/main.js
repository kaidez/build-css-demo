
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
      "position": "Goalkeeper",
      "number": "1"
    },
    "fabregas": {
      "name": "Cesc Fabregas",
      "position": "Attacking Midfielder",
      "number": "4"
    },
    "drogba": {
      "name": "Didier Drogba",
      "position": "Center Forward",
      "number": "11"
    },
    "terry": {
      "name": "John Terry",
      "position": "Center Fullback",
      "number": "26"
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
