$(document).ready(function () {
    var list = $('#todo-list')
    var inputBox = $('#todo-input')
    var btnUpdate = document.getElementById('update-item')
    var btnRemove = document.getElementById('remove-item')


    var currentInputValue = '';
    inputBox.on({
        'input': function (e) {
            console.log(e.target.value)
            currentInputValue = e.target.value
        },
        'keyup': function (e) {
            if (e.keyCode === 13) {
                addListItem()
            }
        }
    })


    function createNewNode() {
        var newListElement = document.createElement('li')
        var textNode = document.createTextNode(currentInputValue)
        newListElement.appendChild(textNode);
        newListElement.id = "item" + (list.childElementCount + 1)

        return newListElement
    }

    function addListItem() {
        if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {

            var newListElement = createNewNode()
            list.append(newListElement)
            console.log(list.childElementCount)

            inputBox.value = ''
            currentInputValue = ''
        } else {
            alert('Please Enter a Task which you add')
        }
    }

    $('#add-item').click(createTODOItemAtBackend)

    btnUpdate.addEventListener('click', function () {
        if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {

            var firstElement = list.firstElementChild
            var newListElement = createNewNode()

            list.replaceWith(newListElement, firstElement)
            inputBox.value = ''
            currentInputValue = ''
        } else {
            alert('Please Enter a Task which you update')
        }
    })

    btnRemove.addEventListener('click', function () {

        var firstElement = list.firstElementChild

        list.remove(firstElement)
        inputBox.value = ''
        currentInputValue = ''

    })

    function clearInputData() {
        inputBox.val()
        currentInputValue = ''
    }
    function createTODODynamically(id, title) {
        var newListElement = document.createElement('li')
        var textNode = document.createTextNode(title)
        newListElement.append(textNode);
        newListElement.id = id

        return newListElement
    }

    function getTODOListFromBackend() {
        $.get('https://jsonplaceholder.typicode.com/todos', function (data, status) {
            var response = data
            for (var i = 0; i < response.length; i++) {
                list.append(createTODODynamically(response[i].id, response[i].title))
            }
        })
        // var http = new XMLHttpRequest()
        // http.onreadystatechange = function () {
        //     if (this.readyState === 4) {
        //         if (this.status === 200) {
        //             var response = JSON.parse(this.responseText)
        //             for (var i = 0; i < response.length; i++) {
        //                 list.append(createTODODynamically(response[i].id, response[i].title))
        //                 todoCount.innerHTML = response.length
        //                    clearInputData()
        //             }
        //         } else {
        //             console.log('Call Failed')
        //         }
        //     }
        // }
        // http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
        // http.send()

    }


    getTODOListFromBackend()


    function createTODOItemAtBackend() {
        // var http = new XMLHttpRequest()
        // http.open('POST', 'https://jsonplaceholder.typicode.com/todos', true)
        // http.onreadystatechange = function () {
        //     if (this.readyState === 4) {
        //         if (this.status === 201) {
        //             var response = JSON.parse(this.responseText)
        //             list.append(createTODODynamically(response.id, currentInputValue))
        //            todoCount.innerHTML=parseInt(todoCount.innerHTML)+1
        //            clearInputData()
        //         } else {
        //             console.log('Call Failed')
        //         }
        //     }
        // }
        // var obj =({
        //     "userId": 1,
        //     "title": currentInputValue,
        //     "completed": false
        // })
        // http.send(obj)


        var obj = ({
            "userId": 1,
            "title": currentInputValue,
            "completed": false
        })
        $.post('https://jsonplaceholder.typicode.com/todos', obj, function (data, status) {
            var response = data
            list.append(createTODODynamically(response.id, currentInputValue))
            clearInputData()
        })
    }
})
