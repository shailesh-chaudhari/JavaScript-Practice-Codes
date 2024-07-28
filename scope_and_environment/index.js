var num1 = 10;//Global variable its accessible everywhere 
console.log(num1);//10
//console.log(total);//total is not defined error because num2 is a local variable only accessible in scope of function or element 

function sum(num2) {
    console.log(num1);//10
    var total = (num1 + num2); // total is a local variable it only accessible in scope of function or element 
    console.log(total);//30
    console.log(num1);//10
}
console.log(num1);//10
sum(20);
console.log(num1);//10


console.log('***************');
var num3 = 20;

function sum(num4) {
    var total1;
    var total2 = 0;
    console.log(total1);//every time function call then its new fresh total1 not assign any value so undefine 
    console.log(total2);// when function call first total2 assingned value 0 then it print 
    total1 = num3 + num4;
    total2 = num3 + num4;
    console.log(total1);
    console.log(total2);//and next num3+num4 addition assigned to total2 and it printed  

}
sum(40);
console.log('***************');
sum(90);
