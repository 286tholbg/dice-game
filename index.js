// Create variables for the game state

let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// create variables to store references to the necessary DOM nodes

const message = document.querySelector('#message')

// player score board
const player1ScoreBoard = document.getElementById('player1Scoreboard');
const player2ScoreBoard = document.getElementById('player2Scoreboard');

// player dice
const player1Dice = document.querySelector('#player1Dice');
const player21Dice = document.querySelector('#player2Dice');

// btns
const rollBtn = document.querySelector('#rollBtn');
const resetBtn = document.querySelector('#resetBtn');

function showDisplayBtn() {
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'block';
}

function resetGame() {
    player1Turn = true;
    message.textContent = 'Player 1 Turn'
    player1Score = 0;
    player2Score = 0;
    player1ScoreBoard.textContent = ""
    player2ScoreBoard.textContent = ""
    player1ScoreBoard.textContent = player1Score;
    player2ScoreBoard.textContent = player1Score;
    player1Dice.innerHTML = '-'
    player2Dice.innerHTML = '-'
    player1Dice.classList.add('active');
    player2Dice.classList.remove('active');
    rollBtn.style.display = 'block';
    resetBtn.style.display = 'none';
}

rollBtn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if(player1Turn){
        message.textContent = 'Player 1 Turn'
        player1Dice.innerHTML = randomNumber
        player1Score += randomNumber;
        player1ScoreBoard.textContent = player1Score;
        player1Dice.classList.remove('active');
        player2Dice.classList.add('active');
    } else {
        message.textContent = 'Player 2 Turn'
        player2Dice.innerHTML = randomNumber
        player2Score += randomNumber;
        player2ScoreBoard.textContent = player2Score;
        player2Dice.classList.remove('active');
        player1Dice.classList.add('active');
    }
    
    if(player1Score >= 20){
        message.textContent = "Player 1 has won! 🥳";
        showDisplayBtn();
    } else if (player2Score >= 20){
        message.textContent = "Player 2 has won! 🥳";
        showDisplayBtn()
    } 
    player1Turn = !player1Turn;
})

resetBtn.addEventListener('click', resetGame);