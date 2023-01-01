// ask player to enter a choice and create a variable to store player's choice
let playerChoice;
let gameResult;
let playerScore = 0;
let computerScore = 0;

//create a function getComputerChoice to generate the computer's choice

function getComputerChoice() {
    let x =  Math.floor(Math.random() * 3);
    
    if (x === 0){
      return "rock";
    }
    else if (x === 1){
      return "paper";
    }
    else if (x === 2){
      return "scissors";
    }
}

let computerChoice = getComputerChoice();
//create a function to compare both choices and return the winning choice

function playRound(playerChoice, computerChoice){
    if (playerChoice === "paper" & computerChoice === "rock"){
        gameResult = "win";
        playerScore++
        return"you win! Paper beats rock!";
    }
    else if (playerChoice === "scissors" & computerChoice === "rock"){
        gameResult = "loss";
        computerScore++
        return"you lose :( rock beats scissors!"
    }
    else if (playerChoice === "rock" & computerChoice === "rock"){
        return"it's a tie! try again!"
    }
    else if (playerChoice === "paper" & computerChoice === "scissors"){
        gameResult = "loss";
        computerScore++
        return"you lose :(  Scissors beats Paper!";
    }
    else if (playerChoice === "rock" & computerChoice === "scissors"){
        gameResult = "win";
        playerScore++
        return"you win! Rock beats Scissors!";
    }
    else if (playerChoice === "scissors" & computerChoice === "scissors"){
        return"it's a tie! try again!";
    }
    else if (playerChoice === "scissors" & computerChoice === "paper"){
        gameResult = "win";
        playerScore++
        return "you win! Scissors beats Paper!";
    }
    else if (playerChoice === "rock" & computerChoice === "paper"){
        gameResult = "loss";
        computerScore++
        return "you lose :( Paper beats Rock!";
    }
    else if (playerChoice === "paper" & computerChoice === "paper"){
        return "it's a tie! try again";
    }
}

// function game(){
//     for (let i = 0; i<5; i++){
//         playerInput = prompt("enter rock paper or scissors");
//         playerChoice = playerInput.toLowerCase();
//         console.log(playRound(playerChoice, computerChoice));
//         if (gameResult === "win"){
//             alert("good job! your score is "+ playerScore + " and the computer's score is "+ computerScore)
//         }
//         else if (gameResult === "loss"){
//             alert("oh no... the computer's score is now " + computerScore + " and yours is still " + playerScore)
//         }
//         else {
//             alert("it's a tie. try again!")
//         }
//         }
// }
