var username = document.getElementById('username')
var password = document.getElementById('password')
var loginForm = document.getElementById('login-form')
var usernameErrorPara = document.getElementById('username-err')
var passwordErrorPara = document.getElementById('password-err')


username.addEventListener('input', function (e) {
    var pattern = /^[\w]{3,12}$/;
    var currentValue = e.target.value
    var valid = pattern.test(currentValue)

    if (valid) {
        usernameErrorPara.style.display = 'none'
    } else {
        usernameErrorPara.style.display = 'block'
    }
})
password.addEventListener('input', function (e) {
    var pattern = /^[\w]{3,12}$/;
    var currentValue = e.target.value
    var valid = pattern.test(currentValue)

    if (valid) {
        passwordErrorPara.style.display = 'none'
    } else {
        passwordErrorPara.style.display = 'block'
    }
})
