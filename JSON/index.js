var mObj = {
    "name": 'Ram',
    "age": 25,
    "lastname": undefined,//JSON not accept 
    "getName": function () {
        return this.name  //JSON not accept 
    },
    "married": false,
    "score": [25, 50, 67, 89, 98],
    "Photo": null
}

var strJson = JSON.stringify(mObj)
console.log(strJson)
console.log(JSON.parse(strJson))
