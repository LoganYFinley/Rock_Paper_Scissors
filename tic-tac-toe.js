// rock-paper-scissors game to be played in browser
// this file gets imported into html file

// gets a random move for the computer player
function computerPlay() {
    var arr = ["rock", "paper", "scissors"];
    var el = arr[Math.floor(Math.random() * arr.length)]
    return el
}

// sets each players score to 0
player_count = 0
computer_count = 0

// assigns the computers move
// gets the user for a move from button input
// assigns a winner based on user and computer moves
// displays scores and moves
function round() {
    computerSelection = computerPlay()
    playerSelection = this.id
    if (computerSelection === playerSelection) {
        result.textContent = `Tie! Player score ${player_count}. Computer score ${computer_count}`
        div.appendChild(result)
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        player_count++
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}. Player score ${player_count}. Computer score ${computer_count}`
        div.appendChild(result)
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        player_count++
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}. Player score ${player_count}. Computer score ${computer_count}`
        div.appendChild(result)
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        player_count++
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}. Player score ${player_count}. Computer score ${computer_count}`
        div.appendChild(result)
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computer_count++
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}. Player score ${player_count}. Computer score ${computer_count}`
        div.appendChild(result)
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computer_count++
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}. Player score ${player_count}. Computer score ${computer_count}`
        div.appendChild(result)
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computer_count++
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}. Player score ${player_count}. Computer score ${computer_count}`
        div.appendChild(result)
    }
    // assigns game winner if score limit is reached
    // displays win/loss and displays scores
    if (player_count > 4 || computer_count > 4) {
        if (player_count > computer_count) {
            result.textContent = `You have won the match! Player score ${player_count}. Computer score ${computer_count}`
            div.appendChild(result)
        } else if (player_count < computer_count) {
            result.textContent = `You have lost the match! Player score ${player_count}. Computer score ${computer_count}`
            div.appendChild(result)
        } else {
            result.textContent = `The match is a tie! Player score ${player_count}. Computer score ${computer_count}`
            div.appendChild(result)
        }
    }
}

// assign div constant
const div = document.querySelector(".div")


// sets a click of a button to initiate a round of gameplay
document.getElementById('rock').onclick = round;
document.getElementById('paper').onclick = round;
document.getElementById('scissors').onclick = round;


// creates result section for displaying info
const result = document.createElement("result")
result.classList.add("result")
result.textContent = "Results"
div.appendChild(result)
