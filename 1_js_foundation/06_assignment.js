// Shorthand Operators and Operator Precedence in JavaScript

let num1 = 10;
num1 += 5; // just a shorthand notation of num1 = num1 + 5
console.log(num1);

// operators precedence : expressions inside parentheses are evaluated first according to the operator precedence
let score = 2 * (3 + 4) - 1;
console.log(score);
// Evaluation Steps:
// Inner Parentheses: The expression (3 + 4) is evaluated first, resulting in 7.
// Multiplication: Next, the expression 2 * 7 is calculated, resulting in 14.
// Subtraction: Finally, 14 - 1 is evaluated, resulting in 13.

// shift and unshift method in js
let arr1 = [false, "one", 2];
arr1.shift();
console.log(arr1);

let arr2 = ["one", "two", 3];
arr2.unshift(true, false);
console.log(arr2);
