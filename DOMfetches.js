

// OVERLAY I BÖRJAN MED NAMN OSV
let nameInputButton = document.querySelector("#name-enter-button");
let errorMessageDOM = document.querySelector('.error-message')

// Modal knappar
const playerNameInput = document.querySelector('#select-player-data-using-input')
const playerNameInputButton = document.querySelector('#select-player-data-using-input-button')

// SCOREBOARD > SINGLEPLAYER > KNAPP > VINST
const listAllWinsButton = document.getElementById('list-only-wins-button')

// SCOREBOARD > PVP > KNAPP > VINST
const listAllWinsButtonPVP = document.getElementById('list-only-wins-button-pvp')


// #2 : Namninputs ska sparas i en variabel

let pvpInputfieldPlayer1 = document.getElementById('pvp-name1')
let pvpInputfieldPlayer2 = document.getElementById('pvp-name2')


// #1 : INPUTFÄLT UNDER PVP-KNAPP
let pvpButton = document.querySelector('.pvp-mode')
const gameModeModal = document.getElementById('gamemode-modal')
const vanligtButton = document.getElementById('vanligt-button')
const pvpStartButton = document.getElementById('pvp-start-button')
let pvpDiv = document.querySelector('.pvp-div')
const secretWordDiv = document.getElementById('secret-name-div')
let pvpSecretWordInput = document.getElementById('secret-word-pvp')

let nameInputDiv = document.querySelector('.player-input')
let nameInput = document.getElementById('name-input')
let namePlaceholder = document.getElementById('player-name-placeholder')

//Eventlyssnare på restart-game knapp i win eller lose
const resetButtonForWinOrLoseModalScreen = document.querySelectorAll('.reset-button')
const goToScoreboardButton = document.querySelectorAll('.go-to-scoreboard-button')

let overlayNameInput = document.querySelector('#name-input')

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




const scoreboard = document.querySelector('.scoreboard-section')
const scoreboardPVP = document.querySelector('.scoreboard-section-pvp')
const gameboard = document.querySelector('.game-section')
// const gameboardPVP = document.querySelector('.game-section')


const showScoreboardButton = document.querySelector('#show-scoreboard-button')
const showScoreboardButtonPVP = document.querySelector('#show-scoreboard-button')
const closeScoreboardButton = document.querySelector("#close-scoreboard-button")
const closeScoreboardButtonPVP = document.querySelector("#close-scoreboard-button-PVP")

let dashes = document.getElementsByClassName("dashes");//Placeholders för ordet
let hangManPicture = document.getElementById('hangman-picture'); //Bilden på gubben
let wrongLetters = document.getElementById('guessed-letters');

//Tangentbord
let keyboard = document.querySelector('body')
let underScore = document.getElementById('correctLetters')

// Knappar
// const listAllWinsButton = document.querySelector('#list-only-wins-button')
const listAllLossesButton = document.querySelector('#list-only-losses-button')
const listAllResultsButton = document.querySelector('#list-all-results-button')
const removePlayerDataButton = document.querySelector('#remove-results-with-specific-name-button')

//Anger knapparna
const difficultyEasy = document.getElementById('difficulty-easy');
const difficultyMedium = document.getElementById('difficulty-medium');
const difficultyHard = document.getElementById('difficulty-hard');

// Antal felgissningar
let mistakes = 0;
let maxWrong = 6;
let wrongGuesses = 0
document.getElementById('maxWrong').innerHTML = maxWrong;
document.getElementById('mistakes').innerHTML = mistakes;

// Anger spelläge
// let gameMode

//Måste ha secretWord som tom sträng pga ordet ändras
let secretWord = '';



//Slumpar ut ett ord i wordArray
const randomWords = wordArray

//Ordet som valdes
let answer = secretWord;








// console.log('script ' + p2name)

// Tangenter som inte får registreras som försök
const disabledKeys = ['enter', 'control', 'arrowleft', 'arrowright', 'arrowdown', 'arrowup', 'meta', 'alt', 'altgraph', 'contextmenu', 'home', 'end', 'pagedown', 'pageup', 'shift', 'delete', 'capslock', 'backspace', 'insert', 'scrollock', 'pause', 'tab', 'apostrophe', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', '§', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'capsLock', 'escape', 'Tab', '-', ',', '.', '+', '<', '>', 'dead', "'", 'scrollock', '*', '?', ')', '(', '/', '&', '%', '¤', '#', '"', '!', '½', ';', ':', '_', '=']

let answerArray = []


let guessedLetters = wrongLetters.innerText.split();
let singleLetter = secretWord.split(""); //delar upp ordet


// Namn-input variabler

let errorMessageEmpty = ''
let errorMessageTextInput = 'Var god ange ditt namn!'
let errorMessageDifficulty = 'Var god ange en svårighetsgrad!'












let p1name
// let p2name




// Alla modals
const modalPanels = {
    enterName: document.querySelector('#enter-name-modal'),
    gameMode: document.querySelector('#gamemode-modal'),
    endLose: document.querySelector('#lose-modal'),
    endWin: document.querySelector('#win-modal'),
    about: document.querySelector('#about-modal'),
    // SCOREBOARD
    removeSpecificPlayerData: document.querySelector('#remove-player-data-modal')
}

// En knapp för varje modal för att stänga (toggla) av modalen och overlayen
const modalCloseButtons = {
    aboutModal: document.querySelector('#about-modal-close-button'),
    // SCOREBOARD
    removeSpecificPlayerDataModal: document.querySelector('#remove-player-data-modal-close-button')
}

// Selecta overlayen för modals
const overlay = document.querySelector('.overlay')
// Används för att toggla overlayen eller lägga till hidden klassen
const overlayScreenToggle = () => {
	overlay.classList.toggle('hidden')
}
	const overlayAddHidden = () => {
	overlay.classList.add('hidden')
}
// Om man har gissat max antal gånger
const bodyElem = document.body;


// Denna funktion kollar om man har vunnit spelet och visar då en specifik modal för resultatet
const gameResultModalOverlay = (endResult, generatedWord, amountTries) => {
    // Om man har vunnit
    if (endResult == true) {

        let triesAmount = document.querySelector('#amount-tries')
        triesAmount.textContent = mistakes

        bodyElem.classList.add('game-won')
        overlay.classList.remove('hidden')
        modalPanels.endWin.classList.remove('hidden')

        // Om man har förlorat
    } else if (endResult == false) {

        let correctAnswer = document.querySelector('#correct-answer')
        correctAnswer.textContent = secretWord

        bodyElem.classList.add('game-over')
        overlay.classList.remove('hidden')
        modalPanels.endLose.classList.remove('hidden')
    }
}


// Gör så att man kan komma till scoreboarden efter win och lose
const goToScoreboard = () => {
    overlay.classList.add('hidden')
    gameboard.classList.add('hidden')
    if (gameMode === 'singleplayer') {
        scoreboard.classList.remove('hidden')
    } else if (gameMode === 'pvp') {
        scoreboardPVP.classList.remove('hidden')
    }
}

