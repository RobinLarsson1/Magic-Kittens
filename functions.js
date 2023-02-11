let errorMessageText = {
  empty: '',
  inputError: 'Var god ange ditt namn!',
  difficultyError: 'Var god ange en svårighetsgrad!'
}

function errorMessage(action) {
  if (action === 'textinput') {errorMessageDOM.innerText = errorMessageText.inputError} 
  else if (action === 'difficultyButton') {errorMessageDOM.innerText = errorMessageText.difficultyError}
}


//Skickar in hemliga ordet
function appendSecretWordToDashes() {
  const svar = document.getElementById('correctLetters');
  svar.innerHTML = secretWord.replace(/./g, '<span class="dashes">_</span>');
  }


// FUNKTION - generera fram spelarnamn samt resultat
let playerResult = {};
function generatePlayerResult() {
  playerResult.player = p1name;
  playerResult.score = `${mistakes} of ${maxWrong}`;
  return playerResult;
}




let p2name





function generateTableHeader(gameMode) {
// console.log(gameMode)
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
  newTableHeadDataNameOnePVP.innerText = `Gissare`
  scoreTableBodyPVP.append(newTableHeadDataNameOnePVP)

  // Tillför fält för spelare 2 till table header
  let newTableHeadDataNameTwoPVP = document.createElement('td')
  newTableHeadDataNameTwoPVP.className = 'table-head-data'
  newTableHeadDataNameTwoPVP.innerText = `Ordskapare`
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


function clearTableHeader(gameMode) {


    if (gameMode = 'singleplayer') {
      for (let i = 0; i < 4; i++) {
        let tableHeadData = document.querySelector('.table-head-data')
        tableHeadData.remove()
      }
    } else {
      for (let i = 0; i < 5; i++) {
        let tableHeadData = document.querySelector('.table-head-data-pvp')
        tableHeadData.remove()
      }
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


// --------- DATA FÖR NEDANSTÅENDE FUNKTIONER ------------
const LS_KEY = 'hangman-score-old'

let LS_KEY_SINGLEPLAYER = 'hangman-score'
let LS_KEY_PVP = 'hangman-score-pvp'

let LS_LIST_CHOICE = []
let stringFromLocalStorage = []
stringFromLocalStorage = localStorage.getItem(LS_LIST_CHOICE)
let results = stringFromLocalStorage
let objectFromLocalStorage = JSON.parse(stringFromLocalStorage)

// Placeholder-objekt ( ska fyllas i mha funktionerna nedan )
let currentResult = {}
let currentResultPVP = {}
let result
// -------------------------------------------------------


// PlayerCount-sektion
let LS_KEY_COUNTER = 'hangman-player#'
// let LS_KEY_COUNTER_PVP = 'hangman-PVP-player#'
function ascendingPlayerNumber() {
    let counterFromLocalStorage = localStorage.getItem(LS_KEY_COUNTER)
    if (!counterFromLocalStorage) { counterFromLocalStorage = 0 }
    counterFromLocalStorage++
    let stringToTransfer = JSON.parse(counterFromLocalStorage)
    localStorage.setItem(LS_KEY_COUNTER, stringToTransfer)
    return counterFromLocalStorage
}

function currentResultForWhatGameMode (gameMode) {
  if (gameMode == 'singleplayer') {
      return currentResult = {
          name1: p1name,
          // name2: p2name,
          word: secretWord,
          tries: mistakes,
          // winlose: result,
          count: ascendingPlayerNumber()
      }
  } else if (gameMode == 'pvp') {
      return currentResult = {
          name1: p1name,
          name2: p2name,
          word: secretWord,
          tries: mistakes,
          // winlose: result,
          count: ascendingPlayerNumber()
      }
  }
}

function saveToWhichLS_LIST(gameMode) {
  if (gameMode == 'singleplayer') { return LS_LIST_CHOICE = LS_KEY_SINGLEPLAYER }
  else if (gameMode == 'pvp') { return LS_LIST_CHOICE = LS_KEY_PVP }
}

// Funktion för att hämta nuvarande stats - FÄRDIG
function currentStats() {
  // Kontroll för spelläge, singleplayer eller pvp?
  saveToWhichLS_LIST(gameMode)
  
  let currentStringFromLocalStorage = localStorage.getItem(LS_LIST_CHOICE) // Hämtar LS som JSON-sträng
  if (!currentStringFromLocalStorage) { currentStringFromLocalStorage = '[]' } // Om LS är tomt, tilldela en tom array

  currentArrayFromLocalStorage = JSON.parse(currentStringFromLocalStorage) // Gör om JSON-sträng till JS-array

  return currentArrayFromLocalStorage
}

let chronologicalCount = 0
let storedChronological
let currentArrayFromLocalStorage 
// Funktion för att lägga till nya stats - FÄRDIG
function addStatToCurrentStats( result ) {
  // Kontroll för spelläge, singleplayer eller pvp?
  saveToWhichLS_LIST(gameMode)
  ascendingPlayerNumber()

  let stringFromLocalStorage = localStorage.getItem(LS_LIST_CHOICE) // Hämtar LS som JSON-sträng
  if ( !stringFromLocalStorage ) { stringFromLocalStorage = '[]' }
  let arrayFromLocalStorage = JSON.parse( stringFromLocalStorage ) // Gör om JSON-sträng till JS-array
  arrayFromLocalStorage.push( currentResultForWhatGameMode(gameMode) )
  
  // if (chronologicalCount = 0) {
  //     storedChronological = currentArrayFromLocalStorage
  //     console.log(storedChronological)
  //     chronologicalCount++
  //     console.log(chronologicalCount)
  // }


  // console.log('FUNKTIONSTEST: addStatToCurrentStats -> arrayFromLocalStorage')
  // console.log(arrayFromLocalStorage)
  // console.log('')
  let stringToSave = JSON.stringify(arrayFromLocalStorage) // gör om JS-arrayen till JSON-string igen
  localStorage.setItem(LS_LIST_CHOICE, stringToSave) // skickar tillbaka den nya JSON-stringen till LS
  // renderStats()
}


// Funktion för att ta bort vissa stats
function removeUserStatsFromLocalStorage(user) {
  // Kontroll för spelläge, singleplayer eller pvp?
  // saveToWhichLS_LIST(gameMode)
   
  // gameMode = 'singleplayer'
  let stringFromLocalStorage = localStorage.getItem(LS_LIST_CHOICE) // Hämtar LS som JSON-sträng
  let objectFromLocalStorage = JSON.parse(stringFromLocalStorage)
  const playerNameInput = document.querySelector('#select-player-data-using-input')
  
  // Loop som hämtar alla namn innehållande argumentet (dvs strängen/namnet) man tillför till funktionen
  // och sparar till arrayen 'stringToSave'
  // console.log(objectFromLocalStorage[2])
  // console.log('objectFromLocalStorage[0].name1')
  // console.log(objectFromLocalStorage[0].name1)
  let newArray = []
  for (let i = 0; i < objectFromLocalStorage.length; i++) {
      if (objectFromLocalStorage[i].name1 != user) {
          newArray.push(objectFromLocalStorage[i])          
          
          // Den nya filtrerade arrayen 'stringToSave' skickas tillbaka till LS 
          let stringToSave = JSON.stringify(newArray)
          localStorage.setItem(LS_LIST_CHOICE, stringToSave)
      } clearScoreboard()
  }
}


function clearScoreboard() {
  let stringFromLocalStorage = localStorage.getItem(LS_LIST_CHOICE) // Hämtar LS som JSON-sträng
  let objectFromLocalStorage = JSON.parse(stringFromLocalStorage)

  for (let i = 0; i < objectFromLocalStorage.length; i++) {
      let newScoreTableRow = document.querySelector('.score-table-row')
      if (newScoreTableRow != null) {
      newScoreTableRow.remove()
      // console.log('INUTI clearScoreboard: Alla rader tas bort')
  }}
}

function renderStats() {
  currentResultForWhatGameMode(gameMode)
  currentStats()
  // gameMode = 'pvp'

  if (gameMode == 'singleplayer') {
      currentArrayFromLocalStorage.forEach(element => {
          generateTableForPlayerResult((element.name1), (element.word), (element.tries), (element.winlose))
      }) 
  } else if (gameMode == 'pvp') {
      currentArrayFromLocalStorage.forEach(element => {
          generateTableForPlayerResultPVP((element.name1), (element.name2), (element.word), (element.tries), (element.winlose))
      }) 
  }
}

function updateStats() {
  clearScoreboard()
  renderStats()
}


let toggleCountForChronological = 0
const scoreboardSortChronologically = () => {
  for (let i = 0; i < 5; i++) {
      if (toggleCountForChronological == 0) {
          const saveSortResult = JSON.parse(localStorage.getItem(LS_LIST_CHOICE)).sort(function(a, b) {
              return parseFloat(a.count) - parseFloat(b.count);
          })
          const saveNewString = JSON.stringify(saveSortResult)
          
          localStorage.setItem(LS_LIST_CHOICE, saveNewString)
          updateStats()
          
          ++toggleCountForChronological
      } else if (toggleCountForChronological == 1) {
          --toggleCountForChronological
          const saveSortResult = JSON.parse(localStorage.getItem(LS_LIST_CHOICE)).sort(function(a, b) {
              return parseFloat(b.count) - parseFloat(a.count);
          })

          const saveNewString = JSON.stringify(saveSortResult)
          localStorage.setItem(LS_LIST_CHOICE, saveNewString)
          updateStats()
      }       
  }
}



let toggleCountForTries = 0
const sortWinsListByAmountTries = () => {
  for (let i = 0; i < 5; i++) {
      if (toggleCountForTries == 0) {
          const saveSortResult = JSON.parse(localStorage.getItem(LS_LIST_CHOICE)).sort(function(a, b) {
              return parseFloat(a.tries) - parseFloat(b.tries);
          })
          const saveNewString = JSON.stringify(saveSortResult)
          
          localStorage.setItem(LS_LIST_CHOICE, saveNewString)
          updateStats()
          
          ++toggleCountForTries
      } else if (toggleCountForTries == 1) {
          --toggleCountForTries
          const saveSortResult = JSON.parse(localStorage.getItem(LS_LIST_CHOICE)).sort(function(a, b) {
              return parseFloat(b.tries) - parseFloat(a.tries);
          })

          const saveNewString = JSON.stringify(saveSortResult)
          localStorage.setItem(LS_LIST_CHOICE, saveNewString)
          updateStats()
      }       
  }
}