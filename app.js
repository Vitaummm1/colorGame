const randParam = () => {
    return Math.floor(Math.random()*256);}

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
    let r = randParam();
    let g = randParam();
    let b = randParam();
    let gameColor1 = `rgb(${r},${g},${b})`;
    let difNumber = parseInt(difColor());
    for (let color of colors){
        color.style.backgroundColor = gameColor1;
    }
    colors[difNumber].classList.toggle('wrongButton');
    if(score<=5){
        r -= Math.floor(Math.random()*80);
        if(r<0){
        r=0;
        }
        g -= Math.floor(Math.random()*80);
        if(g<0){
        g=0;
        }
        b -= Math.floor(Math.random()*80);
        if(b<0){
        b=0;
        }
    gameColor2 = `rgb(${r},${g},${b})`;
    }
    else if (score>5&&score<=10){
        r -= Math.floor(Math.random()*50);
        if(r<0){
        r=0
        }
        g -= Math.floor(Math.random()*50);
        if(g<0){
        g=0
        }
        b -= Math.floor(Math.random()*50);
        if(b<0){
        b=0
        }
    gameColor2 = `rgb(${r},${g},${b})`;
    }
    else {
        r -= Math.floor(Math.random()*20);
        if(r<0){
        r=0;
        }
        g -= Math.floor(Math.random()*20);
        if(g<0){
        g=0;
        }
        b -= Math.floor(Math.random()*20);
        if(b<0){
        b=0;
        }
    gameColor2 = `rgb(${r},${g},${b})`;
    }
    document.querySelector('.wrongButton').style.backgroundColor = gameColor2;
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
