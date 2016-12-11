$('document').ready(function(){

var answersCorrect = 0;
var answersWrong = 0;

// This funtion will run the entire game on page load.


	// The following two functions run the timer and end the game if time runs out.
var timer = 121;
var counter;
	
function countdown() {
	counter = setInterval(decrement, 1000);
};
		
function decrement() {
	timer--;
	$(".showTimer").html("<h2>" + timer + " Seconds Left</h2>");
	if (timer === 0) {
		results();
		$(".game").html("Time is up! Let's see how you did.");
		$(".showResults").html("<h2>Answers Correct: " + answersCorrect + "</h2><h2>Answers Wrong: " + answersWrong + "</h2>");
		}
};

countdown();

$("#submit").on("click", function(){
	results();
	$(".game").html("Answers submitted! Let's see how you did.");
	$(".showResults").html("<h2>Answers Correct: " + answersCorrect + "</h2><h2>Answers Wrong: " + answersWrong + "</h2>");
});

function results(){
	clearInterval(counter);
	
	var answer1 = $("input[name='question1']:checked").val();
		if (answer1 == "paladin"){
			answersCorrect++;
		} else {
			answersWrong++;
		};

		var answer2 = $("input[name='question2']:checked").val();
		if (answer2 == "drow"){
			answersCorrect++;
		} else {
			answersWrong++;
		};

		var answer3 = $("input[name='question3']:checked").val();
		if (answer3 == "beheading"){
			answersCorrect++;
		} else {
			answersWrong++;
		};

		var answer4 = $("input[name='question4']:checked").val();
		if (answer4 == "bag of holding"){
			answersCorrect++;
		} else {
			answersWrong++;
		};

		var answer5 = $("input[name='question5']:checked").val();
		if (answer5 == "illithid"){
			answersCorrect++;
		} else {
			answersWrong++;
		};
};

});
	







// $("#submit").on("click", function(){
// 	$( "input[name='question1']").change(function(){
// 		var answer = $( "input[name='question1']:checked" ).val();
// 			console.log(answer);
// 	});
// 	results();
// });	



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

	

