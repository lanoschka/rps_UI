let playerScore = 0;
let computerScore = 0;
let rounds = 0; // Declare rounds here

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    return computerChoice;
}


function playRound(playerChoice){

    let resultMessage = '';
    let resultDisclaimer = '';
    const computerChoice = getComputerChoice();
  
    if (playerChoice === computerChoice) {
      resultMessage = "It's a tie!";
      resultDisclaimer = `${capitalize(playerChoice)} ties with ${computerChoice}.`;
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      resultMessage = "You win!";
      resultDisclaimer = `${capitalize(playerChoice)} beats ${computerChoice}.`;
      playerScore++;
    } else {
      resultMessage = "Computer wins!";
      resultDisclaimer = `${capitalize(computerChoice)} beats ${playerChoice}.`;
      computerScore++;
    }

    if (playerChoice !== computerChoice) {
        rounds++;
      }

    contentUpdate(resultMessage, resultDisclaimer, playerChoice, computerChoice);

} 

function contentUpdate(resultMessage, resultDisclaimer, playerChoice, computerChoice){

    document.getElementById('playerScore').textContent = `PLAYER: ${playerScore}`;
    document.getElementById('computerScore').textContent = `COMPUTER: ${computerScore}`;
  
    document.getElementById('score-info').innerText = resultMessage;
  
    document.getElementById('result').innerText = resultDisclaimer;

    updateChoices(playerChoice, computerChoice);

}

function updateChoices(playerChoice, computerChoice){
    switch (playerChoice) {
      case 'rock':
        document.getElementById('playerSign').innerHTML = '&#x1F44A;';
        break
      case 'paper':
        document.getElementById('playerSign').innerHTML = '&#x270B;';
        break
      case 'scissors':
        document.getElementById('playerSign').innerHTML = '&#x270C;';
        break
  
    }
    switch (computerChoice){
      case 'rock':
        document.getElementById('computerSign').innerHTML = '&#x1F44A;';
        break
      case 'paper':
        document.getElementById('computerSign').innerHTML = '&#x270B;';
        break
      case 'scissors':
        document.getElementById('computerSign').innerHTML = '&#x270C;';
        break
    }
  }

function playGame(playerChoice){

    playRound(playerChoice);

    if (rounds === 5) {
        let winner = '';
        if (playerScore > computerScore) {
          winner = "You";
        } else if (playerScore < computerScore) {
          winner = "Computer";
        } else {
          winner = "It's a"; // Grammatical correction
        }
    
        alert(`${winner} win the game!`);

        reset();
    
    }
}

function reset(){

    playerScore = 0;
    computerScore = 0;
    rounds = 0;

    document.getElementById('playerScore').textContent = `PLAYER: 0`;
    document.getElementById('computerScore').textContent = `COMPUTER: 0`;
    document.getElementById('computerSign').innerHTML = '&#128187;';
    document.getElementById('playerSign').innerHTML = '&#128377;&#65039;';
    document.getElementById('score-info').innerText = 'Choose your weapon';
    document.getElementById('result').innerText = 'First to win Bo5 wins the game!';

    // endgameModal.classList.remove('active')
    // overlay.classList.remove('active')

    clearButtonEffects();
}
function capitalize(word) {
   return word.charAt(0).toUpperCase() + word.slice(1);
}