var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}


// var history = []

// rl.on('line', function (input) {
//     clear()
//     history.push(input)
//     console.log(history.join('\n'))
//     console.log('write something: ')
// })

// clear()
// console.log('write something: ')


// var history = []
// var historySum = 0
// rl.on('line', function (input) {
//     clear()


//     if (!isNaN(input)) {
//         history.push(input)
//             historySum += Number(input)
//         console.log(historySum)
//         console.log('Enter number: ')
//     } else {
//         clear()
//         console.log(historySum)
//         console.log('Enter number: ')
//     }
// })

// clear()
// console.log('Enter Number: ')




// function addNumbers(arr) {
//     // ['4', '5', '9']
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         var num = Number(arr[i])
//         if (!isNaN(num)) {
//             sum += num
//         }
//     }
//     return sum
// }

// rl.on('line', function (input) {
//     clear()
//     var arr = input.split(' ')
//     var sum = addNumbers(arr)
//     console.log(sum)
//     console.log('write some numbers: ')
// })

// clear()
// console.log('write some numbers: ')



// var rooms = [
//     {
//         price: 200,
//         location: '11 Broadway, NY',
//         maxOccupants: 3,
//         amenities: ['washer/dryer', 'wifi', 'cable']
//     },
//     {
//         price: 100,
//         location: '11 Delancey, NY',
//         maxOccupants: 1,
//         amenities: []
//     },
//     {
//         price: 2000,
//         location: '1 Park Pl, NY',
//         maxOccupants: 2,
//         amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
//     }
// ];

// // make the string exactly as long as len
// function padTo(str, len) {
//     if (str.length > len) {
//         return str.slice(0, len - 3) + '...'
//     } else {
//         while (str.length < len) {
//             str += ' '
//         }
//         return str;
//     }
// }

// // make the string exactly as long as len
// function padLeft(str, len) {
//     var money = str
//     if (money.length > len) {
//         return money.slice(0, len - 3) + '...'
//     } else {
//         while (money.length < len) {
//             money = ' ' + money
//         }
//         return money;
//     }
// }

// function toMoney(num) {
//     return '$' + num.toString()
// }

// function whatsAvailable(rooms) {
//     for (var i = 0; i < rooms.length; i++) {
//         if (rooms[i].reserved) {
//             continue;
//         }
//         console.log(
//             padTo(rooms[i].location, 20),
//             ' ',
//             padLeft(toMoney(rooms[i].price), 8)
//         );
//     }
// }

// function bulletPoints(list) {
//     return '\n - ' + list.join('\n - ')
// }

// function showDetails(room) {
//     console.log('Location:', room.location)
//     console.log('Price:', toMoney(room.price))
//     console.log('Max. Occupancy:', room.maxOccupants)
//     console.log('Amenities:', bulletPoints(room.amenities))
// }

// function reserve(which) {
//     rooms[which].reserved = true
//     console.log('Thank you for reserving')
// }

// whatsAvailable(rooms);

// console.log('----------')

// var selected = 2;
// showDetails(rooms[selected]);

// console.log('----------')

// reserve(selected);

// console.log('----------')

// whatsAvailable(rooms);

// rl.on('line', function (input) {
//     var inputArr = input.split(' ')
//     if(inputArr[0] === 'list'){
//         whatsAvailable(rooms)
//     } else if(inputArr[0]=== 'show'){
//         showDetails(rooms[inputArr[1]-1])
//     }else{
//         console.log('Unknown command: '+ input)
//     }
//     console.log('\n\nSelect one of [list, show n] $')
// })

// console.log('\n\nSelect one of [list, show n] $')
// var counter = 0 
//  rl.on('line', function (input) {

// if(input === 'inc'){
//     counter ++

// }else if(input === 'dec'){
//     counter --
// }else {
//     counter = 0
// }
// console.log(counter)

//  })
//  clear()
//  console.log('Please enter an input')

// var readline = require('readline')

// var options = 'list, show n, reserve n, occupancy n max, search amenity'

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// var rooms = [
//     {
//         price: 200,
//         location: '11 Broadway, NY',
//         maxOccupants: 3,
//         amenities: ['washer/dryer', 'wifi', 'cable']
//     },
//     {
//         price: 100,
//         location: '11 Delancey, NY',
//         maxOccupants: 1,
//         amenities: []
//     },
//     {
//         price: 2000,
//         location: '1 Park Pl, NY',
//         maxOccupants: 2,
//         amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
//     },
//     {
//         price: 90000,
//         location: '1 Broad St, NY',
//         maxOccupants: 33,
//         amenities: ['disco ball']
//     },
//     {
//         price: 2000,
//         location: '2312 144th St, NY',
//         maxOccupants: 4,
//         amenities: []
//     },
//     {
//         price: 200000,
//         location: '47-10 Austell Pl, NY',
//         maxOccupants: 200,
//         amenities: ['drill', 'sometimes wifi', 'luna']
//     },
//     {
//         price: 0,
//         location: 'Times Square, NY',
//         maxOccupants: 3,
//         amenities: ['sewage water', 'hagglers', 'naked cowboy']
//     },
//     {
//         price: 200000,
//         location: '1600 Pennsylvania Ave, DC',
//         maxOccupants: 500,
//         amenities: ['nixon\'s bowling', 'orange hairpiece', 'oval office', 'pair of small hands']
//     },
//     {
//         price: 2000000,
//         location: 'Falchi Bldg, NY',
//         maxOccupants: 5000,
//         amenities: ['food truck']
//     },
//     {
//         price: 250,
//         location: 'Washington Pl, NY',
//         maxOccupants: 100,
//         amenities: ['fountain', 'dosa cart']
//     }    
// ];

// // make the string exactly as long as len
// function padTo(str, len) {
//     if (str.length > len) {
//         return str.slice(0, len - 3) + '...'
//     } else {
//         while (str.length < len) {
//             str += ' '
//         }
//         return str;
//     }
// }

// // make the string exactly as long as len
// function padLeft(str, len) {
//     var money = str
//     if (money.length > len) {
//         return money.slice(0, len - 3) + '...'
//     } else {
//         while (money.length < len) {
//             money = ' ' + money
//         }
//         return money;
//     }
// }

// function toMoney(num) {
//     return '$' + num.toString()
// }

// function whatsAvailable() {
//     console.log(
//         padLeft('ID', 2),
//         '...',
//         padTo('Address', 30), 
//         ' ', 
//         padLeft('Price', 8)
//     );
//     for (var i = 0; i < rooms.length; i++) {
//         if (rooms[i].reserved) {
//             continue;
//         }
//         var counter = i + 1;
//         console.log(
//             padLeft(counter.toString(), 2),
//             '...',
//             padTo(rooms[i].location, 30), 
//             ' ', 
//             padLeft(toMoney(rooms[i].price), 8)
//         );
//     }
// }

// function bulletPoints(list) {
//     return '\n - ' + list.join('\n - ')
// }

// function showDetails(n) {
//     var room = rooms[n]
//     console.log('Details of room #' + (n + 1))
//     console.log('----------------------\n')
//     if (room.reserved) {
//         console.log('[RESERVED]')
//     }
//     console.log('Location:', room.location)
//     console.log('Price:', toMoney(room.price))
//     console.log('Max. Occupancy:', room.maxOccupants)
//     console.log('Amenities:', bulletPoints(room.amenities))
// }

// function reserve(n) {
//     if (rooms[n].reserved) {
//         console.log('Sorry, it\'s already reserved.')
//         return
//     } 
//     rooms[n].reserved = true
//     console.log('Thank you for reserving')
// }

// rl.on('line', function(input) {
//     var inputArr = input.split(' ')
//     if (inputArr[0] === 'list') {
//         whatsAvailable();        
//     } else if (inputArr[0] === 'show') {
//         showDetails(inputArr[1] - 1)
//     } else if (inputArr[0] === 'reserve') {
//         reserve(inputArr[1] - 1)
//     } else {
//         console.log('Unknown command: ' + input)
//     }

//     console.log('\n\nPlease chose one of [' + options + '] $')
// })

// console.log('Please chose one of [' + options + '] $')



// var counter = 0
// rl.on('line', function (input) {
//     if (input.toLowerCase() === 'inc') {
//         console.log(counter += 1,'The counter has been incremented by 1')
//     } else if (input.toLowerCase() === 'dec') {
//         console.log(counter -= 1,'The counter has been decremented by 1')
//     } else if(input.toLowerCase() === 'res') {
//         console.log(counter = 0,"The counter has been rested")
//     }
// })
// clear()
// console.log("The counter is: " + counter + '\n'+"Enter 'inc' to increment or dec to decrement or res to reset")


// rl.on('line', function(input){
//     var SplitInput = input.split(' ')
//     if(input.length < 4 ){
//       console.log('The operation is not followed by the expected two numbers (with spaces)')
//     }
//     var mathOper = '/+*-'
//     var op = SplitInput[0]
//     var firstNumber = Number(SplitInput[1])
//     var secondNumber = Number(SplitInput[2])

//     if(!mathOper.includes(op)){
//       console.log('The operation is invalid.')
//     } else if(isNaN(firstNumber) || isNaN(secondNumber)){
//       console.log('Please enter two numbers.')
//     }  else if (op === mathOper[1]){
//       console.log(firstNumber + secondNumber)
//       } else if(op === mathOper[3]){
//       console.log( firstNumber - secondNumber)
//       } else if(op === mathOper[2]){
//       console.log(firstNumber * secondNumber)
//       } else if (op === mathOper[4]){
//       console.log(firstNumber / secondNumber)
//       } 

//     })  
//     clear()
//     console.log('Input one of four mathematical symbols: + - * / followed by two numbers, separated by spaces.')




var oper = '+-/*'
rl.on('line', function (input) {
    var seperate = input.split(' ')
    console.log(operCheck(seperate))
    function operation(set) {
        var number = Number(set[1])
        for (var i = 2; i < set.length; i++) {
            var addi = Number(set[i])
            if (set[0] === '+') {
                number += addi
            } else if (set[0] === '-') {
                number -= addi
            } else if (set[0] === '/') {
                number /= addi
            } else if (set[0] === '*') {
                number *= addi
            }
        }
        return number
    }
    function operCheck(set) {
        if (!oper
            .includes(set[0])) {
            return 'The operation is invalid'
        } else if (set.length < 3) {
            return 'The operation is not followed by at least two numbers (with spaces)'
        } else {
            return operation(set)
        }
    }
})
clear()
console.log('Input one of four mathematical symbols: + - * / followed by numbers, separated by spaces.')

