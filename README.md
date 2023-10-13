# Hangman Game

Hangman is a word-guessing game where you try to guess a hidden word letter by letter. This is a simple implementation of the Hangman game in a React application.

## Rules of the Game

1. The game selects a random word, and your goal is to guess it by suggesting letters one at a time.

2. You have a limited number of attempts (6 by default) to guess the word correctly.

3. For each incorrect guess, a part of the hangman is drawn. If the hangman is fully drawn before you guess the word, you lose.

4. If you guess all the letters of the word before the hangman is fully drawn, you win.

## Installation

To run this Hangman game on your local machine, follow these steps:

1. Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

2. Clone this repository to your local machine or download the source code as a ZIP file and extract it.

3. Open your terminal or command prompt.

4. Navigate to the project's root directory.

5. Install the project's dependencies by running:
   npm install

6. Start the development server:
   npm start

7. Open your web browser and go to http://localhost:3000 to play the Hangman game.

## Technologies Used

React: A JavaScript library for building user interfaces.
React Confetti: A library for confetti animations in React.
Audio: Sound effects are used for game feedback.

## Credit

Made by Darryl Betts
