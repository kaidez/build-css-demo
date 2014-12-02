// Single var pattern of gulp (require) stuff in full effect!!!

var gulp = require("gulp"), // "require" gulp
    jade = require("gulp-jade"), // Jade task
    uncss = require("gulp-uncss"), // Remove unused css task
    minifyCSS = require("gulp-minify-css"), // Minify CSS
    concatCss = require("gulp-concat-css"), // Concatenate CSS
    csslint = require("gulp-csslint"), // Lint CSS
    concat = require("gulp-concat"), // For concatenating stuff(?)
    watch = require("gulp-watch"), // For watching files changes

    // Live Reload stuff
    livereload = require("gulp-livereload"),
    lr = require("tiny-lr"),
    server = lr();

// End single var pattern

// Needed to run grunt tasks through gulp
require("gulp-grunt")(gulp);

/*
 *  ===================================================================
 *  | STORE PREPROCESSOR FILE REFERENCES IN VARIABLES |
 *  ===================================================================
 */
var jadeFiles = ["jade/index.jade", "jade/**/*.jade"], // Jade
    lessFiles = ["css-build/*.less", "css-build/**/*.less"], // LESS
    coffeeFiles = ["coffee/*.coffee"], // Coffeescript

    /*
     * IGNORE ARRAY
     * ============
     * Selectors NOT to be removed when "gulp uncss" task runs.
     * Try to list them alphabetically and in the following order:
     *
     * 1. Page elements first (<nav>, <aside>, etc.)
     * 2. IDs second
     * 3. Classes third
     */
    ignoreArray = [];

/*
 *  ===================================================================
 *  | JADE TASK |
 *  ===================================================================
 */
// Output Jade Files to build "index.html" & send it to "build/"
gulp.task("jade", function () {
  return gulp.src("jade/index.jade")
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest("build"));
});

/*
 *  ===================================================================
 *  | CSS BUILD TASK |
 *
 * Running "gulp buildcss" performs the following sequence of tasks...
 *
 * 1. Runs the "gulp less" task that"s passed as a "hint"(*)
 * 2. Concatenate selected .css files listed in "gulp.src"
 * 3. Remove unused CSS
 * 4. Minify CSS
 * 5. Lint CSS
 *
 * (*) gulp "hints" are cool...read more about them at:
 * https://github.com/gulpjs/gulp/blob/master/docs/API.md
 *  ===================================================================
 */
gulp.task("buildcss", ["less"], function () {
  gulp.src(["css-build/bootstrap.css", "css-build/styles.css"])
  .pipe(concatCss("styles.min.css"))
  .pipe(uncss({
    html: ["build/index.html"],
    ignore: ignoreArray
  })).pipe(minifyCSS({
    keepBreaks: true
  })).pipe(gulp.dest("build/css/"))
  .pipe(csslint({
    "important": false,
    "duplicate-background-images": false,
    "ids": false,
    "text-indent": false
  })).pipe(csslint.reporter());
});

/*
 *  ===================================================================
 *  | "gulp-grunt" TASKS...RUN GRUNT TASKS VIA GULP!!!! |
 *  ===================================================================
 */
// Run the "grunt coffee" task
gulp.task("coffee", function () {
  gulp.run("grunt-coffee");
});

// Run the "grunt less" task
gulp.task("less", function () {
  gulp.run("grunt-less");
});

// BOWERCOPY TASKS
// Copy over ALL the Bower Components!!!
gulp.task("bowercopy", function () {
  gulp.run("grunt-bowercopy");
});

// Copy over Bootstrap core .css only
gulp.task("bowerbscss", function () {
  gulp.run("grunt-bowercopy:bscss");
});

// Copy over jQuery v.1.11.1 only
gulp.task("bowerjq", function () {
  gulp.run("grunt-bowercopy:jq");
});

/*
 *  ===================================================================
 *  | START WATCH TASK |
 *
 *  Be careful of watching a lot of files because that may eat up
 *  computer memory...at least, it does in Grunt.
 *  ===================================================================
 */
gulp.task("watch", function () {

  /*
   * If either preprocesser files or "build/" files change and the site
   * is currently running in the browser, refresh it in the browser via
   * livereload.
   */
  var server = livereload();
  gulp.watch(jadeFiles, ["jade"]);
  gulp.watch(lessFiles, ["buildcss"]);
  gulp.watch(coffeeFiles, ["coffee"]);
  gulp.watch(["build/index.html", "build/css/*.css", "build/js/*.js"],
  function (e) {
    server.changed(e.path);
  });
});
