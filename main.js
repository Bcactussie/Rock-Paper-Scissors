console.log ("Hello World");

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

console.log (selectPlayer());
console.log( getComputerChoice())