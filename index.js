function computerPlay() {
    let rand = Math.floor(Math.random()*3);
    return (rand == 0)? 'Rock': (rand == 1)? 'Paper': 'Scissors';
}

function compare(a, b) {
    if (a === 'rock') {
        if (b === 'scissors') return 1;
        else if (b === 'paper') return -1;
        else return 0;
    } else if (a === 'paper') {
        if (b === 'scissors') return -1;
        else if (b === 'rock') return 1;
        else return 0;
    } else {
        if (b === 'paper') return 1;
        else if (b === 'rock') return -1;
        else return 0;
    }
}

let format = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

function playRound(player, computer) {
    let result = compare(player.toLowerCase(), computer.toLowerCase());
    if (result) return `It is a Tie! You both played ${format(player)}!`;
    else if (result) return `You Win! ${format(player)} beats ${format(computer)}`;
    else return `You Lose! ${format(computer)} beats ${format(player)}`;
}

function game() {
    for (i = 0; i < 5; i++) {
        let player = prompt(`Round ${i+1}! You will play... (Rock, Paper, Scissors)`);
        player = player.toLowerCase();
        if (player !== "rock" && player !== "paper" && player !== "scissors") {
            alert("Invalid choice, enter Rock, Paper, or Scissors only!");
            i--;
        } else {
            let result = playRound(player, computerPlay())
            console.log(result);
            alert(result);
        }
    }
}

game();