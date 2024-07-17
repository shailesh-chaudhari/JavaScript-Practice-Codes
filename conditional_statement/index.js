if (7 > 5) {
    console.log(true);
}//true 

if (5 > 7) {
    console.log(true);
} else {
    console.log(false);
}//false

if (5 > 7) {
    console.log('5>7');
} else if (7 > 8) {
    console.log('7>8');
} else {
    console.log('Nothing');
}//Nothing 


// check if it is square or not 
var length = 500;
var breadth = 500;
if (length === breadth) {
    console.log("It is square");
} else {
    console.log("it is not square");
}


//check which number is greater 
var num1 = 50, num2 = 150, num3 = 250;
if (num1 > num2 && num1 > num3) {
    console.log("num1 is grater");
} else if (num2 > num3 && num2 > num1) {
    console.log("num2 is grater");
} else if (num3 > num1 && num3 > num2) {
    console.log("num3 is grater");
} else {
    console.log(" please check number");
}


//Grading system 
var enteredMarks = 77;
if (enteredMarks < 25) {
    console.log("grade F")
} else if (enteredMarks >= 25 && enteredMarks < 45) {
    console.log("grade E")
} else if (enteredMarks >= 45 && enteredMarks < 50) {
    console.log("grade D")
} else if (enteredMarks >= 50 && enteredMarks < 60) {
    console.log("grade C")
} else if (enteredMarks >= 60 && enteredMarks < 80) {
    console.log("grade B")
} else {
    console.log("grade A")
}


//A shop will give a discount of 10% if the cost of the purchased quantity is more than 1000. Suppose, one unit will cost 100. Change the value of numberOfItemPurchased and print total cost for the user.
var numberOfItemPurchased = 52;
var valueOfItemPurchased = numberOfItemPurchased * 100;
var totalCost;
if ((valueOfItemPurchased) >= 1000) {
    console.log(totalCost = valueOfItemPurchased - ((valueOfItemPurchased * 10) / 100));
} else {
    console.log("sorry no discount this time please purchase more than 1000");
}


// Using if and else Conditional statement 
var currentDay = 'Wed';

if (currentDay === 'Mon') {
    console.log('Timing 10:00-06:00');
} else if (currentDay === 'tue') {
    console.log('Timing 09:00-05:00');
} else if (currentDay === 'Wed') {
    console.log('Timing 09:30-05:30');
} else if (currentDay === 'Thu') {
    console.log('Timing 10:15-06:15');
} else if (currentDay === 'Fri') {
    console.log('Timing 09:05-06:05');
} else if (currentDay === 'Sat') {
    console.log('Timing 09:00-05:00');
} else if (currentDay === 'Sun') {
    console.log('Timing 09:00-01:00');
} else {
    console.log('Enter Mon tue Wed Thu Fri Sat Sun Days');
}


//Using Switch case Conditional statement 
switch (currentDay) {
    case 'Mon':
        console.log('Timing 10:00-06:00');
        break;
    case 'Tue':
        console.log('Timing 09:00-05:00');
        break;
    case 'Wed':
        console.log('Timing 09:30-05:30');
        break;
    case 'Thu':
        console.log('Timing 10:15-06:15');
        break;
    case 'Fri':
        console.log('Timing 09:05-06:05');
        break;
    case 'Sat':
        console.log('Timing 09:00-05:00');
        break;
    case 'Sun':
        console.log('Timing 09:00-01:00');
        break;
    default:
        console.log('Enter Mon tue Wed Thu Fri Sat Sun Days');
        break;
}


//find month and number of days in this month 
var monthNumber = 4;

switch (monthNumber) {
    case 1:
        console.log('Month = January and Total number of days is 31 ');
        break;
    case 2:
        console.log('Month = February and Total number of days is 29 ');
        break;
    case 3:
        console.log('Month = March and Total number of days is 31 ');
        break;
    case 4:
        console.log('Month = April and Total number of days is 30 ');
        break;
    case 5:
        console.log('Month = May and Total number of days is 31 ');
        break;
    case 6:
        console.log('Month = June and Total number of days is 30 ');
        break;
    case 7:
        console.log('Month = July and Total number of days is 31 ');
        break;
    case 8:
        console.log('Month = August and Total number of days is 31 ');
        break;
    case 9:
        console.log('Month = September and Total number of days is 30 ');
        break;
    case 10:
        console.log('Month = October and Total number of days is 31 ');
        break;
    case 11:
        console.log('Month = November and Total number of days is 30 ');
        break;
    case 12:
        console.log('Month = December and Total number of days is 31 ');
        break;
    default:
        console.log('Enter number between 1 to 12 for month and days ');
        break;
}


// Find the character is vowel or consonant 
var enteredAlphabet = 'c';

if (enteredAlphabet >= 'a' && enteredAlphabet <= 'z' || enteredAlphabet >= 'A' && enteredAlphabet <= 'Z') {
    switch (enteredAlphabet) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            console.log(enteredAlphabet, 'is vowvel');
            break;
        default:
            console.log(enteredAlphabet, 'is consonant');
    }
} else {
    console.log('Enter the character A to Z or a to z')
}


// Find the number is even or odd 
var enteredNumber = 10;
givenNumber = enteredNumber % 2;

switch (givenNumber) {
    case 0:
        console.log(enteredNumber, 'is Even Number');
        break;
    default:
        console.log(enteredNumber, 'is Odd Number');
}