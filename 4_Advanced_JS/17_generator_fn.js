// Generator Function: fibonacciGenerator

function* fibonacciGenerator() {
  let a = 1,
    b = 1;
  yield a; // Yield the first Fibonacci number
  yield b; // Yield the second Fibonacci number

  while (a <= 5) {
    const next = a + b; // Calculate the next Fibonacci number
    yield next; // Yield the next number
    a = b; // Update a to the previous b
    b = next; // Update b to the next Fibonacci number
  }
}

const generator = fibonacciGenerator();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 5, done: false }
console.log(generator.next()); // { value: 8, done: false }
console.log(generator.next()); // { value: 13, done: false }
console.log(generator.next());
