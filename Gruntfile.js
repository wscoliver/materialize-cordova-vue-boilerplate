module.exports = function(grunt){
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015'],
        plugins: [
          "transform-runtime"
        ]
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
          'dist/index.html': ['src/app.pug']
        }
      }
    },
    browserify: {
      dist:{
        files: {
          'dist/js/bundle.js': ['src/entry.js'],
        },
        options: {
          transform: [
            ['babelify',{
                "presets": ["es2015"],
                "plugins":["transform-runtime"]
              }
            ],
            'vueify'
          ],
        },
      },
    },
    uglify: {
      compile: {
        files: {
          'dist/js/bundle.min.js': ['dist/js/bundle.js']
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
