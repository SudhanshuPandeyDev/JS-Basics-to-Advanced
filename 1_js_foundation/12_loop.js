// JavaScript Loops: Working with Arrays and Accumulating Valuess

// 1. write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'
let sum = 0;
let i = 1;
while (i <= 5) {
  sum = sum + i; // 1 + 2 + 3 + 4 + 5 = 15
  i++;
}
console.log(sum);

// 2. write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'
let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);

// 3. write a `do while` loop that prompts a user to enter their favourite tea type until they enter "stop". Store each tea type in an array named 'teaCollection'.

// try to run this code on browser console because nodeJs don't supports prompt()

// let teaCollection = [];
// let tea;
// do{
//     tea = prompt("Enter your favourite tea (type 'stop' to finish)");
//     if(tea !== "stop"){
//         teaCollection.push(tea);
//     }
// }
// while(tea !== "stop");

// 4. Write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'.
let total = 0;
let k = 1;
do {
  total = total + k;
  k++;
} while (k <= 3);
console.log(total);

// 5. Write a 'for loop' that multiplies each element in the array `[2,4,6]` by 2 and stores the result in the new array named 'multipliedNumbers'
let multipliedNumbers = [];
let arr = [2, 4, 6];
for (let i = 0; i < arr.length; i++) {
  multipliedNumbers.push(arr[i] * 2);
}
console.log(multipliedNumbers);

// 6. Write a 'for' loop that lists all the cities in the array `["paris","new york","tokyo","london"]` and stores each city in new array named `cityList`

let cityList = [];
let cities = ["paris", "new york", "tokyo", "london"];
for (let i = 0; i < cities.length; i++) {
  cityList.push(cities[i]);
}
console.log(cityList);
