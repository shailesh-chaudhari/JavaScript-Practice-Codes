//Objects:- Object is a collection of key value pair inclosed with courley bracket {} this value will be premitted data types or another objects even a function.

var mCars = {
    "swift": "120 kmph",
    "ertiga": "240 kmph",
    "thar": "340 kmph",
    "bmw": "480kmph"
}
console.log(mCars);
//output{
//     swift: '120 kmph',
//     ertiga: '240 kmph',
//     thar: '340 kmph',
//     bmw: '480kmph'
//   }
console.log(typeof (mCars));//object

var mErtiga = {
    name: "ertiga",
    manufacturer: {
        name: "maruti suzuki",
        location: "India"
    },
    topSpeed: 240,
    color: "Grey",
    spoilers: false,
    applyBrakes: function () {
        setTimeout(function () {
            console.log('car stopped');
        }, 5000)
    }
}
console.log(mErtiga.name);
console.log(mErtiga.topSpeed);
console.log(mErtiga.manufacturer);
console.log(mErtiga.manufacturer.name);
console.log(mErtiga.applyBrakes());
console.log(mErtiga.applyBrakes);


customerData = {
    'Ben10': "22, 30, 11, 17, 15, 52, 27, 12",
    'Sameer': "5, 17, 30, 33, 40, 22, 26, 10, 11, 45",
    'Zeeshan': "22, 30, 11, 5, 17, 30, 6, 57"
}
console.log(customerData);
console.log(customerData.Sameer);


//delete roll no property 
mStudent = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.keys(mStudent)); //[ 'name', 'sclass', 'rollno' ]
console.log(Object.entries(mStudent));// [ [ 'name', 'David Rayy' ], [ 'sclass', 'VI' ], [ 'rollno', 12 ] ]
console.log(Object.values(mStudent));//[ 'David Rayy', 'VI', 12 ]
console.log(Object.keys(mStudent).length);//3 length of objects 
console.log(Object.entries(mStudent).length);//3 length or total entries of object 
console.log(Object.values(mStudent).length);//3 length or total value length of object 

console.log("before delete rollno property");
console.log(mStudent);

delete mStudent.rollno;
console.log("after delete rollno property");
console.log(mStudent);
console.log(mStudent.name, mStudent.sclass,);


//display reading book status 
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

console.log(library.length);
for (var i = 0; i < library.length; i++) {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
        console.log("Already read " + book);
    } else {
        console.log("You still need to read " + book);
    }
}
