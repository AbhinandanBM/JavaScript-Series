const name = "Abhi"
const repoCount = 20

// console.log("My name is "+name+ repoCount); older method

//modern method string interpolation
console.log(`Hello, My name is ${name} and my repo count is ${repoCount}  `);

const gameName = new String("mario-hc-com")

// console.log(gameName);
// console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

//slicing
const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const stringOne = "  Abhi  "
console.log(stringOne);
console.log(stringOne.trim());

const url = "https://abhi.com/abhi%12nandan.html"
console.log(url.replace("%12",'-'));

console.log(url.includes("html"));

console.log(gameName.split('-'));