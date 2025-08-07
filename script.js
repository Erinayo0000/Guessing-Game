"use strict";

const secretNumber = Math.trunc(Math.random() * 15) + 1;

document.querySelector("#guessButton").addEventListener("click", function () {
  const guess = Number(document.querySelector("#guessInput").value);
  const inputText = document.querySelector(".inputText");
  if (!guess) {
    document.querySelector(".inputText").textContent = "please enter a number";
  } else if (guess === secretNumber) {
    document.querySelector(".inputText").textContent =
      "WOW...You guessed right!😍😍";
  } else if (guess > secretNumber) {
    document.querySelector(".inputText").textContent =
      "OH NO...Your guess is too high!😢";
  } else if (guess < secretNumber) {
    document.querySelector(".inputText").textContent =
      "OH NO...Your guess is too low!😢";
  }
});
