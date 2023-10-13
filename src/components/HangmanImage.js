import React from "react";

// HangmanImage component displays the hangman image and remaining attempts.
// It takes 'attempts' and 'maxAttempts' as props.
const HangmanImage = ({ attempts, maxAttempts }) => {
  // Generate the path to the image based on the number of attempts.
  const imagePath = `./images/${attempts + 1}.png`;

  return (
    <div className="hangman-image">
      <img src={imagePath} alt={`Hangman Attempt ${attempts + 1}`} />
      <p>Attempts left: {maxAttempts - attempts}</p>
    </div>
  );
};

export default HangmanImage;
