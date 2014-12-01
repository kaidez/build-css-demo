// Single var pattern in full effect

var gulp = require('gulp'), // Define gulp
    jade = require('gulp-jade'), // Jade task
    path = require('path'), // Needed for LESS
    concat = require('gulp-concat'); //For concatenating stuff

    // For running grunt tasks through gulp
    require('gulp-grunt')(gulp);

/*
 *  ===================================================================
 *  | JADE TASK |
 *  ===================================================================
 */
var jadeFiles = ['jade/index.jade', 'jade/**/*.jade']; // Jade files

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
