// Prototype Inheritance and Property Checking in JavaScript

// using __proto__ (prototype property accessor)(method 1)
let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  // __proto__ is an instance property of an object, pointing to its prototype.
  __proto__: computer,
};
let tomHardware = {};
console.log("lenovo ", lenovo.__proto__);

// recommended and standardized way to interact with prototypes(method 2)
let genericCar = { tyres: 4 };
let tesla = { driver: "AI" };

Object.setPrototypeOf(tesla, genericCar);

console.log(Object.getPrototypeOf(tesla));

console.log(tesla.tyres);

console.log(tesla.hasOwnProperty("driver"));
console.log(tesla.hasOwnProperty("genericCar"));
