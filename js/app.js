function wordsWeCanUse(e){return e.length>=4}function setGuess(e){userGuess=e.toLowerCase()}function checkGuess(){correctGuess=!1,displayWord.forEach(function(e,a){userGuess===e&&(dashedWord[a]=e,correctGuess=!0)}),showResults(),deadlyCounter(),inputBox.value=""}function deadlyCounter(){if(dashedWord.join("")===word)guessResult.textContent="You Don't DIE";else{if(correctGuess===!0)return;if(deadCount>1){switch(deadCount--,deadCount){case 7:bottomBoard.style.display="block";break;case 6:tallBoard.style.display="block";break;case 5:topBoard.style.display="block";break;case 4:hangmanBody.style.display="block";break;case 3:hangmanHead.style.display="block";break;case 2:for(i=0;i<hangmanArms.length;++i)hangmanArms[i].style.display="block";break;case 1:for(i=0;i<hangmanLegs.length;++i)hangmanLegs[i].style.display="block";for(i=0;i<shake.length;++i)shake[i].classList.add("shake-it")}guessResult.textContent="You have "+deadCount+" guesses left"}else{for(guessResult.textContent="You lose",rope.style.display="block",neckRope.style.display="block",i=0;i<shake.length;++i)shake[i].classList.remove("shake-it");hangmanHead.classList.add("hangman-dead"),hangmanFace.style.display="none"}}}function showResults(){finalDisplay=dashedWord.join(" "),dashedWordElement.textContent=finalDisplay}var userGuess,wordIndex,totalIndex=0,manyWords,hangmanWords,dashedWord,displayWord,word,finalDisplay,correctGuess=!1,deadCount=9,guessResult=document.querySelector(".guess-result"),dashedWordElement=document.querySelector(".dashed-word"),inputBox=document.querySelector(".user-input"),bottomBoard=document.querySelector(".bottom-board"),tallBoard=document.querySelector(".tall-board"),topBoard=document.querySelector(".top-board"),hangmanBody=document.querySelector(".hangman-body"),hangmanHead=document.querySelector(".hangman-head"),hangmanFace=document.querySelector(".hangman-face"),hangmanArms=document.getElementsByClassName("hangman-arms"),hangmanLegs=document.getElementsByClassName("hangman-legs"),shake=document.getElementsByClassName("shake"),rope=document.querySelector(".rope"),neckRope=document.querySelector(".neck-rope");manyWords=["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"],hangmanWords=manyWords.filter(wordsWeCanUse),totalIndex=hangmanWords.length,wordIndex=Math.floor(Math.random()*totalIndex),word=hangmanWords[wordIndex],displayWord=word.split(""),dashedWord=displayWord.map(function(){return"_"}),deadlyCounter(),showResults();
//# sourceMappingURL=app.js.map