console.log ("Rock, Paper, Scissors Game");


let playerScore = 1;
let computerScore = 1;


// Playerselection 
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

function playerSelection () {
rock.addEventListener('click', () => {
   (playRound("rock", getComputerChoice()));
   console.log (playerScore, computerScore);
   winner();
});
paper.addEventListener('click', () =>  {
   (playRound("paper", getComputerChoice()));
   console.log (playerScore, computerScore);
   winner();
} );
scissors.addEventListener('click', () => {
    (playRound("scissors", getComputerChoice()));
    console.log (playerScore, computerScore);
    winner();

});
}
// Score winner 


const reload = document.querySelector(".reload")


function winner () {
if (playerScore === 6 ) {
    console.log ("You win, NICE!!!");
    openPopup();
    let elSub = document.getElementById('winnerOTtheGame');
    elSub.textContent = "YOU WON!! NICE.";
    elSub;
    reload.addEventListener('click', () => {
        location.reload(true);
    });

}
if (computerScore === 6) {
    console.log ("Computer wins! NOOOOOOOOO ");
    openPopup();
    let elSub = document.getElementById('winnerOTtheGame');
    elSub.textContent = "You Lost, next time better!";
    elSub;
    reload.addEventListener('click', () => {
        location.reload(true);
    });
}
}



function openPopup (){
    let popup = document.getElementById ('popup');
        popup.classList.add("open-popup");
        console.log ("test");
}


// Computer selection 
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

let playerChooses = playerSelection();
let computerChooses = getComputerChoice;

// compare results 
function playRound(playerChooses, computerChooses) { 

    if ((playerChooses === computerChooses)) {
        console.log ("its a tie");
        let elSub = document.getElementById('winner');
        elSub.textContent = "It's a tie!";
        elSub;
        }
    else if (((playerChooses === "paper") && computerChooses === "scissors"  )) {
       console.log ("Computer wins");
       let elSub = document.getElementById('winner');
       elSub.textContent = "The winner is the computer";
       elSub;
       let elScore = document.getElementById('computerscore');
       elScore.textContent = computerScore++;
    }
    else if (((playerChooses === "rock") && computerChooses === "paper"  )) {
        console.log ("Computer wins1");
        let elSub = document.getElementById('winner');
       elSub.textContent = "The winner is the computer";
       elSub;
       let elScore = document.getElementById('computerscore');
       elScore.textContent = computerScore++;
    }
    else if (((playerChooses === "scissors") && computerChooses === "rock"  )) {
       console.log ("Computer wins 2");
       let elSub = document.getElementById('winner');
       elSub.textContent = "The winner is the computer";
       elSub;
       let elScore = document.getElementById('computerscore');
       elScore.textContent = computerScore++;
    }
    else if  (((playerChooses === "scissors") && computerChooses === "paper"  )) {
        console.log ("Player wins");
        let elSub = document.getElementById('winner');
    elSub.textContent = "The winner is the player";
    elSub;
    let elScore = document.getElementById('playerscore');
    elScore.textContent = playerScore++;
}
else if  (((playerChooses === "paper") && computerChooses === "rock"  )) {
    console.log ("Player wins1");
    let elSub = document.getElementById('winner');
    elSub.textContent = "The winner is the player";
    elSub;
    let elScore = document.getElementById('playerscore');
    elScore.textContent = playerScore++;
}
else if  (((playerChooses === "rock") && computerChooses === "scissors"  )) {
    console.log ("Player wins1");
    let elSub = document.getElementById('winner');
    elSub.textContent = "The winner is the player";
    elSub;
    let elScore = document.getElementById('playerscore');
    elScore.textContent = playerScore++;
}
}


