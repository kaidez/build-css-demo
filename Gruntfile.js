grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  bowercopy: {

    // don't send messages to saying that Bower components aren't
    // configured...ignore them instead
    options: {
      ignore: ['gulp', 'jquery'],
      runBower: false
    },

    // Copy Bootstrap over
    bscss: {

      // copy to the "css-build" directory
      options: {
        destPrefix: 'css-build/'
      },
      files: {
        'bootstrap.css': 'bootstrap/dist/css/bootstrap.css'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-bowercopy');
