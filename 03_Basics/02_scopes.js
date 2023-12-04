let a = 10
const b = 20
var c = 30

if (true) {
    let a = 100
    // b = 200 //it is constant you can't modify
    var c = 300 //var does'nt maintain the any scope
    // console.log("INNER:",a);//let maintains the block scope
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Abhi"

    function two(){
        const ide = "vscode"
        console.log(username);
    }

    // console.log(ide); 
    //you can not access the local variable in global scope
    two()
}

// one()

if (true) {
    const username = "Rocky"
    if (username === "Rocky") {
        const location = " Narachi"
        // console.log(username + location);
    }
    // console.log(location);
}

// console.log(username);


// ++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++++++


console.log(addOne(5));
function addOne(num){
    return num+1;
}

// addOne()

console.log(addTwo(3));//you will got error
const addTwo = function(num){
    return num+2;
}

// addTwo()