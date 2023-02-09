// #1 : INPUTFÄLT UNDER PVP-KNAPP
let pvpButton = document.querySelector('.pvp-mode')
const gameModeModal = document.getElementById('gamemode-modal')
const vanligtButton = document.getElementById('vanligt-button')
const pvpStartButton = document.getElementById('pvp-start-button')
let pvpDiv = document.querySelector('.pvp-div')
const secretWordDiv = document.getElementById('secret-name-div')
let pvpSecretWordInput = document.getElementById('secret-word-pvp')


pvpButton.addEventListener('click', (event) => {
    // let inputfieldP1 = document.createElement('input')
    // inputfieldP1.innerText = 'blabla'
    // gameModeModal.append(inputfieldP1)
    pvpDiv.style.visibility = 'visible' 
})

//Stänger ner overlay om vanligt blir klickad
vanligtButton.addEventListener('click', (event) => {
    overlayScreenToggle()
})

//Submitknapp
pvpStartButton.addEventListener('click', (event) => {

})

// #2 : Namninputs ska sparas i en variabel

let pvpInputfieldPlayer1 = document.getElementById('pvp-name1')
let pvpInputfieldPlayer2 = document.getElementById('pvp-name2')




// FUNKTION - PVP - Spelare 1
pvpInputfieldPlayer1.addEventListener("keydown", (event) => {
    
    // Förhindrar input utanför namninputs-modalen
    event.stopPropagation()

})

// FUNKTION - PVP - Spelare 2
pvpInputfieldPlayer2.addEventListener("keydown", (event) => {
    
    event.stopPropagation()

    if (event.key === 'Enter') {
        p1name = pvpInputfieldPlayer1.value
        p2name = pvpInputfieldPlayer2.value
        pvpDiv.style.visibility = 'hidden'
        secretWordDiv.style.visibility = 'visible'
        // gameModeModal.style.visibility = 'hidden'
        gameMode = 'pvp'
    }

})

pvpStartButton.addEventListener('click', (event) => {
    p1name = pvpInputfieldPlayer1.value
    p2name = pvpInputfieldPlayer2.value
    pvpDiv.style.visibility = 'hidden'
	secretWordDiv.style.visibility = 'visible'
    // gameModeModal.style.visibility = 'hidden'
    gameMode = 'pvp'
})


let pvpSecretWord

// FUNKTION - PVP - Hemligt ord
pvpSecretWordInput.addEventListener("keydown", (event) => {
    // Förhindrar input utanför namninputs-modalen
    event.stopPropagation()
    if ((event.code === "Enter") && (pvpSecretWordInput.value !== '')) {
        pvpSecretWord = pvpSecretWordInput.value.toString()
        pvpSecretWordInput.innerText = pvpSecretWord
		secretWord = pvpSecretWord.toLowerCase();
        appendSecretWordToDashes()
        overlayScreenToggle()
		gameModeModal.classList.add('hidden')
    }
})



// function publishStats(result) {
//     let currentResultPVP = {
//         name1: p1name,
//         name2: p2name,
//         word: secretWord,
//         tries: mistakes,
//         won: result
//     }

//     const LS_KEY = 'hangman-score-pvp'
    
//     // steg 1: hämta data från localStorage
//     // ifsats kontrollerar om det inte finns någon data sen innan
//     let stringFromLocalStorage = localStorage.getItem(LS_KEY)
//     if (!stringFromLocalStorage) {
//         stringFromLocalStorage = '[]'
//     }
    
//     // omvandlar JSON-strängen till array med namn 'results'
//     let resultsPVP = JSON.parse(stringFromLocalStorage)
    
//     // pushar in senaste omgång till result-arrayen
//     resultsPVP.push(currentResultPVP)

//     // mha annan funktion - renderar listan på scoreboard-sidan
//     renderStats(resultsPVP)

//     // lägger tillbaka arrayen till localStorage (görs om till JSON-string)
//     let stringToSave = JSON.stringify(resultsPVP)
//     localStorage.setItem(LS_KEY, stringToSave)
// }

// function renderStats(resultsPVP) {
//     let displayScoreContainer = document.querySelector('.container-display-score')
    
//     // Skapa de DOMelement som behövs 
//     resultsPVP.forEach(element => {
//         let p = document.createElement('p')
//         p.className = 'player-result'
        
//         p.innerHTML = `PVP <br> ${element.name1}, ordskapare, spelade mot ${element.name2} som gissade. <br> Ordet var ${element.word}, <br> Felgissningar: ${element.tries} <br> Vinst? ${element.won}`

//         displayScoreContainer.append(p)
//     });
// }