import List from "./list.js";

class Board {
    selector;
    element;

    lists = [];

    constructor(selector) {
        this.selector = selector;
        this.element = document.querySelector(selector);
    }

    createList(title) {
        const newList = new List(title);

        this.lists.push(newList);

        this.element.appendChild(newList.element);
    }

    editList(id, title) {
        const index = this.lists.findIndex((list) => list.id === id);

        if (index >= 0) {
            this.lists[index].title = title;
        }
    }

    deleteList(id) {
        const index = this.lists.findIndex((list) => list.id === id);

        if (index >= 0) {
            this.lists.splice(index, 1);
        }
    }
}

export default Board;
