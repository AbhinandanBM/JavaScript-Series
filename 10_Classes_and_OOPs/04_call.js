function setUser(username) {
  // complex DB calls
  this.username = username;
  console.log("called");
}

function createuser(username, email, password) {
  setUser.call(this, username);

  this.email = email;
  this.password = password;
}

const abhi = new createuser("abhi", "abhi@mic.com", "123");
console.log(abhi);
