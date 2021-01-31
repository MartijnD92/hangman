
const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, turnsTillLost, drawGallows, isGameLost } = require("./gamelogic");

function game(word, guesses) {
    word = word.toUpperCase();
    const wordSoFar = displayWordSoFar(word, guesses);
    let turnsLeft = turnsTillLost(word, guesses);

    console.log(`\nDit heb je tot nu toe geraden:\n ${wordSoFar}\n`);

    drawGallows(turnsLeft);

    const letter = question(`Raad een letter (nog ${turnsLeft} ${turnsLeft === 1 ? "kans" : "kansen"}): `).toUpperCase();

    if (letter.length > 1) {
        console.log("\nJe mag slechts één letter per keer raden. Probeer het opnieuw.");
        turnsLeft--;
    }

    // voeg de geraden letter toe aan de array met guesses
    guesses.push(letter);

    // We controleren of we hebben gewonnen
    if (isGameWon(word, guesses)) {
        console.log(`
        Hoera! Je hebt het woord geraden!
        **** ${word} ****
        `);
        return;
    }

    // We controleren of we hebben verloren
    if (isGameLost(word, guesses)) {
        console.log(`
        Jammer! Je hebt het woord niet snel genoeg geraden!
        **** ${word} ****

        ~D~E~A~D~
        -----------
        | /      |
        |/      _o_
        |        0
        |       / \\
        |           
        ===========
        `);
        return;
    }

    // volgende ronde! we roepen game nog een keer aan
    game(word,guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);


game("pandabeertje", []);

