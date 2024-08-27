//Hoisting this mechanism where variables and functions can be used before declaring them is called hoisting in JavaScript.
console.log(num1);//undefined
num1 = 10;
console.log(num1);//10
var num1;//declare variable here 

console.log(str1);//undefined
str1 = 'JavaScript Hoisting';
console.log(str1);//JavaScript Hoisting 
var str1;//declare string 


console.log('***************************');
// function hoisting 
sum(10, 5);//15
function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(90, 8);//98

// sum1(10,5);
// var sum1 = function (num3,num4){//error sum1 is not a function here sum1 = is assignment not declaration thats why error 
//     console.log(num3+num4);
// }
// sum1(90,8);

var sum1 = function (num3, num4) {
    console.log(num3 + num4);//98 because here first function is executed this is assignment and then got function called thats why its work.
}
sum1(90, 8);


console.log('***************************');

var sum2 = function (num5, num6) {
    var total = num5 + num6; //declare total before use best practice 
    console.log(total);
}
sum2(90, 8);//98

//function hoisting 
console.log('***************************');
//here var total1 is hoisted thatswhy we assigned value to num7 and num8 variable. JavaScript does not take var total1 declaration and sends to the top of scope first line of function and it gives value of undefined and thats why it available for use becaus eof hoisting 
var sum3 = function (num7, num8) {
    console.log(total1);//undefined
    total1 = num7 + num8;//used here total before declare because of hoisting 
    var total1;  //declare variable here and use before above it is work 98 but it is bad practie 
    console.log(total1);//98
}
sum3(90, 8);//98


console.log('***************************');
var total2 = 10;//global variable declare 
var sum4 = function (num9, num10) {
    console.log(total2);
    total2 = num9 + num10;
    var total2;  //local variable declare
    console.log(total2);//98
}
sum4(90, 8);//98 here global and loacl variable both declare but here output is 98 becaus the global variable works outside work local variable works inside scope thats why here not print 10 output is 98
