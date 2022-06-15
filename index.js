function computerPlay() {
  let rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
