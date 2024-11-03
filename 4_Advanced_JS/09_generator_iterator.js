// Generators and iterators in JS are used for handling complex data streams and lazy evaluations in a more efficient and controlled manner

// generator fn will yield 1, then 2, then 3, and then finish.
function* numberGenerator() {
  yield 1; // Pauses here and returns 1
  yield 2; // Pauses here and return 2
  yield 3; // Pauses here and return 3
}

// generator object (gen1, gen2) is acting as the iterator
let gen1 = numberGenerator(); // Creates a generator object (iterator)
let gen2 = numberGenerator(); // Another generator object (iterator)

console.log(gen1.next().value); // { value: 1, done: false }
console.log(gen1.next().value); // { value: 2, done: false}
console.log(gen1.next().value); // { value: 3, done: false}
console.log(gen1.next().value); // { value: undefined, done: true}

console.log(gen2.next().value);
console.log(gen2.next().value);
