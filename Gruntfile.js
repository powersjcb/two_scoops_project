module.exports = function (grunt) {

  var appConfig = grunt.file.readJSON('package.json');

  // Load grunt tasks automatically
  // see: https://github.com/sindresorhus/load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-concat');

  // Time how long tasks take. Can help when optimizing build times
  // see: https://npmjs.org/package/time-grunt
  require('time-grunt')(grunt);

  var pathsConfig = function (appName) {
    this.app = appName || appConfig.name;

    return {
      app: this.app,
      templates: this.app + '/templates',
      css: this.app + '/static/css',
      sass: this.app + '/static/sass',
      fonts: this.app + '/static/fonts',
      images: this.app + '/static/images',
      js: this.app + '/static/js',
      js_src: this.app + '/static/js/src',
      manageScript: 'manage.py',
    };
  };

  grunt.initConfig({

    paths: pathsConfig(),
    pkg: appConfig,

    // see: https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['<%= paths.sass %>/**/*.{scss,sass}'],
        tasks: ['sass:dev'],
        options: {
          atBegin: true
        }
      },
      livereload: {
        files: [
          '<%= paths.js %>/project.js',
          '<%= paths.sass %>/**/*.{scss,sass}',
          '<%= paths.app %>/**/*.html'
          ],
        options: {
          spawn: false,
          livereload: true,
        },
      },
      concat: {
        files: ['<%= paths.js_src %>/**/*.js'],
        tasks: ['concat'],
        options: {
          atBegin: true,
        },
      },

      'template-module': {
        files: ['<%= paths.js_src %>/templates/**/*.jst'],
        tasks: ['template-module', 'concat'],
        options: {
          atBegin: true,
        }
      }
    },

  // setup compiler for javascript templates, will use 'JST' global namespace
    'template-module': {
      compile: {
        options: {
          module: true,
          provider: 'lodash',
          prettify: true,
          processName: function(filename) {
            return filename.toLowerCase();
          }.bind(this)
        },
        files: {
          '<%= paths.js_src %>/templates/templates.js': [
            "<%= paths.js_src %>/templates/**/*.jst",
          ],
        },
      },
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          '<%= paths.js_src %>/js_templates/templates.js',
          '<%= paths.js_src %>/models/**/*.js',
          '<%= paths.js_src %>/collections/**/*.js',
          '<%= paths.js_src %>/views/**/*.js',
          '<%= paths.js_src %>/app.js',
        ],
        dest: '<%= paths.js %>/project.js',
      },
    },

    // see: https://github.com/sindresorhus/grunt-sass
    sass: {
      dev: {
          options: {
              outputStyle: 'nested',
              sourceMap: false,
              precision: 10
          },
          files: {
              '<%= paths.css %>/project.css': '<%= paths.sass %>/project.scss'
          },
      },
      dist: {
          options: {
              outputStyle: 'compressed',
              sourceMap: false,
              precision: 10
          },
          files: {
              '<%= paths.css %>/project.css': '<%= paths.sass %>/project.scss'
          },
      }
    },

    //see https://github.com/nDmitry/grunt-postcss
    postcss: {
      options: {
        map: true, // inline sourcemaps

        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer-core')({browsers: [
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
          ]}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: '<%= paths.css %>/*.css'
      }
    },

    // see: https://npmjs.org/package/grunt-bg-shell
    bgShell: {
      _defaults: {
        bg: true
      },
      runDjango: {
        cmd: 'python <%= paths.manageScript %> runserver'
      },

    }
  });

  grunt.registerTask('serve', [
    'bgShell:runDjango',
    'watch'
  ]);

  grunt.registerTask('build', [
    'sass:dist',
    'postcss',
    'concat',
    'template-module',
  ]);

  grunt.registerTask('default', [
    'build',
  ]);

};
