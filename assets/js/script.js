//Puts cursor into name-input box
document.querySelector("#name").focus();

const start = document.querySelector('#startquiz');
const instructions = document.querySelector('#instructions');
const quizContainerElement = document.querySelector('#quiz-container');
const questionElement = document.querySelector('#quiz-question');
const optionsElement = document.querySelector('#options');
const nextButton = document.querySelector('#next-btn');
const resultsButton = document.querySelector('#results-btn');
const optionsAreaElement = document.querySelector('#options-area');
const player = document.querySelector("#name");
const result = document.querySelector("#result-container");

const playerName = document.querySelector("#username");

const currentQuestionNumber = document.querySelector("#current-question");

const correctScore = document.querySelector("#score");
const incorrectScore = document.querySelector("#incorrect")
const username = document.querySelector("#username-result");
const resultMessage = document.querySelector("#result-message");

let shuffledQuestions, currentQuestionIndex;
let score = 0;


start.addEventListener("click", startQuiz);

function startQuiz() {
  if (player.value === '') {
    alert("Please enter name before clicking Start Quiz button");
  } else {
    instructions.classList.add('hide');
    quizContainerElement.classList.remove('hide');
    playerName.innerHTML = player.value;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    displayQuestion();
  }
}

function displayQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  currentQuestionNumber.innerText = currentQuestionIndex + 1;

  questionElement.innerHTML = question.question;
  question.answers.forEach(answer => {
    let button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('option-btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    optionsAreaElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add('hide');
  while (optionsAreaElement.firstChild) {
    optionsAreaElement.removeChild(optionsAreaElement.firstChild);
  }
}

function selectAnswer(event) {
  let selectedButton = event.target;
  let correctOption = selectedButton.dataset.correct === 'true';
  let allQuestionOptions = optionsAreaElement.children.length;
  
  for (let i = 0; i < allQuestionOptions; i++) {
    let currentButton = optionsAreaElement.children[i];
    let isCorrect = currentButton.dataset.correct === 'true';
    
    if (isCorrect) {
      currentButton.style.backgroundColor = "green";
    }
    currentButton.classList.add('disable');
  }

  if (correctOption) {
  
    selectedButton.style.backgroundColor = "green";
    increaseScore()
    score++
  } else {
    selectedButton.style.backgroundColor = "red";
    selectedButton.classList.add('disable');
    /*increaseIncorrect()*/
  }

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    resultsButton.classList.remove('hide');
  }
}

 
/*Functions to increase scores*/

function increaseScore() {
  let oldScore = parseInt(correctScore.innerHTML);
  correctScore.innerHTML = ++oldScore;
}

/*function increaseIncorrect() {
  let oldScore = parseInt(incorrectScore.innerHTML);
  incorrectScore.innerHTML = ++oldScore;
}*/

/*function for next button*/
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  displayQuestion();
});


resultsButton.addEventListener('click', () => {
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
}); 

const questions = [
  {
    question: 'Tiger Woods memorably won by 12 shots in 1997. Who came second?',
    answers: [
      { text: 'Tom Weiskopt', correct: true },
      { text: 'Chris DiMarco', correct: false },
      { text: 'Tom Kite', correct: false },
      { text: 'Tom Watson', correct: false }
    ]
  },
  {
    question: 'Jack Nicklaus won his sixth and final green jacket in 1986. What age was he?',
    answers: [
      { text: '47', correct: false },
      { text: '46', correct: true },
      { text: '45', correct: false },
      { text: '48', correct: false }
    ]
  },
  {
    question: 'Rory McIlroy imploded on Sunday after holding a four-stoke lead overnight in 2011. Who ended up winning?',
    answers: [
      { text: 'Adam Scott', correct: false },
      { text: 'Lee Westwood', correct: false },
      { text: 'Charl Schartzel', correct: true },
      { text: 'Louis Oosthuizen', correct: false }
    ]
  },
  {
    question: 'Tiger Woods won in 2005 after a dramatic play-off. Who did he beat?',
    answers: [
      { text: 'Scott Verplan', correct: false },
      { text: 'Chad Campbell', correct: false },
      { text: 'Chris DiMarco', correct: true },
      { text: 'Ian Poulter', correct: false }
    ]
  },
  {
    question: 'Jordan Spieth fell victim to the dreaded 12th in 2016. What score did he have on the par-3?',
    answers: [
      { text: '6', correct: false },
      { text: '7', correct: true },
      { text: '9', correct: false },
      { text: '8', correct: false }
    ]
  },
  {
    question: 'Who is the youngest player to make the cut at Augusta?',
    answers: [
      { text: 'Matteo Manassero', correct: false },
      { text: 'Ryo Ishikawa', correct: false },
      { text: 'Guan Tianlang', correct: true },
      { text: 'Rory Mcllroy', correct: false }
    ]
  },
  {
    question: 'Who was the first player to shoot 63 at the Masters?',
    answers: [
      { text: 'Jack Nicklaus', correct: false },
      { text: 'Nick Price', correct: true },
      { text: 'Ernie Els', correct: false },
      { text: 'Rory Mcllroy', correct: false }
    ]
  },
  {
    question: 'When did Seve Ballesteros win his first Masters?',
    answers: [
      { text: '1978', correct: false },
      { text: '1980', correct: true },
      { text: '1979', correct: false },
      { text: '1981', correct: false }
    ]
  },
  {
    question: 'Larry Mize famously won in 1987 after a three-man play-off. Along with Seve who was the third member?',
    answers: [
      { text: 'Ben Crenshaw', correct: false },
      { text: 'Greg Norman', correct: true },
      { text: 'Bernhard Langer', correct: false },
      { text: 'Sandy Lyle', correct: false }
    ]
  },
  {
    question: 'Who does Gary Player share the record with for consecutive cuts made at the Masters?',
    answers: [
      { text: 'Nick Faldo', correct: false },
      { text: 'Rikki Rockett', correct: false },
      { text: 'Ian Woosnam', correct: false },
      { text: 'Fred Couples', correct: true }
    ]
  },
]



/*fetch("assets/js/questions.json")
.then(res => {
return res.json();
})
.then(loadedQuestion => {
questions = loadedQuestion;

*/