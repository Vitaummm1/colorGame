const randColor = () => {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

const difColor = () => {
    return Math.floor(Math.random()*9);
}

const colors = document.querySelectorAll('.color');
const startButton = document.querySelector('button');
let highScoreStatus = document.querySelector('#highScore');
let scoreStatus = document.querySelector('#score');
let highScore = 0;
let score = 0;
highScoreStatus.innerHTML = highScore;
scoreStatus.innerHTML = score;

const gameStart = () => {
    let gameColor = randColor();
    let difNumber = parseInt(difColor());
    for (let color of colors){
        color.style.backgroundColor = gameColor;
    }
    colors[difNumber].classList.toggle('wrongButton');
    gameColor = randColor();
    document.querySelector('.wrongButton').style.backgroundColor = gameColor;
    startButton.disabled = true;
}

const gameEnd = () => {
    for(let color of colors){
        color.style.backgroundColor = 'white';
    }
    score=0;
    scoreStatus.innerHTML=score;
    startButton.disabled = false;
}
startButton.addEventListener('click', gameStart);

for(let color of colors){
    color.addEventListener('click', () => {
        if(color.classList.contains('wrongButton') === true){
        color.classList.toggle('wrongButton');
        gameStart();
        score++;
        scoreStatus.innerHTML = score;
        if(highScore<score){
            highScore=score;
            highScoreStatus.innerHTML = highScore;
        }
        }
        else{
        gameEnd();
        }
    })
}
