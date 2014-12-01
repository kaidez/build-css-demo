// Single var pattern in full effect

var gulp = require('gulp'), // Define gulp
    jade = require('gulp-jade'), // Jade task
    path = require('path'), // Needed for LESS
    concat = require('gulp-concat'), //For concatenating stuff

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
var jadeFiles = ["jade/index.jade", "jade/**/*.jade"], // Jade files
    lessFiles = ["css-build/*.less", "css-build/**/*.less"], // LESS files
    coffeeFiles = ["coffee/*.coffee"]; // Coffescript files

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


/*
*  ===================================================================
*  | START WATCH TASK |
*
*  be careful of watching too much because it may eat up computer
*  memory...at least, it does in Grunt
*  ===================================================================
*/

gulp.task('watch', function () {

  // If preprocesser files change, run the site build, then refresh it
  // in the browser via live reload
  var server = livereload();
  gulp.watch(jadeFiles, ['jade']);
  gulp.watch(lessFiles, ['buildcss']);
  gulp.watch(coffeeFiles, ['coffee']);
  gulp.watch(["build/index.html", "build/css/*.css", "build/js/*.js"],
  function (e) {
      server.changed(e.path);
  });
});
