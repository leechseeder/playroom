let playerScore = 0;
let computerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let choices = {
    "rock": 0,
    "paper": 1,
    "scissors": 2
}

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function playRound(playerChoice, computerChoice) {
    let result = ((playerChoice + 3 - computerChoice) % 3);
    if (result == 0) {
        document.getElementById("round-result").innerHTML = "It's a draw! choose again.";
    } else if (result == 1) {
        ++playerScore;
        document.getElementById("round-result").innerHTML = "You won this round.";
    } else {
        ++computerScore;
        document.getElementById("round-result").innerHTML = "You lost this round.";
    } 
    endRound();
}

function endRound() {
    if (playerScore > 2 || computerScore > 2){
        document.getElementById("score").innerHTML = "The final score is You: " + playerScore + " Computer: " + computerScore;
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else {
        document.getElementById("score").innerHTML = "The score is now You: " + playerScore + " Computer: " + computerScore;

    }
}


rock.addEventListener("click", () => {
    playRound(0, getComputerChoice());
})
paper.addEventListener("click", () => {
    playRound(1, getComputerChoice());
})
scissors.addEventListener("click", () => {
    playRound(2, getComputerChoice());
})

