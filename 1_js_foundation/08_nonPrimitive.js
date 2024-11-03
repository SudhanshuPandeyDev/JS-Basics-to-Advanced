// Working with Objects, Dates, and Arrays in JavaScript

// Object
let username = {
  firstname: "sudhanshu",
  isLoggedin: true,
  "is Admin": "yes",
};

// changing the value of a key using dot notation
username.firstname = "pandey";

// Adding a new key using dot notation
username.lastname = "dev";

// Accessing a key using bracket notation:
console.log(username["is Admin"]);

console.log(username.firstname);
console.log(username.lastname);
console.log(username);

let today = new Date();
console.log(today.getDate());

// Arrays
let anotherUser = ["sudhanshu", "pandey", true];
console.log(anotherUser[1]);
