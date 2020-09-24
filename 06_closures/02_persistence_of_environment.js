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
  let guesses = 0;
  let incorrectGuessCount = 0;
  function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }

  return (guess) => {
    guesses++;
    if (inputArray.includes(guess.toUpperCase())) {
      remove(inputArray, guess.toUpperCase());
      if (inputArray.length === 0)
        return console.log(`CONGRATULATIONS, YOU HAVE COMPLETED THE QUIZ!`);
      return console.log(`Correct guess :)`);
    }
    incorrectGuessCount++;
    return console.log("Incorrect guess :(");
  };
}

const footyQuiz = generateQuiz(TEAMS_WHO_HAVE_WON_THE_CHAMPIONS_LEAGUE);
footyQuiz("LIVERPOOL"); // Correct guess :)
footyQuiz("ARSENAL"); // Incorrect guess :(
