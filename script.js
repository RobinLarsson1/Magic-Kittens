// Antal felgissningar
let mistakes = 0;
let maxWrong = 6;
document.getElementById('maxWrong').innerHTML = maxWrong;
document.getElementById('mistakes').innerHTML = mistakes;

//Slumpar ut ett ord i wordArray
const randomWords = wordArray
let secretWord = randomWords[Math.floor(Math.random() * wordArray.length)];
console.log(secretWord)


//Ordet som valdes
let answer = secretWord;

//Tangentbord
let keyboard = document.querySelector('body')
let underScore = document.getElementById('correctLetters')

//Skickar in hemliga ordet
    const underStreck = document.createElement('p')
    const ny = document.createTextNode(secretWord)
    underStreck.append(ny)

//Gör om ordet till streck
    let displayItem = secretWord.replace(/./g, '<span class="dashes">_</span>')
    svar.innerHTML = displayItem;

// Tangenter som inte får registreras som försök
const disabledKeys = ['Enter', 'Control', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', ' ', 'Meta', 'Alt', 'AltGraph', 'ContextMenu', 'Home', 'End', 'PageDown', 'PageUp', 'Shift', 'Delete', 'Backspace', 'Insert', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', '§', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'CapsLock', 'Tab', '-', ',', '.', '+']

let answerArray = []

//funtion för att printa bosktäverna
let wrongGuesses = 0

let charArray = secretWord.split("");
let dashes = document.getElementsByClassName("dashes");
let hangManPicture = document.getElementById('hangman-picture')
let wrongLetters = document.getElementById('guessed-letters')
let guessedLetters = wrongLetters.innerText.split(/\s*/);


// Namn-input variabler
let nameInputDiv = document.querySelector('.player-input')
let nameInput = document.getElementById('name-input')
let namePlaceholder = document.getElementById('player-name-placeholder')
let p1name

let errorMessageText = 'Var god ange ditt namn!'

//Eventlyssnare på restart-game knapp i win eller lose
const resetLoseButton = document.getElementById('reset-lose')
const resetWinButton = document.getElementById('reset-win')


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

// Publicera stats till localstorage
// let publishStats = (player, result) => {
//     let playerData = {
//         name: player,
//         guessed: guessedLetters, 
//         word: answer,
//         tries: mistakes,
//         won: result
//     }
    
//     let storedStatsToJSON = JSON.stringify(playerData)

//     let playerName = `Player ${playerData.name}`

//     localStorage.setItem(playerName, storedStatsToJSON)

//     scoreboardResults()
// }

// // Displayar stats till scoreboard
// let scoreboardResults = () => {
//     for (const key in localStorage) {
//         if (key.startsWith('Player')) {
//             console.log(`${key}: ${localStorage.getItem(key)}`)

//             let p = document.createElement('p')
//             p.innerText = localStorage.getItem(key).replace('{', '').replace('}', '')
//             scoreboard.append(p)
//         }
//     }
// }

// scoreboardResults()
let playerData = {
    name: p1name,
    guessed: guessedLetters, 
    word: answer,
    tries: mistakes
}
// Publicera stats till localstorage
let publishStats = (player, result) => {

    
    let storedStatsToJSON = JSON.stringify(playerData)

    let playerName = `Player ${playerData.name}`

    localStorage.setItem(playerName, storedStatsToJSON)

    scoreboardResults()
}

// Displayar stats till scoreboard
let scoreboardResults = () => {
    for (const key in localStorage) {
        if (key.startsWith('Player')) {
            console.log(`${key}: ${localStorage.getItem(key)}`)

            let scoreboardText = localStorage.getItem(key).toString()
            let dividedScoreboardText = scoreboardText.split(' ')
            console.log('divided'+dividedScoreboardText)

            let p = document.createElement('p')
            p.className = 'score-text'
            p.innerHTML = scoreboardText.replaceAll('{', '').replaceAll('}', '').replaceAll('"', '').replaceAll(',', '   ').replaceAll(':', ': ')
            scoreboard.append(p)
            return 
        }
    }
}

scoreboardResults()