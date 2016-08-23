$(document).ready(function() {
	"use strict";
	var $welcome = $('#welcomeMessage');

	//message that shows first greeting.
	function welcomeMessage(){
		$welcome.hide();
		setTimeout(function(){
			$welcome.text('Welcome to my webpage.');
			$welcome.fadeIn("slow");
		},1500);
	}
	/*****Start Smooth Scrolling*/
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		//if($(this).attr('id') == 'a1' || $(this).attr('id') == 'portfolio' || $(this).attr('id') == 'resume'){
			//console.log("i am smooth");
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();
				// Store hash
				var hash = this.hash;
				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function() {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		// }
		// else{
		//	console.log("else");
			//return;
		//}
	});
	/*****End Smooth Scrolling*/

	welcomeMessage();
	

});