const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  /* console.log(question);
  candidateAnswer = input.question("Your answer: "); */

  for (let i = 0; i < 5; i++) {
    console.log(questions[i]);
    candidateAnswers.push(input.question("Your answer: ")) ;
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 /*  if (correctAnswer === candidateAnswer) {
    console.log("That is correct!");
  } else {
    console.log("That is a wrong answer.");
  } */

  console.log(`Candidate Name: ${candidateName}`);
  for (let i = 0; i < questions.length; i++){
    console.log(`${i + 1}) ${questions[i]} \nYour answer: ${candidateAnswers[i]} \nCorrect answer: ${correctAnswers[i]}`)
  }

  let numberOfCorrectAnswers = 0;
  let correctAnswersToLowerCase = correctAnswers.join(", ").toLowerCase().split(", ");
  let candidateAnswersToLowerCase = candidateAnswers.join(",").toLowerCase().split(",");
  for (let i = 0; i < questions.length; i++) {
    
    if (correctAnswersToLowerCase[i] === candidateAnswersToLowerCase[i]) {
      numberOfCorrectAnswers ++;
    }
  }

  let grade = numberOfCorrectAnswers/questions.length * 100;  //TODO 3.2 use this variable to calculate the candidates score.

  console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} of 5 responses correct) <<<`)
  if (grade < 80) {
    console.log(`>>> Status: FAILED <<<`);
  } else {
    console.log(`>>> Status: PASSED <<<`);
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Greetings ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};