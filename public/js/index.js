$(document).ready(function() {
	"use strict";
	var $welcome = $('#welcomeMessage'); //h1 welcome message
	var $description = $('#projectDescrition'); //p tag for describing the projects
	var $profile = $('#profilePicture');

	function fadeLeft(element){
		element.animate({ 
			opacity: 0, 
			right: "80px",
			opacity:1,
			left:"80px" 
		},'slow');
	}
	//fade in animation for elements
	function fadeInAnimation(element){
		setTimeout(function() {
			element.fadeIn("slow");
		}, 0);
	}
	//message that shows first greeting.
	function welcomeMessage() {
		setTimeout(function() {
			$welcome.text('Hi, welcome to my website.');
			$welcome.hide().fadeIn("slow");
			// $profile.hide().slideDown("slow");

		}, 700);
	}
	/*****Start Smooth Scrolling*/
	// Add smooth scrolling to all links
	$(".smooth").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
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
	});
	/*****End Smooth Scrolling*/

	// Listen to the 'slid carousel' event
	// to trigger our code after each slide change
	$('.carousel').on('slid.bs.carousel', function() {
		//get values data and index from current slide
		var carouselData = $(this).data('bs.carousel');
		var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
		//start writing the  page content.
		// var content = '<h3>Project Description</h3>';
		var content="";
		switch (currentIndex) {
			case 0:
				content += '<p>It is the classic simple simon game.</p>';
				content += '<h4>Project Details:</h4><hr>';
				content += '<ul>';
				content += '<li>The game is configured to start the sequence when the start game button is pressed.</li>';
				content += '<li>Sounds and animations will help the user have an immerse experience.</li>';
				content += '<li>It has animations for lighting up the buttons, starting the game, and ending the game.</li>';
				content += '</ul>';
				break;
			case 1:
				content += '<p>Weather App website uses the weather app API as well as the Google Maps API.</p>';
				content += '<h4>Project Details:</h4><hr>';
				content += '<ul>';
				content += '<li>It retrieves the weather conditions for the current and next two days.</li>';
				content += '<li>With the help of the google map you can easily change the location.</li>';
				content += '<li>Uses ajax requests to pull data from APIs.</li>';
				content += '</ul>';
				break;
			case 2:
				content += '<p>Calculator App</p>';
				content += '<h4>Project Details:</h4><hr>';
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
		$description.hide();
		fadeInAnimation($description);

	});
	//scrolling funciton
	$(window).scroll(function() {
		var positionY = window.pageYOffset;//window Y value
		var navbarHeight = parseInt($('nav').css('height'));//navbar height
		var offsetDescription = $('#scroller').offset().top;//position top of the div that will trigger the scroll event
		var offsetImages = $('#scrollImages').offset().top;//postition of div for images
		var offsetKnowledge = $('#scrollKnowledge').offset().top;//position of div for knowledge

		if(positionY > offsetDescription-(navbarHeight*5)){
			fadeInAnimation($description);
			// console.log('scroll carousel.');
			//fadeLeft($description);
		}

		if(positionY > offsetImages-(navbarHeight*5)){
			// fadeInAnimation($description);
			// console.log('scroll images.');
		}

		if(positionY > offsetKnowledge-(navbarHeight*5)){
			// fadeInAnimation($description);
			// console.log('scroll knowledge.');
		}

	});

	$description.hide();
	welcomeMessage();



});