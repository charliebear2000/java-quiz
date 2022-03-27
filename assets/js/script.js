// store the answer choices
var timerEl = document.getElementById('countdown');
var choices = [];


// Timer that counts down from 20
function countdown() {
  var timeLeft = 20;

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

var myQuestions = [
   {
     question: 'What is the block of javaScript code that is executed when "called"?',
     answers: {
       a: "event",
       b: "function",
       c: "string",
       d: "object"
     },
     correctAnswer: "b"
   },
   {
     question: "Which one is a way that you CANNOT delare a variable?",
     answers: {
       a: "var",
       b: "let",
       c: "declare",
       d: "const"
     },
     correctAnswer: "c"
   },
   {
     question: "What digit represents the first element in an array?",
     answers: {
       a: "0",
       b: "1",
       c: "-1",
       d: "i"
     },
     correctAnswer: "a"
   },
   {
     question: "What can be used to perform different actions based on different conditions?",
     answers: {
        a: "if",
        b: "then",
        c: "else",
        d: "switch"
     },
     correctAnswer: "d"
   },
   {
     question: "What statement lets you get out of a loop?",
     answers: {
        a: "end",
        b: "break",
        c: "jump",
        d: "let"
     },
     correctAnswer: "b"
   }
 ];