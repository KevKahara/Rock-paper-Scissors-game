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

const playerInput = prompt("Enter a Choice!");
const computerChoice = Math.floor(Math.random() * 3);
const playerMove = getPlayerChoice();
const computerMove = getComputerChoice();
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {

    if(computerChoice === 1) {
        return 'rock';
    } else if(computerChoice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    if(playerInput === 'rock') {
        return 'rock';
    } else if(playerInput === 'paper') {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerInput, computerChoice) {

    if(playerInput === 'rock') {

        if(computerChoice === 'rock') {
            return 'It is a tie!';
        } 
        else if(computerChoice === 'paper') {
            computerScore++;
            return 'Computer wins this round!';
        } 
        else if(computerChoice === 'scissors') {
            playerScore++;
            return 'Player wins this round!';
        }

    }

    if(playerInput === 'paper') {

        if(computerChoice === 'rock') {
            playerScore++;
            return 'Player wins this round!';
        } 
        else if(computerChoice === 'paper') {
            return 'It is a tie!';
        } 
        else if(computerChoice === 'scissors') {
            computerScore++;
            return 'Computer wins this round!'
        }

    }

    if(playerInput === 'scissors') {

        if(computerChoice === 'rock') {
            computerScore++;
            return 'Computer wins this round!';
        } 
        else if(computerChoice === 'paper') {
            playerScore++;
            return 'Player wins this round!';
        } 
        else if(computerChoice === 'scissors') {
            return 'It is a tie!'
        }

    }

}

function playGame() {

    //Round 1
    const player1 = getPlayerChoice();
    const computer1 = getComputerChoice();
    console.log('Round 1: ' ,playRound(player1, computer1));

    //Round 2
    const player2 = getPlayerChoice();
    const computer2 = getComputerChoice();
    console.log('Round 1: ' ,playRound(player2, computer2));

    //Round 3
    const player3 = getPlayerChoice();
    const computer3 = getComputerChoice();
    console.log('Round 1: ' ,playRound(player3, computer3));

    //Round 4
    const player4 = getPlayerChoice();
    const computer4 = getComputerChoice();
    console.log('Round 1: ' ,playRound(player4, computer4));

    //Round 5
    const player5 = getPlayerChoice();
    const computer5 = getComputerChoice();
    console.log('Round 1: ' ,playRound(player5, computer5));

    if(computerScore > playerScore) {
        console.log("Woops😞!,You lost Wanna play again?");
    } else {
        console.log("Hooray🎉! You won!!!");
    }

}

playGame();
console.log('Player chooses: ',playerMove);
console.log('Computer chooses: ',computerMove);
console.log('Player score: ', playerScore);
console.log('Computer score: ', computerScore);
