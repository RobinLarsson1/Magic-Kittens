//funktion för att ladda om sidan        
const reloadGame = () => {
    location.reload();
};

// FUNKTION - Namn-input
nameInput.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        namePlaceholder.innerText = ' ' + nameInput.value
        p1name = nameInput.value
        nameInput.remove()
        modalPanels.enterName.className = 'hidden'
        let overlay = document.querySelector('.overlay')
        overlay.classList.add('hidden')
    }
})

// FUNKTION - Namn-input kopplat till "Redo att spela!"-knapp
let nameInputButton = document.querySelector('#name-enter-button')
nameInputButton.addEventListener('click', () => {
    namePlaceholder.innerText = ' ' + nameInput.value
    p1name = nameInput.value
    nameInput.remove()
    modalPanels.enterName.className = 'hidden'
    let overlay = document.querySelector('.overlay')
    overlay.classList.add('hidden')
})

// FUNKTION - generera fram spelarnamn samt resultat
let playerResult = {}
function generatePlayerResult() {
    playerResult.player = p1name
    playerResult.score = `${mistakes} of ${maxWrong}`
    return playerResult
}
generatePlayerResult()

//funktion för att printa rätta bokstäver
document.onkeydown = function(event) {
    console.log(event.key)
    let found = false;
    if (charArray.includes(event.key)) {
        charArray.forEach((char, index) => {
          //om bostäverna är samma som trycks
        if (char === event.key) {
            //ersätt understreck med bokstav
            dashes[index].innerText = char;
            answerArray.push(char)
            dashes[index].innerText = char;
            found = true;
        }
//Printar fel bosktäver        
    })}  else {
    if ((found == false && !guessedLetters.includes(event.key)) && (mistakes < maxWrong) && (disabledKeys.includes(event.key) == false)) {
        wrongLetters.innerText += event.key + ', ';
        guessedLetters.push(event.key); 
        mistakes++
        document.getElementById('mistakes').innerText = mistakes
        hangManPicture.innerHTML = hangManPicture.innerHTML + hangMan[wrongGuesses]
        wrongGuesses++
    }
//Om max antal fel överskridits   
    }  if (mistakes == maxWrong) {
        gameOverModalOverlay()   
    } 
//Om man gissat rätt
let wordGuessed = true;
for (let i = 0; i < charArray.length; i++) {
    if (dashes[i].innerText !== charArray[i]) {
    wordGuessed = false;
    break;
    }
}
//Om man gissat rätt
if (wordGuessed) {
    // Reload the website
    gameWinModalOverlay()
}
}; 