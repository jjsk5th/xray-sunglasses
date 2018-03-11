module.exports = function(grunt) {

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-web-server');

  // // Default task(s).
  // grunt.registerTask('default', ['uglify']);
  grunt.initConfig({
    connect: {
      uses_defaults: {}
    },
    web_server: {
      options: {
        cors: true,
        port: 8000,
        nevercache: true,
        logRequests: true
      },
      foo: 'bar' // For some reason an extra key with a non-object value is necessary 
    }
  });

};