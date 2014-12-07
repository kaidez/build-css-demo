###
Stop those pain-in-the-ass console statements that Cycle2 fires off
###
$( ".cycle-slideshow" ).cycle
  log: false


`var teams = {
  "chelsea": [
  {
    "name": "Didier Droga",
    "position": "Center Forward"
  },
  {
    "name": "Thibault Courtois",
    "position": "Goalkeeper"
  },
  {
    "name": "Cesc Fabregas",
    "position": "Attacking Midfielder"
  }
  ],
  "real_madrid": [
  {
    "name": "Cristiano Ronaldo",
    "position": "Center Forward"
  },
  {
    "name": "Sergios Ramos",
    "position": "Center Fullback"
  },
  {
    "name": "Iker Casisillas",
    "position": "Stuff about Brownies"
  }
  ]
};
`
`(function(){
for(var category in teams) {
  if(teams.hasOwnProperty(category)) {
    console.log(category)
      for (var i = 0, j = teams[category].length; i < j; i++) {
      console.log( teams[category][i].name );
    }
  }
}
})();`
#
#
# setPlayer = do ->
#   frag = document.createDocumentFragment()
#
#   playerData = (data) ->
#     $.getJSON "js/playersInfo.json"
#     console.log( data )
#
#   for key of playerData
#     targetID = "#" + key
#     targetEl = $(targetID)
#     playerName = document.createElement "h3"
#     playerPosition = document.createElement "p"
#     playerNumber = document.createElement "p"
#     playerName.innerText = playerData[key].name
#     playerName.setAttribute "class", "player-name"
#     playerPosition.innerText = playerData[key].position
#     playerNumber.innerText = "#" + playerData[key].number
#     frag.appendChild playerName
#     frag.appendChild playerPosition
#     frag.appendChild playerNumber
#     $(frag).appendTo targetEl
