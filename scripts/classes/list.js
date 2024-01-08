import Task from "./task.js";
import createElement from "../utils/create_element.js";

class List {
    id;
    title;

    tasks = [];

    element;

    constructor(title) {
        this.id = Date.now();
        this.title = title;

        this.element = createElement(`<section class="list">
            <header>
                <h2>${this.title}</h2>
                <div class="buttonWrapper">
                
                    <button class="btnListEdit">
                        <img src="../../icons/pen-solid.svg" alt="editList">
                    </button>
                    
                    <button class="btnTask">Add Task</button>
                    
                </div>
            </header>
            <div class="tasks"></div>       
        </section>`);

        this.element.querySelector('.btnTask').addEventListener('click', this.handleAddTask.bind(this));
    }

    createTask(title, description) {
        const newTask = new Task(title, description);

        this.tasks.push(newTask);

        this.element.querySelector('.tasks').appendChild(newTask.element);
    }

    handleAddTask(e) {
        const title = prompt('Enter Task Title:');
        const description = prompt('Enter Task Description:');

        if(title && description){
            this.createTask(title, description);
        }
    }

    editTask(id, title, description) {

    }

    deleteTask(id) {

    }
}
export default List;

