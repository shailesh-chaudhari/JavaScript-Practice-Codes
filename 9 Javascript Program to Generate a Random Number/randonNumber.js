//Question:-Javascript Program to Generate a Random Number

//Example 1: Generate a Random Number


// generating  a random number
const a = Math.random();
console.log(a);

//Example 2: Get a Random Number between 1 and 10
// generating a random number
const a = Math.random() * (10-1) + 1
console.log(`Random value between 1 and 10 is ${a}`);

//Example 3: Integer Value between 1 and 10

// generating a random number
const a = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(`Random value between 1 and 10 is ${a}`);

//Example 4: Integer Value between Two Numbers (Inclusive)
// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);
