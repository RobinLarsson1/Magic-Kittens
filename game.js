// 1. Vid klick på respektive knapp nedan händer följande:
//   -Svårighetsgrad väljs ut, ett ord slumpas fram, och ordet appendas till spelet i form av understreck
difficultyEasy.addEventListener('click', function() { setDifficulty('easy') });
difficultyMedium.addEventListener('click', function() { setDifficulty('medium') });
difficultyHard.addEventListener('click', function() { setDifficulty('hard') });

// 2a. Här väljs spelarnamnet, sker vid tryck på enter-knappen
nameInput.addEventListener("keyup", (event) => { appendPlayerName(event) });
    // appendPlayerName tar inputfältets värde, gör om till en variabel och appendar samtidigt namnet till spelet

// 2b. Här väljs spelarnamnet, sker vid tryck på "Redo att spela"-knappen
nameInputButton.addEventListener('click', function() {
    appendPlayerNameWhenButtonClicked()
  })


// HÄRIFRÅN BÖRJAR SJÄLVA SPELET
document.onkeydown = function(event) {
  //Tangentbordet
  let key = event.key.toLowerCase();

  let singleLetter = secretWord.split("");

  //Kolla om gissningen är rätt
  let isCorrectGuess = singleLetter.includes(key);

  //Kollar om man redan gissat 
  let isGuessed = guessedLetters.includes(key);

  //Kollar om det man gissat är disabled key
  let isDisabled = disabledKeys.includes(key);

  //Kollar om en ny och korrekt key är pressed, samt om man har slut på gissningar
  let isValidGuess = isCorrectGuess ||(!isCorrectGuess && !isGuessed && mistakes < maxWrong && !isDisabled)


  
  // Förhindrar input utanför namninputs-modalen
  let nameOverlayIsHidden = modalPanels.enterName.className.includes("hidden");
  console.log(event.key);

  if (nameOverlayIsHidden === true) {

  //Skickar in korrekt gissning iställer för understräcken
  function updateCorrectGuess() {
    singleLetter.forEach((char, index) => {
        if (char === key) {
            dashes[index].innerText = char;
        }
    });
} 



//kallar på rätt funktion beroende på vilken gissning som anges
  if (isCorrectGuess) {
      updateCorrectGuess()
  } else if (isValidGuess) {
      updateIncorrectGuess()
  }

  //Kolla om spelet är förlorat
  let gameIsOver = mistakes >= maxWrong;
  if (gameIsOver) {
    gameResultModalOverlay(false, answer);
    publishStats(false);
  }

  //Kolla om spelet är vunnet 
  let isGameWon = isWordComplete(singleLetter, dashes)
  if (isGameWon) {
    gameResultModalOverlay(true, null, mistakes);
    publishStats(true);
  }
}}
