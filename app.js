/**
 * User makes a move ( One of 3 options i.e Rock || Paper || Scissors )
 * Computer makes a move ( One of 3 options i.e Rock || Paper || Scissors)
 * Winner for the round is displayed 
 * Five rounds are played
 * The one with the most wins in the 5 rounds is the Winner
 * Start over after the 5 rounds if you wish to play again
 */

/**
 *     WHAT IS NEEDED
 * 
 * User input choice of the 3 options - Modal input
 * Computer to make a choice of the 3 options randomly - Computer takes a random number and displays the string value of the option
 * We need a score board which is increased when either party wins
 * Implementation of the game logic for one time play (One round)
 * We need to play 5 times inorder to get the overall winner
 */

let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {

    const computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice === 1) {
        return 'rock';
    } else if(computerChoice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerInput, computerChoice) {

    let result = '';

    switch(playerInput) {
        case 'rock':
            switch(computerChoice) {
                case 'rock':
                    result= 'It\'s a tie!';
                    break;
                
                case 'paper':
                    result= 'Computer Wins';
                    computerScore++;
                    break;
                
                case 'scissors':
                    result = 'Player Wins';
                    playerScore++;
                    break;

            }
        break;

        case 'paper':
            switch(computerChoice) {
                case 'rock':
                    result = 'Player Wins!';
                    playerScore++;
                    break;
                
                case 'paper':
                    result = 'It\'s a Tie!';
                    break;
                
                case 'scissors':
                    result = 'Computer Wins!';
                    computerScore++;
                    break;
            }
        break;

        case 'scissors':
            switch(computerChoice) {
                case 'rock':
                    result = 'Computer Wins!';
                    computerScore++;
                    break;

                case 'paper':
                    result = 'Player Wins!';
                    playerScore++;
                    break;

                case 'scissors':
                    result = 'It\'s a Tie';
                    break;
            }
        break;
    }

    return result;
}

function disableGameButton() {
    buttons.forEach((button) => button.disabled = true);
}

function checkGameWinner() {
    if(playerScore === 5) {
        scoreBoard.textContent = 'Yaayy! You won Congrats🏆';
        disableGameButton();
    }
    if(computerScore === 5) {
        scoreBoard.textContent = 'Sorry😢! You lost.'
        disableGameButton();
    }
}


const buttons = document.querySelectorAll('button');
const resetBtn = document.getElementById('reset-btn');
const playerDisplay = document.getElementById('player-choice');
const computerDisplay = document.getElementById('computer-choice');
const outcomeDisplay = document.getElementById('outcome-screen');
const scoreBoard = document.getElementById('score-board');

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        const playerChoice = button.id;
        const computerMove = getComputerChoice();
        const outcome = playRound(playerChoice, computerMove);

        playerDisplay.textContent = `Player Chose: ${playerChoice}`;
        computerDisplay.textContent = `Computer Chose: ${computerMove}`;
        outcomeDisplay.textContent = outcome;
        scoreBoard.textContent = `You: ${playerScore} Computer: ${computerScore}`;

        checkGameWinner();

    });
});
