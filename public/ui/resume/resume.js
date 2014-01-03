define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./resume');
	var template = require('html!./resume');

	return BaseView.extend({
		render: function(){
			
			this.$el.append(template({}));
			
		}
	});

});
