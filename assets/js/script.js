
$(document).ready(function() {


	/* Scroll Down Button */
	$("#scrollDown").click(function() {
	     $('html, body').animate({
	         scrollTop: $(".content-light").offset().top
	     }, 500);
	 });


	/* Subscribe to the mailing list */
	$("#subscribe-button").click(function(){
		// client side validation

		// connect to a service / eg php and store data

		// wait for callback and show the error or succes message and hide the form
		$('#subscribe-form form').fadeOut(500,function(){
			$('#succes-message').show().css("display","inline-block");;
		});
	});


});