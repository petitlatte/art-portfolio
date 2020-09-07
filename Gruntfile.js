module.exports = function(grunt) {

grunt.initConfig({
    watch: {
      sass: {
        files: '**/*.scss',
        tasks: ['css'],
        options: {
          livereload: 35729
        }
      },
      uglify: {
        files: 'js/script.js',
        tasks: ['uglify'],
        options: {
          livereload: true
        }
      },
      all: {
        files: ['**/*.html'],
        options: {
          livereload: true
        }
      }
    },

    uglify: {
      build: {
        files: {
          'js/script.min.js': ['js/script.js']
        }
      }
    },


   cssmin: {
    build: {
      src: 'css/styles.css',
      dest: 'css/styles.min.css'
    }
  },

  sass: {
    dev: {
      files: {
         // destination     // source file
        'css/styles.css': 'css/styles.scss'
              }
            }
          }



        });


  // Default task
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('css', ['sass', 'cssmin']);
  grunt.registerTask('js', ['jshint','uglify']);
  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('@fortawesome/fontawesome-free');

};