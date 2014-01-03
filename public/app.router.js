define(function (require, exports, module) {

	var Backbone = require('backbone');
	var mediator = require('framework/mediator');

	return Backbone.Router.extend({

		routes: {
			'home'		: 'home',
			'samples'	: 'samples',
			'resume'	: 'resume',
			'contact'	: 'contact'
		},

		home: function (){

			mediator.trigger('scrollToSection', $(".home-container"));

		},

		samples: function(){

			mediator.trigger('scrollToSection', $(".samples-container"));

		},

		resume: function(){

			mediator.trigger('scrollToSection', $(".resume-container"));

		},

		contact: function(){

			mediator.trigger('scrollToSection', $(".contact-container"));

		}
	});

});
