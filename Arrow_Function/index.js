
function greetings(myName) {
    return `Welcome ${myName}`
}

const mGreetings = (myName, age) => {
    return `Welcome ${myName} ${age}`
}

const mGreeting = myName => `Welcome ${myName}` //if pass one argument one statement no return statement needed for if one argument 

console.log(greetings('Ravindra'))
console.log(mGreeting('Rajesh'))
console.log(mGreetings('Vijay', 24))
