module.exports = function(grunt) {

  // Load the plugins
  grunt.loadNpmTasks('grunt-web-server');

  // Configure the plugins
  grunt.initConfig({
    web_server: {
      options: {
        cors: true,
        port: 3000,
        nevercache: true,
        logRequests: true
      },
      foo: 'bar' // For some reason an extra key with a non-object value is necessary 
    }
  });

};