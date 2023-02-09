//Anger knapparna
const difficultyEasy = document.getElementById('difficulty-easy');
const difficultyMedium = document.getElementById('difficulty-medium');
const difficultyHard = document.getElementById('difficulty-hard');

//Regler för knapparna
const easyWords = wordArray.filter(secretWord => secretWord.length > 11);
const mediumWords = wordArray.filter(secretWord => 7 <= secretWord.length && secretWord.length <= 11);
const hardWords = wordArray.filter(secretWord => secretWord.length < 7);

//Måste ha secretWord som tom sträng pga ordet ändras
let secretWord = '';

// sparar svårighetsgraden för att använda vid reload-funktion
let currentDifficulty

let difficultySelected = false;

//funktion för svårighetsgrad
function setDifficulty(difficulty) {
    if (difficulty === 'easy') {
        secretWord = easyWords[Math.floor(Math.random() * easyWords.length)].toLowerCase();
        currentDifficulty = 'easy'
    } else if (difficulty === 'medium') {
        secretWord = mediumWords[Math.floor(Math.random() * mediumWords.length)].toLowerCase();
        currentDifficulty = 'medium'
    } else if (difficulty === 'hard') {
        secretWord = hardWords[Math.floor(Math.random() * hardWords.length)].toLowerCase();
        currentDifficulty = 'hard'
    }
    appendSecretWordToDashes()
    console.log(secretWord);
}

//Lyssnar efter klick på knapparna
difficultyEasy.addEventListener('click', function() {
    setDifficulty('easy');
    difficultySelected = true;
});

difficultyMedium.addEventListener('click', function() {
    setDifficulty('medium');
    difficultySelected = true;
});

difficultyHard.addEventListener('click', function() {
    setDifficulty('hard');
    difficultySelected = true;
});