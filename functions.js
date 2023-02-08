//funktion för att ladda om sidan
function reloadGame() {
  setDifficulty(prompt('easy, medium, hard?'))
  appendSecretWordToDashes();
  mistakes = 0
  document.getElementById('mistakes').innerText = mistakes;
};

function errorMessage() {
    let errorMessage = document.querySelector('.error-message')
    errorMessage.innerText = errorMessageText
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
      errorMessage()
  }
}





let nameInputButton = document.querySelector("#name-enter-button");
function appendPlayerNameWhenButtonClicked() {
  // Kollar om inputfältet är tomt eller ej
  let isNameProvided = (nameInput.value !== '')

  if (isNameProvided === true) {
      namePlaceholder.innerText = " " + nameInput.value;
      p1name = nameInput.value;
      nameInput.remove();
      modalPanels.enterName.className = "hidden";
      let overlay = document.querySelector(".overlay");
      overlay.classList.add("hidden");
  } else if (isNameProvided === false) {
      errorMessage()
  }
}





// FUNKTION - generera fram spelarnamn samt resultat
let playerResult = {};
function generatePlayerResult() {
  playerResult.player = p1name;
  playerResult.score = `${mistakes} of ${maxWrong}`;
  return playerResult;
}
generatePlayerResult();

//Skickar in fel bokstav, samt uppdaterar antal felgissningar
function updateIncorrectGuess() {
  let key = event.key.toLowerCase();
  wrongLetters.innerText += key + ', '
  guessedLetters.push(key);
  mistakes++
  document.getElementById('mistakes').innerText = mistakes;
  hangManPicture.innerHTML = hangManPicture.innerHTML + hangMan[wrongGuesses];
  wrongGuesses++
  return wrongGuesses;
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

