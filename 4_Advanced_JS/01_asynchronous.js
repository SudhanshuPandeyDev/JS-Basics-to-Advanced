// JavaScript Asynchronous Example with setTimeout

function sayHello() {
  console.log("I would like to say Hello");
}

setTimeout(() => {
  sayHello();
}, 3000);

console.log("I am First");

for (let i = 0; i < 5; i++) {
  console.log(i);
}
