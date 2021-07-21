//Question:- JavaScript Program to Swap Two Variables with 4 examples

//Answer:-Example 1:- Using a Temporary Variable

//take input from the users
let a = prompt("Enter The First Variable ");
let b = prompt("Enter The Second Variable ");

console.log(`Value of variables ${a} ${b}`);

//create a temporary variable
let temp;

//swap variables
temp = a ;
 a = b;
b = temp ;

console.log(`Value of variables after Swapping ${a} ${b}`);

console.log("***********************************************");

//Example 2: Using es6(ES2015) Destructuring assignment

//using variable
let a1 = prompt("Enter The First Variable ");
let b1 = prompt("Enter The Second Variable ");

console.log(`Value of variables ${a1} ${b1}`);

//using destructuring assignment
[a1, b1] = [b1, a1];

console.log(`Value of variables after Swapping ${a1} ${b1}`);


console.log("***********************************************");

//using string

let firstName = prompt("Enter The First Name ");
let lastName = prompt("Enter The Last Name ");

console.log(`Full Name is ${firstName} ${lastName}`);

[firstName , lastName ] = [lastName , firstName];

console.log(`Full Name is ${firstName} ${lastName}`);

console.log("***********************************************");

//Example 3: Using Arithmetic Operators

//take input from the users
let a2 = parseInt(prompt('Enter the first variable: '));
let b2 = parseInt(prompt('Enter the second variable: '));

console.log(`Value of variables ${a2} ${b2}`);


// addition and subtraction operator
a2 = a2 + b2;
b2 = a2 - b2;
a2 = a2 - b2;

console.log(`Value of variables after Swapping ${a2} ${b2}`);

console.log("***********************************************");

//Example 4: Using Bitwise XOR operator

//take input from the users
let a3 = prompt('Enter the first variable: ');
let b3 = prompt('Enter the second variable: ');

console.log(`Value of variables ${a3} ${b3}`);


// XOR operator
a3 = a3 ^ b3;
b3 = a3 ^ b3;
a3 = a3 ^ b3;

console.log(`Value of variables after Swapping ${a3} ${b3}`);
