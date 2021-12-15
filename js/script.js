
$(".play").click(function() {
let userRPS;
let userTagRPS;
  
let computerRPS;
let computerTagRPS;
  
let winCondition;
let winConditionTag;

let RPSgenerator = 0;

userRPS = $(".input").val();
userTagRPS = "<p>" + userRPS + "</p>";
$(".userChoice").append(userTagRPS);

RPSgenerator = Math.round(Math.random() * 2);
console.log(RPSgenerator)
  
if (RPSgenerator == 0) {
computerRPS = "rock";
} 
else if (RPSgenerator == 1) {
computerRPS = "paper";
}
else {
computerRPS = "scissors";
}

computerTagRPS = "<p>" + computerRPS + "</p>";
$(".computerChoice").append(computerTagRPS);


if (computerRPS === userRPS.toLowerCase()) {
winCondition = "🏳️ Tie!";
$(".printedResult").append("<p style=\"color:grey;\">" + winCondition + "</p>");
}
  
else if (computerRPS == "rock" && userRPS.toLowerCase()  == "scissors") {
winCondition = "🖥️ Computer Wins!";
$(".printedResult").append("<p style=\"color:blue;\">" + winCondition + "</p>");
}
  
else if (computerRPS == "rock" && userRPS.toLowerCase()  == "paper") {
winCondition = "🏆 User Wins!";
$(".printedResult").append("<p style=\"color:orange;\">" + winCondition + "</p>");
}
  
else if (computerRPS == "scissors" && userRPS.toLowerCase()  == "paper") {
winCondition = "🖥️ Computer Wins!";
$(".printedResult").append("<p style=\"color:blue;\">" + winCondition + "</p>");
}
  
else if (computerRPS == "scissors" && userRPS.toLowerCase()  == "rock") {
winCondition = "🏆 User Wins!";
$(".printedResult").append("<p style=\"color:orange;\">" + winCondition + "</p>");
}
  
else if (computerRPS == "paper" && userRPS.toLowerCase()  == "rock") {
winCondition = "🖥️ Computer Wins!";
$(".printedResult").append("<p style=\"color:blue;\">" + winCondition + "</p>");
}
  
else if (computerRPS == "paper" && userRPS.toLowerCase()  == "scissors") {
winCondition = "🏆 User Wins!";
$(".printedResult").append("<p style=\"color:orange;\">" + winCondition + "</p>");
}

else if (userRPS == "") {
winCondition = "🚫 Please enter a value!";
$(".printedResult").append("<p style=\"color:red;\">" + winCondition + "</p>");
}
  
else {
$(".printedResult").append("<p>" + "🚫 Invaild Input. Try Again." + "</p>");
}

// find a way to make this more efficent, Arielle suggested 
// using an object to store the win conditions of RPS and then acessing them
// through the conditional statements (+ research switch statements?)

// RPS only really has four conditions: when the two items are the same, 
// a scenario where there's rock + paper, scissors + paper, and  rock + scissors
// (plus 21/ extra condition(s) for catching invalid/no input)

});