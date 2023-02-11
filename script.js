// Antal felgissningar
let mistakes = 0;
let maxWrong = 6;
let wrongGuesses = 0
document.getElementById('maxWrong').innerHTML = maxWrong;
document.getElementById('mistakes').innerHTML = mistakes;

// Anger spelläge
// let gameMode

//Slumpar ut ett ord i wordArray
const randomWords = wordArray

//Ordet som valdes
let answer = secretWord;

//Tangentbord
let keyboard = document.querySelector('body')
let underScore = document.getElementById('correctLetters')



// Tangenter som inte får registreras som försök
const disabledKeys = ['enter', 'control', 'arrowleft', 'arrowright', 'arrowdown', 'arrowup', 'meta', 'alt', 'altgraph', 'contextmenu', 'home', 'end', 'pagedown', 'pageup', 'shift', 'delete', 'capslock', 'backspace', 'insert', 'scrollock', 'pause', 'tab', 'apostrophe', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', '§', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'capsLock', 'escape', 'Tab', '-', ',', '.', '+', '<', '>', 'dead', "'", 'scrollock', '*', '?', ')', '(', '/', '&', '%', '¤', '#', '"', '!', '½', ';', ':', '_', '=']

let answerArray = []

let dashes = document.getElementsByClassName("dashes");//Placeholders för ordet
let hangManPicture = document.getElementById('hangman-picture'); //Bilden på gubben
let wrongLetters = document.getElementById('guessed-letters');
let guessedLetters = wrongLetters.innerText.split();
let singleLetter = secretWord.split(""); //delar upp ordet


// Namn-input variabler
let nameInputDiv = document.querySelector('.player-input')
let nameInput = document.getElementById('name-input')
let namePlaceholder = document.getElementById('player-name-placeholder')
let errorMessageEmpty = ''
let errorMessageTextInput = 'Var god ange ditt namn!'
let errorMessageDifficulty = 'Var god ange en svårighetsgrad!'

//Eventlyssnare på restart-game knapp i win eller lose
const resetButtonForWinOrLoseModalScreen = document.querySelectorAll('.reset-button')
const goToScoreboardButton = document.querySelectorAll('.go-to-scoreboard-button')


// Förhindrande av att namninskrivning i början räknas som gissningar i spelet.
let overlayNameInput = document.querySelector('#name-input')
overlayNameInput.addEventListener('keydown', (event) => {
    event.stopPropagation()
})


const headerButtonList = {
    aboutGame: document.querySelector('#about-game-button'),
    resetGame: document.querySelector('#reset-game-button'),
    changeGameMode: document.querySelector('#change-gamemode-button'),
    showScoreboard: document.querySelector('#show-scoreboard-button'),
    changePlayer: document.querySelector('#change-player-button')
}

// Används för att selecta alla knappar med den klassen
const headerButtons = document.querySelectorAll('.header-button')

// Används flr att selecta alla close knappar
const closeButtonsForModals = document.querySelectorAll('.button.close')

// Denna kollar till om man trycker på en specifik knapp
headerButtons.forEach(element => {
    element.addEventListener('click', () => {
        // Om spelet
        if(element == headerButtonList.aboutGame) {
            overlayScreenToggle()
            modalPanels.about.classList.toggle('hidden')

            // Byta spelläge
        } else if (element == headerButtonList.changeGameMode) {
            overlayScreenToggle()
            modalPanels.gameMode.classList.toggle('hidden')

            // Byta spelare
        } else if (element == headerButtonList.changePlayer) {
            overlayScreenToggle()
            modalPanels.changePlayer.classList.toggle('hidden')
        }
    })
    
})

// Denna koillar till om man trycker på en stäng av knapp
closeButtonsForModals.forEach(element => {
    element.addEventListener('click', () => {
                // När man trycker på stäng av knappen för om spelet modalen
                if(element == modalCloseButtons.aboutModal) {
                    overlayAddHidden()
                    modalPanels.about.classList.add('hidden')
                }
        
                else if (element == modalCloseButtons.changePlayerModal) {
                    overlayAddHidden()
                    modalPanels.changePlayer.classList.add('hidden')
                }
            })
        })


//////// SCOREBOARD ////////

const scoreboard = document.querySelector('.scoreboard-section')
const scoreboardPVP = document.querySelector('.scoreboard-section-pvp')
const gameboard = document.querySelector('.game-section')
// const gameboardPVP = document.querySelector('.game-section')


const showScoreboardButton = document.querySelector('#show-scoreboard-button')
const showScoreboardButtonPVP = document.querySelector('#show-scoreboard-button')
const closeScoreboardButton = document.querySelector("#close-scoreboard-button")
const closeScoreboardButtonPVP = document.querySelector("#close-scoreboard-button-PVP")

closeScoreboardButton.addEventListener('click', () => {
    // Singleplayer
    scoreboard.classList.add('hidden')
    gameboard.classList.remove('hidden')
    bodyElem.style.background = '#bae1ff'
})

closeScoreboardButtonPVP.addEventListener('click', () => {
    // PVP
    scoreboardPVP.classList.add('hidden')
    gameboard.classList.remove('hidden')
    bodyElem.style.background = '#bae1ff'
})

showScoreboardButton.addEventListener('click', () => {
    if (gameMode === 'singleplayer') {
        scoreboard.classList.remove('hidden')
        gameboard.classList.add('hidden')
    } else if (gameMode === 'pvp') {
        scoreboardPVP.classList.remove('hidden')
        gameboard.classList.add('hidden')
    }
})

let p1name
// let p2name




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


function currentResultForWhatGameMode (selectedGameMode) {
    if (selectedGameMode == gameMode) {
        return currentResult = {
            name1: p1name,
            word: secretWord,
            tries: mistakes,
            won: result,
            count: ascendingPlayerNumber()
        }
    } else if (selectedGameMode == gameMode) {
        return currentResult = {
            name1: p1name,
            name2: p2name,
            word: secretWord,
            tries: mistakes,
            won: result,
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
    if (gameMode == 'singleplayer') {  LS_LIST_CHOICE = LS_KEY_SINGLEPLAYER }
    else if (gameMode == 'pvp') {  LS_LIST_CHOICE = LS_KEY_PVP }
    
    let currentStringFromLocalStorage = localStorage.getItem(LS_LIST_CHOICE) // Hämtar LS som JSON-sträng
    if (!currentStringFromLocalStorage) { currentStringFromLocalStorage = '[]' } // Om LS är tomt, tilldela en tom array

    currentArrayFromLocalStorage = JSON.parse(currentStringFromLocalStorage) // Gör om JSON-sträng till JS-array

    console.log('FUNKTIONSTEST: currentStats -> currentArrayFromLocalStorage nedan')
    console.log(currentArrayFromLocalStorage)
    console.log('')
    return currentArrayFromLocalStorage
}


let chronologicalCount = 0
let storedChronological
let currentArrayFromLocalStorage 
// Funktion för att lägga till nya stats - FÄRDIG
function addStatToCurrentStats( ) {
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


    console.log('FUNKTIONSTEST: addStatToCurrentStats -> arrayFromLocalStorage')
    console.log(arrayFromLocalStorage)
    console.log('')
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
        console.log('INUTI clearScoreboard: Alla rader tas bort')
    }}
}

function renderStats() {
    currentResultForWhatGameMode(gameMode)
    currentStats()

    if (gameMode == 'singleplayer') {
        currentArrayFromLocalStorage.forEach(element => {
            generateTableForPlayerResult((element.name1), (element.word), (element.tries), (element.won))
        }) 
    } else if (gameMode == 'pvp') {
        currentArrayFromLocalStorage.forEach(element => {
            generateTableForPlayerResultPVP((element.name1), (element.name2), (element.word), (element.tries), (element.won))
            console.log(element.name2)
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

//////////////////////////



// SCOREBOARD > SINGLEPLAYER > KNAPP > VINST
listAllWinsButton.addEventListener('click' , (event) => {
    sortWinsListByAmountTries()
})

// SCOREBOARD > PVP > KNAPP > VINST

listAllWinsButtonPVP.addEventListener('click' , (event) => {
    sortWinsListByAmountTries()
})


playerNameInput.addEventListener('keydown', event => {
    event.stopPropagation()
    if (event.key == 'Enter') {
            removePlayerData()
            console.log('Du klickade')
    }
})

playerNameInputButton.addEventListener('click', () => {
    let user = playerNameInput.value
    // console.log(user)
    removeUserStatsFromLocalStorage(user)
    updateStats()
    // currentArrayFromLocalStorage.forEach(element => {
    //     generateTableForPlayerResult((element.name1), (element.word), (element.tries), (element.won))
    console.log('Du klickade')
})

// Knappar
// const listAllWinsButton = document.querySelector('#list-only-wins-button')
const listAllLossesButton = document.querySelector('#list-only-losses-button')
const listAllResultsButton = document.querySelector('#list-all-results-button')
const removePlayerDataButton = document.querySelector('#remove-results-with-specific-name-button')

removePlayerDataButton.addEventListener('click', () => {
    console.log('hello!');
    modalPanels.removeSpecificPlayerData.classList.toggle('hidden')
    overlay.classList.remove('hidden')
})

modalCloseButtons.removeSpecificPlayerDataModal.addEventListener('click', () => {
    modalPanels.removeSpecificPlayerData.classList.toggle('hidden')
    overlayScreenToggle()
})

let scoreboardButtonLatest = document.querySelector('#latest-score-button')
scoreboardButtonLatest.addEventListener('click', (event) => {
    scoreboardSortChronologically()
})

let scoreboardPVPButtonLatest = document.querySelector('#latest-score-button-pvp')
scoreboardPVPButtonLatest.addEventListener('click', (event) => {
    scoreboardSortChronologically()
})