"use strict"; // Treat all JS code as of newer version.
//  alert(3+3) // We are using NodJS not browser so diff way,
// Sometimes we use semicolans but sometimes not
// console.log("Yash") console.log("Sindhu") Here it will give error but
// console.log("Yash"); console.log("Sindhu") => this is okay
// console.log("Yash")  // This is also okay
// console.log("Sindhu")

let name = "Yash"
let age = 21
let IsLoggedIn = false
let state

// console.log(typeof age); // => number
// console.log(typeof null); // => object
// console.log(typeof undefined); // => undifined

// Datatypes
// - Primitive => 7 types:- String, Number, Boolean, null, undefined, Symbol, BigInt

const sc = 100
const scval = 100.3
const login = false
const tempoutside = null
let userEmail = undefined
const id = Symbol('123')
const id1 = Symbol('123')

console.log(id === id1);

const bigNumber = 34565435576654356754n

// - Non-Primitive(Reference) => Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "yash",
    age: 21
}

const myfunc = function(){
    console.log("Hello World");
}

console.log(typeof myfunc); // => function
console.log(typeof myObj); // => obj