// Static keyword
class Calculator {
  static add(a, b) {
    return a + b;
  }
}
// You can access the static method directly from the class, no need to create an instance.
console.log(Calculator.add(2, 3)); // Output: 5

// Getters and Setters
class Employee {
  #salary; // Private field
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be Negative");
    }
    this.name = name;
    this.#salary = salary; // Initialize private field
  }

  // Getter for salary
  get salary() {
    return `You are not allowed to see the salary`;
  }

  // Setter for salary
  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this.#salary = value; // Set value to the private field
    }
  }

  // Method to access the actual salary value (optional)
  getActualSalary() {
    return this.#salary;
  }
}

let emp = new Employee("Alice", 50000);

// Accessing the getter (no parentheses)
console.log(emp.salary); // Output: You are not allowed to see the salary

// Getters and setters are used like properties, not methods. This means no parentheses () are needed when accessing or assigning.

// Using the setter (no parentheses)
emp.salary = -60000; // Output: Invalid Salary
emp.salary = 60000; // Successfully sets the salary to 60000

console.log(emp.getActualSalary()); // Output: 60000 (actual salary)
