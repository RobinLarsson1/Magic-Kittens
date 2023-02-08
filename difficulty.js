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

//funktion för svårighetsgrad
function setDifficulty(difficulty) {
if (difficulty === 'easy') {
    secretWord = easyWords[Math.floor(Math.random() * easyWords.length)].toLowerCase();
} else if (difficulty === 'medium') {
    secretWord = mediumWords[Math.floor(Math.random() * mediumWords.length)].toLowerCase();
} else if (difficulty === 'hard') {
    secretWord = hardWords[Math.floor(Math.random() * hardWords.length)].toLowerCase();
}

console.log(secretWord);

//Skickar in hemliga ordet
const svar = document.getElementById('correctLetters');
svar.innerHTML = secretWord.replace(/./g, '<span class="dashes">_</span>');
}
//Lyssnar efter klick på knapparna
difficultyEasy.addEventListener('click', function() {
setDifficulty('easy');
});

difficultyMedium.addEventListener('click', function() {
setDifficulty('medium');
});

difficultyHard.addEventListener('click', function() {
setDifficulty('hard');
});