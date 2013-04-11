
$(document).ready(function() {
	$("#scrollDown").click(function() {
	     $('html, body').animate({
	         scrollTop: $(".content-light").offset().top
	     }, 500);
	 });
});