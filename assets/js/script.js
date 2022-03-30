var timerEl = document.getElementById('countdown');
var score = 0;
var questionText = document.querySelector("#questionText");
var answerA = document.querySelector("#a");
var answerB = document.querySelector("#b");
var answerC = document.querySelector("#c");
var answerD = document.querySelector("#d");
var choice = "";

function pageLoad() {
  questions.style.display = "none";
  submit.style.display = "none";
  next.style.display = "none";
}
// Timer that counts down from 60
function countdownTimer() {
  var timeLeft = 60;

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
      timerEl.textContent = 'Time is up!';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questionList = [
  'What is the block of javaScript code that is executed when "called"?',
  'Which one is a way that you CANNOT delare a variable?',
  'What digit represents the first element in an array?',
  'What can be used to perform different actions based on different conditions?',
  'What statement lets you get out of a loop?'
]

var ansA = ["event", "var", "0", "if", "end"]
    
var ansB = ["function", "let", "1", "then", "break"]

var ansC = ["string", "declare", "-1", "else", "jump"]

var ansD = ["object", "const", "i", "switch", "let"]
    
      // correctAnswer: 2
      // correctAnswer: 3
      // correctAnswer: 1
      // correctAnswer: 4
      // correctAnswer: 2
  
function aAnswer() {
  a.style.backgroundColor = "#d6b55b";
  b.style.backgroundColor = "#fde091fa";
  c.style.backgroundColor = "#fde091fa";
  d.style.backgroundColor = "#fde091fa";
  choice = "a";
}

function bAnswer() {
  b.style.backgroundColor = "#d6b55b";
  a.style.backgroundColor = "#fde091fa";
  c.style.backgroundColor = "#fde091fa";
  d.style.backgroundColor = "#fde091fa";
  choice = "b";
}

function cAnswer() {
  c.style.backgroundColor = "#d6b55b";
  b.style.backgroundColor = "#fde091fa";
  a.style.backgroundColor = "#fde091fa";
  d.style.backgroundColor = "#fde091fa";
  choice = "c";
}

function dAnswer() {
  d.style.backgroundColor = "#d6b55b";
  b.style.backgroundColor = "#fde091fa";
  c.style.backgroundColor = "#fde091fa";
  a.style.backgroundColor = "#fde091fa";
  choice = "d";
}

function questionOne() {

  questions.style.display = "block";
  next.style.display = "block";
    questionText.innerHTML = questionList[0];
    a.innerHTML = ansA[0];
    b.innerHTML = ansB[0];
    c.innerHTML = ansC[0];
    d.innerHTML = ansD[0];
    console.log(score);
    if (choice === "b") {
      score = score + 1;
      
    }

    document.getElementById("next").addEventListener("click", questionTwo);
}

function questionTwo() {

  a.style.backgroundColor = "#fde091fa";
  b.style.backgroundColor = "#fde091fa";
  c.style.backgroundColor = "#fde091fa";
  d.style.backgroundColor = "#fde091fa";
  next.style.backgroundColor = "#fde091fa";
  questionText.innerHTML = questionList[1];
  a.innerHTML = ansA[1];
  b.innerHTML = ansB[1];
  c.innerHTML = ansC[1];
  d.innerHTML = ansD[1];

  if (choice === "c"){
    score = score + 1;
    console.log(score);
 } 

  document.getElementById("next").addEventListener("click", questionThree);
}

function questionThree() {

  a.style.backgroundColor = "#fde091fa";
  b.style.backgroundColor = "#fde091fa";
  c.style.backgroundColor = "#fde091fa";
  d.style.backgroundColor = "#fde091fa";
  next.style.backgroundColor = "#fde091fa";
  questionText.innerHTML = questionList[2];
  a.innerHTML = ansA[2];
  b.innerHTML = ansB[2];
  c.innerHTML = ansC[2];
  d.innerHTML = ansD[2];

  if (choice === "a"){
    score = score + 1;
    console.log(score);
  } 

  document.getElementById("next").addEventListener("click", questionFour);
}

function questionFour() {

  a.style.backgroundColor = "#fde091fa";
  b.style.backgroundColor = "#fde091fa";
  c.style.backgroundColor = "#fde091fa";
  d.style.backgroundColor = "#fde091fa";
  next.style.backgroundColor = "#fde091fa";
  questionText.innerHTML = questionList[3];
  a.innerHTML = ansA[3];
  b.innerHTML = ansB[3];
  c.innerHTML = ansC[3];
  d.innerHTML = ansD[3];

  if (choice == "d") {
    score = score + 1;
    console.log(score);
  } 

  document.getElementById("next").addEventListener("click", questionFive);
}

function questionFive() {

  a.style.backgroundColor = "#fde091fa";
  b.style.backgroundColor = "#fde091fa";
  c.style.backgroundColor = "#fde091fa";
  d.style.backgroundColor = "#fde091fa";
  next.style.backgroundColor = "#fde091fa";
  questionText.innerHTML = questionList[4];
  a.innerHTML = ansA[4];
  b.innerHTML = ansB[4];
  c.innerHTML = ansC[4];
  d.innerHTML = ansD[4];

  if (choice == "b") {
    score = score + 1;
    console.log(score);
  }

  submit.style.display = "block";
  next.style.display = "none";

  document.getElementById("submit").addEventListener("click", results);
}

function results() {
  submit.style.display = "none";
  questions.style.display = "none";
  countdown.innerHTML = "Your score is " + score + ".";
}