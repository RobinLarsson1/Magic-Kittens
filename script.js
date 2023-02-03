// Hangman
const hangMan = [
    {ellipse: /* INDEX: 0*/
        '<ellipse id="ground" cx="250.5" cy="536" rx="250.5" ry="29" fill="black" fill-opacity="0.06"/>'},

    {scaffold: /* INDEX: 1*/
        '<path id="scaffold" fill-rule="evenodd" clip-rule="evenodd" d="M85 1C85 0.447715 85.4477 0 86 0H404C404.552 0 405 0.447715 405 1V15C405 15.5523 404.552 16 404 16H199.522C199.257 16 199.002 16.1054 198.815 16.2929L101.293 113.815C101.105 114.002 101 114.257 101 114.522V530C101 530.552 100.552 531 100 531H86C85.4477 531 85 530.552 85 530V1ZM101 94.7229C101 95.6138 102.077 96.0599 102.707 95.43L180.43 17.7071C181.06 17.0771 180.614 16 179.723 16H102C101.448 16 101 16.4477 101 17V94.7229Z" fill="black"/>'},

    {legs:  /* INDEX: 2*/
        '<path id="legs" fill-rule="evenodd" clip-rule="evenodd" d="M365 385.679L365 286H362L362 388H362.134C361.759 390.439 363.447 394.38 366.612 397.949C370.684 402.54 375.66 404.777 377.726 402.945C379.792 401.112 378.166 395.905 374.093 391.314C371.033 387.863 367.462 385.743 365 385.679ZM366.554 389.143C365.811 388.809 365.345 388.71 365.079 388.685C365.072 388.952 365.115 389.427 365.357 390.204C365.861 391.818 367.035 393.905 368.856 395.958C370.678 398.012 372.61 399.426 374.151 400.12C374.894 400.453 375.361 400.553 375.626 400.577C375.634 400.311 375.591 399.835 375.348 399.058C374.844 397.445 373.67 395.358 371.849 393.304C370.028 391.251 368.096 389.836 366.554 389.143Z" fill="black"/>'},

    {arms:  /* INDEX: 3*/
        '<path id="arms" d="M359.5 195L359.464 295.747M358.256 292C360.154 293.832 359.874 299.483 357.012 302.995C354.15 306.507 350.291 307.868 348.393 306.036C346.495 304.204 347.276 299.871 350.138 296.359C353 292.847 356.358 290.168 358.256 292Z" stroke="black" stroke-width="3" stroke-linecap="round"/>'},

    {body:   /* INDEX: 4*/
        '<path id="body" d="M361.5 168V172M361.659 287C369.486 287 375.743 280.491 375.434 272.67L371.766 179.737C371.573 174.857 367.561 171 362.677 171C357.87 171 353.893 174.74 353.599 179.538L347.898 272.369C347.411 280.3 353.712 287 361.659 287Z" stroke="black" stroke-width="3"/>'},

    {head:  /* INDEX: 5*/
        '<path id="head" d="M405.17 151.696C405.829 151.194 405.957 150.253 405.456 149.594C404.955 148.934 404.014 148.806 403.354 149.307L405.17 151.696ZM397.065 154.087C396.405 154.588 396.277 155.529 396.778 156.189C397.28 156.848 398.221 156.976 398.88 156.475L397.065 154.087ZM399.866 149.249C399.364 148.59 398.423 148.461 397.764 148.963C397.104 149.464 396.976 150.405 397.477 151.064L399.866 149.249ZM402.257 157.354C402.758 158.013 403.699 158.142 404.359 157.64C405.018 157.139 405.147 156.198 404.645 155.539L402.257 157.354ZM400.429 166.676C399.657 166.977 399.276 167.847 399.577 168.619C399.878 169.39 400.748 169.772 401.52 169.471L400.429 166.676ZM403.238 169.663C403.69 170.358 404.619 170.555 405.313 170.104C406.008 169.653 406.205 168.724 405.754 168.029L403.238 169.663ZM347.858 134.23C344.947 155.571 359.888 175.232 381.23 178.142L381.635 175.17C361.935 172.483 348.143 154.335 350.83 134.635L347.858 134.23ZM381.23 178.142C402.571 181.053 422.232 166.112 425.142 144.77L422.17 144.365C419.483 164.065 401.335 177.857 381.635 175.17L381.23 178.142ZM425.142 144.77C428.053 123.429 413.112 103.768 391.77 100.858L391.365 103.83C411.065 106.517 424.857 124.665 422.17 144.365L425.142 144.77ZM391.77 100.858C370.429 97.947 350.768 112.888 347.858 134.23L350.83 134.635C353.517 114.935 371.665 101.143 391.365 103.83L391.77 100.858ZM403.354 149.307L397.065 154.087L398.88 156.475L405.17 151.696L403.354 149.307ZM397.477 151.064L402.257 157.354L404.645 155.539L399.866 149.249L397.477 151.064ZM356.5 9.00482L357.532 116.004L360.532 115.976L359.5 8.97589L356.5 9.00482ZM401.52 169.471C401.751 169.38 402.175 169.286 402.566 169.322C402.924 169.355 403.114 169.472 403.238 169.663L405.754 168.029C404.988 166.85 403.819 166.424 402.839 166.335C401.893 166.248 401.001 166.453 400.429 166.676L401.52 169.471Z" fill="black"/>'}
]

// Import
// import words from './svenska-ord.json' assert {type: 'json'};


// List
const wordArray = [
'Alfta',
'Alingsås',
'Almunge',
'Alnö',
'Alstermo',
'Alunda',
'Alvesta',
'Anderstorp',
'Aneby',
'Angered',
'Arboga',
'Arbrå'
]

console.log(typeof(wordArray))

let answer = '';
let guessedLetters = [];

// Mistakes 
let mistakes = 0;
let maxWrong = 6;
// let secretWord = randomWord()

function randomWord() {
	answer = wordArray[Math.floor(Math.random() * wordArray.length)];
	alert(answer)
}


//antar gissningar och max antal gissningar
document.getElementById('maxWrong').innerHTML = maxWrong;
document.getElementById('mistakes').innerHTML = mistakes;
//Tangentbord

// for(let i = 0; i > answer.lenght; i++){
// const secretWord = document.creatElement('div')
// }
// secretWord.append()



// import words from './svenska-ord.json' assert {type: 'json'};

// Namn-input variabler
let nameInputDiv = document.querySelector('.player-input')
let nameInput = document.getElementById('player-inputfield')
let namePlaceholder = document.getElementById('player-name-placeholder')
let p1name

// Namninput funktion
nameInput.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        namePlaceholder.innerText = ' ' + nameInput.value
        p1name = nameInput.value
        nameInput.remove()
    }
})

// Functionality for buttons
// Alla knappar
const headerButtonList = {
    aboutGame: document.querySelector('#about-game-button'),
    resetGame: document.querySelector('#reset-game-button'),
    changeGameMode: document.querySelector('#change-gamemode-button'),
    showScoreboard: document.querySelector('#show-scoreboard-button'),
    changePlayer: document.querySelector('#change-player-button')
}

// Alla modals
const modalPanels = {
    enterName: document.querySelector('#enter-name-modal'),
    gameMode: document.querySelector('#gamemode-modal'),
    ending: document.querySelector('#ending-modal'),
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


// Används för att selecta alla knappar med den klassen
const headerButtons = document.querySelectorAll('.header-button')

// Används flr att selecta alla close knappar
const closeButtonsForModals = document.querySelectorAll('.button.close')


// Används för att toggla overlayen eller lägga till hidden klassen
const overlayScreenToggle = () => {
overlay.classList.toggle('hidden')
}
const overlayAddHidden = () => {
    overlay.classList.add('hidden')
}

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