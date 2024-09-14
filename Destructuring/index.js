const fName = "Ram chandra dulari"
const nameArr = fName.split(' ')

console.log(nameArr)

// let firstName = nameArr[0]
// let middleName = nameArr[1]

let [firstName, middleName, lastName] = nameArr //using destructure concept here sequence matters print sequence and this sequence must same 
console.log(firstName)
console.log(middleName)
console.log(lastName)


const person = {
    fName1: 'ganpatrao',
    mName1: 'baburao',
    lName1: 'Apte',
    age: 56
}

let { fName1, mName1, lName1 } = person
console.log(fName1)
console.log(mName1)
console.log(lName1)

let fName2 = 'ganpat'
let lName2 = 'gavade'
let age = 22

// const personObj={
//     fName2 :fName2,
//     lName2 :lName2,
//     age:age
// }
// const personObj={
//     first :fName2,
//     last :lName2,
//     age:age
// } //for different key name use this method of destructure or for same key name use below method
const personObj = {
    fName2,
    lName2,
    age: age
}

console.log(personObj)
