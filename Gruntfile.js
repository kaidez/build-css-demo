module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // start "bowercopy" task
    bowercopy: {

      /*
       * Don't send messages to saying that Bower components aren't
       * configured...ignore them instead. Also, Don't run any bower
       * tasks when this task runs.
       */
      options: {
        ignore: ["gulp", "jquery"],
        runBower: false
      },

      // Copy Bootstrap CCS over
      bscss: {

        // copy to the "css-build" directory
        options: {
          destPrefix: "css-build/"
        },
        files: {
          "bootstrap.css": "bootstrap/dist/css/bootstrap.css"
        }
      }, // end "bowercopy:bscss" task

      // Copy jQuery over
      cycle2: {

        // copy to the "css-build" directory
        options: {
          destPrefix: "build/js/libs/"
        },
        files: {
          "jquery.cycle2.min.js": "jquery-cycle2/build/jquery.cycle2.min.js",
          "jquery.cycle2.swipe.js": "jquery-cycle2/src/jquery.cycle2.swipe.js"
        }
      }, // end "bowercopy:jq" task

      // Copy jQuery over
      jq: {

        // copy to the "css-build" directory
        options: {
          destPrefix: "build/js/libs/"
        },
        files: {
          "jquery.min.js": "jquery/dist/jquery.min.js"
        }
      }, // end "bowercopy:jq" task

      // Copy scrollNav over
      scroll: {

        // copy to the "css-build" directory
        options: {
          destPrefix: "build/js/libs/"
        },
        files: {
          "jquery.scrollNav.min.js": "scrollNav/dist/jquery.scrollNav.min.js"
        }
      }, // end "bowercopy:jq" task

      // Copy enquire.js over
      enquire: {

        // copy to the "css-build" directory
        options: {
          destPrefix: "build/js/libs/"
        },
        files: {
          "enquire.min.js": "enquire/dist/enquire.min.js"
        }
      }, // end "bowercopy:enquire" task

      // Copy matchMedia.js over
      matchmedia: {

        // copy to the "css-build" directory
        options: {
          destPrefix: "build/js/libs/"
        },
        files: {
          "matchMedia.js": "matchmedia/matchMedia.js"
        }
      } // end "bowercopy:matchmedia" task
    }, // end "bowercopy" task

    // start "coffee" task
    coffee: {
      compile: {
        options: {
          bare: true
        },
        files: {
          // compile coffee files in "coffee/" to "build/js/main.js"
          "build/js/main.js": [
                                "coffee/common.coffee",
                                "coffee/enquire.coffee",
                                "coffee/scrollNav.coffee",
                                "coffee/players.coffee"
                              ]
        }
      }
    }, // end "coffee" task

    // start "critical" task
    critical: {
      build: {
        options: {
          base: './',
          css:'build/css/styles.min.css',
          width: 320,
          height: 100
        },
        src: 'build/index.html',
        dest: 'build/index.html'
      }
    } // end "critical" task
  });

  grunt.loadNpmTasks("grunt-bowercopy");
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks('grunt-critical');

};
