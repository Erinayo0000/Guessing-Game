"use strict";

const secretNumber = Math.trunc(Math.random() * 15) + 1;
let scores = 15;
document.querySelector("#guessButton").addEventListener("click", function () {
  const guess = Number(document.querySelector("#guessInput").value);
  if (!guess) {
    document.querySelector(".inputText").textContent = "please enter a number";
  } else if (guess === secretNumber) {
    document.querySelector(".inputText").textContent =
      "WOW...You guessed right!😍😍";
    document.querySelector(".container").style.backgroundColor = "#D391B0";
    document.querySelector("#guessButton").style.backgroundColor = "#5D3C64";
  } else if (guess > secretNumber) {
    if (scores > 1) {
      document.querySelector(".inputText").textContent =
        "OH NO...Your guess is too high!😢";
      scores--;
      document.querySelector(".scores").textContent = `Score: ${scores}`;
    } else {
      scores = 0;
      document.querySelector(".inputText").textContent =
        "Game Over! You lost all your scores!😢";
      document.querySelector(".scores").textContent = `Score: ${scores}`;
    }
  } else if (guess < secretNumber) {
    if (scores > 1) {
      document.querySelector(".inputText").textContent =
        "OH NO...Your guess is too low!😢";
      scores--;
      document.querySelector(".scores").textContent = `Score: ${scores}`;
    } else {
      scores = 0;
      document.querySelector(".inputText").textContent =
        "Game Over! You lost all your scores!😢";
      document.querySelector(".scores").textContent = `Score: ${scores}`;
    }
  }
});
