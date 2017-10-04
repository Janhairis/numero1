/*Create two functions: double and square. double should take a number 
return the number times two. square should take a number and return the number squared. 
Create a third function doubleSquare that uses both of the functions to return a number 
that is first doubled and then squared.*/
// function double (num){
//   return num *2
// }
// function square(num){
//   return num * num
// }
// function doubleSquare (num){
//     return square(double(num))
// }
// console.log(doubleSquare(5))

// function double(num){
// return num * 2
// }
// console.log(double(5))
// function square(num){
// return Math.pow(num, 2)
// }

// console.log(square(5))

// function doublesquare(num){
// return double(square(num))
// }
// console.log(doublesquare(5))

/*Create a function classyGreeting that takes as input the strings firstName  and lastName ,
 and returns a string with a greeting using the two. Create a second function yell  
 that takes as input as string and returns the string in all capitalized letters.
 Create a third function yellGreeting  that will take the firstName  and lastName 
as inputs and yell a greeting using the two.
*/

// function classyGreeting(firstName, lastName){
// return "hello" + firstName +" "+ lastName
// }
// //console.log(classyGreeting( " janhairis" , "fermin"))

// function yell(string){
// return string.toUpperCase()
// }
// //console.log(yell('loser'))

// function yellGreeting(firstName, lastName){
// return yell(classyGreeting(firstName, lastName))

// }
// console.log(yellGreeting(" janhairis","fermin"))
// var number = [1,2,3,4,4,5,6]

// function removeDupes(array){
// var newArr = []
// for (i=0; i<array.length; i++){
// if(!newArr.includes(array[i])){
// newArr.push(array[i])
// }
// }

// return newArr
// }

// function concatAndRemoveDupes(array1, array2){
// return removeDupes(array1.concat(array2));
// }

// console.log(concatAndRemoveDupes([1, 2, 3], [2, 3, 4]));

// function removesDupes(array){
//     var newArray = []
//     for(var i = 0; i < array.length; i++){
//         if(!newArray.includes(array[i])){
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }
// function concatAndRemoveDupes(array1, array2){
//     return removesDupes(array1.concat(array2))

// }
// console.log(concatAndRemoveDupes([1,2,3,4,7],[1,7,5,6,3,2]))


// var grades = [91, 85, 100, 92, 88];

// function sort(array){
// return array.sort(function(a, b){return a - b});
// }

// function medianOfSorted(sortedArray){
// var middleIndex = (sortedArray.length - 1) / 2;
// return sortedArray[middleIndex];
// }

// function median(array){
// return medianOfSorted(sort(array));
// }

// console.log(median(grades));

// var grades= [100,50,30,60,70]

// function sorted(array){
//  return array.sort(function(a,b){return a - b})
// }

// //console.log(sort([1,5,3,6,7]))
// function middleElement(array){
//     var middleIndex = (array.length -1) / 2;
//      return array[middleIndex];

//  }
//  function median(array){
//   return middleElement(sorted(array))
// }
//  console.log(median(grades))






// function add1(num){
//     return num + 1;
// }

// function sub1(num){
//     return num - 1;
// }

// function add2(num){
//   return add1(add1(num))
// }

// function add3(num){
//   return add1(add2(num))
// }

// function add4(num){
//   return add1(add3(num))
// }

// function add5(num){
//   return add1(add4(num))
// }

// function add8(num){
//   return add1(add7(num))
// }

// function addNumber(num1, num2){

// }

// function sayhello(){
//   console.log('hello',)
// }
// setInterval(sayhello,2000)
// var spinner = ['one','two','three', 'four']
// var i =0 

// setInterval(function(){
// console.log('\x1B[H' + spinner[i])
// i= (i +1) % spinner.length
// }, 500)


// function forEachElem(arr, callback){
//     for (var i = 0; i < arr.length; i++) {
//        callback(arr[i])
//     }
//  }

// var array = [ 2,3,4,'cat', true]
// var logArrTypes = function (element){
// console.log(element + " is a " + typeof element)

// }
// array.forEach(logArrTypes)

// var num = 0
// var numberOfSec = function () {
// console.log(num += 1)
// }

// setInterval(numberOfSec, 1000)


// function conservativeSpender(balance)  {
//     return balance > 100
//   }

//   function liberalSpender(balance) {
//     return balance > 10
//   }

//   function horribleSaver (balance) {
//     return balance > 0
//   }


// function shouldIBuyThis(balance, callback){
//   if (callback(balance)){
//     console.log("Sure! I've got the money!")
//   } else {
//     console.log("Nope! Gotta keep my savings up!")
//   }
// }

//     shouldIBuyThis(400,conservativeSpender)
//     shouldIBuyThis(40,liberalSpender)
//     shouldIBuyThis(-3,horribleSaver)


// function smarterShouldIBuyThis (balance, price, callback){
// var difference = balance - price
//     if(callback(difference)){
//       console.log("Sure! I've got the money! :)")
//     } else {
//       console.log("Nope! Gotta keep my savings up! :(")
//     }
// }
//     smarterShouldIBuyThis(10, 50 , liberalSpender)


// function forEachElem(array, callback){
//     for (var i = 0; i < array.length; i++) {
//        callback(array[i])
//     }
//  }
//  function logEach(arr){
//     console.log(arr)
//  }
//  forEachElem([1,2,3,4,5],logEach)


// function favoriteAnimal(str, callback) {
//     console.log(callback(str))
// }

// function replaceItWithDog(str) {
//     var strArr = str.split(" ")
//     for (var i = 0; i < strArr.length; i++) {
//         if (strArr[i] === 'animals') {
//             strArr[i] = 'dogs'
//         }
//         else if (strArr[i] === 'animal') {
//             strArr[i] = 'dog'
//         }
//     }
//     var newStr = strArr.join(' ')
//     return newStr

// }

// function replaceItWithCat(str) {
//     var strArr = str.split(" ")
//     for (var i = 0; i < strArr.length; i++) {
//         if (strArr[i] === 'animals') {
//             strArr[i] = 'cats'
//         }
//         else if (strArr[i] === 'animal') {
//             strArr[i] = 'cat'
//         }
//     }
//     var newStr = strArr.join(' ')
//     return newStr

// }

// favoriteAnimal("animals are amazing", replaceItWithDog)

// favoriteAnimal("my animal is amazing", replaceItWithCat)
// function getInputj() {
//     return 'meow'
//  }
 
//  function logStuff(stuff){
//    console.log(stuff)
//  }
 
//  function getInput(callback) {
//    var input = getInputj()
//    callback(input)
//  }
 
//  getInput(logStuff)

 function sayhello(){
     console.log('hello')
 }
 function sayHello2(){
     while(true){

     }
 }
 setInterval(sayhello,100)
 setInterval(sayHello2,150)