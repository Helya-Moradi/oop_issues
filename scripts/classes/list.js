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
                <button class="btnTask">Add Task</button>
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

        this.createTask(title, description);
    }

    editTask(id, title, description) {

    }

    deleteTask(id) {

    }
}
export default List;

