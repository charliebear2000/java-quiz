var timerEl = document.getElementById('countdown');
var questionIndex = 0;
var timeLeft = 60;
var leaderBoard = [];

var answerA = document.getElementById('a');
var answerB = document.getElementById('b');
var answerC = document.getElementById('c');
var answerD = document.getElementById('d');
var score = document.getElementById('results');
var submitName = document.getElementById('saveName');
var startQuiz = document.getElementById('startQuiz');
var directions = document.getElementById('start');
var scoreListEl = document.querySelector('#score-list');


function pageLoad() {
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "none";
  question4.style.display = "none";
  question5.style.display = "none";
  results.style.display = "none";
  submitName.style.display = "none";
  
}
// Timer that counts down from 60
function countdownTimer() {
  

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      finalScore();
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

// var quizContainer = document.getElementById('quiz');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');


  
function aAnswer() {
  answerA.style.backgroundColor = "#d6b55b";
  answerB.style.backgroundColor = "#fde091fa";
  answerC.style.backgroundColor = "#fde091fa";
  answerD.style.backgroundColor = "#fde091fa";
}

function bAnswer() {
  answerB.style.backgroundColor = "#d6b55b";
  answerA.style.backgroundColor = "#fde091fa";
  answerC.style.backgroundColor = "#fde091fa";
  answerD.style.backgroundColor = "#fde091fa";
}

function cAnswer() {
  answerC.style.backgroundColor = "#d6b55b";
  answerB.style.backgroundColor = "#fde091fa";
  answerA.style.backgroundColor = "#fde091fa";
  answerD.style.backgroundColor = "#fde091fa";
}

function dAnswer() {
  answerD.style.backgroundColor = "#d6b55b";
  answerB.style.backgroundColor = "#fde091fa";
  answerC.style.backgroundColor = "#fde091fa";
  answerA.style.backgroundColor = "#fde091fa";
}

function questionOne() {
  console.log("ques1")
  startQuiz.style.display = "none";
  question1.style.display = "block";
  directions.style.display = "none";
} 

function wrongAnswer1() {
  timeLeft = timeLeft - 4;
  questionTwo();
}

function rightAnswer1() {
  timeLeft = timeLeft + 6;
  questionTwo();
}
  
function questionTwo() {
  console.log("ques2")

  question1.style.display = "none";
  question2.style.display = "block";
} 
 
function wrongAnswer2() {
  timeLeft = timeLeft - 4;
  questionThree();
}

function rightAnswer2() {
  timeLeft = timeLeft + 6;
  questionThree();
}

function questionThree() {
  console.log("ques3")

  question2.style.display = "none";
  question3.style.display = "block";
}

function wrongAnswer3() {
  timeLeft = timeLeft - 4;
  questionFour();
}

function rightAnswer3() {
  timeLeft = timeLeft + 6;
  questionFour();
}

function questionFour() {
  console.log("ques4")

  question3.style.display = "none";
  question4.style.display = "block";
}

function wrongAnswer4() {
  timeLeft = timeLeft - 4;
  questionFive();
}

function rightAnswer4() {
  timeLeft = timeLeft + 6;
  questionFive();
}

function questionFive() {
  console.log("ques5")

  question4.style.display = "none";
  question5.style.display = "block";
}

function wrongAnswer5() {
  timeLeft = timeLeft - 4;
  finalScore();
}

function rightAnswer5() {
  timeLeft = timeLeft + 6;
  finalScore();
}

function finalScore() {
  timerEl.style.display = "none";
  results.style.display = "block";
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "none";
  question4.style.display = "none";
  question5.style.display = "none";
  submitName.style.display = "block";
  score.innerHTML = "Your score is " + timeLeft + ".";
}

var createScoreList = function () {
  var topScoreEl = document.createElement("li");
  topScoreEl.className = "top-score";
  scoreListEl.appendChild(topScoreEl);
  topScoreEl.textContent = "Amy";
};

submitName.addEventListener("click", createScoreList); 