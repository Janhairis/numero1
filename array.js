// function arrLength (array) {
    
//      return array.length
// }
// console.log(arrLength(["hi", "jets", "mets", "giants", "yankees"]))

// function longestArr(arr1, arr2) { 
//     if (arr1.length > arr2.length) { 
//       return arr1 
//     } else if (arr2.length > arr1.length) { 
//       return arr2 
//     }
//       return null 
//   }
//   console.log(longestArr([1,2,3,4,5], [1,2,3,4]))
// var arr = [1,2,3] 
// function addTwoElements(arr, a, b) {
//     arr.push(a) 
//     arr.push(b) 
//     console.log(arr) 
//   }
// addTwoElements(arr,4 ,5)

// function middleElement(arr){
//     if(arr.length % 2 ===0 ){
//         return "Oops, there's no middle..."
//     }else{
//     return arr[Math.floor(arr.length / 2)]
//     }
// }
// console.log(middleElement([1,2,7,4,5]))

// function sumArray (arr){
// var sum = 0
//     for ( var i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum
// }
// console.log(sumArray([1,2,4,-4]))


// function range(min, max){
// var newarr = []
//     for(var i = min ; i <= max ; i++){
//         newarr.push(i)
//     }
//     return newarr
// }
// console.log(range(6, 12))

// function rangeWithStep (min, max, step){
//     var allNumbers = []
//     if (step === undefined){                        
//        step = 1                                  
//    }
//         for(var i = min; i <= max; i += step){  
//            allNumbers.push(i)
//         }
//         return allNumbers;

// }
// console.log(rangeWithStep(2,6, 2))

// function withoutLastTwo(arr){
//     return arr.slice(0, -2)
// }
// console.log(withoutLastTwo([1]))

// function everyThird (array){
//     var newarr = []
//     for(var i = 2; i <= array.length; i+=3 ){
//     newarr.push(array[i])
//     }
//     return newarr
//     }
//     console.log(everyThird([1,2,5,4,5,6]))


// function everyThird(array){
// var newArr = []
//     for (var i = 2; i < array.length; i+=3 ){
//         newArr.push(array[i])
//     }
//     return newArr
// }
// console.log(everyThird([1,2,3,4,6,7,8,9,10]))

// function lastFirst(arr) {
    
//     var saved = arr.pop()
//     arr.splice(0,0, saved)
//      //arr.unshift(saved)
//     return arr
//     }
//     console.log(lastFirst([]))


// function withoutLastTwo(arr){
//     return arr.slice(0, -2)
//     }
//     console.log(withoutLastTwo([1,2,3]))



// function binaryToDecimal(str) {
//     var I = 0
//     var O = 0
//     var x = 0
//      {
//         if (str[i] === '1'){
//             I += 1 * Math.pow(2, x++)
//         // }else if (str[i] === '0'){
//         //     O += 0 //* Math.pow(2, x++)
//          }
//     }
//     var sum = I + O
//     return sum
// }

// console.log(binaryToDecimal("0110"))


//"c4q"[1] ==> "4"





