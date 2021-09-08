const start = document.querySelector('#proceed');
const main = document.querySelector('#mainCon');
let computer = document.getElementById('computerpts');
let player = document.getElementById('playerpts');
let computerP = document.getElementById('Cpick');
let playerP = document.getElementById('Ppick');
let annouce = document.getElementById('winner');

function playRound(playerSelection,computerSelection){
    let pS = playerSelection;
    let cS = computerSelection;
    computerP.textContent = cS;
    playerP.textContent = pS;
    switch(pS){
        case "rock":
            if(cS == "scissors"){
                return "player";
            }else if(cS == "paper"){
                return "computer";
            }else{
                return "both";
            }
        case "scissors":
            if(cS == "rock"){
                return "computer";
            }else if(cS == "paper"){
                return "player";
            }else{
                return "both";
            }
        case "paper":
            if(cS == "scissors"){
                return "computer";
            }else if(cS == "rock"){
                return "player";
            }else{
                return "both";
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
function playerSelect(the_id){
    var playerSel = the_id;
    playerSel = playerSel.toLowerCase();
    return playerSel;
}

function game(e){
  
    let point = 1;
    let result = document.querySelector('.result');
    let text = document.createElement('p');
    let computerPts = parseInt(computer.firstChild.nodeValue);
    let playerPts = parseInt(player.firstChild.nodeValue);

    let playerSelection = playerSelect(e.target.id);
    let computerSelection = computerPlay(); 
    let score = playRound(playerSelection,computerSelection);


    if(computerPts < 5 && playerPts < 5){
        if(result.hasChildNodes()){
            result.innerHTML = '';
        }
        console.log(score);
        if(score === "player"){
            text.textContent  = "You Win!! you get a point";
            result.appendChild(text);
            console.log("Player gets a point.");
            player.textContent = playerPts + point;
         }else if(score === "computer"){
            text.textContent  = "Computer Wins!! Computer you get a point";
            result.appendChild(text);
            console.log("Computer gets a point.");
            computer.textContent = computerPts + point;
         }else{
            text.textContent  = "Draw!!! each players gets a point.";
            result.appendChild(text);
            console.log("Draw!!! players gets a point.");
            player.textContent = playerPts + point;
            computer.textContent = computerPts + point;
         }
    }else{
        main.style.display = "none";
        annouce.style.display  = "block";
        if(playerPts > computerPts){
            annouce.textContent = `Winner! You with ${playerPts} points against computer with ${computerPts} points.`;
        }
        else if(playerPts < computerPts){
            annouce.textContent = `Winner! Computer with ${computerPts} points against you with ${playerPts} points.`;
        }else{
            annouce.textContent = `Draw with the ${playerPts} points each`;
        }
    }
}

function showHide(){
    main.style.display = "block";
    start.style.display = "none";
}


var g = document.querySelectorAll(".select");
g.forEach(item => item.addEventListener('click',game));