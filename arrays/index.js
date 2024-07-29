
// Day 6 ARRAYS
// Task 1

let arr = [1,2,3];
console.log(arr)

// Task 2

let arry = ['a','b','c','d','e'];
console.log(arry[0])
console.log(arry[4])

// Task 3

arry = ['a','b','c','d','e'];
arry.push('abc')
console.log(arry)

// Task 4

arry = ['a','b','c','d','e'];
arry.pop();
console.log(arry)

// Task 5

arry = ['a','b','c','d','e'];
arry.shift();
console.log(arry)

// Task 6

arry = ['a','b','c','d','e'];
arry.unshift('lol');
console.log(arry)

// Task 7

const double = (value,index,array) =>{
    return value * 2;
}

//let num = [1,2,3,4,5,6]
let newarr = num.map(double);
console.log(newarr)

// Task 8

const even = (value,index,array) =>{
    if(value % 2 == 0){
        return value;
    }
}

num = [1,2,3,4,5,6]
let evennum = num.filter(even);
console.log(evennum)

// Task 9

const add = (total,value,index,array) =>{
    return total + value;
}

num = [1,2,3,4,5,6]
let addnum = num.reduce(add);
console.log(addnum)

// Task 10

let text = "";
num = [1,2,3,4,5,6]

for(let i  = 0; i < num.length; i++){
    text = num[i]
    console.log(text)
}

// Task 11

const each = (value,index,array) =>{
    txt += value + '\n';
    }
    let txt = "";
    num = [1,2,3,4,5,6]
    num.forEach(each)
    console.log(txt)

// Task 12

let multiarray = [
    ['hi', 2],
    ['bye',5],
    ['lol',420]
];

console.log(multiarray)

// Task 13

multiarray = [
    ['hi', 2],
    ['bye',5],
    ['lol',420]
];

console.log(multiarray[1])

//Array is a special type of object which stores list of data.regular object keys to access data but arrays used position to access data. In array position starts from 0
var mFriends = ['ram', 'sham', 'ravindra', 'vijay', 'virendra'];

console.log(mFriends);
console.log(typeof (mFriends));
console.log(mFriends[4]);
console.log(mFriends[0]);


console.log('**************************************************');
//update a value 
mFriends[0] = 'rama';
console.log(mFriends);

//add more items from last 
mFriends[5] = 'ramesh';
console.log(mFriends);

mFriends[7] = 'rajendra';
console.log(mFriends);// when we use this method to add new item we dont know the length of array here 1 empty or undefined item 
mFriends[mFriends.length] = 'suresh';// use this method to add item using .length we know the length of array 
console.log(mFriends);

mFriends.push('shubham');
console.log(mFriends);// .push() is a inbuilt function of JavaScript to add new item in last of array.

console.log('**************************************************');
//Delete a value from last 
var mName = mFriends.pop();//.pop() is a inbuilt function to delete last item from array 
console.log(mName);//shubham last array name which deleted 
console.log(mFriends);//remaining array         
var mName = mFriends.pop();
console.log(mName);//suresh 
console.log(mFriends);
var mName = mFriends.pop();
console.log(mName);//rajendra
console.log(mFriends);
var mName = mFriends.pop();
console.log(mName);//undefined
console.log(mFriends);
var mName = mFriends.pop();
console.log(mName);//ramesh
console.log(mFriends);
var mName = mFriends.pop();
console.log(mName);//virendra
console.log(mFriends);

console.log('**************************************************');
//find longest string 

var mArray = ['asdf', 'sd', 'something', 'right', 'position'];
function longestString() {
    return mArray.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
console.log("Longest String in array is : " + longestString());


mFriends.splice(3, 0, 'harshat', 'akshay');//1 st tells where to start in arrat 2nd tells how many items to be deleted 3rd and 4th and so on tells what items to be added
console.log(mFriends);

mFriends.splice(0, 0, 'saurabh');
console.log(mFriends);

console.log('**************************************************');
//delete item at specific position 
var mDelete = mFriends.splice(2, 1); // from 2nd array index 1 item deleted
console.log(mDelete);//sham
console.log(mFriends);

var mDelete = mFriends.splice(0, 2);//from 0 aray index 2 item deleted 
console.log(mDelete);//saurabh rama
console.log(mFriends);


//Concatination
var mOffice = ['rupesh', 'chandan', 'chinmay'];
var allFriends = mFriends.concat(mOffice);
console.log('**************************************************');
console.log(mFriends)
console.log(mOffice);
console.log(allFriends);


console.log('**************************************************');
//Sorting Assending and descending 
allFriends.sort();
console.log(allFriends);//assending order


console.log('**************************************************');
allFriends.reverse();
console.log(allFriends);//descending order
