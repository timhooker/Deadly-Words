function setGuess(e){userGuess=e.toLowerCase()}function checkGuess(){displayWord.forEach(function(e,o){userGuess===e&&(dashedWord[o]=e)}),showResults(),deadlyCounter()}function deadlyCounter(){dashedWord.join("")===word?guessResult.textContent="You Don't DIE":deadCount>1?(deadCount--,guessResult.textContent="You have "+deadCount+" guesses left"):guessResult.textContent="You lose"}function showResults(){finalDisplay=dashedWord.join(" "),dashedWordElement.textContent=finalDisplay}var userGuess,wordIndex,dashedWord,word,finalDisplay,deadCount=9,guessResult=document.querySelector(".guess-result"),dashedWordElement=document.querySelector(".dashed-word"),hangmanWords=["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];wordIndex=Math.floor(100*Math.random())+1,word=hangmanWords[wordIndex];var displayWord=word.split(""),dashedWord=displayWord.map(function(){return"_"});deadlyCounter(),console.log(word),showResults();
//# sourceMappingURL=app.js.map