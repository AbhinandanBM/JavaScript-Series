//The datatypes can be categories into two type based on accessing
//1.Primitive
//2.Non-Primitive

// Primitive

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

const score = 100
const scoreVal = 100.45

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2346789123000n


//Reference(Non-Primitive)

//Array, Objects, Functions

const heros = ["shakthiman","naagraj","doga"]

let myObj={
    name:"Abhi",
    age: 21
}

const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object