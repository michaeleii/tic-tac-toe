const cells = document.querySelectorAll("[data-cell]");
const board = document.querySelector(".board");
const switchTurn = (currentPlayer) => {
	board.classList.remove(currentPlayer);
	currentPlayer = currentPlayer === "o" ? "x" : "o";
	return currentPlayer;
};
const turn = (currentPlayer) => {
	board.classList.add(currentPlayer);
	const placeMove = (e) => {
		const cell = e.target;
		cell.classList = `cell ${currentPlayer}`;
		turn(switchTurn(currentPlayer));
	};
	cells.forEach((cell) => {
		cell.addEventListener("click", placeMove, { once: true });
	});
};
turn("o");
