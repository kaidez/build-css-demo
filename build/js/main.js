
/*
http://stackoverflow.com/questions/16734068/cycle2-initialization-events-not-firing
 */
var setPlayer;

setPlayer = (function() {
  var frag, key, playerData, playerName;
  frag = document.createDocumentFragment();
  playerData = {
    "tCourtois": {
      "name": "Thibault Courtois",
      "position": "Goalkeeper"
    },
    "cFabregas": {
      "name": "Cesc Fabregas",
      "position": "Attacking Midfielder"
    },
    "dDrogba": {
      "name": "Didier Drogba",
      "position": "Center Forward"
    },
    "jTerry": {
      "name": "John Terry",
      "position": "Center Fullback"
    }
  };
  for (key in playerData) {
    playerName = document.createElement("h3");
  }
})();


/*
Stop those pain-in-the-ass console statements that Cycle2 fires off
 */

$(".cycle-slideshow").cycle({
  log: false
});
