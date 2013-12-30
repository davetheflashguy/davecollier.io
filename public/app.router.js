define(function (require, exports, module) {

	var Backbone = require('backbone');

	require(['ui/menu/menu','ui/home/home', 'ui/samples/samples', 'ui/resume/resume', 'ui/contact/contact'], 

	function(Menu, Home, Samples, Resume, Contact){

		var menu = new Menu();
			menu.render();

		var home = new Home();
			home.render();

		var samples = new Samples();
			samples.render();

		var resume = new Resume();
			resume.render();

		var contact = new Contact();
			contact.render();

	});
	return Backbone.Router.extend({
		routes: {
			''			: 'init',
			'home'		: 'home',
			'samples'	: 'samples',
			'resume'	: 'resume',
			'contact'	: 'contact'
		},
		init: function(){

		},
		home: function (){

		},
		samples: function(){

		},
		resume: function(){

		},
		contact: function(){

		},
		scrollToById: function(id) {

		}
	});

});
