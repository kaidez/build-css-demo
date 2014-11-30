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
      bscss: {

        // copy to the "css-build" directory
        options: {
          destPrefix: 'css-build/'
        },
        files: {
          'bootstrap.css': 'bootstrap/dist/css/bootstrap.css'
        }
      }
    } // end "bowercopy" task
  });

  grunt.loadNpmTasks('grunt-bowercopy');

};
