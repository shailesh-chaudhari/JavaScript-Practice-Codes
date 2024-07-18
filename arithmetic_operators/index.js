var num1 = 10;
var num2 = 30;
var num3 = 60;

//addition '+' operator 
console.log(num1 + num2); //40
console.log(num1 + num2 + num3); //100

//substraction '-' operator 
console.log(num3 - num2); //30
console.log(num3 - num2 - num1);//20
console.log(num3 - num2 + num1);//40

//multiplication '*' operator 
console.log(num3 * num1);//600
console.log(num1 * num2 * num3);//18000

//division '/' operator
console.log(num3 / num1);//6
console.log(num3 / num2 / num1);//0.2

//modulus '%' operator it gives us remnder 
console.log(num3 % num1);//0
console.log(num2 % num3);//30

//Increment '++' operator pre increment and post increment 
console.log(num2++);//30 post icrement  first value assigned then increment num2 30+1 = 31 
console.log(num2++);//31
console.log(num2);//32
console.log(++num3);//61 pre increment first increment then value assigned 

num2 = 30;
num3 = 60;
//Decrement '--' operator pre decrement and post decrement 
console.log(num2--);//30 post decrement first value assigned then decrement 
console.log(num2--);//29
console.log(num2);//28
console.log(--num3);//59 // pre decrement first decrement then value assigned 


var num1 = 1 + 5; //6
var num2 = num1 / 4; //6/4 = 1.5
var num3 = 1 + 5; //6
var num4 = num3 / 4; // 6/4 = 1.5
console.log(num2 + " " + num4); //1.5 1.5 


var a = 1;
var b = 2;
var c;
var d;
c = ++b;//3
d = a++;//1 
c++;//3
b++;//
++a;//3
console.log(a + " " + b + " " + c);//3 4 4 

var input = 7;
var output1 = ++input + ++input + ++input; //27
var output2 = input++ + input++ + input++; //33
var output3 = input++ + ++input + input++; //43
console.log(output1 + ' ' + output2 + ' ' + output3); //27 33 43 