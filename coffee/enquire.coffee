###
enquire.js
###
enquire.register "screen and (min-width:768px)", 

  # OPTIONAL
  # If supplied, triggered when a media query matches.
  match : () ->

  # OPTIONAL
  # If supplied, triggered when the media query transitions
  # *from a matched state to an unmatched state*.
  unmatch : () ->

  # OPTIONAL
  # If supplied, triggered once, when the handler is registered.
  setup : () ->

  # OPTIONAL, defaults to false
  # If set to true, defers execution of the setup function
  # until the first time the media query is matched
  deferSetup : true

  # OPTIONAL
  # If supplied, triggered when handler is unregistered.
  # Place cleanup code here
  destroy : () ->
