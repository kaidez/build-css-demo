module.exports = function(grunt) {

  // Project config
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
      } // end "bowercopy:jq" task
    }, // end "bowercopy" task

    less: {
      core_build: {
        files: {
          "css-build/styles.css": "css-build/styles.less"
        }
      }
    },

    coffee: {
      compile: {
        options: {
          bare: true
        },
        files: {
          'build/js/main.js': 'coffee/*.coffee' // compile and concat into single file
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-bowercopy');

};
