define(function (require, exports, module) {

	require('bootstrap_js');
	require('css!bootstrap_css');
	var Backbone = require('backbone');

	require('css!./samples');
	var template = require('html!./samples');

	return Backbone.View.extend({
		el: '#app',
		initialize: function(){

		},
		render: function(){
			this.$el.append(template({}));
		}
	});

});
