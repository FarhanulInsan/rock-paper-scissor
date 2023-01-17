function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissor") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissor" && computerSelection === "Paper")) {
      return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissor") ||
    (playerSelection === "Scissor" && computerSelection === "Rock")) {
      return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));