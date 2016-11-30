module.exports = function(grunt) {

  // Default port
  var LIVERELOAD_PORT = 35729;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
        'Scripts/*.js',
        'Scripts/Custom/*.js'
        ],
        dest: 'Scripts/app.js',
      }
    },

    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed',
      },
      dist: {
        files: {
          'stylesheets/style.css' : 'stylesheets/scss/style.scss'
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        sourceMap: false
      },
      build: {
        src: 'scripts/app.js',
        dest: 'scripts/app.min.js'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }],
        options: {
          cache: false
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      options: {
         livereload: LIVERELOAD_PORT,
      },
      scripts: {
        files: ['scripts/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      },
      html: {
        files: ['*.html','**/*.css'],
        options: {
             livereload: LIVERELOAD_PORT
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8080,
          hostname: 'localhost',
          base: '.',
          livereload: LIVERELOAD_PORT
        }
      }
    },

   svgmin: {
   options: {
      plugins: [
            { removeViewBox: true },
            { removeUselessStrokeAndFill: false }
        ]
      },
      multiple: {
        files: [{
        expand:true,
        cwd: 'images/',
        src: ['**/*.svg'],
        dest: 'images/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['sass', 'connect', 'watch']);

  grunt.registerTask('production',['concat', 'uglify', 'imagemin', 'svgmin']);

  grunt.registerTask('images',['imagemin']);
};