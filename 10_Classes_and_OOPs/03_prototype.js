// let myName = "Abhinandan   "

// console.log(myName.trueLength);

let myhero = ["thor", "spiderman"];

let heropower = {
  thor: "hammer",
  spiderman: "sling",

  getspiderPower: function () {
    console.log(`spidy power ${this.spiderman}`);
  },
};

Object.prototype.abhi = function () {
  console.log("abhi is present in all objects");
};

Array.prototype.heyAbhi = function () {
  console.log("abhi says hello");
};

// heropower.abhi()
// myhero.abhi()
// myhero.heyAbhi()
// heropower.heyAbhi()

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUser = "Abhinandan   ";

String.prototype.trueLength = function () {
  console.log(this);

  console.log(`True length string: ${this.trim().length}`);
};

anotherUser.trueLength();
"chai".trueLength();
