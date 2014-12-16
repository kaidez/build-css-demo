do ->
  teamArray = ["chelsea", "realMadrid", "milan"]
  teamArray.forEach ( teamName ) ->
    pageID = "#" + teamName
    $( pageID ).on "cycle-after", ( event, optionHash ) ->
        console.log pageID
        return
    return
  return
