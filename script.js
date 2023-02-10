// Antal felgissningar
let mistakes = 0;
let maxWrong = 6;
let wrongGuesses = 0
document.getElementById('maxWrong').innerHTML = maxWrong;
document.getElementById('mistakes').innerHTML = mistakes;

// Anger spelläge
let gameMode

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

const LS_KEY = 'hangman-score'


function publishStats(result) {

    if (gameMode === 'pvp') {
        let currentResult = {
            name1: p1name,
            name2: p2name,
            word: secretWord,
            tries: mistakes,
            won: result
        }
    
        const LS_KEY = 'hangman-score-pvp'
        
        // steg 1: hämta data från localStorage
        // ifsats kontrollerar om det inte finns någon data sen innan
        let stringFromLocalStorage = localStorage.getItem(LS_KEY)
        if (!stringFromLocalStorage) {
            stringFromLocalStorage = '[]'
        }
        
        // omvandlar JSON-strängen till array med namn 'results'
        let results = JSON.parse(stringFromLocalStorage)
        
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
            
        const LS_KEY = 'hangman-score'
                
        // steg 1: hämta data från localStorage
        // ifsats kontrollerar om det inte finns någon data sen innan
        let stringFromLocalStorage = localStorage.getItem(LS_KEY)
        if (!stringFromLocalStorage) {
            stringFromLocalStorage = '[]'
            }
                
        // omvandlar JSON-strängen till array med namn 'results'
        let results = JSON.parse(stringFromLocalStorage)
                
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

// Modal knappar
const playerNameInput = document.querySelector('#select-player-data-using-input')
const playerNameInputButton = document.querySelector('#select-player-data-using-input-button')


function renderStats(results) {

        // Väldig viktig container!
        let displayScoreContainer = document.querySelector('.container-display-score')

        if (gameMode === 'pvp') {
            // Skapa de DOMelement som behövs 
            results.forEach(element => {
        // Det denna gör är att den kollar localstorage och filtrerar spelarens namn. Om den finns, tas den bort i localstorage genom att göra en ny sträng som excluderar den filterade spelaren. Sen spottar den in det i LS_KEY igen. Den tar även bort p elementet.

        const removePlayerData = () => {
            const playerNameInputValue = playerNameInput.value.toLowerCase()
            const elementName = element.name1
                if(playerNameInputValue === elementName ) {
                    console.log('playerNameInputValue', playerNameInputValue);
                    // p.remove()
                    const saveFilterResult = JSON.parse(localStorage.getItem('hangman-score-pvp')).filter(result => result.name1 !== playerNameInputValue)
                    
                    const saveNewString = JSON.stringify(saveFilterResult)


                    localStorage.setItem('hangman-score-pvp', saveNewString)

                    playerNameInput.value = ''
                } 
        }

        
        playerNameInput.addEventListener('keydown', event => {
            event.stopPropagation()
            if (event.key == 'Enter') {
                    removePlayerData()
            }
        })

        playerNameInputButton.addEventListener('click', () => {
                removePlayerData()
        })

                generateTableForPlayerResultPVP ((element.name1), (element.name2), (element.word), (element.tries), (element.won))
            })
        }
        else if (gameMode === 'singleplayer') {

            // Skapa de DOMelement som behövs 
            results.forEach(element => {

                generateTableForPlayerResult((element.name1), (element.word), (element.tries), (element.won))

             // Det denna gör är att den kollar localstorage och filtrerar spelarens namn. Om den finns, tas den bort i localstorage genom att göra en ny sträng som excluderar den filterade spelaren. Sen spottar den in det i LS_KEY igen. Den tar även bort p elementet.
                const removePlayerData = () => {
                const playerNameInputValue = playerNameInput.value.toLowerCase()
                const elementName = element.name1
                    if(playerNameInputValue === elementName ) {
                        console.log('playerNameInputValue', playerNameInputValue);
                        // p.remove()
                        const saveFilterResult = JSON.parse(localStorage.getItem('hangman-score')).filter(result => result.name1 !== playerNameInputValue)
                        
                        const saveNewString = JSON.stringify(saveFilterResult)


                        localStorage.setItem('hangman-score', saveNewString)

                        playerNameInput.value = ''
                    } 
            }

        
        playerNameInput.addEventListener('keydown', event => {
            event.stopPropagation()
            if (event.key == 'Enter') {
                    removePlayerData()
            }
        })

        playerNameInputButton.addEventListener('click', () => {
                removePlayerData()
        })

})}

}

function publishStatsWithoutCurrentSession() {

    if (gameMode === 'pvp') {
  
        const LS_KEY = 'hangman-score-pvp'
        
        // steg 1: hämta data från localStorage
        // ifsats kontrollerar om det inte finns någon data sen innan
        let stringFromLocalStorage = localStorage.getItem(LS_KEY)
        // if (!stringFromLocalStorage) {
        //     stringFromLocalStorage = '[]'
        // }
        
        // omvandlar JSON-strängen till array med namn 'results'
        let results = JSON.parse(stringFromLocalStorage)
        
        // pushar in senaste omgång till result-arrayen
        // results.push(currentResult)
    
        // mha annan funktion - renderar listan på scoreboard-sidan
        renderStats(results)
    
        // lägger tillbaka arrayen till localStorage (görs om till JSON-string)
        let stringToSave = JSON.stringify(results)
        localStorage.setItem(LS_KEY, stringToSave)
    }

    else if (gameMode === 'singleplayer') {
            
        const LS_KEY = 'hangman-score'
                
        // steg 1: hämta data från localStorage
        // ifsats kontrollerar om det inte finns någon data sen innan
        let stringFromLocalStorage = localStorage.getItem(LS_KEY)
        if (!stringFromLocalStorage) {
            stringFromLocalStorage = '[]'
            }
                
        // omvandlar JSON-strängen till array med namn 'results'
        let results = JSON.parse(stringFromLocalStorage)
                
        // pushar in senaste omgång till result-arrayen
        // results.push(currentResult)
            
        // mha annan funktion - renderar listan på scoreboard-sidan
        renderStats(results)
            
        // lägger tillbaka arrayen till localStorage (görs om till JSON-string)
        let stringToSave = JSON.stringify(results)
        localStorage.setItem(LS_KEY, stringToSave)
    }
}