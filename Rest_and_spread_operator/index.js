//Rest Operator

const mSum = (num1, num2) => console.log(num1 + num2)

mSum(1, 2, 3, 4, 5)

const mSum1 = (...args) => console.log(args)
mSum1(1, 2, 3, 4, 5, 6, 7, 8)

const mSum2 = (...args) => {
    let sum = 0
    for (i = 0; i < args.length; i++) {
        sum += args[i]
    }
    console.log(sum)
}
mSum2(1, 2, 3, 4, 5, 6, 7, 8)

const mSum3 = (num1, num2, ...args) => { //Rest (args) parameter must be last formal paramter
    console.log(num1)
    console.log(num2)
    console.log(args)
    let sum = 0
    for (i = 0; i < args.length; i++) {
        sum += args[i]
    }
    console.log(sum)
}
mSum3(1, 2, 3, 4, 5, 6, 7, 8)

//Spread Operator it gives you one way of copies of array 

let mArr1 = [1, 2, 3, 4, 5]
let mArr2 = ([...mArr1])
console.log(mArr2)

let mArr3 = [1, 2, 3, 4, 5]
let mArr4 = ([...mArr3])
mArr3.push(6)
console.log(mArr3)
console.log(mArr4)

let mArr5 = [1, 2, 3, 4, 5]
let mArr6 = [6, 7, 8]

//let mArr7 = mArr5.concat(mArr6) // concat two array 
let mArr7 = [...mArr5, ...mArr6] //concat array using spread operator 
//let mArr7 = [0,...mArr5 ,...mArr6 ,9] // append start and end 
console.log(mArr7)

let mObj = {
    fName: 'Ram'
}
let mObj1 = {
    lName: 'dulari',
    age: 24
}
let mObj2 = { ...mObj, mObj1 }
console.log(mObj2)
