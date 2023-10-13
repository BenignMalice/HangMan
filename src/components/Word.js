import React from "react";

const Word = ({ word, guessedLetters }) => {
  // Create a word display with underscores for unguessed letters
  const wordDisplay = word
    .split("")
    .map((letter) => (guessedLetters.has(letter) ? letter : "_"))
    .join(" ");

  return <div className="word">{wordDisplay}</div>;
};

export default Word;
