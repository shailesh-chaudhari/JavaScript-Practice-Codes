/*
Question:-JavaScript Program to Convert Kilometers to Miles and
          JavaScript Program to Convert Miles to Kilometers
*/

//Answer:- Example 1 JavaScript Program to Convert Kilometers to Miles

// taking kilometers input from the user
const kilometers = prompt("Enter the value in Kilometer");

// conversion factor
const factor = 0.621371;  // 1 kilometer is equal to 0.621371 miles.

// calculate miles
const miles = kilometers * factor ;

console.log(`${kilometers} Kilometers is Equal to ${miles} Miles`);

console.log("********************************************");

//Example 2 JavaScript Program to Convert Miles to Kilometers

// taking kilometers input from the user
const miles1 = prompt("Enter the value in Miles ");

// conversion factor
const factor1 = 0.621371; 

// calculate Kilometers
const kilometers1 = miles1 / factor1 ;

console.log(`${miles1} Miles is Equal to ${kilometers1} Kilometers`)

