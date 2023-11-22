//date

let mydate = new Date()
// console.log(mydate);//2023-11-22T11:25:48.372Z
// console.log(mydate.toString());//Wed Nov 22 2023 16:55:48 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString());//Wed Nov 22 2023
// console.log(mydate.toISOString());//2023-11-22T11:25:48.372Z
// console.log(mydate.toJSON());//2023-11-22T11:25:48.372Z
// console.log(mydate.toLocaleDateString());//11/22/2023
// console.log(mydate.toLocaleString());//11/22/2023, 4:55:48 PM
// console.log(mydate.toLocaleTimeString());//4:55:48 PM

console.log(typeof mydate);

//create date
let createdate = new Date(2024, 0, 28)
//console.log(createdate.toDateString());
// let createdateone = new Date(2023, 7, 13, 20,25)
let createdateone = new Date("2023-05-08")
//console.log(createdateone.toLocaleString());


let timestamp = Date.now()

// console.log(timestamp);
// console.log(createdate.getTime()); //results in msec
// console.log(Math.floor(Date.now()/1000));//in seconds

let newdate = new Date()

console.log(newdate);
console.log(newdate.getMonth() + 1);
console.log(newdate.getDay());

newdate.toLocaleString('default',{
    weekday: "long",
    month: "2-digit"
})




