//funktion för att ladda om sidan
function reloadGame() {
  location.reload()
};

let errorMessageText = {
  empty: '',
  inputError: 'Var god ange ditt namn!',
  difficultyError: 'Var god ange en svårighetsgrad!'
}

function errorMessage(action) {
  let errorMessage = document.querySelector('.error-message')
  if (action === 'textinput') {errorMessage.innerText = errorMessageText.inputError} 
  else if (action === 'difficultyButton') {errorMessage.innerText = errorMessageText.difficultyError}
}

//Resetknappar i win, lose samt för header
resetButtonForWinOrLoseModalScreen.forEach(button => {
  button.addEventListener('click', (event) => {
    reloadGame()
    overlayScreenToggle()
  })
})

headerButtonList.resetGame.addEventListener("click", reloadGame);


// Gå till scoreboard efter lose eller win
goToScoreboardButton.forEach(button => {
  button.addEventListener('click', () => {
    if (!document.querySelector('#win-modal').classList.contains('hidden')) {
      modalPanels.endWin.classList.add('hidden')
      goToScoreboard()
    }
    if (!document.querySelector('#lose-modal').classList.contains('hidden')) {
      modalPanels.endLose.classList.add('hidden')
      goToScoreboard()
    }
  });
})

//Skickar in hemliga ordet
function appendSecretWordToDashes() {
  const svar = document.getElementById('correctLetters');
  svar.innerHTML = secretWord.replace(/./g, '<span class="dashes">_</span>');
  }

// FUNKTION - Namn-input
nameInput.addEventListener("keyup", (event) => {
  appendPlayerName(event)
});

function appendPlayerName(event) {
      // Kollar om inputfältet är tomt eller ej
      let isNameProvided = (nameInput.value !== '')
    
      if ((event.code === "Enter") && (nameInput.value !== '')) {
      namePlaceholder.innerText = " " + nameInput.value;
      p1name = nameInput.value;
      nameInput.remove();
      modalPanels.enterName.className = "hidden";
      let overlay = document.querySelector(".overlay");
      overlay.classList.add("hidden");
    } else if (isNameProvided === false) {
      errorMessage('textinput')
  } else if (difficultySelected === false) {
    errorMessage('difficultyButton')
  }
}



// FUNKTION - Namn-input kopplat till "Redo att spela!"-knapp
let nameInputButton = document.querySelector("#name-enter-button");
nameInputButton.addEventListener("click", () => {

    // Kollar om inputfältet är tomt eller ej
    let isNameProvided = (nameInput.value !== '' && difficultySelected === true)

    if (isNameProvided === true) {
        namePlaceholder.innerText = " " + nameInput.value;
        p1name = nameInput.value;
        nameInput.remove();
        modalPanels.enterName.className = "hidden";
        let overlay = document.querySelector(".overlay");
        overlay.classList.add("hidden");
    } else if (isNameProvided === false) {
        errorMessage('textinput')
    }else if (difficultySelected === false) {
      errorMessage('difficultyButton')
    }
  }
);



// FUNKTION - generera fram spelarnamn samt resultat
let playerResult = {};
function generatePlayerResult() {
  playerResult.player = p1name;
  playerResult.score = `${mistakes} of ${maxWrong}`;
  return playerResult;
}
generatePlayerResult();

//
//funktion för att printa bokstäver
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


    //Skickar in fel bokstav, samt uppdaterar antal felgissningar
    function updateIncorrectGuess() {
        wrongLetters.innerText += key + ', '
        guessedLetters.push(key);
        mistakes++
        document.getElementById('mistakes').innerText = mistakes;
        hangManPicture.innerHTML = hangManPicture.innerHTML + hangMan[wrongGuesses];
        wrongGuesses++
        return wrongGuesses;
}

  //Skickar in korrekt gissning iställer för understräcken
  function updateCorrectGuess() {
    singleLetter.forEach((char, index) => {
        if (char === key) {
            dashes[index].innerText = char;
        }
    });
} 

//Kollar om ordet är gissat eller inte, loopas varje gång
  function isWordComplete(singleLetter, dashes) {
      for (let i = 0; i < singleLetter.length; i++) {
      if (dashes[i].innerText !== singleLetter[i]) {
          return false;
      }
      }
      return true;
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
