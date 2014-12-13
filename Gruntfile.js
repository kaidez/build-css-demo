module.exports = function(grunt) {

  // Project config
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // start "bowercopy" task
    bowercopy: {

      /*
       * don"t send messages to saying that Bower components aren"t
       * configured...ignore them instead. Also, don"t run any bower
       * tasks when grunt runs this task.
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
      }, // end "scroll:jq" task
    }, // end "bowercopy" task

    // start "coffee" task
    coffee: {
      compile: {
        options: {
          bare: true
        },
        files: {
          // compile & concat .coffee files to a single file called
          // "build/js/main.js"
          "build/js/main.js": [
                                "coffee/common.coffee",
                                "coffee/popup-animation.coffee",
                                "coffee/scrollNav.coffee",
                                "coffee/players.coffee"
                              ]
        }
      }
    }, // end "coffee" task

    shell: {
      lessCoreBuild: {
        command: "lessc css-build/styles.less > css-build/styles.css"
      },
      lessGalleryBuild: {
        command: "lessc css-build/gallery.less > build/css/gallery.css"
      }
    }
  });

  grunt.loadNpmTasks("grunt-bowercopy");
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-shell");

};
