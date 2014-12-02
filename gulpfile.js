// Single var pattern in full effect

var gulp = require('gulp'), // Define gulp
    jade = require('gulp-jade'), // Jade task
    uncss = require('gulp-uncss'),
    minifyCSS = require('gulp-minify-css'),
    concatCss = require('gulp-concat-css'),
    csslint = require('gulp-csslint'),
    concat = require('gulp-concat'), // For concatenating stuff
    watch = require('gulp-watch'), // For watching files changes

    // Live Reload stuff
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

// For running grunt tasks through gulp
require('gulp-grunt')(gulp);

/*
 *  ===================================================================
 *  | STORE PRE-COMPILE FILES IN THEIR OWN VARIABLES |
 *  ===================================================================
 */
var jadeFiles = ["jade/index.jade", "jade/**/*.jade"], // Jade
    lessFiles = ["css-build/*.less", "css-build/**/*.less"], // LESS
    coffeeFiles = ["coffee/*.coffee"], // Coffescript
    ignoreArray = [];

/*
 *  ===================================================================
 *  | JADE TASK |
 *  ===================================================================
 */
// Output Jade Files to build "index.html" & send it to "build/"
gulp.task('jade', function () {
  return gulp.src('jade/index.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('build'));
});

/*
*  ===================================================================
*  | 'gulp-grunt' TASKS...RUN GRUNT TASKS VIA GULP |
*  ===================================================================
*/
// Run the "grunt coffee" task
gulp.task('coffee', function () {
  gulp.run('grunt-coffee');
});

// Run the "grunt less" task
gulp.task('less', function () {
  gulp.run('grunt-less');
});

gulp.task('css_build', ['less'], function () {
  gulp.src(['css-build/bootstrap.css', 'css-build/styles.css'])
  .pipe(concatCss("styles.min.css"))
  .pipe(uncss({
    html: ['build/index.html'],
    ignore: ignoreArray
  })).pipe(minifyCSS({
    keepBreaks: true
  })).pipe(gulp.dest('build/css/'))
  .pipe(csslint({
    "important": false,
    "duplicate-background-images": false,
    "ids": false,
    "text-indent": false
  })).pipe(csslint.reporter());

});
/*
*  ===================================================================
*  | START WATCH TASK |
*
*  be careful of watching too much because it may eat up computer
*  memory...at least, it does in Grunt
*  ===================================================================
*/

gulp.task('watch', function () {

  /*
   * If preprocesser files change, run the site build, then refresh it
   * in the browser via livereload
   */
  var server = livereload();
  gulp.watch(jadeFiles, ['jade']);
  gulp.watch(lessFiles, ['buildcss']);
  gulp.watch(coffeeFiles, ['coffee']);
  gulp.watch(["build/index.html", "build/css/*.css", "build/js/*.js"],
  function (e) {
    server.changed(e.path);
  });
});
