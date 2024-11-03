// Person is a constructor fn. Before the introduction of ES6, JS used constructor fn to create objects and achieve inheritance, which is now done more commonly using the class syntax.

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, My Name is ${this.name}`);
};

let sudhanshu = new Person("Sudhanshu");
sudhanshu.greet();
