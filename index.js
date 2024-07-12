// Variables 

var num1 = 2; //num1 is a variable name 
var num2 = 5; //= is assign value to variable (store value in num2)
var num3 = 9;

var avg = num1 + num2 + num3; //total line is called expression 

console.log(avg); //16 

var firstName = "ram"; // camel case when declare variable 

console.log(firstName); // ram


var num4 = 10; // interger number 
var num5 = 10.9; // decimal number 

console.log(num4); // 10
console.log(num5); //10.9

console.log(typeof (num4)); //number
console.log(typeof (num5)); //number

//Addition 
var num6 = 20;
var sum = num4 + num6 + num5;  //10+20+10.9
console.log(sum); //40.9

//substraction
var diff = num6 - num4; //20-10
console.log(diff); //10

//Multiplication 
var mul = num6 * num4; //20*10
console.log(mul); // 200

//Division 
var div = num6 / num4; //20/10
console.log(div); // 2

//divide by 0 
var divByZero = num6 / 0; //20/0
console.log(divByZero); // infinity 
console.log(typeof (divByZero)); //number (infinity is stored as a number in javascript) 

//Multiply by string 
var mulByString = num6 * 'A'; // 20 * string 
console.log(mulByString); //NaN Not a Number
console.log(typeof (mulByString)); // NaN is also stored as a number in javascript 


console.log("examples")

console.log(0 / 0) // Nan
console.log(0 / 5) //0
console.log(3 * 'a') // NaN
console.log('a' * 3) //NaN
console.log('b' + 4) // b4 
console.log(4 + 'b') // 4b 
console.log(5 - 'c') // Nan 
console.log('c' - 5) //Nan


//Null and Undefined 

var num;
console.log(num); //undefined it means there is no value on variable or num hold no value 

num = null;
console.log(num);// null null is a value which is stored in this variable or num holds value null  

console.log(undefined == null) // true 
console.log(undefined === null) // false 
