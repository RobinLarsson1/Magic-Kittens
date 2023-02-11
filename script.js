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

// publishStats()

const LS_KEY = 'hangman-score-old'


function publishStats(result) {

    if (gameMode === 'pvp') {
        let currentResult = {
            name1: p1name,
            name2: p2name,
            word: secretWord,
            tries: mistakes,
            won: result
        }
    
        const LS_KEY = 'hangman-score-pvp-old'
        
        // steg 1: hämta data från localStorage
        // ifsats kontrollerar om det inte finns någon data sen innan
        let stringFromLocalStorage = localStorage.getItem(LS_KEY)
        if (!stringFromLocalStorage) {
            stringFromLocalStorage = '[]'
        }
        
        // omvandlar JSON-strängen till array med namn 'results'
        // let results = JSON.parse(stringFromLocalStorage)
        
        // pushar in senaste omgång till result-arrayen
        results.push(currentResult)
    
        // mha annan funktion - renderar listan på scoreboard-sidan
        renderStats(results)
    
        // lägger tillbaka arrayen till localStorage (görs om till JSON-string)
        let stringToSave = JSON.stringify(results)
        localStorage.setItem(LS_KEY, stringToSave)
    }

    else if (gameMode === 'singleplayer') {
        let currentResult = {
            name1: p1name,
            word: secretWord,
            tries: mistakes,
            won: result
        }
            
        const LS_KEY = 'hangman-score-old'
                
        // steg 1: hämta data från localStorage
        // ifsats kontrollerar om det inte finns någon data sen innan
        let stringFromLocalStorage = localStorage.getItem(LS_KEY)
        if (!stringFromLocalStorage) {
            stringFromLocalStorage = '[]'
            }
                
        // omvandlar JSON-strängen till array med namn 'results'
        // let results = JSON.parse(stringFromLocalStorage)
                
        // pushar in senaste omgång till result-arrayen
        results.push(currentResult)
            
        // mha annan funktion - renderar listan på scoreboard-sidan
        renderStats(results)
            
        // lägger tillbaka arrayen till localStorage (görs om till JSON-string)
        let stringToSave = JSON.stringify(results)
        localStorage.setItem(LS_KEY, stringToSave)
    }
}

        
const sortWinsListByAmountTries = () => {
            const saveSortResult = JSON.parse(localStorage.getItem(LS_KEY)).sort(function(a, b) {
                return parseFloat(a.tries) - parseFloat(b.tries);
            })

            console.log('saveSortResult', saveSortResult)
            const saveNewString = JSON.stringify(saveSortResult)

            localStorage.setItem(LS_KEY, saveNewString)

}




// function renderStatsOld(results) {


//     let scoreTableRow = document.querySelectorAll('.score-table-row')
//         // Väldig viktig container!
//         let displayScoreContainer = document.querySelector('.container-display-score')

//         if (gameMode === 'pvp') {
//             // Skapa de DOMelement som behövs 
//             results.forEach(element => {

//         // Det denna gör är att den kollar localstorage och filtrerar spelarens namn. Om den finns, tas den bort i localstorage genom att göra en ny sträng som excluderar den filterade spelaren. Sen spottar den in det i LS_KEY igen. Den tar även bort p elementet.



        
        

        

//                 generateTableForPlayerResultPVP ((element.name1), (element.name2), (element.word), (element.tries), (element.won))
//             })
//         }
//         else if (gameMode === 'singleplayer') {

//             let scoreTableRow = document.querySelectorAll('.score-table-row')
//             // Skapa de DOMelement som behövs 
//             results.forEach(element => {

//                 generateTableForPlayerResult((element.name1), (element.word), (element.tries), (element.won))

//              // Det denna gör är att den kollar localstorage och filtrerar spelarens namn. Om den finns, tas den bort i localstorage genom att göra en ny sträng som excluderar den filterade spelaren. Sen spottar den in det i LS_KEY igen. Den tar även bort p elementet.
                

        


// })}

// }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let gameMode = 'pvp'

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


function currentResultForWhatGameMode (gameMode) {
    if (gameMode == 'singleplayer') {
        return currentResult = {
            name1: p1name,
            word: secretWord,
            tries: mistakes,
            won: result
        }
    } else if (gameMode == 'pvp') {
        return currentResult = {
            name1: p1name,
            name2: p2name,
            word: secretWord,
            tries: mistakes,
            won: result
        }
    }
}

function saveToWhichLS_LIST(gameMode) {
    if (gameMode == 'singleplayer') { return LS_LIST_CHOICE = LS_KEY_SINGLEPLAYER }
    else if (gameMode == 'pvp') { return LS_LIST_CHOICE = LS_KEY_PVP }
}


let currentArrayFromLocalStorage 
// Funktion för att hämta nuvarande stats - FÄRDIG
function currentStats() {
    // Kontroll för spelläge, singleplayer eller pvp?
    saveToWhichLS_LIST(gameMode)
    
    let currentStringFromLocalStorage = localStorage.getItem(LS_LIST_CHOICE) // Hämtar LS som JSON-sträng
    if (!currentStringFromLocalStorage) { currentStringFromLocalStorage = '[]' } // Om LS är tomt, tilldela en tom array
    currentArrayFromLocalStorage = JSON.parse(currentStringFromLocalStorage) // Gör om JSON-sträng till JS-array
    console.log('FUNKTIONSTEST: currentStats -> currentArrayFromLocalStorage nedan')
    console.log(currentArrayFromLocalStorage)
    console.log('')
    return currentArrayFromLocalStorage
}

// Funktion för att lägga till nya stats - FÄRDIG
function addStatToCurrentStats( ) {
    // Kontroll för spelläge, singleplayer eller pvp?
    saveToWhichLS_LIST('singleplayer')

    let stringFromLocalStorage = localStorage.getItem(LS_LIST_CHOICE) // Hämtar LS som JSON-sträng
    if ( !stringFromLocalStorage ) { stringFromLocalStorage = '[]' }
    let arrayFromLocalStorage = JSON.parse( stringFromLocalStorage ) // Gör om JSON-sträng till JS-array
    arrayFromLocalStorage.push( currentResultForWhatGameMode(gameMode) )
    
    console.log('FUNKTIONSTEST: addStatToCurrentStats -> arrayFromLocalStorage')
    console.log(arrayFromLocalStorage)
    console.log('')
    let stringToSave = JSON.stringify(arrayFromLocalStorage) // gör om JS-arrayen till JSON-string igen
    localStorage.setItem(LS_LIST_CHOICE, stringToSave) // skickar tillbaka den nya JSON-stringen till LS
    renderStats()
}



// // Funktion för att ta bort vissa stats
// function removeUserStatsFromLocalStorage(user, gameMode) {
//     // Kontroll för spelläge, singleplayer eller pvp?
//     saveToWhichLS_LIST(gameMode)
     
//     let stringFromLocalStorage = localStorage.getItem(LS_LIST_CHOICE) // Hämtar LS som JSON-sträng
//     let objectFromLocalStorage = JSON.parse(stringFromLocalStorage)
//     // console.log('FUNKTIONSTEST: removeUserStatsFromLocalStorage -> objectFromLocalStorage nedan')
//     // console.log(objectFromLocalStorage)
//     // console.log('')

//     // Loop som hämtar alla namn innehållande argumentet (dvs strängen/namnet) man tillför till funktionen
//     // och sparar till arrayen 'stringToSave'
//     for (let i = 0; i < objectFromLocalStorage.length; i++) {
//         if (objectFromLocalStorage[i].name == user) {

//             let filteredObjectFromLocalStorage = objectFromLocalStorage.filter(function(player){
//                 return player.name !== user
//             })
//             // console.log('FUNKTIONSTEST: removeUserStatsFromLocalStorage -> Filtrerad nedan');
//             // console.log(filteredObjectFromLocalStorage)
//             // console.log('')

//             // Den nya filtrerade arrayen 'stringToSave' skickas tillbaka till LS 
//             let stringToSave = JSON.stringify(filteredObjectFromLocalStorage)
//             localStorage.setItem(LS_LIST_CHOICE, stringToSave)
//         }
//     }
// }

// Funktion för att ta bort vissa stats
function removeUserStatsFromLocalStorage() {
    // Kontroll för spelläge, singleplayer eller pvp?
    // saveToWhichLS_LIST(gameMode)
     
    let stringFromLocalStorage = localStorage.getItem(LS_KEY_SINGLEPLAYER) // Hämtar LS som JSON-sträng
    let objectFromLocalStorage = JSON.parse(stringFromLocalStorage)
    console.log('Nu är det parsat')
    // console.log('FUNKTIONSTEST: removeUserStatsFromLocalStorage -> objectFromLocalStorage nedan')
    // console.log(objectFromLocalStorage)
    // console.log('')

    // Loop som hämtar alla namn innehållande argumentet (dvs strängen/namnet) man tillför till funktionen
    // och sparar till arrayen 'stringToSave'
    console.log(objectFromLocalStorage[2])
    console.log(objectFromLocalStorage[0].name1)
    let newArray = []
    for (let i = 0; i < objectFromLocalStorage.length; i++) {
        if (objectFromLocalStorage[i].name1 != playerNameInput.value) {
            newArray.push(objectFromLocalStorage[i])
            console.log(newArray)
            
            // console.log(filteredObjectFromLocalStorage)
            // console.log('FUNKTIONSTEST: removeUserStatsFromLocalStorage -> Filtrerad nedan');
            // console.log(filteredObjectFromLocalStorage)
            // console.log('')

            // Den nya filtrerade arrayen 'stringToSave' skickas tillbaka till LS 
            let stringToSave = JSON.stringify(newArray)
            localStorage.setItem(LS_KEY_SINGLEPLAYER, stringToSave)
        }
    }
}


function refreshScoreboard() {
    let newScoreTableRow = document.querySelector('.score-table-row')
    newScoreTableRow.remove()
    renderStats()

    console.log('Funktion refreshScoreboard() aktiverades')
}

function renderStats() {
    currentResultForWhatGameMode()
    currentStats()

    // console.log('hej')
    if (gameMode == 'singleplayer') {
        currentArrayFromLocalStorage.forEach(element => {
            generateTableForPlayerResult((element.name1), (element.word), (element.tries), (element.won))
        }) 
    } else if (gameMode == 'pvp') {
    currentArrayFromLocalStorage.forEach(element => {
        generateTableForPlayerResultPVP((element.name1), (element.name2), (element.word), (element.tries), (element.won))
    }) 
}
}

//////////////////////////

// Modal knappar
const playerNameInput = document.querySelector('#select-player-data-using-input')
const playerNameInputButton = document.querySelector('#select-player-data-using-input-button')


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
    removeUserStatsFromLocalStorage()
    clearScoreboard()
    currentArrayFromLocalStorage.forEach(element => {
        generateTableForPlayerResult((element.name1), (element.word), (element.tries), (element.won))
    console.log('Du klickade')
})})

// const removePlayerData = () => {
//     const playerNameInputValue = playerNameInput.value.toLowerCase()
//     const elementName = element.name1
//         if(playerNameInputValue === elementName ) {
//             console.log('playerNameInputValue', playerNameInputValue);

//             Array.from(document.querySelectorAll('.score-table-row')).forEach(el => el[contains(playerNameInputValue)].remove());

//             const saveFilterResult = JSON.parse(localStorage.getItem('hangman-score-pvp-old')).filter(result => result.name1 !== playerNameInputValue)
            
//             const saveNewString = JSON.stringify(saveFilterResult)


//             localStorage.setItem('hangman-score-pvp-old', saveNewString)

//             playerNameInput.value = ''
//         } 
// }

// const removePlayerData = () => {
//     const playerNameInputValue = playerNameInput.value.toLowerCase()
//     const elementName = element.name1
//         if(playerNameInputValue === elementName ) {
//             console.log('playerNameInputValue', playerNameInputValue);

//             Array.from(document.querySelectorAll('.score-table-row')).forEach(el => el.remove());

//             generateTableForPlayerResult((element.name1), (element.word), (element.tries), (element.won))

//             const saveFilterResult = JSON.parse(localStorage.getItem('hangman-score-old')).filter(result => result.name1 !== playerNameInputValue)
            
//             const saveNewString = JSON.stringify(saveFilterResult)


//             localStorage.setItem('hangman-score-old', saveNewString)

//             playerNameInput.value = ''
//         } 
// }



// Knappar
const listAllWinsButton = document.querySelector('#list-only-wins-button')
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

