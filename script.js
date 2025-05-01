let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const endgameModal = document.getElementById('endGameModal')
const endgameMsg = document.getElementById('endGameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

restartBtn.addEventListener('click', () => {
  closeEndgameModal();
  reset();
});

overlay.addEventListener('click', closeEndgameModal);

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playGame(playerChoice, clickedButton){
  if (isGameOver()) {
    openEndgameModal();  
    return
  };
  
    playRound(playerChoice, clickedButton);

        if (isGameOver()) {
          openEndgameModal()
          setFinalMessage()
    
    }
}
function clearButtonEffects() {
  const buttons = document.querySelectorAll("#game button");
  buttons.forEach(b => {
    b.classList.remove("winning-button", "losing-button");
  });
}
function playRound(playerChoice, clickedButton){

    const computerChoice = getComputerChoice();

    clearButtonEffects();

    let resultMessage = '';
    let resultDisclaimer = '';
  
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

      setTimeout(() => {
        clickedButton.classList.remove("winning-button");
        void clickedButton.offsetWidth;
        clickedButton.classList.add("winning-button")
      }, 50);

    } else {
      resultMessage = "Computer wins!";
      resultDisclaimer = `${capitalize(computerChoice)} beats ${playerChoice}.`;
      computerScore++;
      setTimeout(() => {
        clickedButton.classList.remove("losing-button");
        void clickedButton.offsetWidth;
        clickedButton.classList.add("losing-button")
      }, 50);

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

    const signs = {
      rock: '&#x1F44A;',
      paper: '&#x270B;',
      scissors: '&#x270C;'
    };

    document.getElementById('playerSign').innerHTML = signs[playerChoice];
    document.getElementById('computerSign').innerHTML = signs[computerChoice];

  }

function isGameOver() {
  return playerScore === 3 || computerScore === 3
}

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function closeEndgameModal() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = 'You won!')
    : (endgameMsg.textContent = 'You lost...')
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

    clearButtonEffects();
}
function capitalize(word) {
   return word.charAt(0).toUpperCase() + word.slice(1);
}