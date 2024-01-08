import createElement from "../utils/create_element.js";

class User {
    id;
    firstname;
    lastname;
    username;
    email;

    element;

    constructor(firstname, lastname, username, email) {
        this.firstname=firstname;
        this.lastname=lastname;
        this.username=username;
        this.email=email;

        this.element = createElement(`<section class="user">
            <div>
                <span class="label">Firstname :</span> 
                <span class="value">${this.firstname}</span> 
            </div>    
            
            <div>
                <span class="label">Lastname :</span> 
                <span class="value">${this.lastname}</span>     
            </div>    
            
            <div>
                <span class="label">Username :</span> 
                <span class="value">${this.username}</span> 
            </div>   
             
             <div>
                <span class="label">Email :</span> 
                <span class="value">${this.email}</span> 
            </div>    
            
        </section>`);
    }
}

export default User;