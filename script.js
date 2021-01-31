'use strict';
let Score, randomNumber;
let HighScore = 0;
function init() {
  Score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".score").innerText = "20";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").innerText = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").innerText = "Start guessing...";
  document.querySelector(".check").disabled = false;
}
init();

function message(highOrLow) {
  if (highOrLow == 1) {
    document.querySelector(".message").innerText = "📈 Too high!";
  } else {
    document.querySelector(".message").innerText = "📉 Too low!";
  }
}

// decrease score
function decreaseScore(highOrLow) {
  if (Score > 1) {
    Score--;
    document.querySelector(".score").innerText = Score;
    message(highOrLow);
  } else {
    document.querySelector(".message").innerText = "💥 You lost the game!";
    document.querySelector(".score").innerText = "0";
    document.querySelector(".check").disabled = true;
  }
}

document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  if (guess == randomNumber) {
    document.querySelector(".message").innerText = "🎉 Correct Number!";
    if (Score > HighScore) {
      HighScore = Score;
      document.querySelector(".highscore").innerText = HighScore
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").innerText = randomNumber;
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > randomNumber) {
    decreaseScore(1)
  } else if (guess < randomNumber) {
    decreaseScore(-1)
  }
})

document.querySelector(".again").addEventListener("click", function () {
  init()
})
