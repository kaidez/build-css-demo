# CSS BUILD PROCESS TUTORIAL

This is the source code for a demo post/screencast/blog post/whatever about my personal CSS build process. It's based on a code refactor I had to do for work and I used it as a test project for my process.

I may or may not do a tutorial for all this...there's some cool stuff in here and the code isn't complicated, but it is very detailed. Maybe too detailed for a straight-forward tutorial.

Maybe into separate tutorials...I dunno.

But everything's under an MIT license so feel free to use it as you see fit. [Tweet me](http://twitter.com/kaidez) if you have questions.

## HOW THE CODE WORKS
The production-code is in `build`. Run it by either opening `index.html` in a web browser or running the the code from the server of your choice.

## PLAY WITH THE BUILT OUT CODE
There's one built-out web page: `build/index.html` and it's built out with [Jade](http://jade-lang.com/).

All styles are in `build/css/styles.min.css`. The styles contain both custom code and a custom build-out of Twitter Bootstrap's core CSS.

To understand what the styles do, it's best to go to `css-build` and review both `styles.less` and everything in the `import` folder...things are commented quite well in there.

All the JavaScript is processed with [Coffeescript](http://coffeescript.org/), which builds out the code to `build/js/main.js`. The pre-process files are in `coffee` and are commented quite nicely.



## TODO

* Create "components.less" to hold any reusable components I create.
