import Board from "./scripts/classes/board.js";
import Users from "./scripts/classes/users.js";

const users=new Users('.users')
users.createAddUserBtn()

users.createUser('ali','azimi','aliazimi','ali@gmail.com')
users.createUser('ali','azimi','aliazimi','ali@gmail.com')
users.createUser('ali','azimi','aliazimi','ali@gmail.com')

const board = new Board('.board');
board.createAddListBtn()

board.createList('Open');
board.createList('Todo');
board.createList('Closed');
