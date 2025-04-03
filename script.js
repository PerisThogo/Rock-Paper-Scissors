let wins = 0;
let losses = 0;
let ties = 0;


const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');


rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
resetBtn.addEventListener('click', resetScore);

function playGame(playerMove) {
   
    playerChoiceEl.classList.remove('active', 'shake');
    computerChoiceEl.classList.remove('active', 'shake');
    
  
    playerChoiceEl.textContent = getEmoji(playerMove);
    playerChoiceEl.classList.add('active');
    
    
    setTimeout(() => {
        const moves = ['rock', 'paper', 'scissors'];
        const computerMove = moves[Math.floor(Math.random() * 3)];
        
        computerChoiceEl.textContent = getEmoji(computerMove);
        computerChoiceEl.classList.add('active', 'shake');
        
        determineWinner(playerMove, computerMove);
        updateScore();
    }, 500);
}

function determineWinner(playerMove, computerMove) {
    let result = '';
    
    if (computerMove === playerMove) {
        result = 'Tie!';
        ties++;
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win! 🎉';
        wins++;
    } else {
        result = 'You lose! 😢';
        losses++;
    }
    
    resultEl.textContent = result;
    resultEl.style.color = 
        result.includes('win') ? '#2ecc71' : 
        result.includes('lose') ? '#e74c3c' : '#3498db';
}

function getEmoji(move) {
    return move === 'rock' ? '✊' : move === 'paper' ? '✋' : '✌️';
}

function updateScore() {
    scoreEl.textContent = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}

function resetScore() {
    wins = 0;
    losses = 0;
    ties = 0;
    updateScore();
    resultEl.textContent = 'Choose your move!';
    resultEl.style.color = '#333';
    playerChoiceEl.classList.remove('active');
    computerChoiceEl.classList.remove('active');
}