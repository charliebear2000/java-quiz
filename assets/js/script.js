var timerEl = document.getElementById('countdown');
var timeLeft = 90;
var leaderBoard = [];
var scoreIdCounter = 0;

var answerA = document.getElementById('a');
var answerB = document.getElementById('b');
var answerC = document.getElementById('c');
var answerD = document.getElementById('d');
var finalResults = document.querySelector('#results');
var scoreName = document.querySelector('#name-form');
var submitName = document.querySelector('#saveName');
var startQuiz = document.getElementById('startQuiz');
var directions = document.getElementById('start');
var scoreListEl = document.querySelector('#score-list');
var formEl = document.getElementById('name-blank');
var timeInterval;

// hide everything except directions and start button
function pageLoad() {
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "none";
  question4.style.display = "none";
  question5.style.display = "none";
  scoreName.style.display = "none";
  submitName.style.display = "none";
  
}
// Timer that counts down from 90
function countdownTimer() {
  
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining.';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining.';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, got to end of the quiz with a score of 0
      finalScore();
    }
  }, 1000);
}
 
// changes the color of the answer when clicked
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

// unhides question 1
function questionOne() {
  startQuiz.style.display = "none";
  question1.style.display = "block";
  directions.style.display = "none";
} 

// adds or subtracts time when answer is clicked
function wrongAnswer1() {
  timeLeft = timeLeft - 4;
  questionTwo();
}

function rightAnswer1() {
  timeLeft = timeLeft + 6;
  questionTwo();
}
  
// hides question 1 and unhides question 2
function questionTwo() {
  question1.style.display = "none";
  question2.style.display = "block";
} 

// adds or subtracts time when answer is clicked
function wrongAnswer2() {
  timeLeft = timeLeft - 4;
  questionThree();
}

function rightAnswer2() {
  timeLeft = timeLeft + 6;
  questionThree();
}

// hides question 2 and unhides question 3
function questionThree() {
  question2.style.display = "none";
  question3.style.display = "block";
}

// adds or subtracts time when answer is clicked
function wrongAnswer3() {
  timeLeft = timeLeft - 4;
  questionFour();
}

function rightAnswer3() {
  timeLeft = timeLeft + 6;
  questionFour();
}

// hides question 3 and unhides question 4
function questionFour() {
  question3.style.display = "none";
  question4.style.display = "block";
}

// adds or subtracts time when answer is clicked
function wrongAnswer4() {
  timeLeft = timeLeft - 4;
  questionFive();
}

function rightAnswer4() {
  timeLeft = timeLeft + 6;
  questionFive();
}

// hides question 5 and unhides question 4
function questionFive() {
  question4.style.display = "none";
  question5.style.display = "block";
}

// adds or subtracts time when answer is clicked
function wrongAnswer5() {
  timeLeft = timeLeft - 4;
  finalScore();
}

function rightAnswer5() {
  timeLeft = timeLeft + 6;
  finalScore();
}

// shows name input box and submit button
function finalScore() {
  timerEl.style.display = "none";
  scoreName.style.display = "block";
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "none";
  question4.style.display = "none";
  question5.style.display = "none";
  submitName.style.display = "block";
  // Use `clearInterval()` to stop the timer
  clearInterval(timeInterval);
  loadScores();
}

// creats score list
var createScoreList = function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  console.log(name)

  // if name is empty when submitted, give alert
  if (!name) {
    alert("Please enter your name.");
    return;
    
  } 
    var scoreDataObj = {
      name: name,
      score: timeLeft
    };
    console.log(scoreDataObj);
    createListEl(scoreDataObj);

    // puts scores in an array
    leaderBoard.push(scoreDataObj);

    localStorage.setItem('leaderBoard', JSON.stringify(leaderBoard));
  }

var createListEl = function(scoreDataObj) {
  var topScoreEl = document.createElement("li");
  topScoreEl.className = "score-results";
  scoreListEl.appendChild(topScoreEl);
  topScoreEl.innerHTML = scoreDataObj.name + "'s score: " + scoreDataObj.score;
};

var loadScores = function() {
  // empty the score list to prevent duplicate scores
  scoreListEl.innerHTML = "";

  // put scores into an array
  leaderBoard = JSON.parse(localStorage.getItem('leaderBoard')) || [];

  // if there are no scores, set leaderBoard to an empty array
  if (!leaderBoard) {
    console.log("no scores");
    return false;

  } else {
    console.log("saved score found!");

    //list scores on page
    for (var i = 0; i < leaderBoard.length; i++) {
      createListEl(leaderBoard[i]);
    }
  }
};
  


// makes submit name button as well as 'enter' show the name and score
formEl.addEventListener("submit", createScoreList); 
