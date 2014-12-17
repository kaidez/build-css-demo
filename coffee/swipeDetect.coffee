do ->
  teamArray = ["chelsea", "realMadrid", "milan"]
  teamArray.forEach ( teamName ) ->
    pageID = "#" + teamName
    $( pageID ).on "cycle-after", ( event, optionHash, incomingSlideEl ) ->
        console.log optionHash.currSlide
        switch optionHash.currSlide
          when 0 then console.log "fabregas"
          when 1 then console.log "drogba"
          when 2 then console.log "terry"
          else console.log "courtois"
        return
    return
  return
