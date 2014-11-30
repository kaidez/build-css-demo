module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // start "bowercopy" task
    bowercopy: {

      // don't send messages to saying that Bower components aren't
      // configured...ignore them instead. Also, don't run any bower
      // tasks when grunt runs this task.
      options: {
        ignore: ['gulp', 'jquery'],
        runBower: false
      },

      // Copy Bootstrap CCS over
      bs: {

        // copy to the "css-build" directory
        options: {
          destPrefix: 'css-build/'
        },
        files: {
          'bootstrap.css': 'bootstrap/dist/css/bootstrap.css'
        }
      }, // end "bowercopy:bs" task

      // Copy scrollNav over
      scrollnav: {

        // copy to the "css-build" directory
        options: {
          destPrefix: 'build/js/libs/'
        },
        files: {
          'jquery.scrollNav.min.js': 'scrollNav/dist/jquery.scrollNav.min.js'
        }
      }, // end "bowercopy:scrollnav" task

      // Copy jQuery over
      jq: {

        // copy to the "css-build" directory
        options: {
          destPrefix: 'build/js/libs/'
        },
        files: {
          'jquery.min.js': 'jquery/dist/jquery.min.js'
        }
      }, // end "bowercopy:bs" task
    } // end "bowercopy" task
  });

  grunt.loadNpmTasks('grunt-bowercopy');

};
