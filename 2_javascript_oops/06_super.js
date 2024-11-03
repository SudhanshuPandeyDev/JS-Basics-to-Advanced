// super keywords is used to access the parent class in a derived class in JS

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // Calling the parent class constructor
  }

  speak() {
    return `${this.name} barks.`; // Overriding the method
  }

  // Calling the parent class method
  callParentSpeak() {
    return super.speak();
  }
}

const dog = new Dog("Rex");
console.log(dog.speak()); // Output: "Rex barks."
console.log(dog.callParentSpeak()); // Output: "Rex makes a noise."
