let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getPlayerChoice(playerChoice) {
  playerChoice = prompt("Rock, Paper, Scissors?"); //Asks for input from user
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase(); //Capitalize first word
  console.log("You chose "  + playerChoice);
  
  return playerChoice
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
      playerScore++;
      return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
      computerScore++
      return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
    console.log("Score: (You) " + playerScore + " - " + computerScore + " (Computer)")
  }

  console.log("It's the end of the match! And the final winner is... ");
  if (playerScore === computerScore) {
    console.log("...huh. It's a tie!");
  } else if (playerScore > computerScore) {
    console.log("YOU! Congratulations!");
  } else {
    console.log("Computer! Better luck next time!");
  }
}

game();