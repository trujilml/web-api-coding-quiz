//figure out function for start quiz, various questions, score for correct answers and incorrect answers + 
//loss of game time, localStorage for saved score, and demo of leaderboard at end of site. all followed by the required timer.
//and play again button for game
//game timer only lasts 100 seconds, incorrect answers recieve a loss of 10 seconds for the user
//100000 milliseconds for 100 seconds - timer, timeleft

//lists all questions choices and answers in a variable - 4 choices max, 1 answer only
//refer javascript questions from mod 3 and online sources highlighting javascript basics
//10 questions - correct answers earn 15 points, incorrect answers lose 10 seconds on the timer running in the quiz
//moved to script.js, switched to a const like last project

const startButton = document.getElementById("start");
const backButton = document.getElementById("back");
const submitButton = document.getElementById("submit");
const clearScoreButton = document.getElementById("clear");

const question = document.getElementById("questions");
const choices = document.getElementById("choices");

let getNewQuestions;


var questions = [
    {
    question: "Arrays are a special type of objects in JavaScript. What can they store exactly in them?",
    choices: ["Strings", "Booleans", "Other arrays", "All of the Above"],
    answer: "All of the Above"
    },

    {
    question: "How is a conditional statement in JavaScript declared?",
    choices: ["The for loop", "The var function statement", "The while loop", "The if else statement"],
    answer: "The if else statement"
    },

    {
    question: "What is 'null' exactly?",
    choices: ["Null represents the absence of a value.","Null is a variable representing what is within a function.", "Null represents the number 0.", "Null means nothing in JavaScript."],
    answer: "Null represents the absence of a value."
    },

    {
    question: "How do you declare a function?",
    choices: ["Function name()", "Class = Function()", "Method Function = ()", "var function = function()"],
    answer: "Function name()"
    },

    {
    question: "What is the object method in JavaScript?",
    choices: ["The object method houses various arrays for a function to use.", "The object method creates objects.", "The object method is an object with a function associated with the method.", "The object method involves an object that is inserted within a function."],
    answer: "The object method is an object with a function associated with the method.",
    },

    {
    question: "Which statements are true about functions in JavaScript?",
    choices: ["Functions must always have an identifier.", "Functions cannot be reused.", "None of the above.", "Functions cannot use outside variables in their own functions."],
    answer: "None of the above."
    },

    {
    question: "A variable not declared within a function but outside of a function is known as a...",
    choices: ["An undefined variable","A local variable", "A global variable", "A variable"],
    answer: "A global variable"
    },

    {
    question: "What does a comment look like in JavaScript?",
    choices: ["'This is a comment in JavaScript!'","<!--This a comment in JavaScript!-->", "//This is a comment in JavaScript!", "This is a comment in JavaScript!"],
    answer: "//This is a comment in JavaScript!"
    },

    {
    question: "What operator is used to assign a value to a variable?",
    choices: ["Nothing!","=", "?", "+="],
    answer: "="
    },

    {
    question: "Which boolean operator represents 'And'?",
    choices: ["&&", "||", "?!", "*"],
    answer: "&&"
    },

];

//timer displays time but does not currently function 
var timeLeft = 100;
var wrongAnswerTime = 10; 

function timer() {
    setInterval(function() { 
    timeLeft -= 10;
    }), 1000; //1000 milliseconds allow for timeLeft to run its respective 100 seconds
}
    function wrongTimer () {
        timeLeft = timeLeft-wrongAnswerTime;
        return;
    }

 document.getElementById("timer").innerHTML=timeLeft + " seconds";
{
    if (timeLeft === 0) {
        alert("GAME OVER!")
    }
};



startButton.addEventListener = ("click", startQuiz);
startButton.addEventListener = ("click", timer);

// return totalScore();
// // or called finalScore ??? 



submitButton.onclick = saveHighscore; 

console.log(startQuiz());