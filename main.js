console.log ("Rock, Paper, Scissors Game");

// Computer chooses randomly 

function getComputerChoice () {
     let randomNumb = Math.random() * 3;
     if (randomNumb < 1) {
        return randomNumb = "rock";
     }
     else if (randomNumb < 2) {
        return randomNumb = "paper";
     }
     else {
        return randomNumb = "scissors";
     }

}

function selectPlayer (){ // Prompt choice for the player
    let playerSelection = prompt("Choose: Rock, Paper, Scissors ");
    return playerSelection.toLowerCase();
    }

 const playerSelection = selectPlayer;
 const computerSelection = getComputerChoice();  
 
let computerScore = 0;
 let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === computerSelection)) {
        return "It's a tie";
    }
    else if (((playerSelection === "paper") && computerSelection === "scissors"  )) {
        return "Player chooses: paper, computer chooses scissors! COMPUTER WINS" + computerScore++;
    }
    else if (((playerSelection === "rock") && computerSelection === "paper"  )) {
        return "Player chooses: rock, computer chooses Paper! COMPUTER WINS" + computerScore++;
    }
    else if (((playerSelection === "scissors") && computerSelection === "rock"  )) {
        return  "Player chooses: scissors, computer chooses rock! COMPUTER WINS" + computerScore++;
    }
    else if  (((playerSelection === "scissors") && computerSelection === "paper"  )) {
        return  "Player chooses: scissors, computer chooses paper! PLAYER WINS" + playerScore++; 
}
else if  (((playerSelection === "paper") && computerSelection === "rock"  )) {
    return  "Player chooses: paper, computer chooses rock! PLAYER WINS" + playerScore++; 
}
else if  (((playerSelection === "rock") && computerSelection === "scissors"  )) {
    return  "Player chooses: rock, computer chooses scissors! PLAYER WINS" + playerScore++; 
}
}

function score() { for (let i = 0; i < 5; i++) {  
   console.log (playRound(selectPlayer(), getComputerChoice()));
}
if (playerScore > computerScore) {
    return ("Player wins!" + " " + "player score is:" + " " + playerScore + " " + "computer score:" + " " + computerScore);
}
else if (playerScore < computerScore) {
    return ("Computer wins!" + " " + "player score is:" + " " + playerScore + " " + "computer score:" + " " + computerScore);
}
else {
    return ("It's a tie!");
}


}

console.log (score());
