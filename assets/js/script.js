//Puts cursor into name-input box
document.getElementById("name").focus();

document.getElementById("quiz-container").style.display = "none";
document.getElementById("result-container").style.display = "none";




function startQuiz() {
    console.log("test");
    document.getElementById("instructions").style.display = "none";
    document.getElementById("quiz-container").style.display ="block";


    
   
}


// Array of Quiz Questions?
const questions = [
  {
    "question": "Tiger Woods memorably won by 12 shots in 1997. Who came second?",
    "options": ["Tom Weiskopt", "Tom Watson", "Tom Kite"],
    "correct": "Tom Weiskopt"
  },
  {
    "question": "Jack Nicklaus won his sixth and final green jacket in 1986. What age was he?",
    "options": ["45", "47", "46"],
    "correct": "46"
  },
  {
    "question": "Rory McIlroy imploded on Sunday after holding a four-stoke lead overnight in 2011. Who ended up winning?",
    "options": ["Adam Scott", "Louis Oosthuizen", "Charl Schwartzel"],
    "correct": "Charl Schartzel"
  },
  {
    "question": "Tiger Woods won in 2005 after a dramatic play-off. Who did he beat?",
    "options": ["Chris DiMarco", "Scott Verplank", "Chad Campbell"],
    "correct": "Chris DiMarco"
  },
  {
    "question": "Jordan Spieth fell victim to the dreaded 12th in 2016. What score did he have on the par-3?",
    "options": ["8", "7", "9"],
    "correct": "7"
  },
  {
    "question": "Who is the youngest player to make the cut at Augusta?",
    "options": ["Guan Tianlang", "Ryo Ishikawa", "Matteo Manassero"],
    "correct": "Guan Tianlang"
  },
  {
    "question": "Who was the first player to shoot 63 at the Masters?",
    "options": ["Jack Nicklaus", "Nick Price", "Ernie Els"],
    "correct": ""
  },
  {
    "question": "When did Seve Ballesteros win his first Masters?",
    "options": ["1980", "1978", "1979"],
    "correct": "1980"
  },
  {
    "question": "Larry Mize famously won in 1987 after a three-man play-off. Seve was one of the players he beat, but who was the play-off's third member?",
    "options": ["Ben Crenshaw", "Greg Norman", "Bernhard Langer"],
    "correct": "Greg Norman"
  },
  {
    "question": "Who does Gary Player share the record with for consecutive cuts made at the Masters?",
    "options": ["Nich Faldo", "Fred Couples", "Ian Woosnam"],
    "correct": "Rikki Rockett"
  },
]











function startQuiz() {
    document.getElementById('report').innerHTML = `
        <h4>Scuuuuup!!!</h4>`
}

function turnGreen() {
    let green = document.getElementById('green');
    green.style.backgroundColor = "rgba(110, 144, 117, 0.8)";
}

function turnBack() {
    let white = document.getElementById('green');
    white.style.backgroundColor = "var(--white)";
}