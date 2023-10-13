import React from "react";

// The Result component displays the game result and provides a restart button.
const Result = ({ gameStatus, onRestart, maxAttempts, attempts }) => {
  // Determine the game result based on the game status.
  const gameResult =
    gameStatus === "win"
      ? "You Won!"
      : gameStatus === "lose"
      ? "You Lost!"
      : null;

  // Check if the game is over (i.e., maximum attempts reached).
  const isGameOver = attempts === maxAttempts;

  return (
    <div className="result">
      {isGameOver && <p>{gameResult}</p>}
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default Result;
