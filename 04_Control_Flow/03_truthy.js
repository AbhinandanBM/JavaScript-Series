const userEmail = []

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}


// falsy values

// false, 0, -0, BigInt 0n , "", null, undefined, NaN

// truthy values

// "0", "false", " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined

// The nullish coalescing operator (??) is a feature introduced in JavaScript to provide a concise way to handle default values for variables that may be null or undefined. It is often used as a shorthand for the logical OR (||) operator in scenarios where falsy values like 0 or an empty string are considered valid.

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 5
// val1 = undefined ?? 15

// Using nullish coalescing operator
// let defaultValue = someVariable ?? "Default Value";
// console.log(defaultValue);

// Equivalent using logical OR operator
// let defaultValueEquivalent = someVariable !== null && someVariable !== undefined ? someVariable : "Default Value";


console.log(val1);


// Ternary Operator

// condition ? true_stmt : false_stmt

let a = 10
let b = 20

(a>b)?console.log(a):console.log(b);