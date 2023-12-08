// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is: ${greet}`);
}


// map

const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","Frace")
map.set("IN","India") //map maintains unique enteries

// console.log(map);

for (const value of map) {
    // console.log(value);//returns in array of key and values
}

for (const [key,value] of map) {
    // console.log(key,":-",value);
}

const myobj = {
    "game1":"mario",
    "game2":"GTA Vicecity"
}

for (const val of myobj) {
    // console.log(val); 
}

for (const [key,value] of myobj) {
    console.log(key,":-",value); 
}

// Note : Objects are not iterable through forof loop