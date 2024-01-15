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