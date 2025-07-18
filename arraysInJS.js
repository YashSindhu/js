// Arrays
// * Arrays in javascript are resizeable(not fix)
// Arrays can contain mix datastructures

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // Used to add in start but it shift all elements by 1 place.
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3))

const newArr = myArr.join() // Adds data but in string.


// console.log(myArr);
// console.log(typeof newArr);

// ** slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // Dont include last range number and dont change the array
// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // It includes last range number and change array
// console.log(myn2)
// console.log("C ", myArr);

