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

function sortWinsListByAmountTries() {
    const saveSortResult = JSON.parse(localStorage.getItem(LS_KEY)).sort(function(a, b) {
        return parseFloat(a.tries) - parseFloat(b.tries);
    })

    
    const saveNewString = JSON.stringify(saveSortResult)

    localStorage.setItem(LS_KEY, saveNewString)
    let displayScoreContainer = document.querySelector('.container-display-score')
    // displayScoreContainer.append(p)
}

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


function renderStats(results) {
        let displayScoreContainer = document.querySelector('.container-display-score')
        
        if (gameMode === 'pvp') {
            // Skapa de DOMelement som behövs 
            results.forEach(element => {
                generateTableForPlayerResultPVP ((element.name1), (element.name2), (element.word), (element.tries), (element.won))
            })
        }
        else if (gameMode === 'singleplayer') {
            // Skapa de DOMelement som behövs 
            results.forEach(element => {
                generateTableForPlayerResult((element.name1), (element.word), (element.tries), (element.won))
            })}


        // BUG: Spammar flera gånger på grund av forEach
        const removePlayerData = () => {
            const playerNameInputValue = playerNameInput.value.toLowerCase()
            const elementName = element.name
            console.log(elementName);
                if(elementName === playerNameInput) {
                    p.remove()
                    let saveFilterResult = results.filter(result => result.name !== playerNameInputValue)
                    
                    let saveNewString = JSON.stringify(saveFilterResult)
                    localStorage.setItem(LS_KEY, saveNewString)
                } 
        }

        // BUG 2: Om man trycker på en funktionknapp eller mellanslag så registerar spelet samma resultat igen. Men localstorage uppdateras inte vilket är bra.
        // BUG 3: Man kan fortfarande spela spelet även om man har en modal uppe.
        const playerNameInput = document.querySelector('#select-player-data-using-input')
        playerNameInput.addEventListener('keydown', event => {
            event.stopPropagation()
            if (event.key == 'Enter') {
                    removePlayerData()
                    //playerNameInput.value = null
            }
        })

        const playerNameInputButton = document.querySelector('#select-player-data-using-input-button')
        playerNameInputButton.addEventListener('click', () => {
                removePlayerData()
                //playerNameInput.value = null
        })

        // Det denna gör är att den kollar om elementet (win) har egenskapen true
        const listAllWinsButton = document.querySelector('#list-only-wins-button')
        listAllWinsButton.addEventListener('click', event => {
            console.log('Hello there!');
            sortWinsListByAmountTries()
            if(!element.won == true) {
                // p.style.display = 'none'
                p.classList.add('list-element-hidden')
            } else {
                // p.style.display = 'block'
                p.classList.remove('list-element-hidden')
            }
            // Gör listan numerisk 0 > 5 (typ)
            if(element.tries > 0) {
                displayScoreContainer.append(p)
            } 
        })

        // Det denna gör är att den kollar om elementet (win) har egenskapen true
        const listAllLossesButton = document.querySelector('#list-only-losses-button')
        listAllLossesButton.addEventListener('click', event => {
            if(!element.won == false) {
                p.classList.add('list-element-hidden')
            } else {
                p.classList.remove('list-element-hidden')
            }
        })

        // Funkar bara om man har tryckt på vinster eller förluster först
        const listAllResultsButton = document.querySelector('#list-all-results-button')
        listAllResultsButton.addEventListener('click', event => {
            if(!element.won == false || !element.won == true) {
                // p.style.display = 'block'
                p.classList.remove('list-element-hidden')
            }
        })

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