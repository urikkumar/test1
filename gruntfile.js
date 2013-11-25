//'use strict'; //allows you to place a program, or a function, in a “strict” operating context
//strict context prevents certain actions from being taken and throws more exceptions
//It catches some common coding bloopers, throwing exceptions.
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),  

    copy: {
      dist: {
        files: [ {src: 'index.html', dest: 'public/index.html'},
                  {src: 'scripts/**', dest: 'public/'},
                  {src: 'assets/font/*', dest: 'public/'},
                  {src: 'assets/**', dest: 'public/'} ]
      }
    },
    cssmin: {
  add_banner: {
    options: {
      banner: '/* My minified css file */'
    },
    files: {
      'public/build/output.min.css': ['<banner>','assets/css/ace.min.css', 'assets/css/ace-rtl.min.css', 'assets/css/ace-skins.min.css','assets/css/prettify.css','assets/css/jquery-ui-1.10.3.custom.min.css','assets/css/jquery.gritter.css','assets/css/fullcalendar.css','assets/css/jquery-ui-1.10.3.full.min.css','assets/css/datepicker.css','assets/css/ui.jqgrid.css','assets/css/jquery-ui-1.10.3.custom.min.css','assets/css/daterangepicker.css','assets/css/colorpicker.css','assets/css/ace-fonts.css','assets/css/bootstrap-editable.css']
      }
    }
  },
    'useminPrepare': {
      options: {
        dest: 'public'
      },
      html: 'index.html'
    },

    usemin: {
      html: ['public/index.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('default', ['useminPrepare', 'copy', 'cssmin', 'usemin']);
  grunt.registerTask('replace', ['copy', 'usemin']);
};