    var Name = prompt("Welkom! Wat is je naam?");
		alert("Hey, " + Name);

        alert('voer een cijfer tussen 1 en 25 in de invoerbalk in om te beginnen, ' + Name )
//Generate a random number between 1 and 500
let randomNumber = parseInt((Math.random()*25)+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame){
    subt.addEventListener('click', function(e){
        e.preventDefault();
        //Grab guess from user
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert('Gelieve een geldig nummer invoeren');
    } else if (guess < 0) {
        alert('Voer een getal groter dan 0 in!');
    } else if (guess > 26){
        alert('Voer een getal kleiner dan 25 in!')
    } else {
        //Keep record of number of attempted guesses
        previousGuesses.push(guess);
        //Check to see if game is over
        if (numGuesses === 5){
            displayGuesses(guess);
            displayMessage(`Game Over! Nummer is ${randomNumber}`);
            endGame();
        } else {
        //Display previous guessed numbers
        displayGuesses(guess);
        //Check guess and display if wrong
        checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //Display clue if guess is too high or too low
    if (guess === randomNumber){
        displayMessage(`Gewonnen!!!, Tot de volgende keer!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Te laag! Prbeer opnieuw!`);
    } else if (guess > randomNumber) {
        displayMessage(`Te hoog! Prbeer opnieuw!`);
    }
}

function displayGuesses(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuesses++
    remaining.innerHTML = `${6 - numGuesses}  `;
}

function displayMessage(message){
        lowOrHi.innerHTML = `<h1>${message}</h1>`
}

function endGame(){
    //Clear user input
    userInput.value = '';
    //Disable user input button
    userInput.setAttribute('disabled', '');
    //Display Start new Game Button
        p.classList.add('button');
        p.innerHTML = `<h1 id="newGame">Start Nieuw Spel</h1>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        //Pick a new random number
        randomNumber = parseInt((Math.random()*25)+1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}



