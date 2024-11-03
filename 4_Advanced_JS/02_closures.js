// A closure is created when a fn is defined inside another, allowing the inner fn to access variables from the outer fn's scope, even after the outer fn has finished executing.

// A closure is a special type of function

function outer() {
  let counter = 5;
  return function () {
    counter++;
    return counter;
  };
}
let increment = outer();
console.log(increment()); // output: 6
console.log(increment()); // output: 7
console.log(increment()); // output: 8
