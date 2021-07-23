/* Question:- Javascript Program to Convert Celsius to Fahrenheit and 
              Javascript Program to Convert Fahrenheit to Celsius
*/

// Answer:-Example:- Celsius to Fahrenheit

// ask the celsius value to the user 
const celsius = prompt("Enter the Celcius Value ");

// Calculate Fahrenheit
const fahrenheit = (celsius * 1.8 ) + 32;

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);


//Example:- Fahrenheit to Celsius

const fahrenheit1 = prompt("Enter the Fahrenheit Value");

//Calculate Celsius
const celsius1 = (fahrenheit1 -32) / 1.8;

// display the result
console.log(`${fahrenheit1} degree fahrenheit is equal to ${celsius1} degree celsius`);


