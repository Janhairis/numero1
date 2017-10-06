
var todoArr = []

var readline = require('readline')


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}

function createTodo(description, completed) {

    var todo = {
        description: description,
        completed: completed
    }
    return todo

}


function forEachArray(arr, callback) {
    for (var i = 0; i < todoArr.length; i++) {
        callback(arr[i], i + 1)
    }
}

function logTodos(todoArr, i) {
    console.log(i + " " + todoArr.description + ". " + "completed: " + todoArr.completed)
}

function displayNew(input) {

}


rl.on('line', function (input) {
    var newArr = input.split(' ')
    var completed = newArr[newArr.length - 1]
    var newArray = newArr.slice(0, -1)

    if (newArr[0] === 'ADD') {
        newArray.splice(0, 1)
        var newStr = newArray.join(' ')

        if (completed !== 'true' && completed !== 'false') {
            completed = false
        }
        var newTodo = createTodo(newStr, completed)
        todoArr.push(newTodo)
    } else {

    }


    forEachArray(todoArr, logTodos)


})
console.log("Enter the description for your TODO List: ")