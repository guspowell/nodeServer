module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jasmine_node: {
      all: ['spec/']
    },

    jshint: {
      all: ['Gruntfile.js', 'spec/*/**.js', 'src/*/**.js']
    },

    mocha_casperjs: {
      options: {},
      files: {
        src: ['test/**/*']
      }
    },

    // express:

  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  // grunt.loadNpmTasks('grunt-express-server');
  grunt.registerTask('default', ['jasmine_node', 'jshint', 'mocha_casperjs']);

};
