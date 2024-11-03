// The rest parameter in JS allows you to represent an indefinite number of arguments as an array.

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// When you pass (1, 2, 3, 4) to the function, the args becomes [1, 2, 3, 4].
