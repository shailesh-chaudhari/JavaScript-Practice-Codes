var num1 = 15;
var num2 = 30;

//= equal to operator 
var num1 = 20;//here 20 is assigned to num1 

//+= plus equal to operator 
num1 += 10; //num1 = num1+ 10; 20+10= 30
num1 += num2; // num1 = num1 + num2; 30+30=60
console.log(num1);//60

//-= minus equal to operator
num1 -= 10; // num1 = num1 -10; 60-10 = 50
num1 -= num2; //num1 = num1 - num2; 50-30 = 20
console.log(num1); //20

//*= multiply equal to operator
num1 *= num2; //num1 = num1 * num2; 20*30 = 600
console.log(num1); //600

//  /= divide equal to operator
num1 /= num2; //num1 = num1 / num2; 600/30 = 20
console.log(num1); //20

// %= modulus equal to operator
num2 = 2;
num1 %= num2; //num1 = num1 % num2; 20%2 = 0 modulus gives reminder 
console.log(num1); //0


x = 0;
x++;
console.log(x);//1
x = x + 1;
console.log(x);//2
x += 1;
console.log(x);//3

x = 1;
x--;
console.log(x);//0
x = x - 1;
console.log(x);//-1
x -= 1;//x=x-1 -1-1 =-2
console.log(x);//-2

var num = 100;
num += 5 * 10 / 2;// here first priority is multiply 10*5 = 50 then / 50/2 = 25 then num = num + 25; 100+25=125;
console.log(num);//125

var num = 100;
num *= 2 * 10 / 5;//here first priority is multiply 10*2 = 20 then 20/5 = 4 then num=num*100; 4*100 = 400
console.log(num);//400

var num = 100;
num /= 2 * 8 - 15; //here first priority is multiply 8*2 = 16 then 16-15 = 1 then num=num/1;  100/1 = 100
console.log(num);//100
