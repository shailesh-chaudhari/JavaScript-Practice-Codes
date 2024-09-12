// function Person(mName, birthYear) {
//     this.mName = mName
//     this.birthYear = birthYear

//     this.getDetails = function () {
//         return "Name : " + this.mName + " and Age : " + (2019 - this.birthYear)
//     }
// }

//Casses 

class Person {
    constructor(mName, birthYear) {
        this.mName = mName
        this.birthYear = birthYear
    }
    getDetails = () => {
        return `Name: ${this.mName} and Age: ${2024 - this.birthYear}`
    }
}

var ram = new Person('Ram', 2000)
console.log(ram.getDetails())


//Inheritance 

class Person1 {
    constructor(mName1, birthYear1) {
        this.mName1 = mName1
        this.birthYear1 = birthYear1
    }
    getDetails1 = () => {
        return `Name: ${this.mName1} and Age: ${2024 - this.birthYear1}`
    }
}

class pilot extends Person1 {
    constructor(mName1, birthYear1, exp, type, license) {
        super(mName1, birthYear1)
        this.experience = exp
        this.type = type
        this.license = license
    }

    getData = () => {
        console.log(`${this.getDetails1()} and Experience ${this.experience} and Type ${this.type}`)
    }
}


const sham = new pilot('Ramchandra shirudkar', 2000, 28, 'private', 'TC1234')
console.log(sham)
sham.getData()

const laxman = new pilot('ganpat gavde', 2003, 12, 'commercial', 'TC9234')
console.log(laxman)
laxman.getData()
