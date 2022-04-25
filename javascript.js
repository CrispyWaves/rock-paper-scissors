let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;

console.log("Welcome to Rock, Paper, Scissors");

//pick a random option for the computer and return as string
function computerPlay() {
    let numberMove, textMove;

    numberMove = Math.floor (Math.random()*3)

    if (numberMove == 0){
        textMove = "rock";
    } else if (numberMove == 1){
        textMove = "paper";
    } else {
        textMove = "scissors"
    }
    return textMove;
}

//Simulate one round of rps
//Accepts player pick and computer pick, evaluates who wins
//returns string saying who won
function playRound (player, computer){
    console.log("You chose "+player+" and the computer chose "+computer);
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player == "rock"){
        if (computer == "rock"){
            return "Tie round!";
        } else if (computer == "paper"){
            computerWins++;
            return "You lose. Paper beats rock!";
        } else {
            playerWins++;
            return "You win. Rock beats scissors!";
        }
    } else if (player == "paper"){
        if (computer == "rock"){
            playerWins++;
            return "You win. Paper beats rock!";
        } else if (computer == "paper"){
            return "Tie round!";
        } else {
            computerWins++;
            return "You lose. Scissors beats paper!";
        }
    } else {
        if (computer == "rock"){
            computerWins++;
            return "You lose. Rock beats scissors!";
        } else if (computer == "paper"){
            playerWins++;
            return "You win. Scissors beats paper!";
        } else {
            return "Tie round!";
        }
    }
}

function determineWins(playerScore,computerScore){
    console.log("Player won "+playerScore+" rounds and computer won "+computerScore+" round");
    if(playerScore>computerScore){
        console.log("Player wins!");
    } else if(playerScore<computerScore){
        console.log("Computer wins!");
    } else {
        console.log("Tie game!");
    }
}

//runs five games of rps
function game(){
    
    for (let i = 1; i <= 5; i++){
        //determine moves of both players
        computerSelection = computerPlay();
        playerSelection = prompt("What is your move?");
        console.log("Round "+i+". "+playRound(playerSelection,computerSelection));
    }
    determineWins(playerWins,computerWins);
    return;
}

//Run a five round game of rps
game();