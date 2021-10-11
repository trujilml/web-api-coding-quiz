// pages purpose is to house functions that keep track of the questions correct score and incorrect score that penalizes users by taking time off the quiz
//house question loop of questions and continute on the next one
// may be housed with script js if applicable
var totalScore = 0;
var correctAnswer = 20;
var highestScore = 200;

//total score is alltogether amount added by the multiple functions

//10 questions total in JavaScript quiz
//correct answer scores 20 points, all correct equals 200 points as high score maximum 
//incorrect answer loses 10 seconds from time, timer equals to 100 seconds maximum, if all answers are incorrect - results to timer being at 0 sec therefore bringing quiz to an end for the user
//0 - 200 points for the questions
//0 - 100 seconds for the timer 

//should come from questionbase . js file
function getNewQuestions(){

    for (var i = 0; i < questions.length; i++) {
        getNewQuestions.textContent = questions;
        answer = questions.choices;
        answer = saveAnswer;
    }

};


var score = function() {
    if(this.getNewQuestions().questions(answer)) {
        correctAnswer.innerHTML = "Correct!";
    totalScore += correctAnswer;
}   else if (!this.getNewQuestions().questions(answer)) {
    correctAnswer.innerHTML = "Incorrect!";
    timeLeft = timeLeft-wrongAnswerTime;
}
};

saveHighscore.addEventListener("click", function() {
    var localQuizStorage = "quizscore";
    var userInitials = "";
    var value = []; 

    userInitals = localQuizStorage + highestScore.value;
    value = [userInitials, highestScore]

    if (!localStorage.length) {
    localStorage.setItem("quiz", "quiz");
    }
});



function clearHighscores() {};


document.getElementById("submit").onClick = saveHighscore;

document.getElementById("clear").onClick = clearHighscores;
