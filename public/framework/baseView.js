define(function (require) {

	'use strict';

	require('bootstrap_js');
	require('css!bootstrap_css');
	var Backbone = require('backbone');
	var mediator = require('framework/mediator');
	

	return Backbone.View.extend({
		$el: $('body'),
		constructor: function(options){

			mediator.trigger('registerView', this);

			this.initialize.apply(this, arguments);

		}

	});

});