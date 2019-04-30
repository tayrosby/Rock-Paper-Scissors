let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".srore-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();

function main () {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(user, comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(comp)} You win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('green-glow')}, 500);
}

function lose(user, comp){
    compScore++;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(comp)} beats ${convertToWord(user)} You lose!`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('red-glow')}, 500);
}

function tie(user, comp){
    result_p.innerHTML = `${convertToWord(user)} matched ${convertToWord(comp)} It's a tie!`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('gray-glow')}, 500);
}

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}

function game(userChoice) {
   const compChoice = getComputerChoice();
   switch(userChoice + compChoice){
       case "rs":
       case "pr":
       case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        default:
            tie(userChoice, compChoice);
   }
}