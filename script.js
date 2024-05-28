let eve = document.querySelectorAll(".inner");

eve.forEach((clicks, i) => {
  clicks.addEventListener("click", function (playerChoice) {
    let ckc = document.querySelectorAll(".inner > p");
    if (ckc[i] === "rock") {
      playerChoice = "rock";
    } else if (ckc[i] === "paper") {
      playerChoice = "paper";
    } else {
      playerChoice = "scissors";
    }

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;

    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "You win!";
    } else {
      result = "You lose!";
    }

    document.getElementById(
      "result"
    ).innerText = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`;
  });
});
