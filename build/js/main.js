
/*
Stop those pain-in-the-ass console statements that Cycle2 fires off
 */
$(".cycle-slideshow").cycle({
  log: false
});


/*
 * enquire.js: detect for the existence of the ".team-copy-popup" class
 * =====================================================================
 * When a player info link is clicked, the ".team-copy-popup" class
 * is placed on the "#teamCopy" element so this element gets displayed
 * in a certain way on mobile views. This class should ONLY appear on
 * mobile views, should NOT appear on wider views and removed from wider
 * views if it's already there, which is a possible use case. Use jQuery
 * inside enquire.js to detect if the class is exists & if it does,
 * remove it.
 */

/*
function that removes "#teamCopy" has the "team-copy-popup" class
use directly inside enquires "match()" and "setup()" methods
 */
var ifTeamCopyPopup, removeTeamCopyPopup;

removeTeamCopyPopup = function() {
  $("#teamCopy").removeClass("team-copy-popup");
};


/*
function that checks if "#teamCopy" has the "team-copy-popup" class
 */

ifTeamCopyPopup = function() {
  if ($("#teamCopy").hasClass("team-copy-popup")) {
    removeTeamCopyPopup();
  }
};

enquire.register("screen and (min-width:768px)", {
  match: function() {
    return ifTeamCopyPopup();
  },
  unmatch: function() {
    return removeTeamCopyPopup();
  },
  setup: function() {
    return removeTeamCopyPopup();
  },
  deferSetup: true
});


/*
code that displays the individual team copy on popup
 */
$("#teamCopyLinkChelsea").click(function() {
  $("#teamCopy").addClass("team-copy-popup");
});


/*
scrollNav code starts
 */
var scroll;

scroll = (function() {
  $(".row").scrollNav({
    showTopLink: false,
    showHeadline: false,
    sectionElem: "div",
    speed: 600,
    insertTarget: this.headerElements,
    insertLocation: "appendTo",
    onRender: function() {
      $("li.scroll-nav__item a").addClass("btn btn-info");
    }
  });
})();


/*
scrollNav code ends
 */


/*
Function for building out player pages
 */
var setPlayer;

setPlayer = (function() {
  var allInfo, frag, key, playerData, playerName, playerNumber, playerPosition, targetEl, targetID;
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
    },
    "casillas": {
      "name": "Iker Casillas",
      "position": "Goalkeeper",
      "number": "1"
    },
    "ramos": {
      "name": "Sergio Ramos",
      "position": "Center Fullback",
      "number": "4"
    },
    "bale": {
      "name": "Gareth Bale",
      "position": "Winger",
      "number": "11"
    },
    "ronaldo": {
      "name": "Cristiano Ronaldo",
      "position": "Center Forward",
      "number": "7"
    },
    "abbiati": {
      "name": "Christian Abbiati",
      "position": "Goalkeeper",
      "number": "1"
    },
    "alex": {
      "name": "Alex",
      "position": "Center Fullback",
      "number": "33"
    },
    "essien": {
      "name": "Michael Essien",
      "position": "Midfielder",
      "number": "15"
    },
    "torres": {
      "name": "Fernado Torres",
      "position": "Center Forward",
      "number": "9"
    }
  };
  for (key in playerData) {
    targetID = key;
    targetEl = document.getElementById(targetID);
    playerName = document.createElement("h3");
    allInfo = document.createElement("div");
    playerPosition = document.createElement("p");
    playerNumber = document.createElement("p");
    playerPosition.setAttribute("class", "player-info");
    playerNumber.setAttribute("class", "player-info");
    playerName.innerHTML = playerData[key].name;
    playerName.setAttribute("class", "player-name");
    playerPosition.innerHTML = playerData[key].position;
    playerNumber.innerHTML = "#" + playerData[key].number;
    allInfo.setAttribute("class", "all-player-info");
    allInfo.appendChild(playerName);
    allInfo.appendChild(playerPosition);
    allInfo.appendChild(playerNumber);
    frag.appendChild(allInfo);
    targetEl.appendChild(frag);
  }
})();
