	$( document ).ready(function() {
	// Initial array of animals
	var animals = [];

	// Generic function for displaying animal data 
	function renderButtons(){ 

		// Deletes the animals prior to adding new animals 
        $('#animalView').empty();

		// Loops through the array of animals
           for (var i = 0; i < animals.length; i++) {

           	// Then dynamicaly generates buttons for each animal in the array
           	$('#animalView').append('<button class="animal">'+animals[i]+'</button>');
           }

	}

	// This function handles events where one button is clicked
	$('#addAnimal').on('click', function(){

		// This line of code will grab the input from the textbox
		var a = $('#animal-input').val().trim();

		// The animal from the textbox is then added to our array
		animals.push(a);

		// Our array then runs which handles the processing of our animal array
		renderButtons();

		return false;
	});

	// This calls the renderButtons() function
	// renderButtons();

	$('.animal').on('click', function() {
		console.log('hi');
		$('#gifsAppearHere').html('hi');
	});
});