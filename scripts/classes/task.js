import User from "./user.js";
import createElement from "../utils/create_element.js";

class Task {
    id;
    title;
    description;

    user;

    element;

    constructor(title, description) {
        this.id = Date.now()
        this.title = title;
        this.description = description;

        this.element = createElement(`<section class="task">
            <h3>${this.title}</h3>
            <p>${this.description}</p>
            <button class="btnAssign">Assign To</button>
        </section>`);

        this.element.querySelector('.btnAssign').addEventListener('click', this.handleAssign.bind(this));
    }

    handleAssign(e) {
        const username = prompt('Enter username:');

        // find user and assign to the task
    }

    assignTo(user) {

    }
}

export default Task;