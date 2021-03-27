// tic-tac-toe game to be played in browser console
// this file gets imported into to html file

// gets a random move for the computer player
function computerPlay() {
    var arr = ["rock", "paper", "scissors"];
    var el = arr[Math.floor(Math.random() * arr.length)]
    return el
}

// assigns the computers move
// prompts the user for a move
// assigns a winner based on user and computer moves
function round() {
    computerSelection = computerPlay()
    playerSelection = prompt("Enter either 'rock', 'paper', or 'scissors': ").toLowerCase()
    if (computerSelection === playerSelection) {
         console.log("It's a Tie!")
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "1"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "1"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "1"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "0"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "0"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "0"
    } 
}  

// main game logic
// 5 rounds player with most points wins, else tie
function game() {
    player_count = 0
    computer_count = 0
    for (i = 0; i < 5; i++) {
        result = round()
        if (result === "1") {
            player_count++
        } else if (result === "0") {
            computer_count++
        }
    } if (player_count > computer_count) {
        console.log("You have won the match!")
    } else if (player_count < computer_count) {
        console.log("You have lost the match!")
    } else {
        console.log("The match is a tie!")
    }
}

// calls game to be played
game()

