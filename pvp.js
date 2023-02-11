

// #2 : Namninputs ska sparas i en variabel

// let pvpInputfieldPlayer1 = document.getElementById('pvp-name1')
// let pvpInputfieldPlayer2 = document.getElementById('pvp-name2')





// let p2name


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