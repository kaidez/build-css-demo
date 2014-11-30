// Single var pattern in full effect

var gulp = require('gulp'), // Define gulp
jade = require('gulp-jade'); // Jade task
/*
 *  ===================================================================
 *  | START JADE BUILD-OUT |
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
