function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function compare(a, b) {
  //0 for tie 1 for win -1 for lose
  if (a === "rock") {
    if (b === "scissors") return 1;
    else if (b === "paper") return -1;
    else return 0;
  } else if (a === "paper") {
    if (b === "scissors") return -1;
    else if (b === "rock") return 1;
    else return 0;
  } else {
    if (b === "paper") return 1;
    else if (b === "rock") return -1;
    else return 0;
  }
}

let playerSelection = "";
const buttons = document.querySelectorAll("button");
const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const result = document.getElementsByClassName("result");

let ps = 0;
let cs = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    play(button.id);
  });
});

function play(player) {
  const computerSelection = getRandomChoice();
  let result = compare(playerSelection, computerSelection);
  UpdateScore(result);
}

function gameover() {
  if (ps == 5 || cs == 5) return 1;
  else return 0;
}

function UpdateScore(result) {
  if (result == 1) {
    ++ps;
    playerScorePara.textContent = ps;
  } else if (result == -1) {
    ++cs;
    computerScorePara.textContent = cs;
  }
}
