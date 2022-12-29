const cells = document.querySelectorAll("[data-cell]");
const board = document.querySelector(".board");
const winningMsg = document.getElementById("winningMsg");
const winText = document.querySelector("[data-winning-msg-text]");
const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
const x = "x";
const o = "o";

let circleTurn;

const startGame = () => {
	circleTurn = true;
	cells.forEach((cell) => {
		cell.classList.remove(o);
		cell.classList.remove(x);
		cell.addEventListener("click", handleClick, { once: true });
	});
	setBoardHover();
};

const handleClick = (e) => {
	const cell = e.target;
	const currentPlayer = circleTurn ? o : x;
	placeMove(cell, currentPlayer);
	if (checkWin(currentPlayer)) {
		endGame(false);
	} else if (isDraw()) {
		endGame(true);
	} else {
		switchTurn();
		setBoardHover();
	}
};

const placeMove = (cell, currentPlayer) => {
	cell.classList.add(currentPlayer);
};
const switchTurn = () => {
	circleTurn = !circleTurn;
};
const setBoardHover = () => {
	board.classList.remove(o);
	board.classList.remove(x);
	board.classList.add(circleTurn ? o : x);
};

const checkWin = (currentPlayer) =>
	winConditions.some((condition) =>
		condition.every((i) => cells[i].classList.contains(currentPlayer))
	);
const isDraw = () => {
	return [...cells].every((cell) => {
		return cell.classList.contains(o) || cell.classList.contains(x);
	});
};
const endGame = (draw) => {
	winningMsg.classList.add("show");
	if (draw) {
		winText.innerText = `Draw!`;
	} else {
		const winner = circleTurn ? "O" : "X";
		winText.innerText = `${winner} wins!`;
	}
};
const restartGame = () => {
	winningMsg.classList.remove("show");
	startGame();
};

startGame();
