//Activity 1 Arithmatic operators 
let num1 = 30
let num2 = 60

let addNum = num1 + num2 //30+60 = 90
let subNum = num2 - num1 //60-30 = 30
let mulNum = num1 * num2 //30*60= 1800
let divNum = num2 / num1 // 60/30 = 2
let modNum = num2 % num1 //60%30 = 0
console.table([addNum, subNum, mulNum, divNum, modNum])

//Ativity 2 Assignment operator 
num1 += 50; // num1 = num1 + 50 = 30+50 = 80
num2 -= 10; //num2 = num2 - 10 = 60 -10 = 50 
console.table([num1, num2]);

//Activity 3 Comparison operator 
if (num1 > num2) {
    console.log("num1 is greater than num2 ");
} else {
    console.log("num2 is not grater than num1");
}
if (num1 < num2) {
    console.log("num1 is greater than num1");
} else {
    console.log("num2 is not greater than num1");
}

if (num1 >= num2) {
    console.log("num1 is greater than num2 ");
} else {
    console.log("num2 is not grater than num1");
}
if (num1 <= num2) {
    console.log("num1 is greater than num1");
} else {
    console.log("num2 is not greater than num1");
}

// == comparison operator compare only value not compare type 
if (num1 == 80) {
    console.log(true); //true
} else {
    console.log(false);
}
if (num1 == '80') {
    console.log(true);//true
} else {
    console.log(false);
}

// === comparison operator compare both value type
if (num1 === 80) {
    console.log(true); //true
} else {
    console.log(false);
}
if (num1 === '80') {
    console.log(true);//false because num1 type is number and '80'type is char 
} else {
    console.log(false);
}


//Activity 4 Logical operator
let age = 22;
if (age >= 18 && age <= 32) {
    console.log("You are eligible for Government exams ");
} else {
    console.log("sorry you are not eligible");
}

age = 5
if (age <= 3 || age <= 10) {
    console.log("please go to doctor and take polio dose");
} else {
    console.log("you are above 18 age all dose completed ");
}

age = 56
if (!(age <= 58)) {
    console.log("you are retired employee ");
} else {
    console.log("yor are not retired employee");
}

let num = -3;// negative number 
num > 0 ? console.log("positive number") : console.log("negative number ");// if number is greater than 0 is positive and number is less than 0 is negative number 
let num0 = 3;// positive number 
num0 > 0 ? console.log("positive number") : console.log("negative number ");