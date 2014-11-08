module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      production: {
        files: {
          'css/style.css' : 'sass/style.scss'
        }
      },
      deploy: {
        files: {
          'deploy/css/style.css' : 'sass/style.scss'
        }
      }
    },
    concat: {   
      production: {
          src: [
              'js/libs/*.js', // All JS in the libs folder
              'js/script.js'  // This specific file
          ],
          dest: 'js/build/script-concat.js',
      },
      deploy: {
          src: [
              'js/libs/*.js', // All JS in the libs folder
              'js/script.js'  // This specific file
          ],
          dest: 'js/build/script-concat.js',
      }
    },
    uglify: {
        production: {
            src: 'js/build/script-concat.js',
            dest: 'js/build/script.min.js'
        },
        deploy: {
            src: 'js/build/script-concat.js',
            dest: 'deploy/js/build/script.min.js'
        }
    },
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'deploy/images/'
            }]
        }
    },
    htmlcompressor: {
    compile: {
      files: {
        'deploy/index.html': 'index.html'
      },
      options: {
        type: 'html',
        preserveServerScript: true
      }
    }
  },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass:production']
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat:production', 'uglify:production'],
        options: {
            spawn: false,
        },
      } 
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-htmlcompressor');

  grunt.registerTask('default',['watch']);
  grunt.registerTask('image',['imagemin']);
  grunt.registerTask('deploy', ['imagemin', 'htmlcompressor', 'sass:deploy', 'concat:deploy', 'uglify:deploy'])
}