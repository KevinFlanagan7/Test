//Puts cursor into name-input box
document.getElementById("name").focus();



let start = document.getElementById('startquiz');
let instructions = document.getElementById('instructions');
let quizContainerElement = document.getElementById('quiz-container');
let questionElement = document.getElementById('quiz-question');
let optionsElement = document.getElementById('options');
let nextButton = document.getElementById('next');
let optionsAreaElement = document.getElementById('options-area');
let player = document.getElementById('name');
let result = document.getElementById("result-container");

let choiceA = document.getElementById("a");
let choiceB = document.getElementById("b");
let choiceC = document.getElementById("c");
let choiceD = document.getElementById("d");

// Array of Quiz Questions
let questions = [
  {
    question: "Tiger Woods memorably won by 12 shots in 1997. Who came second?",
    choiceA: "Tom Weiskopt",
    choiceB: "Tom Kite",
    choiceC: "Chris DiMarco",
    choiceD: "Tom Watson",
    correct: "A"
  }, {
    question: "Jack Nicklaus won his sixth and final green jacket in 1986. What age was he?",
    choiceA: "47",
    choiceB: "46",
    choiceC: "45",
    choiceD: "48",
    correct: "B"
  }, {
    question: "Rory McIlroy imploded on Sunday after holding a four-stoke lead overnight in 2011. Who ended up winning?",
    choiceA: "Adam Scott",
    choiceB: "Lee Westwood",
    choiceC: "Charl Schartzel",
    choiceD: "Louis Oosthuizen",
    correct: "C"
  }, {
    question: "Tiger Woods won in 2005 after a dramatic play-off. Who did he beat?",
    choiceA: "Scott Verplank",
    choiceB: "Chad Campbell",
    choiceC: "Chris DiMarco",
    choiceD: "Ian Poulter",
    correct: "C"
  }, {
    question: "Jordan Spieth fell victim to the dreaded 12th in 2016. What score did he have on the par-3?",
    choiceA: "8",
    choiceB: "6",
    choiceC: "7",
    choiceD: "9",
    correct: "C"
  }, {
    question: "Who is the youngest player to make the cut at Augusta?",
    choiceA: "Matteo Manasser",
    choiceB: "Ryo Ishikawa",
    choiceC: "Guan Tianlang",
    choiceD: "Rory Mcllroy",
    correct: "C"
  }, {
    question: "Who was the first player to shoot 63 at the Masters?",
    choiceA: "Jack Nicklaus",
    choiceB: "Nick Price",
    choiceC: "Ernie Els",
    choiceD: "Rory Mcllroy",
    correct: "B"
  }, {
    question: "When did Seve Ballesteros win his first Masters?",
    choiceA: "1978",
    choiceB: "1980",
    choiceC: "1979",
    choiceD: "1981",
    correct: "B"
  }, {
    question: "Larry Mize famously won in 1987 after a three-man play-off. Along with Seve who was the third member?",
    choiceA: "Ben Crenshaw",
    choiceB: "Greg Norman",
    choiceC: "Bernhard Langer",
    choiceD: "Sandy Lyle",
    correct: "B"
  }, {
    question: "Who does Gary Player share the record with for consecutive cuts made at the Masters?",
    choiceA: "Nich Faldo",
    choiceB: "Rikki Rockett",
    choiceC: "Ian Woosnam",
    choiceD: "Fred Couples",
    correct: "D"
  }
]


const lastQuestion = questions.length - 1;
let currentQuestion = 0;
let count = 0;
let score = 0;


function showQuestion() {
  let q = questions[currentQuestion];


  questionElement.innerText = q.question;
  choiceA.innerText = q.choiceA;
  choiceB.innerText = q.choiceB;
  choiceC.innerText = q.choiceC;
  choiceD.innerText = q.choiceD;
}

start.addEventListener("click", startQuiz);

function startQuiz() {
  if (player.value === '') {
    alert("Please enter name before clicking Start Quiz button");
  } else {
    instructions.classList.add('hide');
    quizContainerElement.classList.remove('hide');
    document.getElementById("username").innerHTML = player.value;
    showQuestion();
  }
}

function checkAnswer(answer) {
  if (answer == questions[currentQuestion].correct) {
    alert("Correct, Well Done!");
    increaseScore();
    score++

  } else {
    alert("Incorrect, Hard Luck!");
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
  const currentQuestionNumber = document.getElementById('current-question');
  currentQuestionNumber.innerText = currentQuestion + 1;
}


/*Functions to increase scores*/

function increaseScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

function increaseIncorrect() {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}

function showResult() {
  quizContainerElement.classList.add('hide');
  result.classList.remove('hide');



  const scorePercent = Math.round(100 * score / questions.length);
  console.log(scorePercent);

  if (scorePercent >= 80) {

    document.getElementById("result-message").innerText = `Congratulatios, you got ${scorePercent}%, you are a Masters champion!`;
  }

  else if (scorePercent >= 60) {
    document.getElementById("result-message").innerText = `Well done, you got ${scorePercent}%, you made the cut!`;
  }

  else if (scorePercent >= 40) {
    document.getElementById("result-message").innerText = `Hard luck, you got ${scorePercent}%, you didn't make the cut!`;
  }

  else if (scorePercent >= 0) {
    document.getElementById("result-message").innerText = `Unfortunatley, you got ${scorePercent}%, you're shit`;
  }
}




















