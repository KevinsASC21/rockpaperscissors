
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
if (RPSgenerator == 1) {
computerRPS = "paper";
}
if (RPSgenerator == 2) {
computerRPS = "scissors";
}

computerTagRPS = "<p>" + computerRPS + "</p>";
$(".computerChoice").append(computerTagRPS);



});