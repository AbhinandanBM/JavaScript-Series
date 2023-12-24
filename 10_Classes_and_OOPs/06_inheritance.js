const { log } = require("console");

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email =email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new Course added by ${this.username}`);
    }
}

const TJ = new Teacher("TJ","tj123@gmail.com","tjqwerty")

TJ.addCourse();

const chai = new User("chai")

chai.logMe()
TJ.logMe()

console.log(chai instanceof User);
console.log(chai instanceof Teacher);