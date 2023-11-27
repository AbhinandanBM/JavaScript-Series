// singleton
// Object.create

// object literals

//Interview question related to symbol to pass a key in object
const mysym = Symbol("key1")

const JsUser = {
    name: "Abhi",
    "full name": "Abhinandan Shetty",
    [mysym]: "myKey1",
    age: 19,
    location: "Bengaluru",
    email: "abhi@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "abhi@amazon.in"
// Object.freeze(JsUser)//locking object for no modification
JsUser.email = "abhi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
