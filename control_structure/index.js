//Activity 1 If else statements 

//Task 1 check number is positive negative or zero 
let num = 0

if (num > 0) {
    console.log("Number is positive number")
} else if (num < 0) {
    console.log("Number is negative number")
} else {
    console.log("Number is zero")
}

//Task 2 check person eligible for vote or not 

let age = 19
if (age >= 18) {
    console.log("Eligible for vote");
} else {
    console.log("Not eligible for vote");
}

//Activity 2 Nested If else statement 
//Task 3

let num1 = 180
let num2 = 190
let num3 = 800

//using if else 
if (num1 > num2 && num1 > num3) {
    console.log("num1 is largest number");
} else if (num2 > num3 && num2 > num1) {
    console.log("num2 is largest number");
} else if (num3 > num2 && num3 > num1) {
    console.log("num3 is largest number");
} else {
    console.log("num1 and num2 and num3 is same numbers");
}

// Activity 3
//Task 4
let day=6;
let dayName;
switch(day){
    case 1:
        dayName="Monday";
        break;
    case 2:
        dayName="Tuesday";
        
        break;
    case 3:
        dayName="Wednesday";
        break;
    case 4:
        dayName="Thursday";
        break;
    case 5:
        dayName="Friday";
        
        break;
    case 6:
        dayName="Saturday";
        break;
    case 7:
        dayName="sunday";
        break;
        default:"Invalid day";

}
console.log(dayName);

//Task 5
let marks=50 ;
let Grade;
switch(true){
    case (marks>=90 && marks<=100):
        Grade="A";
        break;
    case (marks>=80 && marks<90):
        Grade="B";
        
        break;
    case (marks>=70 && marks<80):
        Grade="C";
        break;
    case (marks>=60 && marks<70):
        Grade="D";
        break;
    case(marks>=0 && marks<60):
        Grade="F";
         break;
        default:"Invalid marks";

}
console.log(Grade);

// Activity 4
//Task 6
let newNumber=77;
let res=newNumber%2===0?"Even":"Odd";
console.log("The number is : ",res);


//Activity 5
//Task 7
let year=4500;
let result=(year % 4===0 &&(year %100 !==0 || year %400 ===0))?"Leapyear":"Not Leapyear";
console.log("The year is : ",result);