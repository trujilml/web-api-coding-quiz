//lists all questions choices and answers in a variable - 4 choices max, 1 answer only
//B is a choice never used for the questions correct answer at all! 
//min totalscore of quiz is 0, maximum score user makes is up to 400
var totalScore = 0;
var nextQuestion = -1; 
var timeLeft = 0;
var quizTimer;
var feedbackEl = document.getElementById("feedback");


const questions = [

    {
        questionTitle: "What does a comment look like in JavaScript?",
        choices: ["'This is a comment in JavaScript!'","!This a comment in JavaScript!", "//This is a comment in JavaScript!", "This is a comment in JavaScript!"],
        answer: "//This is a comment in JavaScript!" //answer is C
    },
        
    {
        questionTitle: "How do you declare a function?",
        choices: ["Function name()", "Class = Function()", "Method Function = ()", "var function = function()"],
        answer: "Function name()" //answer is A
    },

    {
        questionTitle: "Arrays are a special type of objects in JavaScript. What can they store exactly in them?",
        choices: ["Strings", "Booleans", "Other arrays", "All of the Above"],
        answer: "All of the Above"
        //answer is D
    },

    {
        questionTitle: "Which boolean operator represents 'And'?",
        choices: ["&&", "||", "?!", "*"],
        answer: "&&"
        //answer is A
    },
        
    {
        questionTitle: "Which statements are true about functions in JavaScript?",
        choices: ["Functions must always have an identifier.", "Functions cannot be reused.", "None of the above.", "Functions cannot use outside variables in their own functions."],
        answer: "None of the above." //answer is C
    },

    {
        questionTitle: "What is 'null' exactly?",
        choices: ["Null represents the absence of a value.","Null is a variable representing what is within a function.", "Null represents the number 0.", "Null means nothing in JavaScript."],
        answer: "Null represents the absence of a value." //answer is A
    },
    
    {
        questionTitle: "What is the object method in JavaScript?",
        choices: ["The object method houses various arrays for a function to use.", "The object method creates objects.", "The object method is an object with a function associated with the method.", "The object method involves an object that is inserted within a function."],
        answer: "The object method is an object with a function associated with the method.", //answer is C
    },
    
    {
        questionTitle: "How is a conditional statement in JavaScript declared?",
        choices: ["The for loop", "The var function statement", "The while loop", "The if else statement"],
        answer: "The if else statement" //answer is D
    },

    {
        questionTitle: "What operator is used to assign a value to a variable?",
        choices: ["Nothing!","=", "?", "+="],
        answer: "="
        //answer is A
    },        

    {
        questionTitle: "A variable not declared within a function but outside of a function is known as a...",
        choices: ["An undefined variable","A local variable", "A global variable", "A variable"],
        answer: "A global variable" //answer is C
    },

]

//timer is housed in with start quiz function to initiate timer with the questions appearing, therefore starting the quiz officially 
function startQuiz() {

    timeLeft = 100;
    document.getElementById("timeLeft").innerHTML=timeLeft + " seconds";

    quizTimer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML=timeLeft + " seconds";
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            window.alert("THE QUIZ IS OVER!");
            quizOver(); 
        }
        }, 1000); //1000 milliseconds allow for timeLeft to run its respective 100 seconds

        nextNewQuestion();
    }

//last page - users three initals is saved on local storage as MVP and their score as highscore respectively
function quizOver() {
    clearInterval(quizTimer);
//var finalquizdetails invokes the html page and hidden details including the final score details here, the questions and answer choices, and the restart page of the original start page
    var finalQuizDetails = `
    <h2>Great job!</h2>
    <p>Your final score is ` + totalScore + `!</p>
    <p>Please enter your initials to submit your score in the highscore chart.</p>
    <input type="text" id="MVP" class="initials" maxlength="3" required>
    <button onclick="saveHighscore()" class="highscore-btn">Submit</button>`;

    document.getElementById("startpage").innerHTML = finalQuizDetails;
}

//demonstrates player highscore saved in their own localstorage
function saveHighscore() {
    localStorage.setItem("Highscore", totalScore);
    localStorage.setItem("MVP", document.getElementById('MVP').value);

    getHighscore();
}

//after player saves highscore, turns into special page that allows user to either clear score and play again or simply play again without affecting their score on localstorage
function getHighscore() {
    var finalQuizDetails = `
    <h2>` + localStorage.getItem("MVP") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("Highscore") + `</h1><br >

    <button onclick="clearHighscore()" class="clear-btn">Clear Score and Play Again!</button>
    <button onclick="resetGame()" class="reset-btn">Just Play Again!</button>

    `;
    document.getElementById("startpage").innerHTML = finalQuizDetails;
}

// clear function clears high score from the user's local storage and brings the user back to the start page
function clearHighscore(){
    localStorage.setItem("Highscore", "");
    localStorage.setItem("MVP", "");

    resetGame();
}    

//reset function puts user back to the beginning page and allows them to play the quiz again!
function resetGame() {
    clearInterval(quizTimer);
    totalScore = 0;
    nextQuestion = -1;
    timeLeft = 0;
    quizTimer = null;

    document.getElementById("timeLeft").innerHTML=timeLeft + " seconds";

    window.location.reload();

    document.getElementById("startpage").innerHTML = finalQuizDetails;
}

//wrong answer reduces time by 25 seconds
function wrongAnswer() {
    timeLeft -= 25;
    nextNewQuestion();
}

//correct answer grants the user 40 points/ maxmimum user high score is 400!
function correctAnswer() {
    totalScore += 40;
    nextNewQuestion();
}

//officially initates the question const and ensures correct answers are chosed, linking them to the above functions
function nextNewQuestion() {
    nextQuestion++;

    if (nextQuestion > questions.length - 1) {
        quizOver();
        return;
    }

    var finalQuizDetails = "<h2>" + questions[nextQuestion].questionTitle + "</h2>"

    for (var i = 0; i < questions[nextQuestion].choices.length; i++) {
        var choiceButton = "<button onclick = \"[answerchoice]\">[CHOICE]</button>";
        choiceButton = choiceButton.replace("[CHOICE]", questions[nextQuestion].choices[i]);
            if (questions[nextQuestion].choices[i] === questions[nextQuestion].answer) {
                choiceButton = choiceButton.replace("[answerchoice]", "correctAnswer()");
            } else {
                choiceButton = choiceButton.replace("[answerchoice]", "wrongAnswer()");
            }
        finalQuizDetails += choiceButton
    }
        document.getElementById("startpage").innerHTML = finalQuizDetails;
}
