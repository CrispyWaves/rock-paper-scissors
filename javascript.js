let computerMove;

console.log("Welcome to Rock, Paper, Scissors");

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

computerMove = computerPlay();

console.log(computerMove);