// JavaScript Array Manipulation Functions

// Task 1: Array Filtering : Write a function filterNumbers(arr) that returns only numbers from a mixed array
function filterNumbers(arr) {
  return arr.filter((element) => typeof element === "number");
}
let arr = [1, "two", 3, false];
let res1 = filterNumbers(arr);
console.log(res1);

// Task 2: Array Reversal : Write a function reverseArray(arr) that reverses the array
function reverseArray(arr) {
  return arr.reverse();
}
let arr2 = [1, 2, 3, 4, 5];
let res2 = reverseArray(arr2);
console.log(res2);

// Task 3: Find Maximum in an Array : Write a function findMax(arr) that returns the largest number in the array
//  if arr is [3, 5, 7], using Math.max(...arr) is equivalent to calling Math.max(3, 5, 7).
function findMax(arr) {
  return Math.max(...arr);
}
let arr3 = [3, 5, 7];
let res3 = findMax(arr3);
console.log(res3);

// Task 4: Remove Duplicates from an Array : Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
function removeDuplicates(arr) {
  let unique = new Set(arr);
  return Array.from(unique);
}
let arr4 = [1, 2, 2, 3, 3, 3];
let res4 = removeDuplicates(arr4);
console.log(res4);

// Task 5: Flatten a Nested Array : Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
function flattenArray(arr) {
  return arr.flat(Infinity); // Flattens all levels of nesting
}
let arr5 = [1, [2, 3], [4, [5, 6]]];
let res5 = flattenArray(arr5);
console.log(res5);
