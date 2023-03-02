const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}
function checkWinner() {
  if (player == "ROCK" && computer=="ROCK") {
    playerText.innerHTML = `<h4 class="gameText" id="playerText">Player:<img src="./img/Rock.svg"> </h4> `;
    computerText.innerHTML = `<h4 class="gameText" id="computerText">Computer: <img src="./img/Rock.svg" > </h4>`;
    return "Result: Draw!";
  } else if (player == "PAPER" && computer=="PAPER") {
    playerText.innerHTML = `<h4 class="gameText" id="playerText">Player:<img src="./img/Paper.svg" ></h4> `;
    computerText.innerHTML = `<h4 class="gameText" id="computerText">Computer:<img src="./img/Paper.svg" </h1> `;
    return "Result: Draw!";
  }else if (player == "SCISSORS" && computer=="SCISSORS") {
    playerText.innerHTML = `<h4 class="gameText" id="playerText">Player:<img src="./img/Scissors.svg" ></h4>`;
    computerText.innerHTML = `<h4 class="gameText" id="computerText">Computer: <img src="./img/Scissors.svg" ></h4>`;
    return "Result: Draw!";
  }
  else if (computer == "ROCK" && player == "PAPER" ) {
    playerText.innerHTML = `<h4 class="gameText" id="playerText">Player:<img src="./img/Paper.svg" ></h4> `;
    computerText.innerHTML = `<h4 class="gameText" id="computerText">Computer: <img src="./img/Rock.svg" > </h4>`;
    return  "Result: You Win!" ;
  } else if (computer == "PAPER" && player == "SCISSORS" ) {
    playerText.innerHTML = `<h4 class="gameText" id="playerText">Player:<img src="./img/Scissors.svg" ></h4>`;
    computerText.innerHTML =  `<h4 class="gameText" id="computerText">Computer:<img src="./img/Paper.svg" </h1> `;
    return  "Result: You Win!" ;
  } else if (computer == "SCISSORS" && player == "ROCK") {
    playerText.innerHTML = `<h4 class="gameText" id="playerText">Player:<img src="./img/Rock.svg"> </h4> `;
    computerText.innerHTML = `<h4 class="gameText" id="computerText">Computer:<img src="./img/Paper.svg" </h1> `;
    return  "Result: You Win!" ;

  } else if (computer == "PAPER" && player == "ROCK" ) {
    playerText.innerHTML = `<h4 class="gameText" id="playerText">Player:<img src="./img/Rock.svg" ></h4> `;
    computerText.innerHTML = `<h4 class="gameText" id="computerText">Computer: <img src="./img/Paper.svg" > </h4>`;
    return  "Result: You Lost!" ;
  } else if (computer == "SCISSORS" && player == "PAPER" ) {
    playerText.innerHTML = `<h4 class="gameText" id="playerText">Player:<img src="./img/Paper.svg" ></h4>`;
    computerText.innerHTML =  `<h4 class="gameText" id="computerText">Computer:<img src="./img/Scissors.svg"> </h4> `;
    return  "Result: You Lost!" ;
  } else if (computer == "ROCK" && player == "SCISSORS") {
    playerText.innerHTML =`<h4 class="gameText" id="playerText">Player:<img src="./img/Scissors.svg" ></h4> `;
    computerText.innerHTML =`<h4 class="gameText" id="computerText">Computer:<img src="./img/Rock.svg" > </h4> `;
    return  "Result: You Lost!" ;
  }
}

