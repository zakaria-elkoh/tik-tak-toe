let currentPlayer = "X";
const gridSize = 20;
const winCondition = 5;
let XPlayerScore = 0;
let OPlayerScore = 0;

function createCells() {
  const cellContainer = document.getElementById("cellContainer");

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    // cell.innerText = i;
    cell.setAttribute("cellIndex", i);
    cell.addEventListener("click", handleCellClick);
    cellContainer.appendChild(cell);
  }
}

function handleCellClick(event) {
  const cell = event.target;

  if (cell.textContent !== "") {
    return;
  }

  cell.style.color = currentPlayer === "X" ? "red" : "blue";
  cell.textContent = currentPlayer;

  const index = parseInt(cell.getAttribute("cellIndex"));

  if (checkWin(index)) {
    showWinner();
  } else if (isDraw()) {
    console.log("it is a draw!!");
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin(index) {
  const row = Math.floor(index / gridSize);
  const col = index % gridSize;

  console.log("row:", row, "col:", col);

  return (
    checkDirection(row, col, 0, 1) ||
    checkDirection(row, col, 1, 0) ||
    checkDirection(row, col, 1, 1) ||
    checkDirection(row, col, 1, -1)
  );
}

function checkDirection(row, col, rowDir, colDir) {
  let count = 1;

  count += countInDirection(row, col, rowDir, colDir);
  count += countInDirection(row, col, -rowDir, -colDir);

  return count >= winCondition;
}

function countInDirection(row, col, rowDir, colDir) {
  console.log("row", row, "col", col, "rowDir", rowDir, "colDir", colDir);

  let count = 0;
  for (let i = 1; i < winCondition; i++) {
    const newRow = row + i * rowDir;
    const newCol = col + i * colDir;

    console.log("new row:", newRow, "new col:", newCol);

    if (
      newRow >= 0 &&
      newRow < gridSize &&
      newCol >= 0 &&
      newCol < gridSize &&
      document.querySelectorAll(".cell")[newRow * gridSize + newCol]
        .textContent === currentPlayer
    ) {
      count++;
    } else {
      break;
    }
  }
  return count;
}

function showWinner() {
  console.log("the winner is:", currentPlayer);
  document.querySelector(".winnerPopup .player").innerHTML = currentPlayer;
  document.querySelector(".winnerPopup").style.display = "flex";
  console.log("current player:", currentPlayer);

  currentPlayer == "X" ? XPlayerScore++ : OPlayerScore++;
  document.querySelector(".player-x-score").innerHTML = XPlayerScore;
  document.querySelector(".player-o-score").innerHTML = OPlayerScore;
}

function isDraw() {
  const cells = document.querySelectorAll(".cell");

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }

  return true;
}

function resetGame() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.style.color = "";
  });
  currentPlayer = "X";
  document.querySelector(".winnerPopup").style.display = "none";
}

document.getElementById("restartBtn").addEventListener("click", resetGame);
document.getElementById("restartBtn-2").addEventListener("click", resetGame);

createCells();
