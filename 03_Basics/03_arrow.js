const user = {
    username: "Abhi",
    price : 2499,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username="Raju"
// user.welcomeMessage();

console.log(this);


function one() {
    let username = "Abhi"
    //console.log(this);//this will print the node objects
    console.log(this.username);
}

// one()

const two = function(){
    let username = "Abhi"
    console.log(this.username);
}

// two()


// ++++++++++++++ Arrow function +++++++++++++++++++++++++

const three = () => {
    let username = "Abhi"
    console.log(this.username);
}

// three()

// Explicit return
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }

//Implicit return
// const addTwo = (num1,num2) => num1+num2;

// const addTwo = (num1,num2) => (num1+num2);

const addTwo = (num1,num2) => ({username: "Abhi"});


console.log(addTwo(3,5));