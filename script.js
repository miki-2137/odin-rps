function getComputerChoice(){
    const c = Math.random();
    if(c >= 0 && c < 0.33){
        console.log(c);
        console.log("rock");
    }
    else if(c > 0.33 && c < 0.66){
        console.log(c);
        console.log("paper");
    }
    else{
        console.log(c);
        console.log("scissors");
    }
}

function getHumanChoice(){
    let h = window.prompt("Rock, Paper or Scissors?");

    if(h.toLowerCase() === "rock"){
        console.log("Rock");
    }
    else if(h.toLowerCase() === "paper"){
        console.log("Paper");
    }
    else{
        console.log("Scissors");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
}

const humanSelection = getComputerChoice();
const computerSelection = getHumanChoice();