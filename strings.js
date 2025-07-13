const name  = "Yash"
const repoCount = 10

 // Formatting
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);
// OR
// console.log('Hello my name is '+ name+' and my repo count is ' + repoCount);

const gameName = new String("Yash-Sin")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('s'));
const newString = gameName.substring(0,2)
// console.log(newString); // We cannt use -ve val in substr

const anotherString = gameName.slice(-4,2)
// console.log(anotherString); // We can give -ve val in slice

const newString1 = "    Yash     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://yash.com/yash%20sindhu"
console.log(url.replace('%20','-'));
console.log(url.includes('place'));

console.log(gameName.split('-'));



