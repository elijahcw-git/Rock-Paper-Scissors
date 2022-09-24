const cpuScore = document.querySelector('.cpuScore');
const playerScore = document.querySelector('.playerScore');
const totalGames = document.querySelector('.gamesPlayed');
const computerOptions = ['rock', 'paper', 'scissors'];
const gameResult = document.querySelector('.result');
const choices = document.querySelectorAll('.choices'); 
const cpuChoice = document.querySelector('.cpuChoice');
let gamesPlayed = gamesWon = gamesLost = 0;

choices.forEach((choices) => {
    choices.addEventListener('click', function(){
        let userChoice = this.id;
        let computerRNG= Math.floor(Math.random() * 3);
        let computerChoice = computerOptions[computerRNG];
        playGame(userChoice, computerChoice);
    })
});

function playGame(userChoice, computerChoice){
    if (userChoice === computerChoice){
        gameResult.textContent = "It's a tie!";
    } else if (userChoice === 'rock' && computerChoice === 'scissors'){
        gamesWon++;
        gameResult.textContent = 'You won!';
    } else if (userChoice === 'paper' && computerChoice === 'rock'){
        gamesWon++;
        gameResult.textContent = 'You won!';
    } else if (userChoice === 'scissors' && computerChoice === 'paper'){
        gamesWon++;
        gameResult.textContent = 'You won!';
    }  else {
        gamesLost++;
        gameResult.textContent = 'The computer won!';
    }
    gamesPlayed++;
    cpuChoice.textContent = `The Computer Chose: ${computerChoice}`;
    cpuScore.textContent = `Computers Score: ${gamesLost}`;
    playerScore.textContent = `Players Score: ${gamesWon}`;
    totalGames.textContent = `Games Played: ${gamesPlayed}`;
}