let btnAddA = document.getElementById("incrementA");
let btnSubtractA = document.getElementById("decrementA");

let btnAddB = document.getElementById("incrementB");
let btnSubtractB = document.getElementById("decrementB");

let teamAVal = document.getElementById("teamAVal");
let teamBVal = document.getElementById("teamBVal");

let teamAScore = 0;
let teamAWinCount = document.getElementById("teamAWins");
let teamAWins = 0;

let teamBScore = 0;
let teamBWinCount = document.getElementById("teamBWins");
let teamBWIns = 0;

let teamARocket = document.getElementById("rocketA");
let teamAInitialHeight = 180;

let teamBRocket = document.getElementById("rocketB");
let teamBInitialHeight = 180;

let message = document.getElementById("message");

document.addEventListener("keypress", function(event) {
    if (event.key === 'w')
        increment('A');
    if (event.key === 's')
        decrement('B');
    if (event.key === 'o')
        increment('B');
    if (event.key === 'l')
        decrement('A');
})


function increment(code) {
    if (code === 'A') {
        teamAScore = teamAScore + 5;
        teamAVal.innerHTML = teamAScore;
        teamAInitialHeight = teamAInitialHeight + 5;
        teamARocket.style.bottom = `${teamAInitialHeight}px`;
        isFinished();
    }
    else {
        teamBScore = teamBScore + 5;
        teamBVal.innerHTML = teamBScore;
        teamBInitialHeight = teamBInitialHeight + 5;
        teamBRocket.style.bottom = `${teamBInitialHeight}px`;
        console.log("hey");
        isFinished();
    }
}

function decrement(code) {
    if (code === 'A') {
        teamAScore--;
        teamAVal.innerHTML = teamAScore;
        console.log('hello');
        teamAInitialHeight--;
        teamARocket.style.bottom = `${teamAInitialHeight}px`;
        isFinished();
    }
    else {
        teamBScore--;
        teamBVal.innerHTML = teamBScore;
        teamBInitialHeight--;
        teamBRocket.style.bottom = `${teamBInitialHeight}px`;
        isFinished();
    }
}

// function numberSpacing(code) {
//     if (code === 'A' && teamAScore >= 10) {
//         teamAVal.style.left = 255;
//         console.log("error");
//     }
//     if (code === 'A' && teamAScore >= 100) {
//         teamAVal.style.left = 245;
//     }
//     else {
//         if (teamBScore >= 10) {
//             teamBVal.style.right = 255;
//         }
//         if (teamBScore >= 100) {
//             teamBVal.style.right = 245;
//         }
//     }
// }

function isFinished() {
    if (teamAInitialHeight >= window.innerHeight) {
        message.innerHTML = `Congratulations Team A!!!`;
        teamAWins++;
        teamAWinCount.innerHTML = `Team A Wins: ${teamAWins}`
        resetGame();
    }
    if (teamBInitialHeight >= window.innerHeight) {
        console.log("bug");
        message.innerHTML = `Congratulations Team B!!!`;
        teamBWins++;
        teamBWinCount.innerHTML = `Team B Wins: ${teamBWins}`
        resetGame();
    }
}

function forceTriggerTeamAWin() {
    teamAInitialHeight = 670;
    teamARocket.style.bottom = 590;
    teamAVal.innerHTML = 590;

    isFinished();
}

function resetGame() {
    teamAScore = 0;
    teamBScore = 0;

    teamAVal.innerHTML = 0;
    teamBVal.innerHTML = 0;

    teamAInitialHeight = 180;
    teamBInitialHeight = 180;

    teamARocket.style.bottom = 180;
    teamBRocket.style.bottom = 180;

    teamAVal.style.left = 262;
    teamBVal.style.right = 265;
}