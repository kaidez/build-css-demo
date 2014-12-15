###
# enquire.js: detect for the existence of the ".team-copy-popup" class
# =====================================================================
# When a player info link is clicked, the ".team-copy-popup" class
# is placed on the "#teamCopy" element so this element gets displayed
# in a certain way on mobile views. This class should ONLY appear on
# mobile views, should NOT appear on wider views and removed from wider
# views if it's already there, which is a possible use case. Use jQuery
# inside enquire.js to detect if the class is exists & if it does,
# remove it.
###

###
function that removes "#teamCopy" has the "team-copy-popup" class
use directly inside enquires "match()" and "setup()" methods
###
removeTeamCopyPopup = ->
  $("#teamCopy").removeClass "team-copy-popup"
                .removeAttr "style"
  return

###
function that checks if "#teamCopy" has the "team-copy-popup" class
###
ifTeamCopyPopup = ->
  removeTeamCopyPopup() if $("#teamCopy").hasClass "team-copy-popup"
  return

enquire.register "screen and (min-width:768px)",

  # When on min-width:768px, remove "team-copy-popup" class if it exists
  match : () ->
    ifTeamCopyPopup()

  # When on smaller media queries, just run the method that removes the
  # "team-copy-popup"...better safe than sorry
  unmatch : () ->
    removeTeamCopyPopup()
  # OPTIONAL
  # If supplied, triggered once, when the handler is registered.

  setup : () ->
    removeTeamCopyPopup()

  # OPTIONAL, defaults to false
  # If set to true, defers execution of the setup function
  # until the first time the media query is matched
  deferSetup : true
