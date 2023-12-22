const user = {
  username: "abhi",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from Database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const UserOne = new User("Abhi", 13, true);
const UserTwo = new User("chaiaurcode", 12, false);

console.log(UserOne.constructor);
// console.log(UserTwo);

/*
In JavaScript, the new keyword is used to create instances of user-defined objects, typically created by constructor functions. When a function is invoked with the new keyword in front of it, the following steps are taken:

    1.A new empty object is created.
    2.The new object is set as the value of the this keyword within the function, allowing the function to modify the object.
    3.The function is executed, and properties and methods can be added to the object using this.
    4.If the function does not explicitly return an object, the newly created object is implicitly returned.
*/

// Constructor function
function Person(name, age) {
  // Properties added to the object using 'this'
  this.name = name;
  this.age = age;

  // Method added to the object
  this.sayHello = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

// Creating an instance of Person using 'new'
const john = new Person("John", 30);

// Using the instance
john.sayHello(); // Output: Hello, my name is John and I am 30 years old.