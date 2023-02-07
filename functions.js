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
document.onkeydown = function (event) {
  
    // Förhindrar input utanför namninputs-modalen
  let nameOverlayIsHidden = modalPanels.enterName.className.includes("hidden");
  console.log(event.key);

  if (nameOverlayIsHidden === true) {
    let found = false;
    if (charArray.includes(event.key)) {
      charArray.forEach((char, index) => {
        //om bostäverna är samma som trycks
        if (char === event.key) {
          //ersätt understreck med bokstav
          dashes[index].innerText = char;
          answerArray.push(char);
          dashes[index].innerText = char;
          found = true;
        }
      });
    } else {
      //Printar fel bosktäver
      if (
        found == false &&
        !guessedLetters.includes(event.key) &&
        mistakes < maxWrong &&
        disabledKeys.includes(event.key) == false
      ) {
        wrongLetters.innerText += event.key + ", ";
        guessedLetters.push(event.key);
        mistakes++;
        document.getElementById("mistakes").innerText = mistakes;
        hangManPicture.innerHTML =
          hangManPicture.innerHTML + hangMan[wrongGuesses];
        wrongGuesses++;
      }
      //Om max antal fel överskridits
    }
    if (mistakes == maxWrong) {
      gameResultModalOverlay(false, answer, null);
      publishStats(p1name, false);
    }
    //Om man gissat rätt
    let wordGuessed = true;
    for (let i = 0; i < charArray.length; i++) {
      if (dashes[i].innerText !== charArray[i]) {
        wordGuessed = false;
        break;
      }
    }
    // Om man har vunnit
    if (wordGuessed) {
      // Reload the website

      gameResultModalOverlay(true, null, mistakes);
      publishStats(p1name, true);
    }
  }
};
