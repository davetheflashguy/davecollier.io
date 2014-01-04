define(function (require, exports, module) {

	var underscore = require('underscore');
	var Router = require('app.router');
	var mediator = require('framework/mediator');
	
	var app = {
		registeredViews: [],
		router: new Router(),
		start: function(){

			require(['ui/menu/menu','ui/home/home', 'ui/samples/samples', 'ui/resume/resume', 'ui/contact/contact'], 

			function(Menu, Home, Samples, Resume, Contact){

				new Menu().render();
				
				new Home().render();

				new Samples().render();

				new Resume().render();

				new Contact().render();
				
				Backbone.history.start();
			});
			
		}
	};

	window.app = app;


	mediator.on('registerView', function(view){
		app.registeredViews.push(view);
	});

	mediator.on('clearViews', function(){

		_.each(app.registeredViews, function(view){
			mediator.off(null, null, view);
			view.off();
			view.remove();
		});

	});

	mediator.on('scrollToSection', function(id){
		
		//TODO clean this function up
		var val = $(id).offset().top - 126; 

		$('html, body').animate({
		        scrollTop: val
		}, 1000);
	});


	return app;

});