$('document').ready(function(){

var answersCorrect = 0
var answersWrong = 0
var timer = 121
var counter

$("input[name='question1']").change(function(){
			var answer = $("input[name='question1']:checked").val();
			if (answer == "paladin"){
				console.log("correct");
			} else {
				console.log("incorrect");
			}
		});

// This funtion will run the entire game on page load.
function runGame() {

	// The following two functions run the timer and end the game if time runs out.
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
		$(".game").html("Answers submitted! Let's see how you did.");
		$(".showResults").html("<h2>Answers Correct: " + answersCorrect + "</h2><h2>Answers Wrong: " + answersWrong + "</h2>");
	};

};


runGame();


// $("#submit").on("click", function(){
// 	$( "input[name='question1']").change(function(){
// 		var answer = $( "input[name='question1']:checked" ).val();
// 			console.log(answer);
// 	});
// 	results();
// });	

});

	

