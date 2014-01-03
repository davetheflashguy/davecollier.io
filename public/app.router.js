define(function (require, exports, module) {

	var Backbone = require('backbone');
	var mediator = require('framework/mediator');

	return Backbone.Router.extend({
		routes: {
			'home'		: 'home',
			'samples'	: 'samples',
			'resume'	: 'resume',
			'contact'	: 'contact'
		}
		home: function (){
			this.scrollToById($(".home-container"));
		},
		samples: function(){
			this.scrollToById($(".samples-container"));
		},
		resume: function(){
			this.scrollToById($(".resume-container"));
		},
		contact: function(){
			this.scrollToById($(".contact-container"));
		},
		scrollToById: function(id) {
			var val = $(id).offset().top - 127;

			$('html, body').animate({
			        scrollTop: val
			}, 2000);
		}
	});

});
