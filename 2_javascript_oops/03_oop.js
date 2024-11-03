// Exploring Object Creation, Prototypes, and Inheritance in JavaScript

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2024,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new Person("John Doe", 20);
console.log(john.name);

function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} make a sound`;
};

Array.prototype.pandey = function () {
  return `Custom method ${this}`;
};
let arr = [1, 2, 3, 4, 5];
console.log(arr.pandey());
let newArr = [10, 20, 30, 40, 50];
console.log(newArr.pandey());

// Inheritance in JS Classes
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}
class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}
let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());
let myVeh = new Vehicle("Toyota", "Corolla");
console.log(vehOne.make);
console.log(vehOne.model);
