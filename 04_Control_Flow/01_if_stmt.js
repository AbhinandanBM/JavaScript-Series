// if
const isUserloggedIn = true

if(isUserloggedIn){

}

// <, >, <=, >=, ==, !=, ===, !==

if(2 == "2"){
    console.log("executed");
}

if(2==="2"){ //strict type checking 
    console.log("executed");
}

const temperature = 41

// if(temperature < 50){
//     console.log("temperature less than 50");
// }
// else{
//     console.log("temperature greater than 50");
// }

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);


const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");//implicit scope


// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("greater than or equal 1000");
// }


const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInfromEmail || loggedInfromGoogle){
    console.log("User logged in");
}
