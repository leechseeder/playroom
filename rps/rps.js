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
        return 0; //draw
    } else if (result == 1) {
        return 1; //win
    } else {
        return 2; //loss
    } 
}

function rpsParse(choice){
    return choices[choice.toLowerCase(choice)];
}

function play() {
    let playerScore = 0;
    let computerScore = 0;
    let currentResult = 0;
    let playerChoice;



    while (playerScore < 3 && computerScore < 3) {
        playerChoice = rpsParse(prompt("Please make a selection:"));
        currentResult = playRound(playerChoice, getComputerChoice());
        switch (currentResult) {
            case 0:
                console.log("Drawn Round, pleas continue.");
                break;
            case 1:
                console.log("You won this round.");
                ++playerScore;
                break;
            case 2:
                console.log("Computer won this round.")
                ++computerScore
                break;
        }

    }

    console.log("The final score was You: " + playerScore + " Computer: " + computerScore)

    

}