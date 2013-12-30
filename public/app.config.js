require.config({
	paths: {
		bootstrap_css: 'bower_components/bootstrap/dist/css/bootstrap',
		bootstrap_js: 'bower_components/bootstrap/dist/js/bootstrap',
		almond: 'bower_components/almond/almond',
		backbone: 'bower_components/backbone/index',
		handlebars: 'bower_components/handlebars/handlebars.amd',
		html: 'bower_components/requirejs-handlebars-plugin/requirejs-handlebars-plugin',
		jquery: 'bower_components/jquery/jquery',
		jquery_ui: 'bower_components/jquery-ui-amd/jquery-ui-1.10.0/jqueryui',
		underscore: 'bower_components/lodash/dist/lodash',
		text: 'bower_components/requirejs-text/text'
	},
	shim: {
		bootstrap_js: ['jquery']
	},
	packages: [{
		name: 'css',
		main: 'css',
		location: 'bower_components/require-css'
	}],
	map: {
		'*': {
			'css': 'css'
		}
	}
});