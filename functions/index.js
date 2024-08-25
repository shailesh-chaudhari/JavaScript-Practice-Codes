function mSum() {
    var num1 = 10;
    var num2 = 20;
    var sum = num1 + num2;
    console.log(sum);
}
mSum();//30

console.log('*************************');

function mSum1() {
    var num3 = 10;
    var num4 = 20;
    var sum1 = num3 + num4;
    return sum1;
}
mSum1();
console.log(mSum1());//30

console.log('*************************');
function mSum2() {
    var num5 = 10;
    var num6 = 20;
    var sum2 = num5 + num6;
    return sum2;
    console.log('print somthing ');
}

var totalSum = 100 + mSum2();
console.log(totalSum);


console.log('*************************');
function greetings(personName) {
    console.log('welcome ' + personName);
}
greetings('Ramesh');


console.log('*************************');
function totalSum1(numbe1, number2, number3 = 40, number4) {
    console.log('number1 is ' + numbe1);
    console.log('number2 is ' + number2);
    console.log('number3 is ' + number3);// if dont pass any argumet then number 3 returns 40 value if passed number 3 as argument eg 58 then it returns 58.
    console.log('number4 is ' + number4);
    if (number4 !== undefined) {
        console.log(numbe1 + number2 + number3 + number4);
    } else {
        console.log(numbe1 + number2 + number3);
    }


}
totalSum1(3, 6);//3,6,40 total 49 number3 is default as 40 and no 3rd argument passed here so it returns default value 
console.log('*************************');
totalSum1(43, 45, 58);//43,45,58 total 146 
//totalSum1(43,45,58,78,54,45);if more argument passed then JS not getting error it automatically consider number 1  to number 4 and next all values are ignored 





//Activity 1: Function Declaration
//Task 1
function checkNumberIsevenOdd(num){
    if(num%2==0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`);
    }
}
checkNumberIsevenOdd(19);
checkNumberIsevenOdd(14);

//Task 2
function square(num){
    return num * num;
}
let num =6;
let res = square(num);
console.log(`Suquare of ${num} is ${res}`);

//Activity 2: Function Expression
//Task 3
const findmax = function(a,b){
    return a>b? a:b;
};
const num=10;
const num1=20;
const max=findmax(num, num1);
console.log(`Maximum of ${num} and ${num1} is ${max}`);

//Task 4
const concatenateString= function(str, str1){
    const  res= str +str1;
    console.log(`Concatenated result is ${res}`);
    return res;
};
const str ="Hello ";
const str1 ="String!!"
const concatenated = concatenateString(str, str1);
//console.log(`Final result ${concatenated}`);

//Activity 3: Arrow Function
//Task 5
const calculate = (a,b)=> a+b;
const a =17
const b =23
const sum = calculate(a, b);
console.log(`Final result ${sum}`);

//Task 6
const containchar = (str, char)=> str.includes(char);

const str = "Hello, String!!";
const char = "S";
const result = containchar(str, char);
console.log(`Does the string ${str} contain the character ${char}: ${result}`);

//Activity 4: Function parameters and Default values
//Task 7
const multiply = function(a, b = 1) {
    return a * b;
};
const num1 = 10;
const num2 = 5;
const product1 = multiply(num1, num2);
const product2 = multiply(num1);

console.log(`The product of ${num1} and ${num2} is: ${product1}`); 
console.log(`The product of ${num1} and the default value is: ${product2}`);

//Task 8
const greetPerson = (name, age = 18) => {
    return `Hello, ${name}! You are ${age} years old.`;
};

const name1 = "Abhinav";
const age1 = 25;
console.log(greetPerson(name1, age1));

const name2 = "CHAI";
console.log(greetPerson(name2));

//Activity 5
//Task 9
// Higher-order function to call a given function a specified number of times
const repeatFunction = (func, times) => {
    for (let i = 0; i < times; i++) {
        func();
    }
};
// Example function to be called
const sayHello = () => {
    console.log("Hello!");
};
// Test the higher-order function
const numberOfTimes = 5;
repeatFunction(sayHello, numberOfTimes);

//Task 10
// Higher-order function that takes two functions and a value
const applyFunctions = (func1, func2, value) => {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
};
// Example functions
const double = x => x * 2;
const square = x => x * x;

// Test the higher-order function
const value = 5;
const result1 = applyFunctions(double, square, value);
console.log(`The result of applying double and then square to ${value} is: ${result1}`);
