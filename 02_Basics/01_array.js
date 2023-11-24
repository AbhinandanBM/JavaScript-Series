// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["Spiderman","Thor","Batman"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)//insert at front
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()//converts to string join
// console.log(newArr);
// console.log(typeof newArr);


// console.log(myArr);

//slice,splice

console.log('A',myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log('B',myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log('C',myArr);

//slice will includes the staring point and exludes the ending point and also not modify the original array.

//but in spice it will includes the both starting point and ending point and it will also modify the original array.
 
