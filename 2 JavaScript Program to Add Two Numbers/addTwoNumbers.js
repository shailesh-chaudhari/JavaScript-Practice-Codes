/* Question:-
JavaScript Program to Add Two Numbers
*/
//Answer:-

//Add Two Numbers 
const num1 = 50 ;
const num2 = 100;

//add two numbers 
const sum = num1 + num2 ;

//display the sum 
console.log(num1 + "+" + num2 + " = " + sum);
console.log(`The sum of ${num1} and ${num2} is ${sum}`); //used template literal


//Add Two Numbers Entered by the User

//Ask for the user to enter two numbers
const firstNumber = parseInt(prompt("Enter First number"));
const secondNumber = parseInt(prompt("Enter Second Number"));

//add two numbers 
const total = firstNumber + secondNumber ;

//display the sum 
console.log(firstNumber + "+" + secondNumber + " = " + total);
console.log(`The sum of ${firstNumber} and ${secondNumber} is ${total}`);
