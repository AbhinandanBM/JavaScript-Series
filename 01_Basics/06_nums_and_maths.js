const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const anothernum = 23.89765
// console.log(anothernum.toPrecision(3));//use carefully

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//to indian currency by default US measure


//+++++++++++++++++++++++ Maths +++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(93.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(2,4,1,6,8,-2,0));
// console.log(Math.max(1,0,6,9,2,5,15,234));

console.log(Math.random()); //in the range 0 to 1
console.log((Math.random()*10)+1);//to avoid 0
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);