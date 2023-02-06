// Alla modals
const modalPanels = {
    enterName: document.querySelector('#enter-name-modal'),
    gameMode: document.querySelector('#gamemode-modal'),
    endLose: document.querySelector('#lose-modal'),
    endWin: document.querySelector('#win-modal'),
    about: document.querySelector('#about-modal'),
    changePlayer: document.querySelector('#change-player-modal')
}

// En knapp för varje modal för att stänga (toggla) av modalen och overlayen
const modalCloseButtons = {
    aboutModal: document.querySelector('#about-modal-close-button'),
    changePlayerModal: document.querySelector('#change-player-modal-close-button')
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
const gameOverModalOverlay = () => {
    bodyElem.classList.add('game-over')
    overlay.classList.remove('hidden')
    modalPanels.endLose.classList.remove('hidden')
}


// När man har vunnit spelet
const gameWinModalOverlay = () => {
    bodyElem.classList.add('game-won')
    overlay.classList.remove('hidden')
    modalPanels.endWin.classList.remove('hidden')
}