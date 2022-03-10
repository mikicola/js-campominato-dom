const idLevel = document.getElementById('level');
const btnPlay = document.querySelector('.btn-play');
const gameArea = document.querySelector('.game-area');

const message = document.querySelector('.message')

let level = document.getElementById('level');

btnPlay.addEventListener('click', startGame);





function startGame() {
    message.innerHTML = '';
    let score = 0; //definisco punteggio iniziale

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
    const arrRandomBombs = [];

    for (i = 0; i < 16; i++) {
        let randomNum;

        // ciclo per avere 16 numeri random diversi
        do{
            randomNum = getRandomNum(1, 16);
        }while(arrRandomBombs.includes(randomNum)){ //per non avere numeri doppo
        arrRandomBombs.push(randomNum)

        }
    }
    console.log(arrRandomBombs)


    function selectedSquareChangeColor(element) {
        
        squareValue = parseInt(this.innerHTML);
        console.log('valore square', squareValue);
        
        
        if (arrRandomBombs.includes(squareValue)){ // = se in arrrandomBombs è incluso il valore di squareValue abbiamo preso una bomba
            this.classList.add('square-selected-color-bomb'); //cambia colore al click (BOMBA)
            console.log('hai perso, hai preso una bomba!')

            message.innerHTML = 'Hai preso una bomba! Hai totalizzato ' + score + ' punti' 
        }else{
            this.classList.add('square-selected-color'); //cambia colore al click
            score++ //incremento del punteggio
        }

        this.removeEventListener('click', selectedSquareChangeColor); //impedisce di ripremere su un elemento square
    }
}



function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

