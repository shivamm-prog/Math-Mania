let selectedLevel = "";

let num1, num2;
let correctAnswer;
let score = 0;
let time = 10;
let timer;


// Select Level
function selectLevel(level) {

    selectedLevel = level;

    localStorage.setItem("level", level);

    alert("You selected " + level);

}


// Start Game
function startGame() {

    if (selectedLevel == "") {
        alert("Please select a level!");
    }
    else {
        window.location.href = "game.html";
    }

}


// Generate Question
function generateQuestion() {

    let level = localStorage.getItem("level");

    let max = 10;

    if (level == "medium") {
        max = 50;
    }
    else if (level == "hard") {
        max = 100;
    }

    num1 = Math.floor(Math.random() * max) + 1;
    num2 = Math.floor(Math.random() * max) + 1;

    correctAnswer = num1 + num2;

    document.getElementById("question").innerHTML =
        num1 + " + " + num2 + " = ?";

    document.getElementById("answer").value = "";

    time = 10;

    document.getElementById("timer").innerHTML = time;

    clearInterval(timer);

    timer = setInterval(function() {

        time--;

        document.getElementById("timer").innerHTML = time;

        if (time == 0) {
            endGame();
        }

    }, 1000);

}


// Check Answer
function checkAnswer() {

    let answer = document.getElementById("answer").value;

    if (answer == "") {
        alert("Enter your answer!");
    }

    else if (Number(answer) == correctAnswer) {

        score++;

        document.getElementById("score").innerHTML = score;

        localStorage.setItem("score", score);

        alert("Correct Answer!");

        generateQuestion();

    }

    else {
        endGame();
    }

}

// End Game
function endGame() {

    clearInterval(timer);

    localStorage.setItem("score", score);

    window.location.href = "result.html";

}
// Display Final Score
if (document.getElementById("finalScore")) {

    let finalScore = localStorage.getItem("score");

    document.getElementById("finalScore").innerHTML = finalScore;

}
// Play Again
function playAgain() {
    score = 0;
    window.location.href = "game.html";
}

// Go to Home
function goHome() {
    window.location.href = "index.html";
}
// Start First Question
if (document.getElementById("question")) {
    generateQuestion();
}