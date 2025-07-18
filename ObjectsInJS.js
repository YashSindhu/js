// Singleton
// Object.create

// Object Literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Yash",
    "full name": "Yash Sindhu",
    [mySym]: "mykey1", //If we want a symbol in object then use key inside[]
    age: 21,
    location: "Hisar",
    email: "yash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser.mySym);

jsUser.email = "yash@chatgpt.com"
// Object.freeze(jsUser) // Will not allow changes in object
jsUser.email = "yash@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello jsUser");
}
jsUser.greeting2 = function(){
    console.log(`Hello jsUser,  ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
