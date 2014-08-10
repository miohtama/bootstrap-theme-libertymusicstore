module.exports = function(grunt) {
    grunt.initConfig({
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
};