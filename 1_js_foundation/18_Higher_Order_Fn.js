// Higher-Order Functions and Arrow Functions

// Task 1: Using Array Methods Write a function squareNumbers(arr) using map() and arrow functions
const squareNumbers = (arr) => arr.map((num) => num * num);
let arr1 = [1, 2, 3, 4, 5];
let res1 = squareNumbers(arr1);
console.log(res1);

// Task 2: Custom Filter Function Create a function filterEvenNumbers(arr) using filter() and arrow functions
const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 == 0);
let arr2 = [1, 2, 3, 4, 5, 6];
let res2 = filterEvenNumbers(arr2);
console.log(res2);

// Task 3: Sum of Positive Numbers Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

//  In JS reduce() fn, whatever is returned from the callback fn is stored in the accumulator for the next iteration.
const sumPositiveNumbers = (arr) =>
  arr.filter((num) => num > 0).reduce((acc, curr) => acc + curr, 0);
let arr3 = [-1, 1, -2, 2, -3, 3];
let res3 = sumPositiveNumbers(arr3);
console.log(res3);

// Task 4: Transform Array of Objects Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

const arr = [
  { name: "sudhanshu", age: 20 },
  { name: "landon", age: 23 },
];
const getNames = (arr) => arr.map((obj) => obj.name);
const names = getNames(arr);
console.log(names);

// Task 5: Find the Longest Word Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

//  In JS reduce() fn, whatever is returned from the callback fn is stored in the accumulator for the next iteration.
const arrStr = ["one", "two", "three", "four"];
const findLongestWord = (arrStr) =>
  arrStr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    " "
  );
let res = findLongestWord(arrStr);
console.log(res);

// check the if else version of this for understanding the reduce function and ternary operator working, whatever is returned is going to be stored in longest(accumulator)
const findLongestWord2 = (arr) =>
  arr.reduce((longest, currentWord) => {
    if (currentWord.length > longest.length) {
      return currentWord;
    } else {
      return longest;
    }
  }, "");
