var computerGuess = ['u', 's', 'u', 'c', 'k'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var letterToGuess = null;
// we create these variable to be our starting value of the game

var wins_span = document.querySelector('#wins');
var losses_span = document.querySelector('#losses');
var guessesLeft_span = document.querySelector('#guessesLeft');
var guessesSoFar_span = document.querySelector('#guessesSoFar');

// Line 24-27 is selecting the span's Lines 10-14 and telling it to print
// the value from variables on line 19-22 next to the span paragraphs

wins_span.innerText = wins;
losses_span.innerText = losses;
guessesSoFar_span.innerText = guessesSoFar;
guessesLeft_span.innerText = guessesLeft;

function psychicGame(event){

var computerOptionIndex = Math.floor(Math.random()*computerGuess.lenth);

var computerGuess = computerGuess[computerOptionIndex];

var userGuess = event.key;

document.querySelector('#guessesSoFar').innerText = userGuess;
// document.querySelector('#guessesLeft').innerText = guessesLeft;
document.onkeyup = function(event) {

}
if (userGuess == 'u'){
  wins++;
  wins_span.innerText = wins;
}else {
  losses++;
  losses_span.innerText = losses;
  }
}

document.onkeyup = psychicGame;
