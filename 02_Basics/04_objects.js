// const tinderUser = new Object() //Singleton Object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Bravo"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "other@gmail.com",
    fullname: {
        userfullname:{
            firstName: "Abhinandan",
            lastName: "Shetty"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj4 = {5: "e",6: "f"}


// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2} //spread operation
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"

}
// Object destructure

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);


