$(document).ready(function() {
	"use strict";
	var $welcome = $('#welcomeMessage'); //h1 welcome message
	var $description = $('#projectDescrition'); //p tag for describing the projects



	function projectsCarousel() {

	}
	//message that shows first greeting.
	function welcomeMessage() {
		$welcome.hide();
		setTimeout(function() {
			$welcome.text('Welcome to my webpage.');
			$welcome.fadeIn("slow");
		}, 1500);
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
	
	// Listen to the 'slid carousel' event
	// to trigger our code after each slide change
	$('.carousel').on('slid.bs.carousel', function() {
		//get values data and index from current slide
		var carouselData = $(this).data('bs.carousel');
		var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
		//start writing the  page content.
		var content = '<h3>Project Description</h3>';
		switch (currentIndex) {
			case 0:
				content += '<p>It is the classic simple simon game.</p>';
				content += '<h3>Project Details:</h3>';
				content += '<ul>';
				content += '<li>The game is configured to start the sequence when the start game button is pressed.</li>';
				content += '<li>Sounds and animations will help the user have an immerse experience.</li>';
				content += '<li>It has animations for lighting up the buttons, starting the game, and ending the game.</li>';
				content += '</ul>';
				break;
			case 1:
				content += '<p>Weather App website uses the weather app API as well as the Google Maps API.</p>';
				content += '<h3>Project Details:</h3>';
				content += '<ul>';
				content += '<li>It retrieves the weather conditions for the current and next two days.</li>';
				content += '<li>With the help of the google map you can easily change the location.</li>';
				content += '<li>Uses ajax requests to pull data from APIs.</li>';
				content += '</ul>';
				break;
			case 2:
				content += '<p>Calculator App</p>';
				content += '<h3>Project Details:</h3>';
				content += '<ul>';
				content += '<li>The app takes two numbers or one number as input.</li>';
				content += '<li>Calculates the selected operation.</li>';
				content += '<li>Disables buttons so user input becomes easier.</li>';
				content += '</ul>';
				break;
			default:
				console.log("default");
		}
		$description.html(content);

	});

	welcomeMessage();



});