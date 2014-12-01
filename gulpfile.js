// Single var pattern in full effect

var gulp = require('gulp'), // Define gulp
    jade = require('gulp-jade'), // Jade task
    less = require('gulp-less'), // LESS task
    path = require('path'), // Needed for LESS
    concat = require('gulp-concat'); //For concatenating stuff

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
 *  | LESS TASK |
 *  ===================================================================
 */
gulp.task('less', function () {
  gulp.src('./less/**/*.less')
  .pipe(less({
    paths: [ path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(gulp.dest('./public/css'));
});
