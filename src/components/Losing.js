import React, { useEffect } from "react";
import loseSound from "../lose.mp3";

const Losing = ({ onRestart, word }) => {
  // Add "word" to the function parameters
  useEffect(() => {
    const audio = new Audio(loseSound);
    audio.play();
  }, []);

  return (
    <div className="losing">
      <p>Unlucky! The word was: {word}</p>
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
};

export default Losing;
