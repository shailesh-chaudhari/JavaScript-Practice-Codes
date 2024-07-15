var num1 = 10;
var num2 = 20.3;

//toString() number as input and returns a string
console.log(num1.toString()); //"10"
console.log(num2.toString()); // "20.3"

//parseInt() string numeral as input and returns number 
var strNum1 = 10;
var strNum2 = 15.9;
var strNum3 = "s";

console.log(parseInt(strNum1)); // 10
console.log(parseInt(strNum2)); //15
console.log(parseInt(strNum3)); // NaN

//parseFloar() string numeral as an input and returns a floating number 
console.log(parseFloat(strNum2)); //15.9
console.log(parseFloat(strNum3)); // NaN

//toFixed() takes floating number and round it off to given position ex 45.96547 is 46 toFixed(2) gives 45.96 and toFixed(5) gives 45.96547
var strFloat = 45.96547;
console.log(strFloat.toFixed()); //46 
console.log(strFloat.toFixed(2)); //45.96
console.log(strFloat.toFixed(5)); //45.96547


//examples
console.log(toString(100)); // Object undefined 
console.log(parseInt('44')); //44
console.log(parseInt('22.222')); //22
console.log(parseInt('Banana')); //NaN
console.log(parseFloat(12)); //12
console.log(parseFloat(13.3)); // 13.3

var num1 = 10;
console.log(num1.toFixed(2)); //10.00

var num1 = 15.456789;
console.log(num1.toFixed()); //15

var num1 = 15.456789;
//console.log(number.toFixed(2)); //number is not defined 

var num1 = 15.456789;
console.log(num1.toFixed(3)); //15.457