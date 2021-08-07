console.log("Hello World");
function playRound(playerSelection,computerSelection){
    let pS = playerSelection;
    let cS = computerSelection;
    console.log("You: "+ pS);
    console.log("Computer: "+ cS);
    switch(pS){
        case "rock":
            if(cS == "scissors"){
                return "You Win!! Rock Beats Scissors";
            }else if(cS == "paper"){
                return "Computer Wins! Paper Beats Rock" ;
            }else{
                return "Draw!";
            }
        case "scissors":
            if(cS == "scissors"){
                return "Draw! ";
            }else if(cS == "paper"){
                return "You Win!! Scissors Beats Paper";
            }else{
                return "Computer Wins! Rock Beats Scissors" ;
            }
        case "paper":
            if(cS == "scissors"){
                return "Computer Wins! Scissors Beats Paper";
            }else if(cS == "paper"){
                return "Draw!";
            }else{
                return "You Win!! Paper Beats Rock.";
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
        default:
            alert("Again!Only include one of the choices. Dont input number and spaces Also.");
            return playerSelect();
        }
}

function game(){
   for(let round = 1;round <= 5;round++){
    let playerSelection = playerSelect();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
   }
}

game();

