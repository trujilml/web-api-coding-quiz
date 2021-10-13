
//game timer only lasts 100 seconds, incorrect answers recieve a loss of 20 seconds for the user
//100000 milliseconds for 100 seconds - timer, timeleft

//lists all questions choices and answers in a variable - 4 choices max, 1 answer only
//B is a choice never used for the questions correct answer at all! 

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
//min totalscore of quiz is 0, maximum score user makes is up to 400
var totalScore = 0;
var nextQuestion = -1; 
var timeLeft = 0;
var quizTimer;

function startQuiz() {

    timeLeft = 100;
    document.getElementById("timeLeft").innerHTML=timeLeft + " seconds";

    quizTimer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML=timeLeft + " seconds";
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            window.alert("THE QUIZ IS OVER!");
            quizOver(); //1000 milliseconds allow for timeLeft to run its respective 100 seconds
        }
        }, 1000);

        nextNewQuestion();
    }

//last page - users three initals is saved on local storage as MVP and their score as highscore respectively
function quizOver() {
    clearInterval(quizTimer);

    var finalQuizDetails = `
    <h2>Great job!</h2>
    <p>Your final score is ` + totalScore + `!</p>
    <p>Please enter your initials to submit your score in the highscore chart.</p>
    <input type="text" id="MVP" class="initials" maxlength="3" required>
    <button onclick="saveHighscore()" class="highscore-btn">Submit</button>`;

    document.getElementById("startpage").innerHTML = finalQuizDetails;
}


function saveHighscore() {
    localStorage.setItem("Highscore", totalScore);
    localStorage.setItem("MVP", document.getElementById('MVP').value);

    getHighscore();
}

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
    score = 0;
    nextQuestion = -1;
    timeLeft = 0;
    quizTimer = null;

    document.getElementById("timeLeft").innerHTML=timeLeft + " seconds";

    var finalQuizDetails = `
    <h2>The Coding Quiz of Knowledge</h2>
    <p>
    Welcome to The Coding Quiz of Knowledge. You will be quizzed on your knowledge of JavaScript coding. 
    Click the "Start Quiz" button to begin. Please try to answer the questions within the 100 second time limit. 
    Correct answers give you 40 points! Incorrect answers will penalize your time by 25 seconds! Have fun!
    </p>
    <button onclick = "startQuiz()" class = "submit-btn">Start Quiz</button>`;

    document.getElementById("startpage").innerHTML = finalQuizDetails;
}

function wrongAnswer() {
    timeLeft -= 25;
    nextNewQuestion();
}

function correctAnswer() {
    totalScore += 40;
    nextNewQuestion();
}

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
