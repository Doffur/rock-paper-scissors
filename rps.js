console.log("Hello World");
function playRound(playerSelection,computerSelection){
    let pS = playerSelection;
    let cS = computerSelection;
    console.log("You: "+ pS);
    console.log("Computer: "+ cS);
    switch(pS){
        case "rock":
            if(cS == "scissors"){
                return ["You Win!! Rock Beats Scissors","player"];
            }else if(cS == "paper"){
                return ["Computer Wins! Paper Beats Rock","computer"] ;
            }else{
                return ["Draw!","both"];
            }
        case "scissors":
            if(cS == "scissors"){
                return ["Draw!","both"];
            }else if(cS == "paper"){
                return ["You Win!! Scissors Beats Paper","player"];
            }else{
                return ["Computer Wins! Rock Beats Scissors","computer"];
            }
        case "paper":
            if(cS == "scissors"){
                return ["Computer Wins! Scissors Beats Paper","computer"];
            }else if(cS == "paper"){
                return ["Draw!","both"];
            }else{
                return ["You Win!! Paper Beats Rock.","player"];
            }                
        default:
            console.log("Something's Wrong");    
    }


}
function computerPlay(){
    let rand = Math.floor(Math.random()* 3)+1;
    switch(rand){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            console.log("Something\'s wrong");
            break;
    }

}
function playerSelect(){
    let ask = prompt("Rock,Paper,Scissors:");
    ask = ask.toLowerCase();
     switch(ask){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        }
}

function game(){
   let player = 0;
   let computer = 0;
   for(let round = 1;round <= 5;round++){
    let playerSelection = playerSelect();
    let computerSelection = computerPlay();
    let score = playRound(playerSelection,computerSelection);
    console.log(score[0]);
    if(score[1] === "player"){
        console.log("Player gets a point.");
        player += 1;
     }else if(score[1] === "computer"){
        console.log("Computer gets a point.");
        computer += 1;
     }else{
        console.log("Both players gets a point.");
        player += 1;
        computer += 1;
     }
    }
    if(player > computer){
        console.log(`Winner! You with ${player} points against computer with ${computer} points.`);
    }
    else if(player < computer){
        console.log(`Winner! Computer with ${computer} points against you with ${player} points.`);
    }else{
        console.log(`Draw with the ${player} points each`);
    }

}



game();

