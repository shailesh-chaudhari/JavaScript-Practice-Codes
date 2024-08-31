var mainHeading = document.getElementById("main-heading")
var sidebar = document.getElementById("sidebar")
var toggleBar = document.getElementById("toggle-icon")




toggleBar.addEventListener('click', function () {
    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show')
        sidebar.classList.add('hide')
        mainHeading.classList.remove('small')
        mainHeading.classList.add('big')

    } else {
        sidebar.classList.add('show')
        sidebar.classList.remove('hide')
        mainHeading.classList.add('small')
        mainHeading.classList.remove('big')
    }
})
