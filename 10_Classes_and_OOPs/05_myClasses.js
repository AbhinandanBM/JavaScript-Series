// ES6

// const { log } = require("console");

// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptpassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@outlook.com",'1234')

// console.log(chai.encryptpassword());
// console.log(chai.changeUsername());


// Behind the  Scence

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptpassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const coffe = new User("coffe","coffe@gmail.com","abc123");

console.log(coffe.encryptpassword());
console.log(coffe.changeUsername());