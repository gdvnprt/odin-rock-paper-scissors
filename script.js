function getComputerChoice() {
    // Create a variable computerSelection
    // Choose a random integer 1, 2, or 3
    const computerSelection = Math.floor(Math.random() * 3 + 1);
    if (computerSelection === 1) {
        return "rock"; // if 1, make computerSelection "rock"
    } else if (computerSelection === 2) {
        return "paper"; // if 2, make computerSelection "paper"
    } else {
        return "scissors"; // if 3, make computerSelection "scissors"
    }
}



function playRound(playerSelection, computerSelection) {
    // make playerSelection all lower case
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        return "It's a draw!";// if playerSelection = "rock" and computerSelection = "rock", return "It's a draw!"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock"; // if playerSelection = "rock" and computerSelection = "paper", return "You lose! Paper beats Rock"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";  // if playerSelection = "rock" and computerSelection = "scissors", return "You win! Rock beats Scissors"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";// if playerSelection = "paper" and computerSelection = "rock", return "You win! Paper beats Rock"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        return "It's a draw!";// if playerSelection = "paper" and computerSelection = "paper", return "It's a draw!"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper";// if playerSelection = "paper" and computerSelection = "scissors", return "You lose! Scissors beats Paper"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors";// if playerSelection = "scissors" and computerSelection = "rock", return "You lose! Rock beats Scissors"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You win! Paper beats Rock";// if playerSelection = "scissors" and computerSelection = "paper", return "You win! Scissors beats Paper"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        return "It's a draw!"; // if playerSelection = "scissors" and computerSelection = "scissors", return "It's a draw!"
    } else {
        return "invalid";
    }    

}

function game() {
    // create a constant computerSelection and make it getComputerChoice
    // prompt the player for "rock", "paper", or "scissors"
    // make that input playerSelection
    // if all lower case of player isn't "rock", "paper", or "scissors" then return "Please choose "rock", "paper", or "scissors" and prompt the player again.
    // if playerSelection is "rock", "paper", or "scissors" play a round
    // repeat this a total of 5 times
}
