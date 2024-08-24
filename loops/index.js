//while loop when you have the kind of loop where you need to stop the loop based on the condition you can used while loop 
var mValue = 0;
while (mValue < 50) {
    mValue++;
}
console.log(mValue);//50
console.log('********************************************************');



//for loop when you know how many times your loop need to iterate then you can use for loop 
mList = [1, 2, 3, 4, 5];
var pos;
for (pos = 0; pos < mList.length; pos++) {
    console.log('position is ' + pos + ' and value is ' + mList[pos]);
}

console.log('********************************************************');
//break keyword it exits the loop 
var pos;
for (pos = 0; pos < mList.length; pos++) {
    if (pos >= 3) break;
    console.log('position is ' + pos + ' and value is ' + mList[pos]);
}

console.log('********************************************************');
//continue keyword it starts the next iteration without executing any further 
//for even 
var pos;
for (pos = 0; pos < mList.length; pos++) {
    if (pos % 2 === 0) continue;
    console.log('position is ' + pos + ' and value is ' + mList[pos]);
}

console.log('********************************************************');
//for odd 
var pos;
for (pos = 0; pos < mList.length; pos++) {
    if (pos % 2 !== 0) continue;
    console.log('position is ' + pos + ' and value is ' + mList[pos]);
}



//Activity 1
//Task 1
for (let i = 1; i <= 10; i++) {
    console.log("i = ", i);
}
//Task 2
for (let n = 1; n <= 10; n++) {
    console.log(`5 * ${n} = `, n * 5);
}


//Activity 2
//Task 3
let sum=0;
let s=1;
while(s<=10){
    sum+=s;
    s++;
}
console.log("the sum of numbers from 1 to 10 is :", sum);
//Task 4
let i = 10;
while (i >= 1) {
    console.log("i = ", i);
    i--;
}


//Activity 3
//Task 5
let n = 1;
do {
    console.log("n =", n);
    n++;
} while (n <= 5);
//Task 6
let num=5;
let factorial=1;
let f=1;
do{
  factorial *=f;
  f++;
}while(f<=num);
    console.log(`The factorial of${num} is ${factorial}`);
//Activity 4
//Task 7
let rows=5;
for(let i=1;i<=rows;i++){
    let pattern='';
    for(let j =1;j<=i;j++){
        pattern+='*';
    }
    console.log(pattern);
}



//Activity 5
//Task 8
let k = 0;
while (k < 10) {
    k++;
    if (k === 5) {
        continue;
    }
    console.log(k);
}
//Task 9
for (let i = 1; i < 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
