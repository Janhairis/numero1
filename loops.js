// var num = 1
// while(num <= 10){
//     console.log(num)
//     num += 1
// } 
// // while loop, for loop
//     //var num = 0 (global var) inside for loop no var 
// for(var num = 0; num <= 10; num +=1){
//     console.log(num)
// }

// var num = 8
// function multiples(num){
//         for(var i = 1; i <= num; i++){
//                 console.log(i * 9)
//         }
//     }
// multiples(num)



// var num = 6
// function descending(num){
//     for(var i = num ; i >= 1; i --){
//         console.log(i)
// }
// }
// descending(num) 

//var score = 80
//  function assignGrade(score) {
//     if (score > 90) {
//         return 'A'
//     } else if (score > 80) {
//         return 'B'
//     } else if (score > 70) {
//         return 'C'
//     } else if (score > 65) {
//         return 'D'
//     } else {
//         return 'F'
//     }
// }


//     var i = 81
//         while(i <= 90) {
//             console.log(i + "-" + assignGrade(i))
//         i += 1
//     }    


// var num = 0
// function fizzOrBuzz(num){
//     for(var num = 1; num <= 100; num++){
//         if(num % 3 === 0 && num % 5 === 0 ){
//             console.log("FizzBuzz")
//         }else if(num % 3 === 0){
//             console.log("Fizz")
//         } else if(num % 5 === 0){
//             console.log("Buzz") 
//         }else {
//             console.log(num)
//         }
//     }
// }
//   fizzOrBuzz(num)




//     function fizzOrBuzz(){
//         for(var i = 1; i <= 100; i++){
//         if(i % 3 === 0){
//                 console.log("Fizz")
//         } else if(i % 5 === 0){
//             console.log("Buzz")
//         } else {
//                 console.log(i)
//             }
//         }
//     }
// fizzOrBuzz()


// function fizzOrBuzz(){
//     for(var i = 1; i <= 100; i++){
//         if(i % 3 === 0 && i % 5 === 0 ){
//             console.log("FizzBuzz")
//         }else if(i % 3 === 0){
//             console.log("Fizz")
//         } else if(i % 5 === 0){
//             console.log("Buzz")
//         }else {
//             console.log(i)
//         }
//     }
// }
// fizzOrBuzz()

// function beerSong(currentBeers) {
//     var song1 = currentBeers + " bottles of beer on the wall, \n"
//      + currentBeers + " bottles of beer.\nTake one down, pass it around, \n" 
//      + (currentBeers -1) + " bottle of beer on the wall.\n";
//      var song2 = currentBeers + " bottle of beer on the wall, \n" 
//      + currentBeers + " bottle of beer.\nTake one down, pass it around, \nNo more bottle of beer on the wall.\n";
//      var songTwo =  2 + " bottles of beer on the wall, \n" + 2 
//      + " bottles of beer.\nTake one down, pass it around, \n" 
//      + (2 -1) + " bottle of beer on the wall.\n";
//      var songOne =  1 + " bottle of beer on the wall, \n" 
//      + 1 + " bottle of beer.\nTake one down, pass it around, \nNo more bottle of beer on the wall.\n";
  
//     if (currentBeers === 1) {
//       console.log(song2);
//     } else if (currentBeers === 2) {
//       console.log(song1);
//     } else if (currentBeers ) {
//       for (var i = currentBeers; i >= 3; i--) {
//       console.log(i + " bottles of beer on the wall, \n" + i 
//       + " bottles of beer.\nTake one down, pass it around, \n" 
//       + (i -1) + " bottles of beer on the wall.\n");
//       }
//       console.log(songTwo);
//       console.log(songOne);
//     }
//   }
//   beerSong(99);

