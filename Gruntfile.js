module.exports = function(grunt) {
    grunt.initConfig({

        // Options:
        // https://github.com/gruntjs/grunt-contrib-less
        less: {
            development: {
                options: {
                    paths: ["less"],
                    sourceMap: true,
                    sourceMapFilename: "css/libertymusicstore.css.map",
                    sourceMapBasepath: "css",
                    sourceMapRootpath: "..",
                    sourceMapURL: "libertymusicstore.css.map"
                },
                files: {
                    "css/libertymusicstore.css": "less/libertymusicstore.less"
                },
            },
            production: {
                options: {
                  paths: ["assets/css"],
                  cleancss: true,
                  // NO KNEELING TOWARDS REDMOND
                  ieCompat: false
                },
                files: {
                    "css/libertymusicstore.min.css": "less/libertymusicstore.less"
                }
            }
        },
        watch: {
            files: "./less/*",
            tasks: ["less"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('production', ['less:production']);
};