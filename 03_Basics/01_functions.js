function sayMyname() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I"); 
}

// sayMyname()

// function addTwoNumbers(number1,number2) {
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2) {
    // let result = number1+number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(5,3)

// console.log(`Result: ${result}`);

function loginUserMessage(username = "virat"){ //default parameter
    if(username === undefined){
        console.log("Please Enter the username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Abhi"));
// console.log(loginUserMessage());
// console.log(loginUserMessage("Roy"));//overrides the default parameter

function calculateCartPrice(val1,val2,...num1){//REST operator
    return num1
}

console.log(calculateCartPrice(200,400,100,890,9200));


const user ={
    username: "Abhi",
    location: "Bengaluru"
}

function handleObject(anyobject) {
    console.log(`Hey ${anyobject.username} your location is ${anyobject.location}`);
}

// handleObject(user)
console.log({
    username: "sam",
    location: "California"
});

let myNewArr = [200,300,600,500,100]

function returnSecondVal(anyArr) {
    return anyArr[1]
}

// console.log(returnSecondVal(myNewArr));
console.log(returnSecondVal([300,1000,700,200]));

