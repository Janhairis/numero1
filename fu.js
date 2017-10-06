var todoArr = []
var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}




function createTasks(description, completed) {
    var task = {
        description: description,
        completed: completed
    }
    return task

}
function forEachArray(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i + 1)
    }
}

function logtasks(taskArr, i) {
    console.log(i + " " + taskArr.description + ". " + "completed: " + taskArr.completed)


// function displayNew(input) {
// }

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
        var newtask = createtask(newStr, completed)
        taskArr.push(newtask)
    } else {
    }
    forEachArray(taskArr, logtasks)

})

console.log("Enter the description for your task List: ")