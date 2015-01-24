// Setting up my Variables
var userGuess,
    wordIndex,
    totalIndex = 0,
    manyWords,
    hangmanWords,
    dashedWord,
    displayWord,
    word,
    finalDisplay,
    correctGuess = false,
    deadCount = 9;

// Transfer DOM elements into variables so we can fill them up
// with cool feedback for our users...

var guessResult = document.querySelector('.guess-result');
var dashedWordElement = document.querySelector('.dashed-word');
var inputBox = document.querySelector('.user-input');

// Getting all Pieces of our hangman animation for use later
// The numbers are signifying the order they will appear


// #1 Bottom Board
var bottomBoard = document.querySelector('.bottom-board');

// #2 Tall Board
var tallBoard = document.querySelector('.tall-board');

// #3 Top Board
var topBoard = document.querySelector('.top-board');

// #4 Hangman Body
var hangmanBody = document.querySelector('.hangman-body');

// #5 Hangman Head
var hangmanHead = document.querySelector('.hangman-head');
var hangmanFace = document.querySelector('.hangman-face');

// #6 Hangman Arms
var hangmanArms = document.getElementsByClassName('hangman-arms');

// #7 Hangman Legs
var hangmanLegs = document.getElementsByClassName('hangman-legs')

// Items to Shake
var shake = document.getElementsByClassName('shake');

// #8 Rope
var rope = document.querySelector('.rope');
var neckRope = document.querySelector('.neck-rope');


// create an array full of words for us to use

manyWords = [
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

function wordsWeCanUse(palabra){
  return palabra.length >= 4;
}

// Getting Rid of words with less than 3 letters
hangmanWords = manyWords.filter(wordsWeCanUse);
// hangmanWords = manyWords.filter(elem => elem.length >= 3);

// find total number of words we have to choose from
totalIndex = hangmanWords.length;


//  Set the word to be guessed
  //   generate a random result
wordIndex = Math.floor(Math.random() * totalIndex);
  // assign word to a variable
word = hangmanWords[ wordIndex ];
  // split to an array
displayWord = word.split('');
  // generate a Dashed Display for the User
dashedWord = displayWord.map(function(ch){
  return '_';
});
  // generate an initial Count for the user
deadlyCounter();

showResults();

//  Capture the Input
  //   Assign it to a Variable

function setGuess(guessChar) {
  if (guessChar != '') {
    alert('you need to enter a letter');
  } else {
    userGuess = guessChar.toLowerCase();
  }
}

// Test the Result and give results back to the user

function checkGuess() {
  correctGuess = false;
  displayWord.forEach(function(letter, i){
    if (userGuess === letter) {
      dashedWord[i] = letter;
      correctGuess = true;
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
  } else if (correctGuess===true) {
    return;
  } else if (deadCount > 1) {
    deadCount--;
    switch (deadCount) {
      case 7:
        bottomBoard.style.display = 'block';
        break;
      case 6:
        tallBoard.style.display = 'block';
        break;
      case 5:
        topBoard.style.display = 'block';
        break;
      case 4:
        hangmanBody.style.display = 'block';
        break;
      case 3:
        hangmanHead.style.display = 'block';
        break;
      case 2:
        for (i=0; i < hangmanArms.length; ++i) {
          hangmanArms[i].style.display = 'block';
        }
        // hangmanArms.forEach(function(elem){
        //   elem.style.display = 'block';
        // });
        break;
      case 1:
        for (i=0; i < hangmanLegs.length; ++i) {
          hangmanLegs[i].style.display = 'block';
        }
        for (i=0; i < shake.length; ++i) {
          shake[i].classList.add('shake-it');
        }
        break;
    }
    guessResult.textContent = 'You have ' +  deadCount + ' guesses left';
  } else {
    guessResult.textContent = 'You lose';
    rope.style.display = 'block';
    neckRope.style.display = 'block';
    for (i=0; i < shake.length; ++i) {
      shake[i].classList.remove('shake-it');
    }
    hangmanHead.classList.add('hangman-dead');
    hangmanFace.style.display = 'none';
  }
}

// Publish results
function showResults() {
  finalDisplay = dashedWord.join(' ');
  dashedWordElement.textContent = finalDisplay;
}
