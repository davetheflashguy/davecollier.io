define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./home');
	var template = require('html!./home');

	return BaseView.extend({

		render: function(){

			this.$el.append(template({}));

			// activate the tool tips for this view
			$("#availability-btn").tooltip();
			
		}
	});

});
