// A Guide to OOP Principles: Encapsulation, Abstraction, and Polymorphism

// 1. Encapsulation : Encapsulation is a way to restrict the direct access to some components of an object.
class BankAccount {
  #balance = 0; // Private Field (it cannot be accessed outside the class)

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}
let account = new BankAccount();
// we are accessing balance outside the class using getBalance() method
console.log(account.getBalance());

// 2. Abstraction : displaying only the necessary information and hiding the rest.
class CoffeMachine {
  start() {
    // Call Database
    // Filter Value
    return `Starting the Machine...`;
  }
  brewCoffee() {
    // Complex Calculation
    return `Brewing Coffee`;
  }
  // pressButton() is showing abstraction by displaying only the necessary information and hiding the rest.
  pressButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return `${msg1} ${msg2}`;
  }
}
let myMachine = new CoffeMachine();
console.log(myMachine.pressButton());

// 3. Polymorphism :  the ability of something to have or to be displayed in more than one form.
class Bird {
  fly() {
    return `flying...`;
  }
}
class Penguin extends Bird {
  fly() {
    return `pengiun can't fly`;
  }
}
let bird = new Bird();
let pengiun = new Penguin();
console.log(bird.fly());
console.log(pengiun.fly());
