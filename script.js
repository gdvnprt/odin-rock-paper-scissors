function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3 + 1);
    if (computerSelection === 1) {
        return "rock";
    } else if (computerSelection === 2) {
        return "paper";
    } else {
        return "scissors"; 
    }
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        return "It's a draw!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        return "It's a draw!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        return "It's a draw!"; 
    } else {
        return "invalid";
    }    

}

/* function game() {
    let winCounter = 5;
    for (let i = 0; i < 5; i++) { 
        const playerSelection = window.prompt("Choose: rock, paper, or scissors."); 
        const computerSelection = getComputerChoice(); 
        // if all lower case of player isn't "rock", "paper", or "scissors" then return "Please choose "rock", "paper", or "scissors" and prompt the player again.
        let roundResult = playRound(playerSelection, computerSelection); // if playerSelection is "rock", "paper", or "scissors" play a round
        console.log(roundResult);
        if (roundResult.slice(0, 8) === "You win!") {
            winCounter++;
        } else if (roundResult.slice(0, 9) === "You lose!") {
            winCounter--;
        } else {
            winCounter + 0;
        }
    }
    if (winCounter > 5) {
        return "You win the game!"; 
    } else if (winCounter < 5) {
        return "You lose the game!";
    } else {
        return "The game is a draw!";
    }
} */
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    let result = playRound("rock", computerSelection);
    console.log(result);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    let result = playRound("paper", computerSelection);
    console.log(result);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    let result = playRound("scissors", computerSelection);
    console.log(result);
});