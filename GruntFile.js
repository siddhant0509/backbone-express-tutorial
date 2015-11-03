module.exports = function(grunt){
  grunt.initConfig({
    concat: {
      dist:{
        src: ['node_modules/underscore/underscore-min.js','node_modules/backbone/backbone-min.js','node_modules/jquery/dist/jquery.min.js','client/index.js'],
        dest: 'dist/built.js',
      },
      html: {
        src: ['client/index.html'],
        dest: "dist/build.html",
      },
    },
    uglify: {
      my_target: {
        files: {
          'dist/output.min.js': ['dist/built.js']
        }
      }
    },
    watch: {
      scripts: {
       files: ['client/*.js','client/*.html'],
       tasks: ['concat:dist','uglify','concat:html'],
       },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
}
