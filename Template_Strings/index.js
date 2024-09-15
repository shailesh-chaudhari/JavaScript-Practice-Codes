const firstName = 'Ram'
const brotherName = 'Lakshman'
const mGreeting = 'hello' + ' ' + firstName //concatinate stringa 
const mGreetings = `hello ${firstName} ${brotherName}`; //using template strings

console.log(mGreeting, mGreetings)

//regular way to create functions 
function getName(firstName, brotherName) {
    return firstName + ' ' + brotherName;
}

console.log(getName(firstName, brotherName))

//using template strings create function 
function getNames(firstName, brotherName) {
    return `${firstName} ${brotherName}`
}

console.log(getNames(firstName, brotherName))

const fName = 'virendra'
const lName = 'pathrikar'

function getFullName(fName, lName) {
    return `${fName} ${lName}`
}

const greets = `Hello ${getFullName(fName, lName)}`
console.log(greets)

//rgba( red ,green , blue , alpha) normal way
let red = 200
let green = 155
let blue = 100
let alpha = 0.8

const rgbaExp = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')'
console.log(rgbaExp)

// using template string rgba

const rgbaExpr = `rgba(${red},${green},${blue},${alpha})`
console.log(rgbaExpr)
