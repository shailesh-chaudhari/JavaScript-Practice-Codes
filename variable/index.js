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




console.log("********************************************************");

const accountId = 121 //once const is declared not to be change 
let accountEmail = "ram@gmail.com"
var accountPassword = "12345" //because of block scope and functional scope prefer not to be used t var sometimes major projects if any changes in var variable it change all code recommended to used let 
accountCity = "mumbai" // bad practice not recommended to use 

let accuntState;//undefined not assigned any value 

//accountId = 2 // showed error not allowed because accountId is declared as const constant value not to be changed 
accountEmail ="r@r.com"
accountPassword ="345"
accountCity="bengluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accuntState]) // it showed all output in tabular or table form



console.log("****************************************");
//Activity 1 variable decleration 
console.log("Activity 1 variable decleration ");
var vNum = 123;
console.log(vNum);

let lNum = 321;
console.log(lNum);

//Activity 2 constant decleration 
console.log("Activity 2 constant decleration ");
const cNum = true;
const cNum1 = false;

console.log(cNum);
console.log(cNum1);


//data types and feature request 1 
//variable type console log
console.log("Activity 3 data types ");

let dNum = 123;
var dNum1 = 321;
const dNum2 = 54;
let dStr = "type of string "
let dBoolean = true;
let dCar = {
    "swift": " 100 kmph",
    "thar": "130kmph",
    "bmw": "200 kmph"
}
let dNull = null;
let dUndefined = undefined;

let dArr = ["swift", "thar", "bmw"]
console.table([dNum, dNum1, dNum2, dStr, dBoolean, dCar, dArr, dNull, dUndefined])
console.table([typeof (dNum), typeof (dNum1), typeof (dNum2), typeof (dStr), typeof (dBoolean), typeof (dCar), typeof (dArr), typeof (dNull), typeof (dUndefined)])

//Reassigning variables 
console.log("Activity 4 Reassigning variables ");

let initialValue = 40
console.log(initialValue);
initialValue = 60
console.log(initialValue);


//Understanding Constant  and feature request 2 
//Reassignment demo 
console.log("Activity 5 Understanding Constant");

var variableNumber = 20;
let letNumber = 25;
const constNumber = 30;


try {
    var variableNumber = 35;
    let letNumber = 40;
    const constNumber = 45;
    console.log(variableNumber); //35
    console.log(letNumber); //40
    console.log(constNumber);//45

    console.log("**********************************************");
    variableNumber = 60;
    letNumber = 65;
    // constNumber = 70; // Assignment to constant variable error 
    console.log(variableNumber);//60 
    console.log(letNumber); //65
    console.log(constNumber);//45

} catch (error) {
    console.log(error.message);
}

console.log("**********************************************");
console.log(variableNumber); //60
console.log(letNumber); //25
console.log(constNumber);//30




