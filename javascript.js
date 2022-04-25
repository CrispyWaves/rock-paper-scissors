let playerSelection;
let computerSelection;

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
            return "Tie game!";
        } else if (computer == "paper"){
            return "You lose. Paper beats rock!";
        } else {
            return "You win. Rock beats scissors!";
        }
    } else if (player == "paper"){
        if (computer == "rock"){
            return "You win. Paper beats rock!";
        } else if (computer == "paper"){
            return "Tie game!";
        } else {
            return "You lose. Scissors beats paper!";
        }
    } else {
        if (computer == "rock"){
            return "You lose. Rock beats scissors!";
        } else if (computer == "paper"){
            return "You win. Scissors beats paper!";
        } else {
            return "Tie game!";
        }
    }
}
//runs five games of rps
function game(){
    for (let i = 1; i <= 5; i++){
        //determine moves of both players
        computerSelection = computerPlay();
        playerSelection = "rock";
        console.log("Round "+i+". "+playRound(playerSelection,computerSelection));
    }
    return;
}

game();
//determine moves of both players
/* computerSelection = computerPlay();
playerSelection = "rock"; */

//play round of rps
// console.log(playRound(playerSelection, computerSelection));