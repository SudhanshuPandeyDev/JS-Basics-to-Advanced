// Nested Functions and Context

// Task 1: Using this in Objects Create an object person with a method introduce() that uses this additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()

const person = {
  name: "sudhanshu",
  age: 19,
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  },
};
const res = person.introduce();
console.log(res);

// Task 2: Function within a function Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()

function outer() {
  function inner() {
    return "Inner function called";
  }
  return inner();
}
const res2 = outer();
console.log(res2);
