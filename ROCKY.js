const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("COmputerDisplay");
const ResultDisplay = document.getElementById("ResultDisplay");
const ScoreDisplay = document.getElementById("ScoreDisplay");
const computerScoreDisplay = document.getElementById("ComputerScoreDisplay");
const PlayerScoreDisplay = document.getElementById("PlayerScoreDisplay");


let score = 0;
let scoreCOMP = 0;
function Playgame(playerChoice){
    const ComputerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === ComputerChoice){
        result = "It's a tie";
    }else{
        switch(playerChoice){
            case "rock":
                result = (ComputerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (ComputerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (ComputerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            default:
                break;
        } 
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    ComputerDisplay.textContent = `COMPUTER: ${ComputerChoice}`;
    ResultDisplay.textContent = `${result}`;

    ResultDisplay.classList.remove("WIN", "LOSE", "TIE");

    
    switch(result){
        case "YOU WIN":
            score += 1;
            // scoreCOMP -= 1;
            ResultDisplay.classList.add("WIN");
            PlayerScoreDisplay.textContent = score;
            // computerScoreDisplay.textContent = scoreCOMP;
            break;
        case "YOU LOSE":
            // score -= 1;
            scoreCOMP += 1;
            ResultDisplay.classList.add("LOSE");
            // PlayerScoreDisplay.textContent = score;
            computerScoreDisplay.textContent = scoreCOMP;
            break;
        case "It's a tie":
            ResultDisplay.classList.add("TIE");
            break;
    }


}