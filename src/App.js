import React, { Component } from "react";
import Confetti from "react-confetti";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import HangmanImage from "./components/HangmanImage";
import Result from "./components/Result";
import Help from "./components/Help";
import Winning from "./components/Winning";
import Losing from "./components/Losing";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      word: "",
      guessedLetters: new Set(),
      attempts: 0,
      maxAttempts: 6,
      gameStatus: "playing",
      dictionary: [],
      showHelp: false,
      isConfettiActive: false,
    };
  }

  componentDidMount() {
    // Fetch the dictionary file and populate the dictionary array
    fetch("./assets/dictionary.txt")
      .then((response) => response.text())
      .then((data) => {
        const dictionary = data.split("\n").map((word) => word.trim());
        this.setState({ dictionary });
        this.setState({ word: this.getRandomWord() });
      })
      .catch((error) => {
        console.error("Error fetching the dictionary:", error);
      });
  }

  getRandomWord() {
    if (this.state.dictionary.length > 0) {
      // If the dictionary has loaded, select a random word
      const randomIndex = Math.floor(
        Math.random() * this.state.dictionary.length
      );
      return this.state.dictionary[randomIndex];
    } else {
      // If the dictionary is still loading, return a "loading" word
      return "loading";
    }
  }

  handleLetterClick = (letter) => {
    if (this.state.gameStatus !== "playing") {
      // The game has already ended, don't process further clicks
      return;
    }

    if (!this.state.guessedLetters.has(letter)) {
      // If the letter has not been guessed before
      const guessedLetters = new Set(this.state.guessedLetters);
      guessedLetters.add(letter);

      if (!this.state.word.split("").includes(letter)) {
        // Incorrect guess
        const attempts = this.state.attempts + 1;
        if (attempts >= this.state.maxAttempts) {
          // Game over due to too many incorrect attempts
          this.setState({ guessedLetters, attempts, gameStatus: "lose" });
        } else {
          this.setState({ guessedLetters, attempts });
        }
      } else {
        // Correctly guessed a letter
        this.setState({ guessedLetters });

        const wordArray = this.state.word.split("");
        const allLettersGuessed = wordArray.every((char) =>
          guessedLetters.has(char)
        );
        if (allLettersGuessed) {
          // Correctly guessed all letters in the word
          this.handleWin();
        }
      }
    }
  };

  restartGame = () => {
    this.setState({
      word: this.getRandomWord(),
      guessedLetters: new Set(),
      attempts: 0,
      gameStatus: "playing",
      isConfettiActive: false, // Reset the confetti animation flag
    });
  };

  toggleHelp = () => {
    this.setState((prevState) => ({
      showHelp: !prevState.showHelp,
    }));
  };

  handleWin = () => {
    this.setState({ gameStatus: "win", isConfettiActive: true });
  };

  render() {
    const { gameStatus } = this.state;

    return (
      <div className="hangman-app">
        <h1>Hangman Game</h1>
        {this.state.isConfettiActive && <Confetti />}{" "}
        {/* Display confetti if the flag is active */}
        <HangmanImage
          attempts={this.state.attempts}
          maxAttempts={this.state.maxAttempts}
        />
        <Word
          word={this.state.word}
          guessedLetters={this.state.guessedLetters}
        />
        <Keyboard
          guessedLetters={this.state.guessedLetters}
          onLetterClick={this.handleLetterClick}
        />
        {gameStatus === "lose" && (
          <Losing onRestart={this.restartGame} word={this.state.word} />
        )}
        {/* Display Losing component if game is lost */}
        {gameStatus === "win" && <Winning onRestart={this.restartGame} />}{" "}
        {/* Display Winning component if game is won */}
        <Result gameStatus={gameStatus} onRestart={this.restartGame} />
        <button onClick={this.toggleHelp}>Help</button>{" "}
        {/* Button to toggle help component */}
        {this.state.showHelp && <Help onClose={this.toggleHelp} />}{" "}
      </div>
    );
  }
}

export default App;
