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

// console.log(id === id1);

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

// console.log(typeof myfunc); // => function
// console.log(typeof myObj); // => obj

// ****************************************************

// Stack(Primitive), Heap(Non-Primitive)
// if something is defined in stack memory we get a copy of things,
// on the other hand in heap we get reference of original value.

let myYTName = "YashSindhu"  
let anothername = myYTName
anothername = "SinduYash"

console.log(myYTName);    // These are non primitive datatypes so stored in stack and we are modifying the value of copy so not changin original
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "yash@google.com"

console.log(userOne.email); // Here we are using non-primitive datatype so if we modify data it changes the original data beacuse in heap we get referance of original data
console.log(userTwo.email);


