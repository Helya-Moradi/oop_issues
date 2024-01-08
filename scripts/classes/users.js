import createElement from "../utils/create_element.js";
import User from "./user.js";


class Users {
    selector;
    element;

    users = [];

    constructor(selector) {
        this.selector = selector;
        this.element = document.querySelector(selector);

    }

    createAddUserBtn() {
        this.element.appendChild(createElement(`<div class="btnUserContainer">
                <button class="btnUser">Add User</button>
        </div>`))

        document.querySelector('.btnUser').addEventListener('click', this.handleCreateUser.bind(this))
    }

    handleCreateUser() {
        const firstname = prompt('Enter firstname:')
        const lastname = prompt('Enter lastname:')
        const username = prompt('Enter username:')
        const email = prompt('Enter email:')

        if (firstname && lastname && username && email) {
            this.createUser(firstname,lastname,username,email)
        }
    }

    createUser(firstname, lastname, username, email) {
        const newUser = new User(firstname,lastname,username,email);

        this.users.push(newUser);

        this.element.appendChild(newUser.element);
    }
}

export default Users;
