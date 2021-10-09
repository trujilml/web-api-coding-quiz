//figure out function for start quiz, various questions, score for correct answers and incorrect answers + 
//loss of game time, localStorage for saved score, and demo of leaderboard at end of site. all followed by the required timer.
//and play again button for game
//game timer only lasts 100 seconds, incorrect answers recieve a loss of 10 seconds for the user
//100000 milliseconds for 100 seconds - timer, timeleft

const startButton = document.getElementById("start");
const backButton = document.getElementById("back");
const submitButton = document.getElementById("submit");
const clearScoreButton = document.getElementById("clear");


var timeLeft = 100;

var counter = setInterval(timer, 1000); //1000 milliseconds allow for timeLeft to run its respective 100 seconds

function timer() {
    timeLeft = timeLeft-1;
    if (timeLeft <= 0)
     {
        clearInterval(counter);
        return;
    }
 document.getElementById("timer").innerHTML=timeLeft + " seconds";
{
    if (timeLeft === 0) {
        alert("GAME OVER!")
    }
}
}

function wrongTimer () {
    timeLeft = timeLeft-10;
}

//should come from questionbase . js file
function getNewQuestions(); (
    document.querySelector(questions)
);




// return totalScore();
// // or called finalScore ??? 

startButton.onclick = startQuiz;

submitButton.onclick = saveHighscore; 

console.log(startQuiz());