// In JS, call(), apply(), and bind() are methods used to set the this context and control how a fn is invoked.

// call()
// Purpose: Immediately invokes a fn with a specified this context and additional arguments passed individually.
// functionName.call(thisArg, arg1, arg2, ...);
function greet(greeting, punctuation) {
  console.log(`${greeting}, I am ${this.name}${punctuation}`);
}
greet.call({ name: "sudhanshu" }, "Hi", "!");

// apply()
// Purpose: Similar to call(), but arguments are passed as an array.
// functionName.apply(thisArg, [arg1, arg2, ...]);
function user(name, role) {
  console.log(`${name} is ${role} and his salary is ${this.salary}`);
}
user.apply({ salary: "$10000" }, ["Sudhanshu", "CEO"]);

// Key Difference between call() and apply():
// call(): Arguments are passed individually.
// apply(): Arguments are passed as an array.
