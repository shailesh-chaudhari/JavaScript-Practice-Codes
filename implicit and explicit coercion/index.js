// Implicit and Explicit coercion 
// It is conversion of a value from one type to another data type this can be done either programatically by us or automatically by JavaScript 
// Two types of Coercion 
//1. Implicit type:- It is automatically by JavaScript 
//2. Explicit type:- It is Programatically by us 

//1. Implicit type 

var mStr = 'Hello';
var mNum = 5;
var mNum = mStr + mNum;

console.log(mNum); // Hello5
console.log(typeof (mNum));// type of output is string in this javascript automatically converted number into string 

console.log('javascript' + true); // javascripttrue
console.log(typeof ('javascript' + true));// type is string here also boolean converted into string automatically by JS 

console.log('javascript' + 50); // javascript50
console.log(typeof ('50' + true));//string 


mValue = '2';
mValue1 = +'2';
console.log(mValue);//'2' string 
console.log(mValue1);//2 number 
console.log(typeof (mValue));//string 
console.log(typeof (mValue1));//number 

mValue = '-2';
mValue1 = -'2';
console.log(mValue);//'-2' string 
console.log(mValue1);//-2 number 
console.log(typeof (mValue));//string 
console.log(typeof (mValue1));//number 

mValue = 'apple';
mValue1 = -'apple';
console.log(mValue);//'apple' string 
console.log(mValue1);//NaN number 
console.log(typeof (mValue));//string 
console.log(typeof (mValue1));//number 


mValue1 = 2 >= '2';
console.log(mValue1);//true
console.log(typeof (mValue1));//boolean

console.log(true + false); // 1
console.log(12 / "6");//2
console.log("number" + 15 + 3);//number153
console.log(15 + 3 + "number");//18number
console.log(1 > null);//true
console.log("foo" + + "bar");//fooNaN
console.log('true' == true);//false
console.log(false == 'false');//false
console.log(null == '');//false
console.log(!!"false" == !!"true");//true


//2.Explicit type

//for string 
var mNum1 = 15;
console.log(typeof (String(mNum1)));//string 
console.log(typeof (String(true)));//string 
console.log(typeof (String(-98.10)));//string 
console.log(typeof (String(null)));//string 
console.log(typeof (String(undefined)));//string 

//for number 
console.log(typeof (Number('2')));//number 
console.log(Number(true), typeof (Number(true)));//1 number 
console.log(Number(false), typeof (Number(true)));//0 number 
console.log(Number('-90.85'), typeof (Number('-90.85')));//-90.85 number 
console.log(Number('apple'), typeof (Number('apple')));//NaN number 

//for boolean 
console.log(Boolean(true), typeof (Boolean(true)));//true boolean 
console.log(Boolean(1), typeof (Boolean(1)));//true boolean 
console.log(Boolean(0), typeof (Boolean(0)));//false boolean 
console.log(Boolean('apple'), typeof (Boolean('apple')));//true boolean 
console.log(Boolean(null), typeof (Boolean(null)));//false boolean 
console.log(Boolean(undefined), typeof (Boolean(undefined)));//false boolean 
console.log(Boolean(), typeof (Boolean()));//false boolean 
console.log(Boolean(''), typeof (Boolean()));//false boolean 


console.log('Practice');
console.log(String(123));//123
console.log(typeof (String(123)));//string
console.log(String(-12.3));//-12.3
console.log(typeof (String(-12.3)));//string
console.log(String(null));//null
console.log(typeof (String(null)));//string
console.log(String(undefined));//undefined 
console.log(typeof (String(undefined)));//string
console.log(String(true));//true
console.log(typeof (String(true)));//string
console.log(String(false));//false
console.log(typeof (String(false)));//string
console.log(Boolean(''));//false
console.log(typeof (Boolean('')));//boolean
console.log(Boolean('Hello'));//true 
console.log(typeof (Boolean('Hello')));//boolean
console.log(Boolean(0));//false
console.log(typeof (Boolean(0)));//boolean
console.log(Boolean(200));//true
console.log(typeof (Boolean(200)));//boolean
console.log(Boolean(-0));//false
console.log(typeof (Boolean(-0)));//boolean
console.log(Boolean(-200));//true
console.log(typeof (Boolean(-200)));//boolean
console.log(Boolean(NaN));//false
console.log(typeof (Boolean(NaN)));//boolean
console.log(Boolean(null));//false
console.log(typeof (Boolean(null)));//boolean
console.log(Boolean(undefined));//false
console.log(typeof (Boolean(undefined)));//boolean
console.log(Boolean(false));//false
console.log(typeof (Boolean(false)));//boolean
console.log(Number(null));//0
console.log(typeof (Number(null)));//number
console.log(Number(undefined));//NaN 
console.log(typeof (Number(undefined)));//number
console.log(Number(true));//1
console.log(typeof (Number(true)));//number
console.log(Number(false));//0
console.log(typeof (Number(false)));//number
console.log(Number(" 12 "));//12
console.log(typeof (Number("12")));//number
console.log(Number("-12.34"));//-12.34
console.log(typeof (Number("-12.34")));//number
console.log(Number("\n"));//0
console.log(typeof (Number("\n")));//number
console.log(Number(" 12s "));//NaN
console.log(typeof (Number("12s")));//number
console.log(Number(123));//123
console.log(typeof (Number("123")));//number
