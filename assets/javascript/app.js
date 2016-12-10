$('document').ready(function(){

var answersCorrect = 0
var answersWrong = 0

// This funtion will run the entire game on page load.


	// The following two functions run the timer and end the game if time runs out.
	var timer = 6
	var counter
	function countdown() {
		counter = setInterval(decrement, 1000);
	}
		
	function decrement() {
		timer--;
		$(".showTimer").html("<h2>" + timer + " Seconds Left</h2>");
		if (timer === 0) {
			results();
			}
	}

countdown();

	function results(){
		clearInterval(counter);
		var answer1 = $("input[name='question1']:checked").val();
			if (answer1 == "paladin"){
				console.log("correct");
				answersCorrect++;
			} else {
				console.log("incorrect");
				answersWrong++;
			};
		$(".game").html("Answers submitted! Let's see how you did.");
		$(".showResults").html("<h2>Answers Correct: " + answersCorrect + "</h2><h2>Answers Wrong: " + answersWrong + "</h2>");
		
		
	};


	







// $("#submit").on("click", function(){
// 	$( "input[name='question1']").change(function(){
// 		var answer = $( "input[name='question1']:checked" ).val();
// 			console.log(answer);
// 	});
// 	results();
// });	

});

	// SAVE POINT
	// $("input[name='question1']").change(function(){
	// 		var answer = $("input[name='question1']:checked").val();
	// 		if (answer == "paladin"){
	// 			console.log("correct");
	// 			answersCorrect++;
	// 		} else {
	// 			console.log("incorrect");
	// 			answersWrong++;
	// 		}
	// 	});

	

