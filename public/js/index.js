$(document).ready(function() {
	"use strict";
	var $welcome = $('#welcomeMessage'); //h1 welcome message
	var $description = $('#projectDescrition'); //p tag for describing the projects
	var $profile = $('#profilePicture');
	var $jumbotron = $('.jumbotron');
	var $imgLeft = $('#imgFrontEnd');
	var $imgMiddle = $('#imgBackEnd');
	var $imgRight = $('#imgDatabase');
	var $progress1 = $('#webDevProgressBar');
	var $progress2 = $('#progressC');
	var $progress3 = $('#progressJava');


	function fadeUp(element, time){
		$(element).animate({
			opacity: 1,
			top: "0px"
		}, time);
	}
	function fadeRight(element, time){
		$(element).animate({
			opacity: 1,
			right: "0px"
		}, time);
	}
	function fadeLeft(element, time){
		$(element).animate({
			opacity: 1,
			left: "0px"
		}, time);
	}
	//fade in animation for elements
	function fadeInAnimation(element){
		setTimeout(function() {
			element.fadeIn(1500);
		}, 0);
	}
	//message that shows first greeting.
	function welcomeMessage() {
		setTimeout(function() {
			$welcome.text('Welcome.');
			$welcome.hide().fadeIn(1000);
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
				content += '<p>Starwars Wiki webpage refreshed in real time using the starwars API.</p>';
				content += '<h4>Project Details:</h4><hr>';
				content += '<ul>';
				content += '<li>One page design refreshed and updated in real time.</li>';
				content += '<li>It has information about People, Species, Vehicles, Starships, and Movies from the starwars saga.</li>';
				content += '<li>It has a search bar to filter results in real time and a way to adjust what is being displayed on screen.</li>';
				content += '</ul>';
				break;
			case 2:
				content += '<p>Weather App website uses the weather app API as well as the Google Maps API.</p>';
				content += '<h4>Project Details:</h4><hr>';
				content += '<ul>';
				content += '<li>It retrieves the weather conditions for the current and next two days.</li>';
				content += '<li>With the help of the google map you can easily change the location.</li>';
				content += '<li>Uses ajax requests to pull data from APIs.</li>';
				content += '</ul>';
				break;
			case 3:
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
		fadeInAnimation($description);

	});
	//scrolling funciton
	$(window).scroll(function() {
		var positionY = window.pageYOffset;//window Y value
		var navbarHeight = parseInt($('nav').css('height'));//navbar height
		var offsetDescription = $('#scroller').offset().top;//position top of the div that will trigger the scroll event
		var offsetImages = $('#scrollImages').offset().top;//postition of div for images
		var offsetKnowledge = $('#scrollKnowledge').offset().top;//position of div for knowledge
		var offsetJumbotron = $('.jumbotron').offset().top;

		if(positionY > offsetJumbotron-(navbarHeight)){
			$jumbotron.slideDown(1000);
		}
		if(positionY > offsetDescription-(navbarHeight*10)){		
			fadeLeft($description,1000);
		}
		if(positionY > offsetImages-(navbarHeight*7)){
			fadeRight($imgLeft,1000);
			fadeUp($imgMiddle,1000);
			fadeLeft($imgRight,1000);
		}

		if(positionY > offsetKnowledge-(navbarHeight*10)){
			fadeRight($progress1,500);
			fadeRight($progress2,700);
			fadeRight($progress3,1100);
		}

	});

	$jumbotron.hide();
	welcomeMessage();



});