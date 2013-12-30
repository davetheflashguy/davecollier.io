define(function (require, exports, module) {

	require('bootstrap_js');
	require('css!bootstrap_css');
	var Backbone = require('backbone');

	require('css!./contact');
	var template = require('html!./contact');

	return Backbone.View.extend({
		el: 'body',
		initialize: function(){

		},
		render: function(){
			this.$el.append(template({}));
		}
	});

});
