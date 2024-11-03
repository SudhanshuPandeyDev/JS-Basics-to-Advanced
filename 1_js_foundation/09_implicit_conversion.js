// JavaScript Type Coercion and Conversions

// String Conversion : When you use the + between a number and a string, JS converts the number into a string to concatenate them.
let result = 5 + "10";
console.log(result); // Output: "510" (Number 5 is converted to a string)

// Number Conversion : When you use (-, *, /) with strings, JavaScript tries to convert the strings to numbers.
let result2 = "5" - 1;
console.log(result2); // Output: 4 (String "5" is converted to number 5)
let result3 = "10" * 2;
console.log(result3); // Output: 20 (String "10" is converted to number 10)

// Boolean Conversion : JS considered true as 1 and false as 0
let val1 = true;
console.log(Number(val1));
let val2 = false;
console.log(Number(val2));
let isValue = true;
console.log(isValue + 1);

// NaN
let val3 = "2abc";
console.log(Number(val3)); // output : NaN
console.log(typeof Number(val3)); // output : number

// Trying to convert null and undefined into a number
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
