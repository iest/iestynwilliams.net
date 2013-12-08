module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    stylus: {
      compile: {
        files: {
          'public/css/iwnet.css' : 'src/iwnet.styl'
        }
      }
    },

    watch: {
      compile_stylus: {
        files: 'src/**/*.styl',
        tasks: ['stylus']
      },
      templateChange: {
        files: ['views/**/*.jade'],
        options: {
          livereload: true
        }
      },
      reloadBrowserOnCSSChange: {
        files: ['public/css/*.css'],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['stylus', 'watch']);
  grunt.registerTask('prod', ['stylus']);


};