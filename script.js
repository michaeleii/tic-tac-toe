const cells = document.querySelectorAll("[data-cell]");
const board = document.querySelector(".board");
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
		cell.addEventListener("click", handleClick, { once: true });
	});
	setBoardHover();
};

const handleClick = (e) => {
	const cell = e.target;
	const currentPlayer = circleTurn ? o : x;
	placeMove(cell, currentPlayer);
	//Check for Win
	//Check for Draw
	switchTurn();
	setBoardHover();
};

const placeMove = (cell, currentPlayer) => {
	cell.classList.add(currentPlayer);
};
const switchTurn = () => {
	circleTurn = !circleTurn;
};
const setBoardHover = () => {
	board.classList.remove(x);
	board.classList.remove(o);
	board.classList.add(circleTurn ? o : x);
};
startGame();
