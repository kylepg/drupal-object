module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //
    // ─── WATCH ───────────────────────────────────────────────────────
    //

    watch: {
      js: {
        files: ['src/updateDrupal.js'],
        tasks: ['babel', 'notify:done'],
      },
    },

    //
    // ─── BABEL ───────────────────────────────────────────────────────
    //

    babel: {
      options: {
        sourceMap: false,
        presets: ['env'],
        plugins: ['transform-runtime'],
      },
      dist: {
        files: {
          'index.js': 'src/updateDrupal.js',
        },
      },
    },

    //
    // ─── NOTIFY ──────────────────────────────────────────────────────
    //

    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5,
        title: 'drupal',
        success: false,
        duration: 1,
      },
    },
    notify: {
      done: {
        options: {
          gruntLogHeader: false,
          title: 'drupal',
          message: 'DONE',
        },
      },
    },
  });

  //
  // ─── NOTIFY ─────────────────────────────────────────────────────────────────────
  //

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.registerTask('default', ['watch']);
};
