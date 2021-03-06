define(function (require, exports, module) {

	var BaseView = require('framework/baseView');

	require('css!./contact');
	var template = require('html!./contact');
	

	return BaseView.extend({

		render: function(){

			this.$el.append(template({}));
			var scope = this;

			$('#submit').click(function(e) {
    			e.preventDefault();
    			scope.validateFormOnSubmit();
			});
			
		},

		validateFormOnSubmit: function() {

			var formElements = $('#name, #subject, #email, #message');

			for (i = 0 ; i < formElements.length ; i++)
			{
			    if ($(formElements[i]).val().length === 0) {
			     	$(formElements[i]).addClass('warning');
			    }
			}

			if ($('#name').val().length > 0 && $('#subject').val().length > 0 && $('#email').val().length > 0 && $('#message').val().length > 0) {
				var url = "contact.php"; // the script where you handle the form input.

			    $.ajax({
			           type: "POST",
			           url: url,
			           data: $("#contact-form").serialize(), // serializes the form's elements.
			           success: function(data)
			           {
			               //alert(data); // show response from the php script.
			           }
			         });
			    
			    this.displayThanks();
			}

		},

		displayThanks: function(){

			var thanks = "<h3>Thanks for the message.  I'll get back to you as soon as time allows.<h3>"
			$(".contact-form").html(thanks);

		}

	});

});
