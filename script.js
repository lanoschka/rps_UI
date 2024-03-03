let playerScore = 0;
let computerScore = 0;
let rounds = 0; // Declare rounds here

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    return computerChoice;
}

console.log(getComputerChoice()); //test

function playRound(playerChoice){

    let resultMessage = '';
    let resultDisclaimer = '';
    const computerChoice = getComputerChoice();
  
    if (playerChoice === computerChoice) {
      resultMessage = "It's a tie!";
      resultDisclaimer = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + ' ties with ' + computerChoice;
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      resultMessage = "You win!";
      resultDisclaimer = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + ' beats ' + computerChoice + '.';
      playerScore++;
    } else {
      resultMessage = "Computer wins!";
      resultDisclaimer = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ' beats ' + playerChoice + '.';
      computerScore++;
    }

    contentUpdate(resultMessage, resultDisclaimer);

} 

function contentUpdate(resultMessage, resultDisclaimer){

    document.getElementById('playerScore').textContent = `PLAYER: ${playerScore}`;
    document.getElementById('computerScore').textContent = `COMPUTER: ${computerScore}`;
  
    document.getElementById('score-info').innerText = resultMessage;
  
    
    // updateChoices(playerChoice, computerChoice);
  
    document.getElementById('result').innerText = resultDisclaimer;

}

