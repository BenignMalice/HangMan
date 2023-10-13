import React from "react";

// Help component displays the game rules and instructions.

const Help = (props) => {
  return (
    <div className="help-modal">
      <div className="help-content">
        <h2>Hangman Game Rules</h2>
        <p>
          Hangman is a word-guessing game. The objective is to guess the hidden
          word by suggesting letters one at a time.
        </p>
        <p>
          You have a limited number of attempts to guess the word correctly. If
          you exceed the maximum allowed attempts, you lose.
        </p>
        <p>
          If you successfully guess all the letters in the word before running
          out of attempts, you win the game.
        </p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

export default Help;
