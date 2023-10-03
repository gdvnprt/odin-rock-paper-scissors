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
const roundResult = document.querySelector(".roundResult");
const whoWonRound = document.createElement('p');

const playerWins = document.querySelector(".playerWins");
const playerWinCount = document.createElement('p');
let playerWinNumber = 0
playerWinCount.textContent = playerWinNumber;
playerWins.appendChild(playerWinCount);

const computerWins = document.querySelector(".computerWins");
const computerWinCount = document.createElement('p');
let computerWinNumber = 0
computerWinCount.textContent = computerWinNumber;
computerWins.appendChild(computerWinCount);

function youWin() {
    if (confirm("You win!\nPlay again?")) {
        playerWinNumber -= 5;
        playerWinCount.textContent = playerWinNumber;
        playerWins.appendChild(playerWinCount);
        computerWinNumber -= computerWinNumber;
        computerWinCount.textContent = computerWinNumber;
        computerWins.appendChild(computerWinCount);
        whoWonRound.textContent = "";
        roundResult.appendChild(whoWonRound);
    };
};

function youLose() {
    if (confirm("You lose!\nPlay again?")) {
        playerWinNumber -= playerWinNumber;
        playerWinCount.textContent = playerWinNumber;
        playerWins.appendChild(playerWinCount);
        computerWinNumber -= 5;
        computerWinCount.textContent = computerWinNumber;
        computerWins.appendChild(computerWinCount);
        whoWonRound.textContent = "";
        roundResult.appendChild(whoWonRound);
    };
};

function reportWin(result) {
    if (result.slice(0, 8) === "You win!") {
        playerWinNumber += 1;
        playerWinCount.textContent = playerWinNumber;
        playerWins.appendChild(playerWinCount);
        if (playerWinNumber === 5) {
            youWin();
        };
    } else if (result.slice(0, 9) === "You lose!") {
        computerWinNumber += 1;
        computerWinCount.textContent = computerWinNumber;
        computerWins.appendChild(computerWinCount);
        if (computerWinNumber === 5) {
            youLose();
        };
    };
};

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    let result = playRound("rock", computerSelection);
    whoWonRound.textContent = result;
    roundResult.appendChild(whoWonRound);
    reportWin(result);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    let result = playRound("paper", computerSelection);
    whoWonRound.textContent = result;
    roundResult.appendChild(whoWonRound);
    reportWin(result);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    let result = playRound("scissors", computerSelection);
    whoWonRound.textContent = result;
    roundResult.appendChild(whoWonRound);
    reportWin(result);
});

