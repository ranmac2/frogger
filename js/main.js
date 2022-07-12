const timeLeftDisplay = document.getElementById("time-left");
const resultDisplay = document.getElementById("result");
const startPauseButton = document.getElementById("start-pause-button");
const squares = document.querySelectorAll(".grid div");
const width = 9;
let currentIndex = 76;
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");
let timerId;
let outcomeTimerId;
let currentTime = 20;
const startingBlock = document.querySelector(".starting-block");

const moveFrog = (e) => {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      console.log("move left");
      if (currentIndex % width !== 0) currentIndex -= 1;
      break;
    case "ArrowRight":
      console.log("move right");
      if (currentIndex % width < width - 1) currentIndex += 1;
      break;
    case "ArrowUp":
      console.log("move up");
      if (currentIndex - width >= 0) currentIndex -= width;
      break;
    case "ArrowDown":
      console.log("move down");
      if (currentIndex + width < width * width) currentIndex += width;
      break;
  }
  startingBlock.classList.remove("starting-block");
  squares[currentIndex].classList.add("frog");
};

document.addEventListener("keyup", moveFrog);

const autoMoveElements = () => {
  currentTime--;
  timeLeftDisplay.textContent = currentTime;
  logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
  logsRight.forEach((logRight) => moveLogRight(logRight));
  carsLeft.forEach((carLeft) => moveCarLeft(carLeft));
  carsRight.forEach((carRight) => moveCarRight(carRight));
};

const checkOutcome = () => {
  gameLoss();
  gameWin();
  headerTextModifier();
};

const moveLogLeft = (logLeft) => {
  switch (true) {
    case logLeft.classList.contains("l1"):
      logLeft.classList.remove("l1");
      logLeft.classList.add("l2");
      break;
    case logLeft.classList.contains("l2"):
      logLeft.classList.remove("l2");
      logLeft.classList.add("l3");
      break;
    case logLeft.classList.contains("l3"):
      logLeft.classList.remove("l3");
      logLeft.classList.add("l4");
      break;
    case logLeft.classList.contains("l4"):
      logLeft.classList.remove("l4");
      logLeft.classList.add("l5");
      break;
    case logLeft.classList.contains("l5"):
      logLeft.classList.remove("l5");
      logLeft.classList.add("l1");
      break;
  }
};

const moveLogRight = (logRight) => {
  switch (true) {
    case logRight.classList.contains("l10"):
      logRight.classList.remove("l10");
      logRight.classList.add("l9");
      break;
    case logRight.classList.contains("l9"):
      logRight.classList.remove("l9");
      logRight.classList.add("l8");
      break;
    case logRight.classList.contains("l8"):
      logRight.classList.remove("l8");
      logRight.classList.add("l7");
      break;
    case logRight.classList.contains("l7"):
      logRight.classList.remove("l7");
      logRight.classList.add("l6");
      break;
    case logRight.classList.contains("l6"):
      logRight.classList.remove("l6");
      logRight.classList.add("l10");
      break;
  }
};

const moveCarLeft = (carLeft) => {
  switch (true) {
    case carLeft.classList.contains("c1"):
      carLeft.classList.remove("c1");
      carLeft.classList.add("c2");
      break;
    case carLeft.classList.contains("c2"):
      carLeft.classList.remove("c2");
      carLeft.classList.add("c3");
      break;
    case carLeft.classList.contains("c3"):
      carLeft.classList.remove("c3");
      carLeft.classList.add("c1");
      break;
  }
};

const moveCarRight = (carRight) => {
  switch (true) {
    case carRight.classList.contains("c4"):
      carRight.classList.remove("c4");
      carRight.classList.add("c6");
      break;
    case carRight.classList.contains("c6"):
      carRight.classList.remove("c6");
      carRight.classList.add("c5");
      break;
    case carRight.classList.contains("c5"):
      carRight.classList.remove("c5");
      carRight.classList.add("c4");
      break;
  }
};

const headerTextModifier = () => {
  if (squares[currentIndex].classList.contains("road-edge")) {
    resultDisplay.textContent = "Cars ahead, avoid becoming a frog flapjack";
  }
  if (
    squares[currentIndex].classList.contains("c2") ||
    squares[currentIndex].classList.contains("c3") ||
    squares[currentIndex].classList.contains("c5") ||
    squares[currentIndex].classList.contains("c6")
  ) {
    resultDisplay.textContent = "LEEEROY JEEENKINS!!!";
  }
  if (squares[currentIndex].classList.contains("river-bank")) {
    resultDisplay.textContent =
      "There's no VAN down by the RIVER to live in, so keep it moving";
  }
  if (
    squares[currentIndex].classList.contains("l1") ||
    squares[currentIndex].classList.contains("l2") ||
    squares[currentIndex].classList.contains("l3") ||
    squares[currentIndex].classList.contains("l6") ||
    squares[currentIndex].classList.contains("l7") ||
    squares[currentIndex].classList.contains("l8")
  ) {
    resultDisplay.textContent =
      "Water is the essence of moisture, and moisture is the essence of frog murder...";
  }
  if (squares[currentIndex].classList.contains("after-river")) {
    resultDisplay.textContent = "You are so close my frog dude";
  }
};

const gameLoss = () => {
  if (
    squares[currentIndex].classList.contains("c1") ||
    squares[currentIndex].classList.contains("c4") ||
    squares[currentIndex].classList.contains("l4") ||
    squares[currentIndex].classList.contains("l5") ||
    squares[currentIndex].classList.contains("l9") ||
    squares[currentIndex].classList.contains("l10") ||
    currentTime <= 0
  ) {
    resultDisplay.textContent = "Your frog family will never see you again!";
    startPauseButton.textContent = "Reset";
    clearInterval(timerId);
    squares[currentIndex].classList.remove("frog");
    document.removeEventListener("keyup", moveFrog);
  }
};

const resetGame = () => {
  if (startPauseButton.textContent === "Reset") {
    resultDisplay.textContent = "Get him back to his humble abode!";
    startPauseButton.textContent = "Start/Pause";
    timeLeftDisplay.textContent = "20";
    currentTime = 20;
    currentIndex = 76;
    squares[currentIndex].classList.add("frog");
    document.addEventListener("keyup", moveFrog);
  }
};

startPauseButton.addEventListener("click", resetGame);

const gameWin = () => {
  if (squares[currentIndex].classList.contains("ending-block")) {
    resultDisplay.textContent = "You lived...this time...";
    startPauseButton.textContent = "Next Level";
    clearInterval(timerId);
    document.removeEventListener("keyup", moveFrog);
  }
};

if (!timerId) {
  document.removeEventListener("keyup", moveFrog);
}

startPauseButton.addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
    clearInterval(outcomeTimerId);
    document.removeEventListener("keyup", moveFrog);
    timerId = null;
    outcomeTimerId = null;
  } else {
    timerId = setInterval(autoMoveElements, 1000);
    outcomeTimerId = setInterval(checkOutcome, 1);
    document.addEventListener("keyup", moveFrog);
  }
});
