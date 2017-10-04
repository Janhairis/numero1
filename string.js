
// var name = "fermin Janhairis "
// //for (var i =0 ; i < name.length; i++){
//     console.log(name.length)
// //}

// var fname = "janhairis"
// var lname = "fermin"

// function fullname(fname, lname){
//     return fname + " " + lname

// }
// console.log(fullname(fname,lname))

// var str = ''
// var num = 10
// for (var i = 1; i <= num; i++) {
//     if( i > 1){  
//      str += i + ', '   
//     }
//       // str += i
    
// }
// console.log(str)

// // for (var i = 0; i < num; i ++){

// // }
// // for ()


// var result = "";
// var str = "";
// var num = 5;
// for (var i = 1; i <= num; i++) {
//   for (var j = 1; j <= num; j++) {
//     if (j === num) {
//          str += j;
//     // }  else {
//         str += i 
//     } else {
//         str += j + ", "
        
//     }
//  }  
   
//    result += i + " " + str + "\n";
// }
// console.log(result);

// var result = "";
// var num = 7;

// function joinlist (num){
//     var str = "";
//     for (var j = 1; j <= i; j++) {
//     if (j === i) {
//         str += j;
//     }  else {
//         str += j + ", ";
//     }    
// }
// return str
// }

// function blastoff(n){
//     var str = ''
//     for (var j = i; j >= 1; j--) {
//         if (j === 1) {
//             str += j + ", blast off";
//         }  else {
//             str += j + ", "
//         }    
//     }
//     return str
// }
// for (var i = 1; i <= num; i+=3) {
   
//    result += i + " " +  blastoff(num) + "\n";
// }
// console.log(result)

// var name = "janhaIris fermin"
// name = name.split("")
// console.log(name[0].toUpperCase())

// var str = ""
// for(var i = 0; i < name.length; i++){
//     if(i === 0){
//         str += name[0].toUpperCase() 
//     } else {
//         str += name[i].toLowerCase()
//     }
// }
// console.log(str)

//console.log(name[0].toUpperCase() + name.toLowerCase().slice(1))

// Janhairis

// function DrEvil(amount){
//  return amount + " dollars " + "(pinky)" 
// }
// console.log(DrEvil(100000))

// function verbing(string){
//     for(var i = 0; i < string.length; i++){ 
//     if(string.slice(-3) === "ing"){
//         return string + "ly"
//     }else if(string.length >= 3){
//         return string + "ing"
//     }else {
//         return string
//     }
//     }
// }
// console.log(verbing("Janing"))

// function getInItString(string){
//    return string - string.slice(-1)
// }
// console.log(getInItString("Jan"))

// function getInItString(string){
// return string.substring(0, string.length -1) 
// }
// console.log(getInItString("Jan"))

// function mixUp(str1, str2) {
// var first2 = str1.substring(0,2)
// var other2= str2.substring(0,2) 
//  return other2 + str1.slice(2) + " " + first2 + str2.slice(2) 
// }
// console.log(mixUp("mine", "power"))
// //console.log(str1)

// function capsLast(string){
//     return string.substring(0, string.length -1) + string.slice(-1).toUpperCase()
//     }
// console.log(capsLast("Janhairis"))




 


// function XO (string){
//     var count = 0
//     var sstring = string.toLowerCase()
//     for (var i = 0; i<= string.length; i ++){
//     if(sstring[i] === 'x'){
//         count ++
//     }
//     else if(sstring[i] === 'o'){
//         count --
//     }
//     }
//     return count === 0
// }
// console.log(XO('xXoO'))

//  function countVowels(string){
//     var vowelCount = 0
//     for (var i = 0; i <= string.length; i+=1) {
//         if('aeiou'.includes(string[i])){
//             vowelCount += 1
//         }
//     }
//         return vowelCount

// }
// console.log(countVowels("Janhairis says hi"))


// function isPalindrome(string){
//     var string = string.toLowerCase()
//     var lastElem = string.length -1 
//     var backwards = ""
//         while (lastElem >= 0){
//             backwards += string[lastElem]
//             lastElem --
//         }
//         return backwards === string
//     }    
// console.log(isPalindrome("EYe"))



// function myIncludes(string, letter) {
//   for(var i = 0; i <= string.length; i+=1) {
//       if(string[i]=== letter){
//           return true
//       }
// }
// return false

// }
// console.log(myIncludes("janhairis", "z"))

// function mySubString(string, num1, num2){
//     return string.substring(num1, num2)
// }
// console.log(mySubString("giraffe", 8, 2 ))

// function makeTriangle(num) {
//    var triangle = ""; 
//     for (var i = 1; i <= num; i++) {
//         for (var j = 1; j <= i; j++) {
//             triangle += "#";
//         }
//         if (i === num){
//             return triangle
//         }
//         triangle += "\n";
//     }
//     return triangle;
// }
// console.log(makeTriangle(5))


//Authored by Jan

