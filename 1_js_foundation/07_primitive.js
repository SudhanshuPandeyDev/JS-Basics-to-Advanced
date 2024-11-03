// JavaScript Data Types: A Comprehensive Exploration

// Number
let balance = 120;
let anotherBalance = new Number(120); // not recommended

// console.log(balance);
// console.log(anotherBalance)
// console.log(anotherBalance.valueOf());

console.log(typeof balance); // output: number
console.log(typeof anotherBalance); // output: object

// Boolean
let isActive = true;
let isReallyActive = new Boolean(true);
console.log(typeof isActive); // output: boolean
console.log(typeof isReallyActive); // output: object

// null and undefined
let firstname;
let middlename = null;
let lastname = undefined;
console.log(firstname); // output: undefined
console.log(middlename); // output: null
console.log(lastname); // output: undefined

// String
let myString = "hello";
let myAnotherStr = "hola";
let userName = "sudhanshu";

let greetMessage = `Hello ${userName}`; // this is called string interpolation
console.log(greetMessage);

let demoOne = `value is ${2 * 3}`;
console.log(demoOne);

// Symbol
let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 == sym2); // output: false

let sm3 = Symbol("javascript");
let sm4 = Symbol("javascript");
console.log(sm3 == sm4); // output: false
