var username = document.getElementById('username')
var loginForm = document.getElementById('login-form')

username.addEventListener('input', function (event) {
    var currentValue = event.target.value
    currentValue = currentValue.toUpperCase()
    console.log(currentValue)
    username.value = currentValue
})

username.addEventListener('focus', function () {
    console.log('Element Focused')
})

username.addEventListener('blur', function () {
    console.log('Element Lost Focused')
})

loginForm.addEventListener('submit', function (e) {
    alert('Submit button clicked')
    e.preventDefault()
})
