import List from "./list.js";
import createElement from "../utils/create_element.js";

class Board {
    selector;
    element;

    lists = [];

    constructor(selector) {
        this.selector = selector;
        this.element = document.querySelector(selector);

        const getListsData=JSON.parse(localStorage.getItem('lists'))

        if(getListsData){
            this.lists=JSON.parse(localStorage.getItem('lists'))
        }

        this.lists.forEach((list)=>{
            // this.element.appendChild(list.element);
            console.log(list)
        })
    }

    createAddListBtn(){
        this.element.appendChild(createElement(`<div class="btnListContainer">
                <button class="btnList">Add List</button>
        </div>`))

        document.querySelector('.btnList').addEventListener('click', this.handleCreateList.bind(this))
    }

    handleCreateList() {
        const title = prompt('Enter List Title:')

        if (title) {
            this.createList(title)
        }
    }

    createList(title) {
        const newList = new List(title);

        this.lists.push(newList);

        localStorage.setItem('lists', JSON.stringify(this.lists))

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
