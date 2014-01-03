define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./samples');
	var template = require('html!./samples');

	return BaseView.extend({
		render: function(){
			
			this.$el.append(template({}));
			
		}
	});

});
