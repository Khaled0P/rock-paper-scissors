let userScore = 0;
let computerScore = 0;

const rock_btn = document.querySelector('.rock');
const paper_btn = document.querySelector('.paper');
const scissors_btn = document.querySelector('.scissors');
const userScore_span = document.querySelector('.playerScore');
const computerScore_span = document.querySelector('.computerScore');
const roundResult_p = document.querySelector('.roundResult');

function getComputerChoice(){
    const choice = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random()*3);
    return choice[randomNumber];
}

function convertToWord(choice){
    if (choice === 'r') return'Rock';
    else if (choice === 'p') return'Paper';
    else if (choice === 's') return'Scissors';
}

function win(playerChoice,computerChoice){
        roundResult_p.innerHTML= `You win! ${convertToWord(playerChoice)} beats ${convertToWord(computerChoice)} `;
        userScore++;
        userScore_span.innerHTML= userScore;
        computerScore.innerHTML = computerScore;
}

function lose(playerChoice,computerChoice){
    roundResult_p.innerHTML= `You lose! ${convertToWord(playerChoice)} loses to ${convertToWord(computerChoice)} `;
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;
}
function tie(playerChoice,computerChoice){
    roundResult_p.innerHTML= 'It\'s a tie. try again!' ;
    userScore_span.innerHTML= userScore;
    computerScore.innerHTML = computerScore;
}





function game(playerChoice){
    const computerChoice = getComputerChoice();

    switch(playerChoice +computerChoice){
    case 'rs' :
    case 'sp' :
    case 'pr' :
        win(playerChoice,computerChoice);
        break;
    case 'sr':
    case 'ps':
    case 'rp':
        lose(playerChoice,computerChoice);
        break;

    case 'rr':
    case 'pp':
    case 'ss':
        tie (playerChoice,computerChoice);
        break;
    }
}



function main(){
    rock_btn.addEventListener('click', () =>{
        game('r');
    });

    paper_btn.addEventListener('click', () =>{
        game('p');
    });

    scissors_btn.addEventListener('click', () =>{
        game('s');
    });
}

main();