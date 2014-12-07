
/*
Stop those pain-in-the-ass console statements that Cycle2 fires off
 */
$(".cycle-slideshow").cycle({
  log: false
});

var teams = {
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
;

(function(){
for(var category in teams) {
  if(teams.hasOwnProperty(category)) {
    console.log(category)
      for (var i = 0, j = teams[category].length; i < j; i++) {
      console.log( teams[category][i].name );
    }
  }
}
})();;
