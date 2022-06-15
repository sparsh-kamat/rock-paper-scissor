function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      computerEmoji = "✊";
      return "rock";
    case 1:
      computerEmoji = "🖐";
      return "paper";
    case 2:
      computerEmoji = "✌️";
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
let playerEmoji = "";
let computerEmoji = "";
const buttons = document.querySelectorAll("button");
const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const resultMessage = document.getElementById("result");

let ps = 0;
let cs = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerEmoji = button.textContent;
    play(button.id);
  });
});

function play(player) {
  const computerSelection = getRandomChoice();
  playerSelection = player;
  let result = compare(player, computerSelection);
  UpdateScore(result);
  updateScoreMessage(result,playerEmoji,computerEmoji);
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

function updateScoreMessage(result, playerEmoji, computerEmoji) {
  if (result== 1) {
    resultMessage.textContent = `${playerEmoji}  beats  ${computerEmoji}`;
    return;
  }
  if (result == -1) {
    resultMessage.textContent = `${playerEmoji}  is beaten by  ${computerEmoji}`;
    return;
  }

  resultMessage.textContent = `${ playerEmoji }  ties with  ${computerEmoji}`;
}
