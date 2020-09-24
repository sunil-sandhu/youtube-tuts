// We've created a set up that allows you to pass in an array and the user has to guess what might be in that array.

const TEAMS_WHO_HAVE_WON_THE_CHAMPIONS_LEAGUE = [
  "REAL MADRID",
  "AC MILAN",
  "LIVERPOOL",
  "BAYERN MUNICH",
  "BARCELONA",
  "AJAX",
  "INTER MILAN",
  "MANCHESTER UNITED",
  "JUVENTUS",
  "BENFICA",
  "NOTTINGHAM FOREST",
  "PORTO",
  "CELTIC",
  "HAMBURGER",
  "STEAUA BUCHAREST",
  "MARSEILLE",
  "BORUSSIA DORTMUND",
  "CHELSEA",
  "FEYENOORD",
  "ASTON VILLA",
  "PSV EINDHOVEN",
  "RED STAR BELGRADE",
];

function generateQuiz(inputArray) {
  let _inputArray = inputArray;
  let guesses = 0;
  let incorrectGuessCount = 0;
  let correctGuessesArray = [];
  function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }

  return (guess) => {
    if (!guess) {
      return console.log("No guess made");
    }
    if (incorrectGuessCount === 3) {
      return console.log("You have run out of guesses!");
    }
    guesses++;
    const guessUpperCased = guess.toUpperCase();
    if (_inputArray.includes(guessUpperCased)) {
      remove(_inputArray, guessUpperCased);
      correctGuessesArray.push(guessUpperCased);
      if (_inputArray.length === 0)
        return console.log(
          `CONGRATULATIONS, YOU HAVE COMPLETED THE QUIZ! You made ${guesses} in total`
        );
      return console.log(`Correct guess! ${_inputArray.length} teams left`);
    }
    if (correctGuessesArray.includes(guessUpperCased)) {
      return console.log("You have already correctly made this guess");
    }
    incorrectGuessCount++;
    if (incorrectGuessCount === 3) {
      return console.log("You have run out of guesses!");
    }
    return console.log(`Incorrect guess! ${_inputArray.length} teams left`);
  };
}
