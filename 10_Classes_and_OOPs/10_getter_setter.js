/*
In JavaScript, getters and setters are special methods that allow you to control access to an object's properties. They are often used to provide an interface for interacting with private or protected properties of an object. Getters are used to retrieve the values of properties, and setters are used to change or set the values of properties.
*/

class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toLowerCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password.toUpperCase()}`
    }

    set password(value){
        this._password = value
    }
}

const abhi = new User("abhi@bm.ai",'qwerty')
console.log(abhi.email);
console.log(abhi.password);