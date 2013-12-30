/*global module:false*/
module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					separateCSS: true,
					out: 'public/app.min.js',
					mainConfigFile: 'public/app.config.js',
					name: 'almond',
					findNestedDependencies: true,
					optimize: 'uglify2',
					stubModules: ['text', 'html', 'css'],
					include: ['app.start'],
					insertRequire: ['app.start']
				}
			}
		},
		cssmin: {
			files: {
				src: ['public/app.min.css'],
				dest: 'public/app.min.css'
			},
			options: {}
		},
	});

	grunt.registerTask('default', [
		'requirejs',
		'cssmin'
	]);

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

};
