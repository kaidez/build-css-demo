
/*
Stop those pain-in-the-ass console statements that Cycle2 fires off
 */
$(".cycle-slideshow").cycle({
  log: false
});

 $.getJSON("../js/players.json",  function( data ) {
    console.log( data.teams );
 }  );;


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
  $("#teamCopy").removeClass("team-copy-popup").removeAttr("style");
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
  $("#teamCopy").addClass("team-copy-popup").css("display", "block");
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
      "number": "1",
      "copy": "Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "fabregas": {
      "name": "Cesc Fabregas",
      "position": "Attacking Midfielder",
      "number": "4",
      "copy": "Thibaut Nicolas Marc Courtois is a Belgian professional footballer who plays for English club Chelsea and the Belgium national team as a goalkeeper. Despite his young age, Courtois is widely regarded as one of the best goalkeepers in the world, and he won the 2012–13 and 2013–14 Ricardo Zamora Trophies while on loan at Atlético Madrid."
    },
    "drogba": {
      "name": "Didier Drogba",
      "position": "Center Forward",
      "number": "11",
      "copy": "Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "terry": {
      "name": "John Terry",
      "position": "Center Fullback",
      "number": "26",
      "copy": "Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "casillas": {
      "name": "Iker Casillas",
      "position": "Goalkeeper",
      "number": "1",
      "copy": "Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "ramos": {
      "name": "Sergio Ramos",
      "position": "Center Fullback",
      "number": "4",
      "copy": "Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "bale": {
      "name": "Gareth Bale",
      "position": "Winger",
      "number": "11",
      "copy": "Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "ronaldo": {
      "name": "Cristiano Ronaldo",
      "position": "Center Forward",
      "number": "7",
      "copy": "Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "abbiati": {
      "name": "Christian Abbiati",
      "position": "Goalkeeper",
      "number": "1",
      "copy": "Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "alex": {
      "name": "Alex",
      "position": "Center Fullback",
      "number": "33",
      "copy": "Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "essien": {
      "name": "Michael Essien",
      "position": "Midfielder",
      "number": "15",
      "copy": "Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "torres": {
      "name": "Fernado Torres",
      "position": "Center Forward",
      "number": "9",
      "copy": "Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
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

(function() {
  var teamArray;
  teamArray = ["chelsea", "realMadrid", "milan"];
  teamArray.forEach(function(teamName) {
    var pageID;
    pageID = "#" + teamName;
    $(pageID).on("cycle-after", function(event, optionHash) {
      console.log(pageID);
    });
  });
})();
