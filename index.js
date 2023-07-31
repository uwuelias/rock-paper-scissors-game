let pScore = 0;
let aScore = 0;
const pChoices = document.querySelectorAll("button");


function aiChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        return "rock";
    }
    else if (num == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}



function result(event) {
    const aHand = aiChoice();
    const pHand = event;

    document.getElementById("computer-choice").innerHTML = aHand;
    document.getElementById("player-choice").innerHTML = pHand;

    if((aHand === ("rock") && pHand === ("scissors")) || (aHand === ("paper") && pHand === ("rock")) || (aHand === ("scissors") && pHand === ("paper"))) {
        document.getElementById("result").innerHTML = "AI Wins";
        incrementAIScore();
    } else if (aHand === (pHand)) {
        document.getElementById("result").innerHTML = "Tie";
    } else {
        document.getElementById("result").innerHTML = "Player wins";
        incrementPlayerScore();

    }
}

function incrementPlayerScore() {
    pScore++;
    document.getElementById("playerScore").innerHTML = pScore;
}

function incrementAIScore() {
    aScore++;
    document.getElementById("aiScore").innerHTML = aScore;
}

function resetScore() {
    pScore = 0;
    aScore = 0;
    document.getElementById("aiScore").innerHTML = aScore;
    document.getElementById("playerScore").innerHTML = pScore;
}