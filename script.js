// Antal felgissningar
let mistakes = 0;
let maxWrong = 6;
let wrongGuesses = 0
document.getElementById('maxWrong').innerHTML = maxWrong;
document.getElementById('mistakes').innerHTML = mistakes;

//Slumpar ut ett ord i wordArray
const randomWords = wordArray

//Ordet som valdes
let answer = secretWord;

//Tangentbord
let keyboard = document.querySelector('body')
let underScore = document.getElementById('correctLetters')



// Tangenter som inte får registreras som försök
const disabledKeys = ['Enter', 'Control', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', ' ', 'Meta', 'Alt', 'AltGraph', 'ContextMenu', 'Home', 'End', 'PageDown', 'PageUp', 'Shift', 'Delete', 'Backspace', 'Insert', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', '§', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'CapsLock', 'Tab', '-', ',', '.', '+']

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


let errorMessageText = 'Var god ange ditt namn!'

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
    changePlayer: document.querySelector('#change-player-button'),
    removeResultsWithSpecificName: document.querySelector('#remove-results-with-specific-name-button')
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

            // SCOREBOARD //// REMOVE SPECIFIC PLAYER DATA
        } else if (element == headerButtonList.removeResultsWithSpecificName) {
            overlayScreenToggle()
            modalPanels.removeSpecificPlayerData.classList.toggle('hidden')
        }
    })
    
})

// Denna kollar till om man trycker på en stäng av knapp
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
                } // SCOREBOARD
                else if (element == modalCloseButtons.removeSpecificPlayerDataModal) {
                    overlayAddHidden()
                    modalPanels.removeSpecificPlayerData.classList.add('hidden')
                }
            })
        })


//////// SCOREBOARD ////////

const scoreboard = document.querySelector('.scoreboard-section')
const gameboard = document.querySelector('.game-section')


const showScoreboardButton = document.querySelector('#show-scoreboard-button')
const closeScoreboardButton = document.querySelector("#close-scoreboard-button")

closeScoreboardButton.addEventListener('click', () => {
    scoreboard.classList.add('hidden')
    gameboard.classList.remove('hidden')
})

showScoreboardButton.addEventListener('click', () => {
    scoreboard.classList.remove('hidden')
    gameboard.classList.add('hidden')
})

let p1name

// publishStats()

function publishStats(result) {
    let currentResult = {
        name: p1name,
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

function renderStats(results) {
    let displayScoreContainer = document.querySelector('.container-display-score')
    
    // Skapa de DOMelement som behövs 
    results.forEach(element => {
        let p = document.createElement('p')
        p.className = 'player-result'
        
        p.innerHTML = `Namn: ${element.name}, <br> Ord: ${element.word}, <br> Felgissningar: ${element.tries} <br> Vinst? ${element.won}`

        displayScoreContainer.append(p)


        // Knappar

        // Det denna gör är att den kollar om elementet (win) har egenskapen true
        const listAllWinsButton = document.querySelector('#list-only-wins-button')
        listAllWinsButton.addEventListener('click', event => {
            if(!element.won == true) {
                // p.style.display = 'none'
                p.classList.add('list-element-hidden')
            } else {
                // p.style.display = 'block'
                p.classList.remove('list-element-hidden')
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


        // Tanke: En knapp som öppnar upp en ruta där man kan skriva in spelarnamn och kunna radera data från localstorage och p element
        const playerNameInput = document.querySelector('#select-player-data-using-input')
        playerNameInput.addEventListener('keydown', event => {

            event.stopPropagation()
            if (event.key == 'Enter') {
                if(playerNameInput.value === element.name) {
                    p.remove()
                    playerNameInput.value = null
                }
            }
        })

        const playerNameInputButton = document.querySelector('#select-player-data-using-input-button')
        playerNameInputButton.addEventListener('click', event => {
            if(playerNameInput.value === element.name) {
                p.remove()
                playerNameInput.value = null
            }
        })
    });
}
