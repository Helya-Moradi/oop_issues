import Board from "./scripts/classes/board.js";

const board = new Board('.board');

board.createList('Open');
board.createList('Todo');
board.createList('Closed');

console.log(board)
