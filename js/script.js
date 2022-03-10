const idLevel = document.getElementById('level');
const btnPlay = document.querySelector('.btn-play');
const gameArea = document.querySelector('.game-area');
let level = document.getElementById('level');

const message = document.querySelector('.message')
const bombNum = 16;

btnPlay.addEventListener('click', startGame);


function startGame() {
    message.innerHTML = '';
    let score = 0; //definisco punteggio iniziale
    

    gameArea.innerHTML = '';
    if (level.value == 'Easy') {
        for (let i = 1; i <= 100; i++) {
            let square = document.createElement("div");
            square.classList.add("square-easy");
            square.classList.add("square");

            gameArea.append(square);
            square.innerHTML = i;

            totSquares = 100;
            square.addEventListener('click', selectedSquareChangeColor);
            console.log(i)
        }

    } else if (level.value == 'Medium') {
        for (let i = 1; i <= 81; i++) {
            let square = document.createElement("div");
            square.classList.add("square-medium");
            square.classList.add("square");
            gameArea.append(square);
            square.innerHTML = i;

            totSquares = 81;
            square.addEventListener('click', selectedSquareChangeColor);
            console.log(i)
        }
    } else if (level.value == 'Hard') {
        for (let i = 1; i <= 49; i++) {
            let square = document.createElement("div");
            square.classList.add("square-hard");
            square.classList.add("square");
            gameArea.append(square);
            square.innerHTML = i;

            totSquares = 49;
            square.addEventListener('click', selectedSquareChangeColor);
            console.log(i)
        }
    }

    const arrRandomBombs = [];

    for (i = 0; i < bombNum; i++) {
        let randomNum;

        // ciclo per avere 16 numeri random diversi
        do{
            randomNum = getRandomNum(1, totSquares);
        }while(arrRandomBombs.includes(randomNum)){ //per non avere numeri doppo
        arrRandomBombs.push(randomNum)

        }
    }
    console.log(arrRandomBombs.sort()) //.sort() mette i num in ordire circa

    const goodSquares = totSquares - bombNum; //definisco le squres belle e gentili
    // console.log('le buone sono ' + goodSquares)

    function selectedSquareChangeColor(element) {    
        squareValue = parseInt(this.innerHTML);
        console.log('valore square', squareValue);
        const squares = document.querySelectorAll('.square'); //ho agginto .square a tutti (square-easy, -medium e -hard) per selezionarli e rimuovere add event listener per non far andare click dopo vittoria o sconfitta
            
            if (arrRandomBombs.includes(squareValue)){ // = se in arrrandomBombs è incluso il valore di squareValue abbiamo preso una bomba
                this.classList.add('square-selected-color-bomb'); //cambia colore al click (BOMBA)
                console.log('hai perso, hai preso una bomba!')
                for(i = 0; i < squares.length; i++){
                    squares[i].removeEventListener('click', selectedSquareChangeColor);
                }//blocca il gioco
    
                message.innerHTML = 'Hai preso una bomba! Hai totalizzato ' + score + ' punti' 
            }else{
                this.classList.add('square-selected-color'); //cambia colore al click
                score++ //incremento del punteggio
            }

            if (score == goodSquares){ //se il punteggio è uguale alle good squares hai vinto
                message.innerHTML = 'Hai vinto! Hai totalizzato ' + score + ' punti' ;


                for(i = 0; i < squares.length; i++){
                    squares[i].removeEventListener('click', selectedSquareChangeColor);
                }//blocca il gioco
            }
        

        this.removeEventListener('click', selectedSquareChangeColor); //impedisce di ripremere su un elemento square
    }
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}