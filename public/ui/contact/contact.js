define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./contact');
	var template = require('html!./contact');

	return BaseView.extend({
		render: function(){
			
			this.$el.append(template({}));
			
		}
	});

});
