const idLevel = document.getElementById('level');
const btnPlay = document.querySelector('.btn-play');
const gameArea = document.querySelector('.game-area');
let level = document.getElementById('level');

btnPlay.addEventListener('click', startGame);



function selectedSquareChangeColor() {
    this.classList.add('square-selected-color');
}

function startGame() {

    gameArea.innerHTML = '';
    if (level.value == 'Easy') {
        for (let i = 1; i <= 100; i++) {
            let square = document.createElement("div");
            square.classList.add("square-easy");
            gameArea.append(square);
            square.innerHTML = i;

            square.addEventListener('click', selectedSquareChangeColor);
            console.log(i)
        }

    } else if (level.value == 'Medium') {
        for (let i = 1; i <= 81; i++) {
            let square = document.createElement("div");
            square.classList.add("square-medium");
            gameArea.append(square);
            square.innerHTML = i;

            square.addEventListener('click', selectedSquareChangeColor);
            console.log(i)
        }
    } else if (level.value == 'Hard') {
        for (let i = 1; i <= 49; i++) {
            let square = document.createElement("div");
            square.classList.add("square-hard");
            gameArea.append(square);
            square.innerHTML = i;

            square.addEventListener('click', selectedSquareChangeColor);
            console.log(i)
        }
    }

    // inizio seconda parte esercizio 
    const arrRandom = [];

    for (i = 0; i < 16; i++) {
        let randomNum;
        
        // ciclo per avere 16 numeri random diversi
        do{
            randomNum = getRandomNum(1, 16);
        }while(arrRandom.includes(randomNum)){ //per non avere numeri doppo
        arrRandom.push(randomNum)

        }
    }
    console.log(arrRandom)
}



function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}