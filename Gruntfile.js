module.exports = function(grunt){
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          'src/entry.js': 'src/index.js'
        }
      }
    },
    pug: {
      compile: {
        options: {
          data: {
            debug: true
          }
        },
        files: {
          'boilerplate/www/index.html': ['src/app.pug']
        }
      }
    },
    browserify: {
      dist:{
        files: {
          './boilerplate/www/js/bundle.js': ['src/entry.js'],
        },
        options: {
          transform: [
            ['babelify',{"presets":["es2015"]}],
            'vueify'
          ],
        },
      },
    },
    uglify: {
      compile: {
        files: {
          './boilerplate/www/js/bundle.min.js': ['./boilerplate/www/js/bundle.js']
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default',['babel','pug','browserify','uglify']);
};
