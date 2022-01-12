
$(".play").click(function() {
let userRPS;
let userTagRPS;
  
//let computerRPS;
//let computerTagRPS;
  
//let winCondition;
//let winConditionTag;

//let RPSgenerator = 0;
  
let result;

userRPS = $(".input").val();
userTagRPS = "<p>" + userRPS + "</p>";
$(".userChoice").append(userTagRPS);

computerRPS = getComputerChoice();

result = gameLogic(userRPS,computerRPS);

resultLogic(result);

  
// pls ignore all of this (everything below here and to the end of this click function)
// is old code
  
// RPSgenerator = Math.round(Math.random() * 2);
// console.log(RPSgenerator)
  
// if (RPSgenerator == 0) {
// computerRPS = "rock";
// } 
// else if (RPSgenerator == 1) {
// computerRPS = "paper";
// }
// else if (RPSgenerator == 2) {
// computerRPS = "scissors"
// }

// computerTagRPS = "<p>" + computerRPS + "</p>";
// $(".computerChoice").append(computerTagRPS);


// if (computerRPS === userRPS.toLowerCase()) {
// winCondition = "🏳️ Tie!";
// $(".printedResult").append("<p style=\"color:grey;\">" + winCondition + "</p>");
// }
  
// else if (computerRPS == "rock" && userRPS.toLowerCase()  == "scissors") {
// winCondition = "🖥️ Computer Wins!";
// $(".printedResult").append("<p style=\"color:blue;\">" + winCondition + "</p>");
// }
  
// else if (computerRPS == "rock" && userRPS.toLowerCase()  == "paper") {
// winCondition = "🏆 You Win!";
// $(".printedResult").append("<p style=\"color:orange;\">" + winCondition + "</p>");
// }
  
// else if (computerRPS == "scissors" && userRPS.toLowerCase()  == "paper") {
// winCondition = "🖥️ Computer Wins!";
// $(".printedResult").append("<p style=\"color:blue;\">" + winCondition + "</p>");
// }
  
// else if (computerRPS == "scissors" && userRPS.toLowerCase()  == "rock") {
// winCondition = "🏆 You Win!";
// $(".printedResult").append("<p style=\"color:orange;\">" + winCondition + "</p>");
// }
  
// else if (computerRPS == "paper" && userRPS.toLowerCase()  == "rock") {
// winCondition = "🖥️ Computer Wins!";
// $(".printedResult").append("<p style=\"color:blue;\">" + winCondition + "</p>");
// }
  
// else if (computerRPS == "paper" && userRPS.toLowerCase()  == "scissors") {
// winCondition = "🏆 You Win!";
// $(".printedResult").append("<p style=\"color:orange;\">" + winCondition + "</p>");
// }

// else if (userRPS == "") {
// winCondition = "🚫 Please enter a value!";
// $(".userChoice").append("...");
// $(".printedResult").append("<p style=\"color:red;\">" + winCondition + "</p>");
// }
  
// else {
// $(".printedResult").append("<p>" + "🚫 Invaild Input. Try Again." + "</p>");
// }
});

// functions here
                 
function getComputerChoice() {
  
let RPSgenerator = Math.round(Math.random() * 2);
let computerRPS;
console.log(RPSgenerator);
  
if (RPSgenerator == 0) {
computerRPS = "rock";
} 
else if (RPSgenerator == 1) {
computerRPS = "paper";
}
else if (RPSgenerator == 2) {
computerRPS = "scissors";
}

let computerTagRPS;
computerTagRPS = "<p>" + computerRPS + "</p>";
$(".computerChoice").append(computerTagRPS);

return computerRPS;
}
  
  
function gameLogic(computer,user) {
let userRPS = user.toLowerCase();
let computerRPS = computer;

if (computerRPS === userRPS) {
return "tie";
}
  
else if (computerRPS == "rock" && userRPS == "scissors" 
|| computerRPS == "scissors" && userRPS == "paper" 
|| computerRPS == "paper" && userRPS == "rock") {
return "user";
}

else if (computerRPS == "rock" && userRPS == "paper"
|| computerRPS == "scissors" && userRPS == "rock"
|| computerRPS == "paper" && userRPS == "scissors") {
return "computer";
}

else if (userRPS == "") {
return "empty";
}
  
else {
return "invaild";
}
}
  
function resultLogic (gameResult) {
let winCondition;
console.log(gameResult);
  
if (gameResult == 'tie') {
winCondition = "🏳️ Tie!";
$(".printedResult").append("<p style=\"color:grey;\">" + winCondition + "</p>");
}
  
if (gameResult == 'computer') {
winCondition = "🖥️ Computer Wins!";
$(".printedResult").append("<p style=\"color:blue;\">" + winCondition + "</p>");
}
  
if (gameResult == 'user') {
winCondition = "🏆 You Win!";
$(".printedResult").append("<p style=\"color:orange;\">" + winCondition + "</p>");
}
  
if (gameResult == 'empty') {
winCondition = "🚫 Please enter a value!";
$(".userChoice").append("...");
$(".printedResult").append("<p style=\"color:red;\">" + winCondition + "</p>");
}
  
else if (gameResult == 'invaild') {
$(".printedResult").append("<p>" + "🚫 Invaild Input. Redo." + "</p>");
}
}

// find a way to make this more efficent

// RPS only really has four conditions: when the two items are the same, 
// a scenario where there's rock + paper, scissors + paper, and  rock + scissors
// (plus 21/ extra condition(s) for catching invalid/no input)