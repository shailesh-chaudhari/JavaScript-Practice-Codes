//map()

const mArr = [1, 2, 3, 4, 5]

//let newArr = []
// for(i=0;i<mArr.length;i++){
//     newArr.push(mArr[i]*2)
// }


// const doubleValues =(item)=>{
//     return item*2
// }
// for(i=0;i<mArr.length;i++){
//     newArr.push(doubleValues(mArr[i]))
// }


let newArr = mArr.map((data, pos) => {
    console.log(`Item at pos: ${pos} is ${data}`)
    return data * 2
})
console.log(mArr)
console.log(newArr)

const mObj = [{
    name: 'ram dulari',
    experience: 10,
    type: 'commercial'
},
{
    name: 'ganpat apte',
    experience: 5,
    type: 'private'
}, {
    name: 'raj supariwala',
    experience: 20,
    type: 'commercial'
}, {
    name: 'rohit sharma',
    experience: 12,
    type: 'government'
}]

let newObj = mObj.map((data, pos) => {
    //   console.log(`Item at pos: ${pos} is ${data}`)
    console.log(data)
    return {
        name: data.name,
        experience: data.experience
    }
})
console.log(mObj)
console.log(newObj)


console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')


//reduce()
const numArr = [1, 2, 3, 4, 5]

const result = numArr.reduce((acc, item) => {
    // console.log(item)
    console.log(acc)
    return acc + item
}, 0)

console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
const result1 = mObj.reduce((acc, item) => {
    // console.log(item.experience)
    // console.log(acc)
    return acc + item.experience
}, 0)
console.log(result)
console.log(result1)

console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')

//filter()

const filArr = [1, 2, 3, 4, 5, 6, 7]

const resultArr = filArr.filter((item) => {
    //console.log(item)
    // item % 2 === 0 //return even array  
    return item % 2 !== 0 //return odd array
})
console.log(resultArr)

console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')

const resultArr1 = mObj.filter((item) => {
    console.log(item.experience)
    return item.experience <= 10
    //return item.experience >= 10
})
console.log(resultArr1)


console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
// find() and findIndex()  

const nArr = [-1, -2, -3, -4, 1, 2, 3, 4]

const resultNum = nArr.find(item => {
    // return true //return first item from array -1
    //  return item %2===0 // return -2 because -2 is even
    //return (item >= 0) //return 1 
    return (item % 2 === 0) && (item >= 0) // return first positive number 2 
})

console.log(resultNum)

const resultNum1 = nArr.findIndex(item => {
    // return (item % 2 === 0) && (item >= 0) //return index of even positive number is 5 position number is 2
    return (item % 2 !== 0) && (item >= 0)//return index of odd positive number is 4 position number is 1 

})
console.log(resultNum1)

