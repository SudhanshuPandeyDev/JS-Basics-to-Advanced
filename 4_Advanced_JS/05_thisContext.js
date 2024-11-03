// Demonstrating this Binding in JavaScript with bind()

const person = {
  name: "sudhanshu",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};
person.greet();

// `this` is lost
const greetFunction = person.greet;
greetFunction();

// bind allows you to "bind" a specific context (this value) to a fn
const boundGreet = person.greet.bind({ name: "John" });
boundGreet();
