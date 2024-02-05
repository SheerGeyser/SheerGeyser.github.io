document.addEventListener("DOMContentLoaded", function () {
 // Define your quiz questions and answers
 const questions = [
  { question: "Question 1: What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
  // Add more questions as needed
 ];

 let currentQuestion = 0;

 function loadQuestion() {
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");

  questionContainer.textContent = questions[currentQuestion].question;

  optionsContainer.innerHTML = "";
  questions[currentQuestion].options.forEach((option, index) => {
   const button = document.createElement("button");
   button.textContent = option;
   button.addEventListener("click", () => checkAnswer(option));
   optionsContainer.appendChild(button);
  });
 }

 function checkAnswer(selectedAnswer) {
  if (selectedAnswer === questions[currentQuestion].correctAnswer) {
   currentQuestion++;
   if (currentQuestion < questions.length) {
    loadQuestion();
   } else {
    // All questions answered, show content
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("content-container").style.display = "block";
   }
  } else {
   alert("Incorrect answer. Try again!");
  }
 }

 document.getElementById("submit-button").addEventListener("click", () => checkAnswer());
 loadQuestion();
});