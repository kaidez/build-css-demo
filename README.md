# CSS BUILD PROCESS TUTORIAL

This is the source code for a demo post/screencast/blog post/whatever about my personal CSS build process. It's based on a code refactor I had to do for work and I used it as a test project for my process.

I may or may not do a tutorial for all this...there's some cool stuff in here and the code isn't complicated, but it is very detailed. Maybe too detailed for a straight-forward tutorial.

Maybe into separate tutorials...I dunno.

But everything's under an MIT license so feel free to use it as you see fit. [Tweet me](http://twitter.com/kaidez) if you have questions.

## HOW THE CODE WORKS
The production-code is in `build`. Run it by either opening `index.html` in a web browser or running the the code from the server of your choice.

## PLAY WITH THE BUILT OUT CODE
The files in `build` get built out using three pieces of pre-processor software: [Jade](http://jade-lang.com/), [LESS](http://lesscss.org/) and [Coffeescript](http://coffeescript.org/).

There's one built-out web page: `build/index.html` and it's built out with Jade.

All styles are in `build/css/styles.min.css` with LESS. The styles contain both custom code and a custom build-out of [Twitter Bootstrap's](http://getbootstrap.com/) core CSS.

To understand what the styles do, it's best to go to `css-build` and review both `styles.less` and everything in the `import` folder...things are commented quite well in there.

All the JavaScript is processed with [Coffeescript](http://coffeescript.org/), which builds out the code to `build/js/main.js`. The preprocess files are in `coffee` and are commented quite nicely.

To play with all the preprocessor code, you would need to download the following software:

* [Node/npm](http://nodejs.org/download/)
* [Git](http://git-scm.com/downloads)
* [Bower](http://bower.io)
* [Grunt CLI]

Node/npm will download all the all the development-level dependencies listed as `devDependencies` inside `package.json`.

While source code control is not required to do anything with either the built-out files or various preprocessers, Git is required to interact with Bower. This is because Bower will download the packages listed as dependencies in `bower.json` and these dependencies are almost always downloaded from on GitHub via Git.

## TODO

* Create "components.less" to hold any reusable components I create.
