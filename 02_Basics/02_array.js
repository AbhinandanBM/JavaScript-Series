const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//spread

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

// const anotherArr = [1,2,3,[4,5,6],7,[6,4,2,[8,9]]]

// const real_anotherArr = anotherArr.flat(Infinity)
// console.log(real_anotherArr);

console.log(Array.isArray("Abhi"));
console.log(Array.from("Abhi"));
console.log(Array.from({name:"Abhi"}));//intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));