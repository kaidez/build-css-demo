###
Function for building out player pages
###
`enquire.register("screen and (max-width:1000px)", {

    match : function() {},      // OPTIONAL
                                // If supplied, triggered when the media query transitions
                                // *from an unmatched to a matched state*

    unmatch : function() {},    // OPTIONAL
                                // If supplied, triggered when the media query transitions
                                // *from a matched state to an unmatched state*.
                                // Also may be called when handler is unregistered (if destroy is not available)

    setup : function() {},      // OPTIONAL
                                // If supplied, triggered once immediately upon registration of the handler

    destroy : function() {},    // OPTIONAL
                                // If supplied, triggered when handler is unregistered. Place cleanup code here

    deferSetup : true           // OPTIONAL, defaults to false
                                // If set to true, defers execution the setup function
                                // until the media query is first matched. still triggered just once
});`
