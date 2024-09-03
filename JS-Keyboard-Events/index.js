document.body.addEventListener('keydown', function (e) {
    var keyCode = e.keyCode
    if (keyCode === 13) {
        console.log('keydown for =>' + keyCode)
    }

})

document.body.addEventListener('keyup', function (e) {
    var keyCode = e.keyCode
    if (keyCode === 13) {
        console.log('keyup for =>' + keyCode)
    }

})

document.body.addEventListener('keypress', function (e) {
    var keyCode = e.keyCode
    if (keyCode === 13) {
        console.log('keypress for =>' + keyCode)
    }

})
