// primitive
// 7 types: string, number boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber= 372983227236n

// reference (non primitive)

// array, objects, functions

const heroes = ["a", "b", "c"];
let myObj = {
    name : "kriti",
    age : 20,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof outsideTemp);