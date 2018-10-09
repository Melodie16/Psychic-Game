// The app randomly picks a letter, and the user has to guess which letter the app chose. 
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When player loses, increase the Losses counter and restart the game without a page refresh (just like when the user
var options = ["w", "g", "m","a","f"]; 
var wins = 0;
var losses = 0;
var guessesLeft = 7;
var yourGuessesSofar = 1;

document.onkeyup = function() {
 var userguess = String.fromCharCode(event.keyCode).toLowerCase(); 
  console.log(userguess);

 var computerGuess = options[Math.floor(Math.random()*options.length)];
   console.log(computerGuess); 

    if (userguess=='w' || userguess=='g' || userguess=='m' || userguess=='a' || userguess=='f') {
        if ((userguess=='w') && (computerGuess=='w')) {
        wins++; }
     
     if ((userguess=='g') && (computerGuess=='g')) {
         wins++; }
     
     if ((userguess=='m') && (computerGuess=='m')) {
         wins++; }
     
     if ((userguess=='a') && (computerGuess=='a')) {
         wins++; }
     
     if ((userguess=='f') && (computerGuess=='f')) {
         wins++; }
       else {
           losses++; }
    

    var html = "<p>Press w, g , m , a , or f  to play</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>guesses left: " + guessesLeft +"</p>" +
    "<p>your guesses so far: " + yourGuessesSofar + "</p>";

    // for (var yourGuessesSofar = 7; 7 <options.lenght; i++) {

    document.querySelector('#game').innerHTML = html;
    
    }
}

      