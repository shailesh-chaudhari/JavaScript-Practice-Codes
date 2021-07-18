/* Question:-
JavaScript Program to Find the Square Root using Math.sqrt method and without sqrt method
*/

//Answer:- 

//JavaScript Program to Find the Square Root using MAth.sqrt() method

const number = prompt("Enter Number");

const squareRoot = Math.sqrt(number); // use built-in Math.sqrt() method 

console.log(`Square Root of ${number} is ${squareRoot}`);


//Without using sqrt built-in method

function squareRoot1(){
    var avg=(a,b)=>(a+b)/2,c=5,b;
    for(let i=0;i<20;i++){
        b= number1/c;
        c=avg(b,c);
    }
    return c;
}

const number1 = prompt("Enter the Number");
const result = squareRoot1(number1);
console.log(`Square Root of ${number1} is ${result}`);

