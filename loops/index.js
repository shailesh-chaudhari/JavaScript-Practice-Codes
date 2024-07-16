
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
