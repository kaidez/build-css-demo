
/*
http://stackoverflow.com/questions/16734068/cycle2-initialization-events-not-firing
 */
var setPlayer;

setPlayer = (function() {
  var frag, key, playerData, playerName, playerPosition;
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
    playerName = document.createElement("h3");
    playerPosition = document.createElement("div");
  }
})();


/*
Stop those pain-in-the-ass console statements that Cycle2 fires off
 */

$(".cycle-slideshow").cycle({
  log: false
});
