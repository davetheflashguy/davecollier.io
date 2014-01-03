define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./home');
	var template = require('html!./home');

	return BaseView.extend({

		render: function(){
			console.log(this.$el)
			$('body').append(template({}));
		}
	});

});
