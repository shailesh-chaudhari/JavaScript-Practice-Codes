/*
Question:-JavaScript Program to Calculate the Area of a Triangle
*/

//Answer:-
//Example 1 :- Area When Base and Height is Known  formula:- area = (base * height) / 2

const baseValue = parseInt(prompt("Enter the Base Value of Triangle"));
const heightValue = parseInt(prompt("Enter the Height Value of Triangle"));

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(`Area of Triangle is ${areaValue}`);


// Example 2 :- Area When All Sides are Known formula:- s = (a+b+c)/2 & area = √(s(s-a)*(s-b)*(s-c))

const sideFirst = parseInt(prompt("Enter the First Side Value of Triangle "));
const sideSecond = parseInt(prompt("Enter the Second Side VAlue of Triangle "));
const sideThird = parseInt(prompt("Enter the Third Side Value of Triangle "));

// calculate the semi-perimeter
const s = (sideFirst + sideSecond + sideThird ) / 2;

//calculate the area
const areaTriangle = Math.sqrt(s*(s-sideFirst)*(s-sideSecond)*(s-sideThird));

console.log(`Area of Triangle is ${areaTriangle}`);


//Example 3 :- Area When All Sides are Known formula:- s = (a+b+c)/2 & area = √(s(s-a)*(s-b)*(s-c)) without square root method(math.sqrt())
const sideFirst1 = parseInt(prompt("Enter the First Side Value of Triangle "));
const sideSecond1 = parseInt(prompt("Enter the Second Side VAlue of Triangle "));
const sideThird1 = parseInt(prompt("Enter the Third Side Value of Triangle "));

const s1 = (sideFirst1 + sideSecond1 + sideThird1 ) / 2;

 const math1 = (s1*(s1-sideFirst1)*(s1-sideSecond1)*(s1-sideThird1));

function squareRoot1(){
    var avg=(a,b)=>(a+b)/2,c=5,b;
    for(let i=0;i<20;i++){
        b= math1/c;
        c=avg(b,c);
    }
    return c;
}

const result = squareRoot1(math1);
const areaTriangle1 = result;
console.log(`Area of Triangle is ${areaTriangle1}`);
