var task = []

var readline = require('readline')


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}

function createTask(title, completed) {
    var task = {
        title: title,
        completed: completed
    }
    return task
}
var tasks = []
tasks.push(createTask("buy milk", false))
tasks.push(createTask("walk dog", true))

function forEachElem(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}


forEachElem(tasks, function (task, index) {
    console.log((index + 1) + '. ' + task.title)
})

console.log("Enter the description for your TODO List: ")


function logTodos(task, i) {
    console.log((i + 1) + " " + task.title + ". " + "completed: " + task.completed)
}

rl.on('line', function (input) {
    var newArr = input.split(' ')
    var completed = newArr[newArr.length - 1]
    var newArray = newArr.slice(0, -1)

    if (newArr[0] === 'add') {
        newArray.splice(0, 1)
        var newStr = newArray.join(' ')

        if (completed !== 'true' && completed !== 'false') {
            completed = false
        }
        var newTodo = createTask(newStr, completed)
        tasks.push(newTodo)
    } else {

    }


    forEachElem(task, logTodos)


})
