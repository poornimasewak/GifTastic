	// $(document).ready(function() {
	    // Initial array of animals
	    var animals = [];

	    // Generic function for displaying animal data 
	    function renderButtons() {

	        // Deletes the animals prior to adding new animals 
	        $('#animalView').empty();

	        // Loops through the array of animals
	        for (var i = 0; i < animals.length; i++) {

	            // Then dynamicaly generates buttons for each animal in the array
	            $('#animalView').append('<button class="animal" data-animal="' + animals[i] + '">' + animals[i] + '</button>');
	        }
	        //           $('.animal').on('click', function() {
	        // 	console.log('hi');
	        // 	$('#gifsAppearHere').html('hi');
	        // });

	    }

	    // This function handles events where one button is clicked
	    $('#addAnimal').on('click', function() {

	        // This line of code will grab the input from the textbox
	        var a = $('#animal-input').val().trim();

	        // The animal from the textbox is then added to our array
	        animals.push(a);

	        // Our array then runs which handles the processing of our animal array
	        renderButtons();

	        return false;
	    });

	    // This calls the renderButtons() function
	    renderButtons();

	    //delegation thing
	    $(document).on('click', '.animal', function(event) {
	        
	        var a = $(this).data('animal');
	        
	        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + a + "&api_key=dc6zaTOxFJmzC&limit=10";
            //ajax call with done function
	        $.ajax({
	            url: queryURL,
	            method: 'GET'
	        }).done(function(response) {

	            //storing response back from server in a variable
	            var result = response.data;

                //Loop to run each element in an array
	            for (var i = 0; i < result.length; i++) {
	                var gifDiv = $('<div class="item">');


	                var rating = result[i].rating;

	                var p = $('<p>').text("Rating: " + rating);

	                var animalImage = $('<img class="gif" data-state="still" data-animate="'+result[i].images.fixed_height.url+'" data-still="'+result[i].images.fixed_height_still.url+'">');
	                animalImage.attr('src', result[i].images.fixed_height_still.url);

	                gifDiv.append(p);
	                gifDiv.append(animalImage);

	                $('#gifsAppearHere').prepend(gifDiv);

	            }
	        });
	    });
        
        //Function to perform animation on still images on click event
        $(document).on('click', '.gif', function(event) {

        	var state = $(this).attr('data-state');

        	 if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src',$(this).data('still'));
                $(this).attr('data-state', 'still');
            }

        });

	// });