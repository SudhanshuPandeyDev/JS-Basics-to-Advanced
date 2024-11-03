// JavaScript Conditional Checks

// checking if a number is greater than another number:
let num1 = 5;
let num2 = 8;
if (num1 > num2) {
  console.log("Yes, num1 is greater than num2");
} else {
  console.log("No, num1 is not greater than num2");
}

// checking if a string is equal to another string
let username = "sudhanshu";
let anotherUserName = "sudhanshu";
if (username == anotherUserName) {
  console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

// Checking if a variable is a number or not
let score = 44;
if (typeof score === "number") {
  console.log("Yes, It is a Number");
} else {
  console.log("No that is not a Number");
}

// checking if a variable is an array or not
let myArr = [false, 1, "two"];
if (typeof myArr === "object") {
  console.log("yes, it is an array");
} else {
  console.log("no, it is not an array");
}

// checking if a boolean value is true or false
let isTeaReady = false;
if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  console.log("Tea is not Ready");
}

// checking if an array is empty or not
let items = [];
console.log(items.length);
if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}
