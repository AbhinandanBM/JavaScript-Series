/*
In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It is a way to handle asynchronous operations more cleanly and avoid the "callback hell" or "pyramid of doom" that can occur with nested callbacks.

A Promise can be in one of three states:

    1.Pending: The initial state; the promise is neither fulfilled nor rejected.

    2.Fulfilled: The operation completed successfully, and the promise has a resulting value.

    3.Rejected: The operation failed, and the promise has a reason for the failure.
 */

const { log } = require("console");

const promiseOne = new Promise(function (resolve, reject) {
  // Do async task
  // DB calls, cryptography task,network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "abhi", email: "abhi@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "abhi", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// import fetch from "node-fetch";
const fetch = require("node-fetch");

async function consumePromisefive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromisefive();

// async function getallUsers(){
//     try {
//     // const requestURL = "https://api.github.com/users/AbhinandanBM";
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ',error);
//     }
// }

// getallUsers()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resolve) => {
    return resolve.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
