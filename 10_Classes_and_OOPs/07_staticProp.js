class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    static createId(){
        return '123'
    }
}

/*
In JavaScript, the static keyword is used to define a static method or property for a class. Static members are associated with the class itself rather than instances of the class. This means that you can call a static method or access a static property without creating an instance of the class.
*/

const chai = new User('chai')

// console.log(chai.createId()); //Error
// console.log(User.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.username = username
    }
}

const windows = new Teacher('windows','windows@lap.com')
// windows.logMe()
// console.log(windows.createId());