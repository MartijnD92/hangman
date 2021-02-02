
function displayWordSoFar(word, guesses) {
  let wordSoFar = "";
  for (let i = 0; i < word.length; i++) {
    if (guesses.includes(word[i])) {
      wordSoFar += `${word[i]} `;
    } else {
      wordSoFar += "_ ";
    }
  }
  return wordSoFar;
}

function isGameWon(word, guesses) {
  const notGuessed = [];
  for (let i = 0; i < word.length; i++) {
    if (!guesses.includes(word[i])) {
      notGuessed.push(word[i]);
    }
  }
  return notGuessed.length === 0;
}

function turnsTillLost(word, guesses) {
  const incorrectGuesses = [];
  for (let i = 0; i < guesses.length; i++) {
    if (!word.includes(guesses[i]) || guesses.indexOf(guesses[i]) !== i) {
      incorrectGuesses.push(guesses[i]);
    }
  }
  return 7 - incorrectGuesses.length;
}

function drawGallows(turnsLeft) {
   switch(turnsLeft) {
      case 6:
        console.log(`
        |
        |
        |
        |
        |
        ===========
        `);
        break;
      case 5:
        console.log(`
        -----------
        |
        |
        |
        |
        |
        ===========
        `);
        break;
      case 4:
        console.log(`
        -----------
        | /
        |/
        |
        |
        |
        ===========
        `);
        break;
      case 3:
        console.log(`
        -----------
        | /      |
        |/
        |
        |
        |
        ===========
        `);
        break;
     case 2:
       console.log(`
        -----------
        | /      |
        |/      _o_
        |        0
        |
        |
        ===========
        `);
       break;
     case 1:
       console.log(`
        -----------
        | /      |
        |/      _o_
        |        0
        |       /
        |
        ===========
        `);
       break;
  }
}

function isGameLost(word, guesses) {
  return turnsTillLost(word, guesses) <= 0;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  turnsTillLost: turnsTillLost,
  drawGallows: drawGallows,
  isGameLost: isGameLost,
};
