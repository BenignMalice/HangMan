import React, { useEffect } from "react";
import Confetti from "react-confetti";
import winSound from "../win.mp3";

const Winning = ({ onRestart }) => {
  useEffect(() => {
    // Play the winning sound
    const audio = new Audio(winSound);
    audio.play();
  }, []);

  return (
    <div className="winning">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
};

export default Winning;
