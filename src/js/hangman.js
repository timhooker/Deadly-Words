// Setting up my Variables
var userGuess,
    wordIndex,
    dashedWord,
    word,
    finalDisplay,
    correctGuess = 'n',
    deadCount = 9;

// Transfer DOM elements into variables so we can fill them up
// with cool feedback for our users...

var guessResult = document.querySelector('.guess-result');
var dashedWordElement = document.querySelector('.dashed-word');
var inputBox = document.querySelector('.user-input');

// create an array full of words for us to use

var hangmanWords = [
    "the","of","and","a","to","in","is","you","that","it","he",
    "was","for","on","are","as","with","his","they","I","at","be",
    "this","have","from","or","one","had","by","word","but","not",
    "what","all","were","we","when","your","can","said","there",
    "use","an","each","which","she","do","how","their","if","will",
    "up","other","about","out","many","then","them","these","so",
    "some","her","would","make","like","him","into","time","has",
    "look","two","more","write","go","see","number","no","way",
    "could","people","my","than","first","water","been","call",
    "who","oil","its","now","find","long","down","day","did","get",
    "come","made","may","part"
    ];


//  Set the word to be guessed
  //   generate a random result

wordIndex = Math.floor(Math.random() * 100) + 1;
  // assign word to a variable
word = hangmanWords[ wordIndex ];
  // split to an array
var displayWord = word.split('');
  // generate a Dashed Display for the User
var dashedWord = displayWord.map(function(ch){
  return '_';
})
  // generate an initial Count for the user
deadlyCounter();
console.log(word);
showResults();

//  Capture the Input
  //   Assign it to a Variable

function setGuess(guessChar) {
  userGuess = guessChar.toLowerCase();
}

// Test the Result and give results back to the user

function checkGuess() {
  console.log('checkGuess');
  correctGuess = "n";
  displayWord.forEach(function(letter, i){
    if (userGuess === letter) {
      dashedWord[i] = letter;
      correctGuess = "y";
    }
  });
  showResults();
  deadlyCounter();
  inputBox.value='';
}

//
// Count down the guesses and calculate responses

function deadlyCounter() {
  if (dashedWord.join('')===word) {
    guessResult.textContent = 'You Don\'t DIE';
  } else if (correctGuess==='y') {
    return;
  } else if (deadCount > 1) {
    deadCount--;
    guessResult.textContent = 'You have ' +  deadCount + ' guesses left';
  } else {
    guessResult.textContent = 'You lose';
  }
}

// Publish results
function showResults() {
  finalDisplay = dashedWord.join(' ');
  dashedWordElement.textContent = finalDisplay;
}
