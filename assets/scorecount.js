// pages purpose is to house functions that keep track of the questions correct score and incorrect score that penalizes users by taking time off the quiz
//house question loop of questions and continute on the next one
// may be housed with script js if applicable
var totalScore = 0;
var highestScore = 200;

//total score is alltogether amount added by the multiple functions

//10 questions total in JavaScript quiz
//correct answer scores 20 points, all correct equals 200 points as high score maximum 
//incorrect answer loses 10 seconds from time, timer equals to 100 seconds maximum, if all answers are incorrect - results to timer being at 0 sec therefore bringing quiz to an end for the user
//0 - 200 points for the questions
//0 - 100 seconds for the timer 

var score = function() {
    if(this.getNewQuestions().rightAnswer(answer)) {
    rightAnswer.innerHTML = "Correct!";
    totalScore += 20;
}   else if (!this.getNewQuestions().rightAnswer(answer)) {
    rightAnswer.innerHTML = "Incorrect!";
    wrongTimer();
}
getNewQuestions();
}

function saveHighscore() {};


function clearHighscores() {};

document.getElementById("clear").onclick = clearHighscores;

// var questions 