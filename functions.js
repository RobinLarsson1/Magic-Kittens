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
      gameMode = 'singleplayer'
      // publishStatsWithoutCurrentSession()
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

    if (isNameProvided === true && difficultySelected === true) { 
        namePlaceholder.innerText = " " + nameInput.value;
        p1name = nameInput.value;
        nameInput.remove();
        modalPanels.enterName.className = "hidden";
        let overlay = document.querySelector(".overlay");
        overlay.classList.add("hidden");
        gameMode = 'singleplayer'
        // publishStatsWithoutCurrentSession()
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
// generatePlayerResult();

//
//funktion för att printa bokstäver
document.onkeydown = function(event) {

  if (scoreboard.classList.contains('hidden') && scoreboardPVP.classList.contains('hidden')) {
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

  const gameStart = () => {

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
  if (gameIsOver && (gameMode == 'singleplayer')) {
    gameResultModalOverlay(false, answer);
    publishStats(false);
  } else if (gameIsOver && (gameMode == 'pvp')) {
    publishStats(false)
  }
  
  //Kolla om spelet är vunnet 
  let isGameWon = isWordComplete(singleLetter, dashes)
  if (isGameWon && (gameMode == 'singleplayer')) {
    generateTableHeader('singleplayer')
    gameResultModalOverlay(true, null, mistakes);
    publishStats(true);
  } else if (isGameWon && (gameMode == 'pvp')) {
    gameResultModalOverlay(true, null, mistakes)
    publishStats(true)
  }
}

if (overlay.classList.contains('hidden') === true) {
    gameStart()
} else {
    console.log('Du måste stänga av overlayen för modalerna för att kunna spela eller fortsätta kunna spela.');
  }
}}

function generateTableHeader(gameMode) {

  let scoreTableBody = document.getElementById('table-body')
  let scoreTableBodyPVP = document.getElementById('table-body-pvp')
  
  if (gameMode == 'pvp') {
      // Skapa en tableheader
  let scoreTableHeaderPVP = document.createElement('tr')
  scoreTableHeaderPVP.className = 'score-table-header-row'
  scoreTableBodyPVP.append(scoreTableHeaderPVP)

  // Tillför fält för spelare 1 till table header
  let newTableHeadDataNameOnePVP = document.createElement('td')
  newTableHeadDataNameOnePVP.className = 'table-head-data'
  newTableHeadDataNameOnePVP.innerText = `Spelare 1`
  scoreTableBodyPVP.append(newTableHeadDataNameOnePVP)

  // Tillför fält för spelare 2 till table header
  let newTableHeadDataNameTwoPVP = document.createElement('td')
  newTableHeadDataNameTwoPVP.className = 'table-head-data'
  newTableHeadDataNameTwoPVP.innerText = `Spelare 2`
  scoreTableBodyPVP.append(newTableHeadDataNameTwoPVP)
 
  // Tillför fält för ord till table header
  let newTableHeadDataWordPVP = document.createElement('td')
  newTableHeadDataWordPVP.className = 'table-head-data'
  newTableHeadDataWordPVP.innerText = `Ord`
  scoreTableBodyPVP.append(newTableHeadDataWordPVP)

  // Tillför fält för antal felgissningar till table header
  let newTableHeadDataFaultyGuessesPVP = document.createElement('td')
  newTableHeadDataFaultyGuessesPVP.className = 'table-head-data'
  newTableHeadDataFaultyGuessesPVP.innerText = `Felgissningar`
  scoreTableBodyPVP.append(newTableHeadDataFaultyGuessesPVP)

  // Tillför fält för vinst eller förlust till table header
  let newTableHeadDataWinLosePVP = document.createElement('td')
  newTableHeadDataWinLosePVP.className = 'table-head-data'
  newTableHeadDataWinLosePVP.innerText = `Vinst?`
  scoreTableBodyPVP.append(newTableHeadDataWinLosePVP)


  } else if (gameMode === 'singleplayer') {
    // Skapa en tableheader
  let scoreTableHeader = document.createElement('tr')
  scoreTableHeader.className = 'score-table-header-row'
  scoreTableBody.append(scoreTableHeader)

  // Tillför fält för spelare 1 till table header
  let newTableHeadDataNameOne = document.createElement('td')
  newTableHeadDataNameOne.className = 'table-head-data'
  newTableHeadDataNameOne.innerText = `Spelare`
  scoreTableBody.append(newTableHeadDataNameOne)

  // Tillför fält för ord till table header
  let newTableHeadDataWord = document.createElement('td')
  newTableHeadDataWord.className = 'table-head-data'
  newTableHeadDataWord.innerText = `Ord`
  scoreTableBody.append(newTableHeadDataWord)

  // Tillför fält för antal felgissningar till table header
  let newTableHeadDataFaultyGuesses = document.createElement('td')
  newTableHeadDataFaultyGuesses.className = 'table-head-data'
  newTableHeadDataFaultyGuesses.innerText = `Felgissningar`
  scoreTableBody.append(newTableHeadDataFaultyGuesses)

  // Tillför fält för vinst eller förlust till table header
  let newTableHeadDataWinLose = document.createElement('td')
  newTableHeadDataWinLose.className = 'table-head-data'
  newTableHeadDataWinLose.innerText = `Vinst?`
  scoreTableBody.append(newTableHeadDataWinLose)
  }
}

function generateTableForPlayerResult (name, word, faultyguesses, winlose) {

  let scoreTableBody = document.getElementById('table-body')



  // Skapar en ny tabellrad, som newTableData-varianterna nedan ska appendas till
  let newScoreTableRow = document.createElement('tr')
  newScoreTableRow.className = 'score-table-row'
  scoreTableBody.append(newScoreTableRow)

  // Lägger till ett namnfält till tabellraden
  let newTableDataName = document.createElement('td')
  newTableDataName.className = 'score-table-data score-table-data-name'
  newTableDataName.innerText = `${name}`
  newScoreTableRow.append(newTableDataName)

  // Lägger till ett ordfält till tabellraden
  let newTableDataWord = document.createElement('td')
  newTableDataWord.className = 'score-table-data score-table-data-word'
  newTableDataWord.innerText = `${word}`
  newScoreTableRow.append(newTableDataWord)

  // Lägger till antal felgissnigar i ett fält till tabellraden 
  let newTableDataFaultyGuesses = document.createElement('td')
  newTableDataFaultyGuesses.className = 'score-table-data score-table-data-faultyguesses'
  newTableDataFaultyGuesses.innerText = `${faultyguesses}`
  newScoreTableRow.append(newTableDataFaultyGuesses)

  // Lägger till fält för vinst eller förlust till tabellraden
  let newTableDataWinLose = document.createElement('td')
  newTableDataWinLose.className = 'score-table-data score-table-data-winlose'
  newTableDataWinLose.innerText = `${winlose}`
  newScoreTableRow.append(newTableDataWinLose)
}


function generateTableForPlayerResultPVP (name1, name2, word, faultyguesses, winlose) {
  let scoreTableBodyPVP = document.getElementById('table-body-pvp')

  // Skapar en ny tabellrad, som newTableData-varianterna nedan ska appendas till
  let newScoreTableRowPVP = document.createElement('tr')
  newScoreTableRowPVP.className = 'score-table-row'
  scoreTableBodyPVP.append(newScoreTableRowPVP)

  // Lägger till player1-namn till tabellraden
  let newTableDataNameOnePVP = document.createElement('td')
  newTableDataNameOnePVP.className = 'score-table-data score-table-data-name'
  newTableDataNameOnePVP.innerText = `${name1}`
  newScoreTableRowPVP.append(newTableDataNameOnePVP)

  // Lägger till player2-namn till tabellraden
  let newTableDataNameTwoPVP = document.createElement('td')
  newTableDataNameTwoPVP.className = 'score-table-data score-table-data-name'
  newTableDataNameTwoPVP.innerText = `${name2}`
  newScoreTableRowPVP.append(newTableDataNameTwoPVP)

  // Lägger till ett ordfält till tabellraden
  let newTableDataWordPVP = document.createElement('td')
  newTableDataWordPVP.className = 'score-table-data score-table-data-word'
  newTableDataWordPVP.innerText = `${word}`
  newScoreTableRowPVP.append(newTableDataWordPVP)

  // Lägger till antal felgissnigar i ett fält till tabellraden 
  let newTableDataFaultyGuessesPVP = document.createElement('td')
  newTableDataFaultyGuessesPVP.className = 'score-table-data score-table-data-faultyguesses'
  newTableDataFaultyGuessesPVP.innerText = `${faultyguesses}`
  newScoreTableRowPVP.append(newTableDataFaultyGuessesPVP)

  // Lägger till fält för vinst eller förlust till tabellraden
  let newTableDataWinLosePVP = document.createElement('td')
  newTableDataWinLosePVP.className = 'score-table-data score-table-data-winlose'
  newTableDataWinLosePVP.innerText = `${winlose}`
  newScoreTableRowPVP.append(newTableDataWinLosePVP)
}