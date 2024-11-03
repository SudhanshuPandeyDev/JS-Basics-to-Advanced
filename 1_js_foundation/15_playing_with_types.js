// JavaScript Function Exercises: Type Conversion, Boolean Manipulation, and Truthiness Check

// Task 1: Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
function stringToNumber(string) {
  let number = Number(string);
  if (isNaN(number)) {
    return "Not a number";
  } else {
    return "Number";
  }
}
const res = stringToNumber("123a");
console.log(res);

// Task 2: Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
function flipBoolean(input) {
  return !Boolean(input);
}
const res2 = flipBoolean(1);
console.log(res2);

// Task 3: Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(input) {
  let num = Number(input);
  // In JS, the typeof operator will return "number" for NaN, that's why we can do its check like we checking for string in our code
  if (!isNaN(num)) {
    return "I am a Number";
  }
  let str = String(input);
  if (typeof str === "string") {
    return "I am a String";
  }
}
let res3 = whatAmI("1");
console.log(res3);

// Task 4: Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
function isItTruthy(input) {
  if (input) {
    return "It's truthy!";
  } else {
    return "It's falsey!";
  }
}
let res4 = isItTruthy(true);
console.log(res4);
