module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jade: {
      dev: {
        files: {
          'public/index.html' : 'private/jade/index.jade'
        },
        options: {
          pretty: true,
          data: {
            devMode: true
          }
        }
      },
      prod: {
        files: {
          'public/index.html' : 'private/jade/index.jade'
        },
        options: {
          data: {
            devMode: false
          }
        }
      }
    },

    stylus: {
      compile: {
        files: {
          'public/css/iwnet.css' : 'private/stylus/iwnet.styl'
        }
      }
    },

    watch: {
      compile_jade: {
        files: 'private/jade/*.jade',
        tasks: ['jade:dev'],
        options: {
          livereload: true
        }
      },
      compile_stylus: {
        files: 'private/stylus/*.styl',
        tasks: ['stylus']
      },
      reloadBrowserOnCSSChange: {
        files: ['public/css/*.css'],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jade:dev', 'stylus', 'watch']);
  grunt.registerTask('prod', ['jade:prod', 'stylus', 'watch']);


};