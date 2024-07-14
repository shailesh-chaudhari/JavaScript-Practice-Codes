var myFirstString = "I Love JavaScript";
console.log(myFirstString); // I Love JavaSript 

var mySecondString = 'We will learn JavaScript together';
console.log(mySecondString); // We will learn JavaScript together 

console.log(typeof (myFirstString)); // string 
console.log(typeof (mySecondString)); //string 

//What if my string contains a double quote we use \ backslash sign for using double quote in javascript
var doubleQuotesString = "This is a \"JavaScript\" String";
console.log(doubleQuotesString); //This is a "JavaScript" String

//What if my string contains a single quote we use \ backslash sign for using single quote in javascript
var singleQuotesString = "This is a \'JavaScript\' String";
console.log(singleQuotesString); //This is a 'JavaScript' String

//OR another method for single quote use double quote and for double quote use single quote  

var doubleQuotesString1 = 'This is a "JavaScript" String';
var singleQuotesString1 = "This is a 'JavaScript' String";

console.log(doubleQuotesString1); //This is a "JavaScript" String
console.log(singleQuotesString1); //This is a 'JavaScript' String


//Examples 

// console.log('JavaScript is Cool"); //Unexpected token error
// console.log('I'm gonna learn JavaScript'); missing error
console.log("This is a \"test\" string"); //This is a \"test\" string
// console.log('This is another /'test/' string'); // error
console.log("How about this string??"); //How about this string??