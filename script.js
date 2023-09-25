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
    let winCounter = 5; // create a variable winCounter = 5
    for (let i = 0; i < 5; i++) { // repeat each round a total of 5 times
        const playerSelection = window.prompt("Choose: rock, paper, or scissors."); // prompt the player for "rock", "paper", or "scissors"
        const computerSelection = getComputerChoice(); // create a constant computerSelection and make it getComputerChoice
        // if all lower case of player isn't "rock", "paper", or "scissors" then return "Please choose "rock", "paper", or "scissors" and prompt the player again.
        let roundResult = playRound(playerSelection, computerSelection); // if playerSelection is "rock", "paper", or "scissors" play a round
        console.log(roundResult);
        if (roundResult.slice(0, 8) === "You win!") {
            winCounter++;// if player wins, add 1 to WinCounter
        } else if (roundResult.slice(0, 9) === "You lose!") {
            winCounter--;// if player loses, subtract 1 from winCounter
        } else {
            winCounter + 0;// if it's a draw, add 0 to winCounter
        }
    }
    if (winCounter > 5) {
        return "You win the game!"; // if winCounter > 0, return "You win the game!"
    } else if (winCounter < 5) {
        return "You lose the game!" // if winCounter < 0, return "You lose the game!"
    } else {
        return "The game is a draw!" // if winCounter = 0, return "The game is a draw!"
    }
}
