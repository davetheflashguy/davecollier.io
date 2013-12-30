define(function (require, exports, module) {

	require('bootstrap_js');
	require('css!bootstrap_css');
	var Backbone = require('backbone');

	require('css!./home');
	var template = require('html!./home');

	return Backbone.View.extend({
		el: 'body',
		initialize: function(){

		},
		render: function(){
			this.$el.append(template({}));
		}
	});

});
