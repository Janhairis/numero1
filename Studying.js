// Write a function sameType that takes two arguments: x and y. 
// If x and y have the same type, the function returns true.
// Otherwise, the function returns false.
//  Hint: Do you remember typeof?

// function sameType(x, y){
//     if(typeof(x) === typeof(y)){
//         return true
//     }
//     return false
// }
// console.log(sameType("string", "5"))

// var x = "Jane"
// console.log(x.toUpperCase())
// console.log(x.toLowerCase())
// console.log(x.slice( - 1 ))
// console.log(x.split(''))

// Write a function oddCaps that takes one argument: str. 
// If str is not of type string, return undefined, 
// otherwise return a new string with the same letters as str,
//  but with every odd letter capitalized. 

// *****
// function oddCaps(str){
    
//     for(var i = 0; i < str.length ; i++){ 
//     var newString = str.toUpperCase()
//       if(typeof(str) !== "string" ){   
//          return undefined     
//        } else if(i % 2 === 0) {     
//           newString[i].toLowerCase()
//     //  } else if (newString[i] % 2 === 0){
//     //      newString += newString.toLowerCase()
//       }
//     }
    
//     return newString
// }
// console.log(oddCaps("Janhairis"))

// Mid-Assessment
// Question 1 

// function and(x, y){
//     if(x && y){
//         return true
//     } 
//     return false
// }
// console.log(and("happy",""))

// Question 2
// function addOnlyNumbers(foo, bar){
//     if(typeof(foo) === 'number' && typeof(bar) === 'number') {
//         return foo + bar
//     }
//     return  NaN

// }
// console.log(addOnlyNumbers(5, "PI"))

// function isAllNum(arr){
//     for(var i = 0; i < arr.length; i++ ){
//     if(typeof arr[i] !== 'number') {
//         return false 
//     }
// } 
// return true
// }
// console.log(isAllNum([1,2,3,5 ]))
// var food = 
// { name: 'Cody', 
// tacos: 'so many tacos' 
// }


// function hasPropertyTacos(loljk){
//     if(loljk.hasOwnProperty("tacos")){
//         return true
//     }
//     return false

// }
// console.log(hasPropertyTacos(5))

function hasPropertyGenertic(bigO, littleP){
    return bigO.hasOwnProperty(littleP) 
     
}
console.log(hasPropertyGenertic({ name: 'cody', tacos: 3 },'tacos'))


// var array = [2,3,4,"hi","6"]
// console.log(array.slice(0, -3))

// function addOnlyNumbers(foo, bar){
//     if(typeof(foo) === 'number' && typeof(bar) === 'number') {
//     return foo + bar
//     }
//     return NaN
    
//     }
//    console.log(addOnlyNumbers(5, Math.PI))
//    console.log(addOnlyNumbers("fidget spinner", 22))
function makeVowelsHyph(s){
    var arr = s.split('')
    for(var i = 0; i < arr.length; i++){
        if( 'aeiou'.includes(arr[i]) ){
            arr[i] = '-'
        }
    }
    return arr.join('')
}

console.log(makeVowelsHyph("janhairis"))

function convertVowelGeneric(str, sub){
    if(typeof str !== "string" && typeof sub !== "string" ){
        return undefined
    } else if('aeiou'.includes(str)){
        str[i] = sub 

    }
return str
}
console.log(convertVowelGeneric("Janhairis", "5"))
