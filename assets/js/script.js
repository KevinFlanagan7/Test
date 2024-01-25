/*Puts cursor into name-input box*/
document.querySelector("#name").focus();

/*Declaration of Global constants*/
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
const correctSound = document.querySelector("#correct-sound");
const incorrectScore = document.querySelector("#incorrect")
const username = document.querySelector("#username-result");
const resultMessage = document.querySelector("#result-message");
const crowdApplause = document.querySelector("#crowd-applause");
const incorrectSound = document.querySelector("#incorrect-sound");

/*Declaration of Global variables*/
let shuffledQuestions, currentQuestionIndex;
let score = 0;

/*Event Listeners to start quiz*/
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
    displayShuffledQuestion();
  }
}

function displayShuffledQuestion() {
  resetState();
  showOptions(shuffledQuestions[currentQuestionIndex]);
}

function showOptions(question) {
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
  let allOptions = optionsAreaElement.children.length;

  for (let i = 0; i < allOptions; i++) {
    let currentButton = optionsAreaElement.children[i];
    let isCorrect = currentButton.dataset.correct === 'true';

    if (isCorrect) {
      currentButton.style.backgroundColor = "green";
    }
    currentButton.disabled = true;
  }

  if (correctOption) {
    selectedButton.style.backgroundColor = "green";
    correctSound.play();
    increaseScore();
    score++
  } else {
    selectedButton.style.backgroundColor = "red";
    incorrectSound.play();
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

/*Evenet Listenereer for Next button*/
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  displayShuffledQuestion();
});

/*Evenet Listenereer for Results button*/
resultsButton.addEventListener('click', () => {
  quizContainerElement.classList.add('hide');
  result.classList.remove('hide');
  username.innerHTML = player.value;
  const scorePercent = Math.round(100 * score / questions.length);
  if (scorePercent >= 80) {
    resultMessage.innerHTML = `Congratulations, you got ${scorePercent}%, you are a Masters champion!`;
    crowdApplause.play();
  } else if (scorePercent >= 60) {
    resultMessage.innerHTML = `Well done, you got ${scorePercent}%, you made the cut!`;
  } else if (scorePercent >= 40) {
    resultMessage.innerHTML = `Hard luck, you got ${scorePercent}%, you didn't make the cut!`;
  } else if (scorePercent >= 0) {
    resultMessage.innerHTML = `Unfortunatley, you only got ${scorePercent}%, they didn't really suit you!`;
  }
});

/*Fetch API (Application Programming Interface) to get Quiz questions from local json file*/
let questions = [];

fetch("assets/js/questions.json")
  .then(resp => {
    return resp.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions;
  });

