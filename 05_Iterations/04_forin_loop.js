// forin

const myobj ={
    "js":"javascript",
    "cpp":"C++",
    "py":"Python",
    "java":"Java",
    "rb":"Ruby"
}

for (const key in myobj) {
    // console.log(`${key} shortcut is for ${myobj[key]}`);
}

const myarr = ["js","cpp","py","java"]

for (const key in myarr) {
    // console.log(`value ${myarr[key]} in the index of ${key}`);
}

const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","Frace")
map.set("IN","India") 

for (const key in map) {
    // console.log(key);
}

// In JavaScript, maps are iterable, and you can use a for...of loop to iterate through their entries. The for...in loop is not recommended for iterating over maps because it is designed for iterating over the properties of objects and may not behave as expected for maps.