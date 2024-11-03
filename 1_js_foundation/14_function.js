// JS Functions: From Basic to Closure with Higher-Order Functions

// 1. Write a function named `makeTea` that takes one parameter, `typeOfTea` and returns a string like `Making green tea` and when called with `green tea`. Store the result in a variable named `teaOrder`.

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
console.log(teaOrder);

// 2. Nested Function Example: Tea Order Confirmation

function orderTea(teaType) {
  function confirmOrder() {
    return "Order Confirmed for Chai";
  }
  return confirmOrder();
}
let orderConfirm = orderTea();
console.log(orderConfirm);

// 3. Write an arrow function named `calculateTotal` that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the `price` and `quantity`. Store the result in a variable named 'totalCost'

// Implicit Return: No 'return' needed
const calculateTotal = (price, quantity) => price * quantity;
let totalCost = calculateTotal(10, 5);
console.log(totalCost);

// 4. Write a function named 'processTeaOrder' that takes another function, `makeTea` as a parameter and calls it with the argument `earl gray`. Return the result of calling `makeTea`.

// example of higher-order fn : either takes other functions as arguments or returns a fn as its output.
function makeTea(typeOfTea) {
  return `maketea: ${typeOfTea}`;
}
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}
let order = processTeaOrder(makeTea);
console.log(order);

// 5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, 'teaType' and return a message like "Making Green Tea". Store the returned function in a variable name 'teaMaker' and call it with "green tea"

// Closure: An inner function's ability to access variables from its outer function's scope. (price,name)
function createTeaMaker(name) {
  let price = 100;
  return function (teaType) {
    return `Making ${teaType} ${name} ${price}`;
  };
}
let teaMaker = createTeaMaker("sudhanshu");
let result = teaMaker("orange tea");
console.log(result);
