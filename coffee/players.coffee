###
Function for building out player pages
###
setPlayer = do ->
  frag = document.createDocumentFragment()
  playerData = {
    "courtois": {
      "name":"Thibault Courtois"
      "position": "Goalkeeper"
      "number": "1"
      "copy" :"Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "fabregas": {
      "name":"Cesc Fabregas"
      "position": "Attacking Midfielder"
      "number": "4"
      "copy" :"Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "drogba": {
      "name":"Didier Drogba"
      "position": "Center Forward"
      "number": "11"
      "copy" :"Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "terry": {
      "name":"John Terry"
      "position": "Center Fullback"
      "number": "26"
      "copy" :"Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "casillas": {
      "name":"Iker Casillas"
      "position": "Goalkeeper"
      "number": "1"
      "copy" :"Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "ramos": {
      "name":"Sergio Ramos"
      "position": "Center Fullback"
      "number": "4"
      "copy" :"Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "bale": {
      "name":"Gareth Bale"
      "position": "Winger"
      "number": "11"
      "copy" :"Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "ronaldo": {
      "name":"Cristiano Ronaldo"
      "position": "Center Forward"
      "number": "7"
      "copy" :"Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "abbiati": {
      "name":"Christian Abbiati"
      "position": "Goalkeeper"
      "number": "1"
      "copy" :"Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "alex": {
      "name":"Alex"
      "position": "Center Fullback"
      "number": "33"
      "copy" :"Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "essien": {
      "name":"Michael Essien"
      "position": "Midfielder"
      "number": "15"
      "copy" :"Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    },
    "torres": {
      "name":"Fernado Torres"
      "position": "Center Forward"
      "number": "9"
      "copy" :"Francesc \"Cesc\" Fàbregas Soler is a Spanish footballer who plays for Chelsea in the Premier League, and the Spanish national team. Fàbregas plays mainly as a central midfielder or attacking midfielder but has also played as a winger or a second striker on some occasions."
    }
  }

  for key of playerData
    targetID = key
    targetEl = document.getElementById(targetID)
    playerName = document.createElement "h3"
    allInfo = document.createElement "div"
    playerPosition = document.createElement "p"
    playerNumber = document.createElement "p"
    playerPosition.setAttribute "class", "player-info"
    playerNumber.setAttribute "class", "player-info"
    playerName.innerHTML = playerData[key].name
    playerName.setAttribute "class", "player-name"
    playerPosition.innerHTML = playerData[key].position
    playerNumber.innerHTML = "#" + playerData[key].number
    allInfo.setAttribute "class", "all-player-info"
    allInfo.appendChild playerName
    allInfo.appendChild playerPosition
    allInfo.appendChild playerNumber
    frag.appendChild allInfo
    targetEl.appendChild frag
  return
