import React from "react";

// Define the alphabet.
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Keyboard component renders the letter buttons for the user to make guesses.
// It takes 'guessedLetters' (letters already guessed) and 'onLetterClick' (click event handler) as props.
const Keyboard = ({ guessedLetters, onLetterClick }) => {
  return (
    <div className="keyboard">
      {/* Map through each letter in the alphabet to create a button for guessing. */}
      {alphabet.split("").map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)} // When a letter button is clicked, it triggers the 'onLetterClick' function.
          disabled={guessedLetters.has(letter)} // Disable the button if the letter has already been guessed.
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
