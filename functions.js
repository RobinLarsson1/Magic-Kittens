//funktion för att ladda om sidan
const reloadGame = () => {
  location.reload();
};

function errorMessage() {
    let errorMessage = document.querySelector('.error-message')
    errorMessage.innerText = errorMessageText
}


//Resetknappar i win, lose samt header
resetWinButton.addEventListener("click", reloadGame);
resetLoseButton.addEventListener("click", reloadGame);
headerButtonList.resetGame.addEventListener("click", reloadGame);

// FUNKTION - Namn-input
nameInput.addEventListener("keyup", (event) => {

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
});


// FUNKTION - Namn-input kopplat till "Redo att spela!"-knapp
let nameInputButton = document.querySelector("#name-enter-button");
nameInputButton.addEventListener("click", () => {

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
});

// FUNKTION - generera fram spelarnamn samt resultat
let playerResult = {};
function generatePlayerResult() {
  playerResult.player = p1name;
  playerResult.score = `${mistakes} of ${maxWrong}`;
  return playerResult;
}
generatePlayerResult();

//
//funktion för att printa rätta bokstäver
document.onkeydown = function(event) {
  //Tangentbordet
  let key = event.key;

  //Kolla om gissningen är rätt
  let isCorrectGuess = singleLetter.includes(key);

  //Kollar om man redan gissat 
  let isGuessed = guessedLetters.includes(key);

  //Kollar om det man gissat är disabled key
  let isDisabled = disabledKeys.includes(key);

  //Kollar om en ny och korrekt key är pressed, samt om man har slut på gissningar
  let isValidGuess = isCorrectGuess ||(!isCorrectGuess && !isGuessed && mistakes < maxWrong && !isDisabled)



  function updateIncorrectGuess() {
    wrongLetters.innerText += key + ', '
    guessedLetters.push(key);
    mistakes++
    document.getElementById('mistakes').innerText = mistakes;
    hangManPicture.innerHTML = hangManPicture.innerHTML + hangMan[wrongGuesses];
    wrongGuesses++
    return wrongGuesses;
}

  function updateCorrectGuess() {
    singleLetter.forEach((char, index) => {
        if (char === key) {
            dashes[index].innerText = char;
        }
    });
} 

if (mistakes == maxWrong) {
gameOverModalOverlay()
}


  function isWordComplete(singleLetter, dashes) {
      for (let i = 0; i < singleLetter.length; i++) {
      if (dashes[i].innerText !== singleLetter[i]) {
          return false;
      }
      }
      return true;
  }


  if (isCorrectGuess) {
      updateCorrectGuess()
  } else if (isValidGuess) {
      updateIncorrectGuess()
  }

  //Kolla om spelet är förlorat
  let gameIsOver = mistakes >= maxWrong;
  if (gameIsOver) {
      gameOverModalOverlay();
  }

  //Kolla om spelet är vunnet 
  let isGameWon = isWordComplete(singleLetter, dashes)
  if (isGameWon) {
      gameWinModalOverlay();
  }
}
