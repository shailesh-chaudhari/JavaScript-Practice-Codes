//1. Comparison operator 

// == comparison operator is compare only value not compare type thatswhy for both example output is true  
if (5 == 5) {
    console.log(true);
} else {
    console.log(false);
}//true both value 5 is equal 5  

if (5 == '5') {
    console.log(true);
} else {
    console.log(false);
}//true both value 5 is not equal to type '5' but also return true 

// === comparison operator is compare both value and type 
if (5 === 5) {
    console.log(true);
} else {
    console.log(false);
}//true 5 is equal to 5 

if (5 === '5') {
    console.log(true);
} else {
    console.log(false);
}//false 5 is not equal to '5' return false 


// != not eual to and !== operator here alos != is compare only value not type and !== compare both value and type  

if (5 != 4) {
    console.log(true);
} else {
    console.log(false);
}//true 

if (5 != 5) {
    console.log(true);
} else {
    console.log(false);
}//false 

if (5 != '5') {
    console.log(true);
} else {
    console.log(false);
}//false different type but also given false value 

if (5 !== 5) {
    console.log(true);
} else {
    console.log(false);
}//false 

if (5 !== '5') {
    console.log(true);
} else {
    console.log(false);
}//true 


// < operator and <= operator and > and >= operator 
if (5 < 5) {
    console.log(true);
} else {
    console.log(false);
}//false 

if (5 <= 5) {
    console.log(true);
} else {
    console.log(false);
}//true 

if (5 > 5) {
    console.log(true);
} else {
    console.log(false);
}//false 

if (5 >= 5) {
    console.log(true);
} else {
    console.log(false);
}//true 


//2. Logical operator && , || , ! 

// && both conditon requied true 
// || only one condition required true 
// !  whatever result it negate its for true its convert false and false convert true

if (5 > 10 && 10 > 15) {
    console.log(true);
} else {
    console.log(false);
}//false

console.log(5 < 10 || 10 < 15);//true 
console.log(!(5 < 10));//false 


//3. Ternary operator (expression) ? a : b;  if expression is true then it execute a and if expression is false then b is executed.
20 < 3 ? console.log(true) : console.log(false);
20 < 23 ? console.log(true) : console.log(false);


//Practice problem 1
var a = 10;
var b = 5;
var c = 12;
var e = 8;
var d;
d = parseInt((a * (c - b) / e + (b + c)) <= (e * (c + a) / (b + c) + a));
//10* 7 /8 + 17 <= 8*22 / 17 +10
//25.75   20.35
console.log(d);//20 then 20 == 1 false 
if (d == 1) {
    console.log((a * (c - b) / e + (b + c)));
} else {
    console.log((e * (c + a) / (b + c) + a));
}           // 8 * 22 / 17 +10 20.35


//Practice problem 2
var n = 2;
var p = 4;
var q = 5;
var w = 3;
// !(20/2)<= 15 + 2/3 is 0.6 
// !(10<= 15.6) condition is true but ! sign so its false 
if (!((p * q) / n <= (q * w) + n / p)) {
    console.log(++p + w++ + " " + ++n);
}
else {
    console.log(--p + q-- + " " + --n);
    //3 + 5= 8         1 ans is 8 1 
}

