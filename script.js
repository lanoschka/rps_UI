let playerScore = 0;
let computerScore = 0;
let rounds = 0; // Declare rounds here

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    return computerChoice;
}

console.log(getComputerChoice());