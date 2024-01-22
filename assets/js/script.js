//Puts cursor into name-input box
document.querySelector("#name").focus();

const start = document.querySelector('#startquiz');
const instructions = document.querySelector('#instructions');
const quizContainerElement = document.querySelector('#quiz-container');
const questionElement = document.querySelector('#quiz-question');
const optionsElement = document.querySelector('#options');
const nextButton = document.querySelector('#next');
const optionsAreaElement = document.querySelector('#options-area');
const player = document.querySelector("#name");
const result = document.querySelector("#result-container");

const playerName = document.querySelector("#username");

const currentQuestionNumber = document.querySelector("#current-question");

const correctScore = document.querySelector("#score");
const incorrectScore = document.querySelector("#incorrect")
const username = document.querySelector("#username-result");
const resultMessage = document.querySelector("#result-message");


const choiceA = document.querySelector("#a");
const choiceB = document.querySelector("#b");
const choiceC = document.querySelector("#c");
const choiceD = document.querySelector("#d");



// Array of Quiz Questions
let questions = [
  {
    question: "Tiger Woods memorably won by 12 shots in 1997. Who came second?",
    choiceA: "A: Tom Weiskopt",
    choiceB: "B: Tom Kite",
    choiceC: "C: Chris DiMarco",
    choiceD: "D: Tom Watson",
    correct: "A"
  }, {
    question: "Jack Nicklaus won his sixth and final green jacket in 1986. What age was he?",
    choiceA: "A: 47",
    choiceB: "B: 46",
    choiceC: "C: 45",
    choiceD: "D: 48",
    correct: "B"
  }, {
    question: "Rory McIlroy imploded on Sunday after holding a four-stoke lead overnight in 2011. Who ended up winning?",
    choiceA: "A: Adam Scott",
    choiceB: "B: Lee Westwood",
    choiceC: "C: Charl Schartzel",
    choiceD: "D: Louis Oosthuizen",
    correct: "C"
  }, {
    question: "Tiger Woods won in 2005 after a dramatic play-off. Who did he beat?",
    choiceA: "A: Scott Verplank",
    choiceB: "B: Chad Campbell",
    choiceC: "C: Chris DiMarco",
    choiceD: "D: Ian Poulter",
    correct: "C"
  }, {
    question: "Jordan Spieth fell victim to the dreaded 12th in 2016. What score did he have on the par-3?",
    choiceA: "A: 8",
    choiceB: "B: 6",
    choiceC: "C: 7",
    choiceD: "D: 9",
    correct: "C"
  }, {
    question: "Who is the youngest player to make the cut at Augusta?",
    choiceA: "A: Matteo Manassero",
    choiceB: "B: Ryo Ishikawa",
    choiceC: "C: Guan Tianlang",
    choiceD: "D: Rory Mcllroy",
    correct: "C"
  }, {
    question: "Who was the first player to shoot 63 at the Masters?",
    choiceA: "A: Jack Nicklaus",
    choiceB: "B: Nick Price",
    choiceC: "C: Ernie Els",
    choiceD: "D: Rory Mcllroy",
    correct: "B"
  }, {
    question: "When did Seve Ballesteros win his first Masters?",
    choiceA: "A: 1978",
    choiceB: "B: 1980",
    choiceC: "C: 1979",
    choiceD: "D: 1981",
    correct: "B"
  }, {
    question: "Larry Mize famously won in 1987 after a three-man play-off. Along with Seve who was the third member?",
    choiceA: "A: Ben Crenshaw",
    choiceB: "B: Greg Norman",
    choiceC: "C: Bernhard Langer",
    choiceD: "D: Sandy Lyle",
    correct: "B"
  }, {
    question: "Who does Gary Player share the record with for consecutive cuts made at the Masters?",
    choiceA: "A: Nick Faldo",
    choiceB: "B: Rikki Rockett",
    choiceC: "C: Ian Woosnam",
    choiceD: "D: Fred Couples",
    correct: "D"
  }
];

/*fetch("assets/js/questions.json")
.then(res => {
  return res.json();
})
.then(loadedQuestion => {
  questions = loadedQuestion;

})*/


 

const lastQuestion = questions.length - 1;
let currentQuestion = 0;
let count = 0;
let score = 0;





function showQuestion() {
  questionElement.innerHTML = questions[currentQuestion].question;
  choiceA.innerHTML = questions[currentQuestion].choiceA;
  choiceB.innerHTML = questions[currentQuestion].choiceB;
  choiceC.innerHTML = questions[currentQuestion].choiceC;
  choiceD.innerHTML = questions[currentQuestion].choiceD;
}



start.addEventListener("click", startQuiz);

function startQuiz() {
  if (player.value === '') {
    alert("Please enter name before clicking Start Quiz button");
  } else {
    instructions.classList.add('hide');
    quizContainerElement.classList.remove('hide');
    playerName.innerHTML = player.value;
    showQuestion();
  }
}

function checkAnswer(answer) {
  if (answer == questions[currentQuestion].correct) {
    alert("Correct, Well Done!");
    increaseScore();
    score++
  } else {
    alert(`Incorrect, Hard Luck!, the correct answer is ${questions[currentQuestion].correct}.`);
    increaseIncorrect();
  }
  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    showQuestion();
    questionCounter();
  } else {
    showResult();
  }
}

function questionCounter() {
  currentQuestionNumber.innerHTML = currentQuestion + 1;
}

/*Functions to increase scores*/

function increaseScore() {
  let oldScore = parseInt(correctScore.innerHTML);
  correctScore.innerHTML = ++oldScore;
}

function increaseIncorrect() {
  let oldScore = parseInt(incorrectScore.innerHTML);
  incorrectScore.innerHTML = ++oldScore;
}




function showResult() {
  quizContainerElement.classList.add('hide');
  result.classList.remove('hide');
  username.innerHTML = player.value;
  const scorePercent = Math.round(100 * score / questions.length);
  if (scorePercent >= 80) {
    resultMessage.innerHTML = `Congratulations, you got ${scorePercent}%, you are a Masters champion!`;
  } else if (scorePercent >= 60) {
    resultMessage.innerHTML = `Well done, you got ${scorePercent}%, you made the cut!`;
  } else if (scorePercent >= 40) {
    resultMessage.innerHTML = `Hard luck, you got ${scorePercent}%, you didn't make the cut!`;
  } else if (scorePercent >= 0) {
    resultMessage.innerHTML = `Unfortunatley, you only got ${scorePercent}%, they didn't really suit you!`;
  }
}





















