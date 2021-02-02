# Hangman (met jest tests)

## In deze repo vind je

- Een starterkit om een galgje spel te maken (index.js)
- Test die je helpen de rest van de logica te schrijven (gamelogic.test.js)
- Een bestandje waar je je gamelogica kan schrijven (gamelogic.js)

## Installatie

```bash
$git clone <repo git url>
$cd hangman
$npm install
```

## Scripts

```bash
$npm run test # run jest once
$npm run test:watch # run jest in watch mode
$npm run start # start the game
```

## Hoe stop je het programma of jest in --watch mode?

Als je met `npm run start` of `npm run test:watch` het programma start gaat het (voor nu) oneindig door.
Je kan het programma stoppen door:

- Te klikken op je terminal
- `ctrl + c` (tegelijk) in te drukken

## Doelen

- [x] Installeer de repo en probeer de scripts
- [x] Probeer het programma uit, wat doet het tot nu toe?
- [x] Lees de code
- [x] Implementeer de game logica (laat de tests je helpen: `npm run test:watch`)
- [x] Is de game logica geimplementeerd? Gebruik de functies dan in index.js
  - [x] Zorg dat mensen letters kunnen raden
  - [x] Hou bij in de guesses array welke letters mensen geraden hebben
  - [x] Laat zien welke letters al geraden zijn met (displayWordSoFar)
  - [x] Heeft iemand alle letters geraden? log dan dat ze gewonnen hebben
  - [x] Heeft iemand meer 6 letters fout geraden? log dan hebben ze verloren
  - [x] Stop het programma met `return` wanneer iemand gewonnen of verloren heeft
  - [x] Heeft iemand nog niet gewonnen of verloren? Dan gaat het spel verder

## BONUS DOELEN (kies zelf uit wat je het leukst vindt!)

- [x] Check of de gebruiker meer dan een letter tegelijk kiest
  - `a` mag wel
  - `ae` mag niet
- [x] Geef een foutmelding wanneer iemand meer dan een letter kiest
      OF
- [ ] Maak het onmogelijk om meer dan een letter tegelijk in te voeren met
- [x] Zorg ervoor dat gekke gebruikers het spel niet verliezen door hoofdletters te gebruiken
  - `A` gekozen? wordt: `a`
  - Is het woord `JavaScript`? wordt: `javascript`
- [x] Hou bij hoeveel fouten (letters die niet in woord zitten) iemand al heeft gemaakt
- [x] Teken voor elke extra fout een stukje galg:

1 fout:

```

|
|
|
|
|
===========
```

7 fouten:

```
__________
| /     |
|/     _o_
|       O
|      / \
|
===========
```
