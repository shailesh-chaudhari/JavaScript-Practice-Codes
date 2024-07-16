var myFristString = "This is a String for JavaScript String Function JavaScript";

console.log(myFristString.length);  //.length returns the length of string length is 58

console.log(myFristString.indexOf('JavaScript')); //.indexOf() find index of a string inside another string  index of given string is 21
console.log(myFristString.indexOf('This')); // index of string is 0 

console.log(myFristString.lastIndexOf('JavaScript')); //.lastIndexOf() is used to find last index of a string inside another string last index of given string is 21 
console.log(myFristString.lastIndexOf('This')); // last index of string is 0 

console.log(myFristString.slice(0, 4)); //.slice(start , end ) is used to get a part of our string slice output:-This
console.log(myFristString.slice(21, 31)); //output:-JavaScript 
console.log(myFristString.slice(-10)); //starting from last output:-JavaScript  
console.log(myFristString.slice(5)); // after 5th index print all string  output:- is a String for JavaScript String Function JavaScript

console.log(myFristString.substring(0, 4)); //.subString() is used for string from start to end output is This 
console.log(myFristString.substring(21, 10)); //String for 
console.log(myFristString.substring(21, 31)); //JavaScript 
console.log(myFristString.substring(21)); //JavaScript String Function JavaScript

var mySecondString = "This is the JavaScript Functions";

console.log(mySecondString.toUpperCase()); // above string convert to upper case 
console.log(mySecondString.toLowerCase()); // srtring convert to lower case 

var myThirdString = "This is the "
var fristString = "JavaScript";
var secondString = "Functions";
console.log(myThirdString.concat(fristString)); //This is the JavaScript
console.log(myThirdString.concat(fristString, secondString)); //This is the JavaScriptFunctions
console.log(myThirdString.concat(' ', fristString, ' ', secondString)); // for space used ' ' output:-This is the  JavaScript Functions

console.log(myThirdString.concat(fristString + ' ' + secondString + ' ' + myFristString)); //we can also  use '+' to contact two or more strings 

var extraSpaceString = "            JavaScript     Functions     ";
console.log(extraSpaceString.trim()); // .trim() this is remove extra spaces. not two spring space.      output:JavaScript     Functions

var charAtExampleString = 'this is test string';
console.log(charAtExampleString.charAt(10));//s this takes the position as an arg and returns the character at that position 
console.log(charAtExampleString.charAt(2));//i 

var sampleString = "This is my sample string"; // .split() splits our string on the basis of the argument passed.
console.log(sampleString.split(' ')); //[ 'This', 'is', 'my', 'sample', 'string' ]

var sampleString1 = "This,is,my,sample,string";
console.log(sampleString1.split(',')); // [ 'This', 'is', 'my', 'sample', 'string' ]

var sampleString2 = "This is awesome";
console.log(sampleString2.split()); //[ 'This is awesome' ]

