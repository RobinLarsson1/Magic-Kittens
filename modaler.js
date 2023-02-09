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
    scoreboard.classList.remove('hidden')
    publishStatsWithoutCurrentSession()
}