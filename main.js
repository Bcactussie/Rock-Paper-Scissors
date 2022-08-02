console.log ("Rock, Paper, Scissors Game");

function getComputerChoice() { 
    let randomNumb = Math.random() * 3; // Random number between 0 - 3
     // return value of the random number
    
    if (randomNumb < 1) {
        return "rock"
    }
    else if (randomNumb < 2) {
        return "scissors"
    }
    else if (randomNumb < 3) {
        return "paper"
    }
    return randomNumb;
}

function selectPlayer (){ // Prompt choice for the player
let playerSelection = prompt("Choose: Rock, Paper, Scissors ");
return playerSelection.toLowerCase(); // lowercase the return value 
}


let playerChoice = selectPlayer();
let computerChoice = getComputerChoice();

// Tells you who won the game 
function playGround (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "its a tie!";
    }
    else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
        return "Computer wins";
    }
    else if ((playerChoice === "rock") && (computerChoice === "paper")) {
        return "Computer wins";
    }    
    else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
        return "Computer wins";
    }    
    else {
        return "Player wins!";
    }
}

console.log ("Player choose:"+ " " + playerChoice);
console.log ("Computer choose:" + " " + computerChoice);

console.log (playGround(playerChoice, computerChoice));






// function with 2 parameters that compares the choises of the player and computer in order to see who wins. 
/* function playGround (selectPlayer, getComputerChoice) { 
    if (selectPlayer === getComputerChoice) {
        return true;
    }
    else {
        return false;
    }
}


console.log (playGround());



console.log (selectPlayer());
console.log( getComputerChoice()); */ 
