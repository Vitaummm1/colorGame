// definition of variables
const colors = document.querySelectorAll(".color");
const startButton = document.querySelector("button");
let highScoreStatus = document.querySelector("#highScore");
let scoreStatus = document.querySelector("#score");
let highScore = 0;
let score = 0;
highScoreStatus.innerHTML = highScore;
scoreStatus.innerHTML = score;
let clickSound = new Audio('sounds/16961_1461335343.mp3');
let wrongSound = new Audio('sounds/16964_1461335344.mp3');
// initial events
for (let color of colors) {
    color.style.backgroundColor = "white";
}
// definition of functions
const randParam = () => {
    return Math.floor(Math.random() * 256);
};

const difColor = () => {
    return Math.floor(Math.random() * 9);
};

const scoreColor = function (r, g, b, limiter) {
    r -= Math.floor(Math.random() * limiter);
    if (r < 0) {
        r = 0;
    }
    g -= Math.floor(Math.random() * limiter);
    if (g < 0) {
        g = 0;
    }
    b -= Math.floor(Math.random() * limiter);
    if (b < 0) {
        b = 0;
    }
    return `rgb(${r},${g},${b})`;
};

const gameStart = () => {
    let r = randParam();
    let g = randParam();
    let b = randParam();
    let gameColor1 = `rgb(${r},${g},${b})`;
    let difNumber = parseInt(difColor());
    for (let color of colors) {
        color.style.backgroundColor = gameColor1;
    }
    colors[difNumber].classList.toggle("wrongButton");
    if (score <= 5) {
        gameColor2 = scoreColor(r, g, b, 80);
    } else if (score > 5 && score <= 10) {
        gameColor2 = scoreColor(r, g, b, 50);
    } else{
        gameColor2 = scoreColor(r, g, b, 20);
    }
    document.querySelector(".wrongButton").style.backgroundColor = gameColor2;
    clickSound.play();
    startButton.disabled = true;
}

const gameEnd = () => {
    for (let color of colors) {
        color.style.backgroundColor = "white";
    }
    score = 0;
    scoreStatus.innerHTML = score;
    wrongSound.play();
    startButton.disabled = false;
};
// definition of events
startButton.addEventListener("click", gameStart);

for (let color of colors) {
    color.addEventListener("click", () => {
        if (color.classList.contains("wrongButton") === true) {
            color.classList.toggle("wrongButton");
            gameStart();
            score++;
            scoreStatus.innerHTML = score;
            if (highScore < score) {
                highScore = score;
                highScoreStatus.innerHTML = highScore;
            }
        } else {
            gameEnd();
        }
    });
}