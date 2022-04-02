var timerEl = document.getElementById('countdown');
var questionIndex = 0;
var timeLeft = 60;
/*var questionText = document.querySelector("#questionText");
var answerA = document.querySelector("#a");
var answerB = document.querySelector("#b");
var answerC = document.querySelector("#c");
var answerD = document.querySelector("#d");
var choice = ""; */

var questionText = document.getElementById('questionText');
var answerA = document.getElementById('a');
var answerB = document.getElementById('b');
var answerC = document.getElementById('c');
var answerD = document.getElementById('d');

function pageLoad() {
  questions.style.display = "none";
  submit.style.display = "none";
  next.style.display = "none";

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
  {
    quest: "What is the block of javaScript code that is executed when 'called'?",
    ans: ["event", "function", "string", "object"],
    correct: "function"
  },
  {
    quest: "Which one is a way that you CANNOT delare a variable?",
    ans: ["var", "let", "declare", "const"],
    correct: "declare"
  },
  {
    quest: "What digit represents the first element in an array?",
    ans: ["0", "1", "-1", "i"],
    correct: "0"
  },
  {
    quest: "What can be used to perform different actions based on different conditions?",
    ans: ["if", "then", "else", "switch"],
    correct: "switch"
  },
  {
    quest: "What statement lets you get out of a loop?",
    ans: ["end", "break", "jump", "let"],
    correct: "break"
  }
]

      // correctAnswer: function
      // correctAnswer: declare
      // correctAnswer: 0
      // correctAnswer: switch
      // correctAnswer: break
  
// function aAnswer() {
//   a.style.backgroundColor = "#d6b55b";
//   b.style.backgroundColor = "#fde091fa";
//   c.style.backgroundColor = "#fde091fa";
//   d.style.backgroundColor = "#fde091fa";
// }

// function bAnswer() {
//   b.style.backgroundColor = "#d6b55b";
//   a.style.backgroundColor = "#fde091fa";
//   c.style.backgroundColor = "#fde091fa";
//   d.style.backgroundColor = "#fde091fa";
// }

// function cAnswer() {
//   c.style.backgroundColor = "#d6b55b";
//   b.style.backgroundColor = "#fde091fa";
//   a.style.backgroundColor = "#fde091fa";
//   d.style.backgroundColor = "#fde091fa";
// }

// function dAnswer() {
//   d.style.backgroundColor = "#d6b55b";
//   b.style.backgroundColor = "#fde091fa";
//   c.style.backgroundColor = "#fde091fa";
//   a.style.backgroundColor = "#fde091fa";
//}

function questionOne() {
  console.log("ques1")

  questions.style.display = "block";
  next.style.display = "block";
  startQuiz.style.display = "none";
  start.style.display = "none";  

  questionText.textContent = "What is the block of javaScript code that is executed when 'called'?";
  answerA.textContent = "event";
  answerB.textContent = "function";
  answerC.textContent = "string";
  answerD.textContent = "object";
    
  document.getElementById("questions").addEventListener("click", function(event)
  {

      console.log(event.target.textContent);
      console.log(questionList[0].ans[1]);
      if (event.target.textContent == questionList[0].ans[1]) {
          timeLeft = timeLeft;
    } else {
        timeLeft = timeLeft - 5;

    }
  })

    document.getElementById("next").addEventListener("click", questionTwo);
    return;
}


function questionTwo() {
  console.log("ques2")

  a.style.backgroundColor = "#fde091fa";
  b.style.backgroundColor = "#fde091fa";
  c.style.backgroundColor = "#fde091fa";
  d.style.backgroundColor = "#fde091fa";
  next.style.backgroundColor = "#fde091fa";
  questionText.textContent = "Which one is a way that you CANNOT delare a variable?";
  answerA.textContent = "var";
  answerB.textContent = "let";
  answerC.textContent = "declare";
  answerD.textContent = "const";

  document.getElementById("questions").addEventListener("click", function(event)
  {

      console.log(event.target.textContent);
      console.log(questionList[1].ans[2]);
      if (event.target.textContent == questionList[1].ans[2]) {
          timeLeft = timeLeft;
    } else {
        timeLeft = timeLeft - 5;

    }
  })

  document.getElementById("next").addEventListener("click", questionThree);
}

function questionThree() {
  console.log("ques3")

  a.style.backgroundColor = "#fde091fa";
  b.style.backgroundColor = "#fde091fa";
  c.style.backgroundColor = "#fde091fa";
  d.style.backgroundColor = "#fde091fa";
  next.style.backgroundColor = "#fde091fa";
  questionText.textContent = "What digit represents the first element in an array?";
  answerA.textContent = "0";
  answerB.textContent = "1";
  answerC.textContent = "-1";
  answerD.textContent = "i";

  document.getElementById("questions").addEventListener("click", function(event)
  {

      console.log(event.target.textContent);
      console.log(questionList[2].ans[0]);
      if (event.target.textContent == questionList[2].ans[0]) {
          timeLeft = timeLeft;
    } else {
        timeLeft = timeLeft - 5;

    }
  })

  document.getElementById("next").addEventListener("click", questionFour);
}

function questionFour() {
  console.log("ques4")

  a.style.backgroundColor = "#fde091fa";
  b.style.backgroundColor = "#fde091fa";
  c.style.backgroundColor = "#fde091fa";
  d.style.backgroundColor = "#fde091fa";
  next.style.backgroundColor = "#fde091fa";
  questionText.textContent = "What can be used to perform different actions based on different conditions?";
  answerA.textContent = "if";
  answerB.textContent = "then";
  answerC.textContent = "else";
  answerD.textContent = "switch";
  
  document.getElementById("questions").addEventListener("click", function(event)
  {

      console.log(event.target.textContent);
      console.log(questionList[3].ans[3]);
      if (event.target.textContent == questionList[3].ans[3]) {
          timeLeft = timeLeft;
    } else {
        timeLeft = timeLeft - 5;

    }
  })
  document.getElementById("next").addEventListener("click", questionFive);
}

function questionFive() {
  console.log("ques5")

  a.style.backgroundColor = "#fde091fa";
  b.style.backgroundColor = "#fde091fa";
  c.style.backgroundColor = "#fde091fa";
  d.style.backgroundColor = "#fde091fa";
  next.style.backgroundColor = "#fde091fa";
  questionText.textContent = "What statement lets you get out of a loop?";
  answerA.textContent = "end";
  answerB.textContent = "break";
  answerC.textContent = "jump";
  answerD.textContent = "let";

  document.getElementById("questions").addEventListener("click", function(event)
  {

      console.log(event.target.textContent);
      console.log(questionList[4].ans[1]);
      if (event.target.textContent == questionList[4].ans[1]) {
          timeLeft = timeLeft;
    } else {
        timeLeft = timeLeft - 5;

    }
  })

  submit.style.display = "block";
  next.style.display = "none";

  document.getElementById("submit").addEventListener("click", results);
}

function results() {
  submit.style.display = "none";
  questions.style.display = "none";
  countdown.innerHTML = "Your score is " + score + ".";
}