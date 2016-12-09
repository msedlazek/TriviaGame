var answersCorrect = 0
var answersWrong = 0
var timer = 121
var counter

// This funtion will run the entire game on page load.
// function runGame() {

// 	// The following two functions run the timer and end the game if time runs out.
// 	function countdown() {
// 		counter = setInterval(decrement, 1000);
// 	}
		
// 	function decrement() {
// 		timer--;
// 		$(".showTimer").html("<h2>" + timer + " Seconds Left</h2>");
// 		if (timer === 0) {
// 			clearInterval(counter);
// 			$(".game").html("Time is up! Here are your results:");
// 			$(".showResults").html("<h2>Answers Correct: " + answersCorrect + "</h2><h2>Answers Wrong: " + answersWrong + "</h2>");
// 		}
// 	}

// 	countdown();

	// I need to write out what will happen when the submit button is pressed, many things will happen at once. 
	$("#submit").click(function(){

		alert("Button Clicked!");
		// if ($("#questionOne").val() == "fighter") {
		// 	answersCorrect++;
		// } else {
		// 	answersWrong++;
		// }
	});

}

// runGame();
	

