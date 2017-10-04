// console.log("bat" + "man");
// console.log(Math.max(2, 1, 4))

// var number_cats = (Math.max(2, 1, 4));
// var number_dogs = 1
// console.log("The number of animals is: " + (number_cats + number_dogs));

// var birth_year = 1996
// var futureYear = 2020
// var age = futureYear - birth_year
// console.log("I will be " + (age - 1) + " or " + age + " in " + FutureYear)

// var current_age = 10
// var max_age = 20
// var snacks_day = 2
// var snacksInAll = (snacks_day * 365) * (max_age - current_age)

// console.log("I will need " + snacksInAll + " snacks" + " to last you until the age " + max_age)

// var radius = 5
// var cir = 2 * Math.PI * radius
// console.log("The circumfrence is "+ cir )

// var area = Math.PI * Math.pow(radius, 2)
// console.log("The area is " + area)

// // C *9/5+32

// var celsius = 30
// var fahrenheit = celsius * (9/5) + 32
// console.log(celsius + '°C is ' + fahrenheit + '°F')

// // F -32 * 5/9

// var fafh = 50
// var cel = (fafh - 32) * (5/9)
// console.log(fafh + '°F is ' + cel + '°C')

// var age = 18
// var day = "Sunday"

// //console.assert(age !== undefined && typeof(age) == 'number', "please enter number")

// if( age < 21){
//     console.log("sales are not permitted")
// } else {
//     console.log("sales permitted")
// }


//Depending on age, it  alcohol sale is permitted or not
// var age = 21;
// var day = "sunday"
// day = day.toUpperCase()

/*console.assert(day === "Monday" 
                ||day === "Tuesday" 
                ||day === "Wednesday" 
                ||day === "Thursday" 
                ||day === "Friday" 
                ||day === "Saturday" 
                ||day === "Sunday",
                "should be a day of the week");
console.assert(typeof(age) === 'number', 'Variable age must be a number')*/

// if (age >= 21 && day != "Sunday") {
//     console.log("You may sell this person alcohol");
// } else {
//     console.log("You may not sell this person alcohol");
// }


// given day of month print out day of the week 
// September 2017
// var day = 21;
// var weekday = day % 7;

// switch(weekday){
//     case 1:
//         console.log("Friday")
//         break;
//     case 2:
//         console.log("Saturday")
//         break;
//     case 3:
//         console.log("Sunday")
//         break;    
//     case 4:
//         console.log("Monday")
//         break;
//     case 5:
//         console.log("Tuesday")
//         break;  
//     case 6:
//         console.log("Wednesday")
//         break;  
//     case 0:
//         console.log("Thursday")
//         break;
     
// }


// var numGrade = 50

// if (numGrade > 90){
//     console.log("A")
// } else if (numGrade >= 80) {
//     console.log("B")
// } else if(numGrade >= 70){
//     console.log("C")
// } else if(numGrade >= 60){
//     console.log("D")
// } else {
//     console.log("F")
// }
// var num = 2
// var animal = 'cat'

// if (num === 1 || animal === 'sheep' ) {
// console.log(num + ' ' + animal)
// } else if (animal === 'geese') {
//  console.log(num +" " + animal)
// } else {
// console.log(num + ' ' + animal + 's')
// }

// var num = -1

// if (num > 0){
//     console.log("positive")
// } else if (num < 0) {
//     console.log("negative")
// } else {
//     console.log("equal to 0")
// }

// function double (num){
//     return num * 3
// }
// console.log(double(10))

// var num = 2

// function inGlobal(){
//     num += 1
// }
// inGlobal()
// console.log(num)
// inGlobal()
// console.log(num)

// function localnum(){
//     var local =2 
//     local += 10
//     return local
// }
// console.log(localnum())
// console.log(localnum())

// function add_num(num1, num2){
// if(typeof(num1) != "number" || typeof(num2) != "number"){
//         return "Only numbers please"
// //
// }
//     return num1 + num2
// }
// console.log(add_num(2,"cat"))

// function largest_num(num1, num2){
//     if(num1 > num2){
//         return (num1 + " is greater")
//     } 
//     return (num2 + " is either greater or equal to the first number")
// }

// console.log(largest_num(6,4))

// function power (num) {
//     return Math.pow(num, 3)
// }
// console.log(power(5))

// function getDogAge(humanYear){
//     return  humanYear * 7
// }
// console.log(getDogAge(8))
// var rad = 3
// function calcCircumfrence(rad){
//     return  (2* Math.PI * rad)
// }
// //console.log(calcCircumfrence(3))
// function calcArea(rad) {
//     return  (Math.PI* (Math.pow(rad,2)))
// }
// function circleProps(rad){
//     console.log("The circumfrence is " + calcCircumfrence(rad))
//     console.log("The area is " + calcArea(rad))
    
// }
// circleProps(rad)

// // C *9/5+32

// var celsius = 30
// var fahrenheit = celsius * (9/5) + 32
// console.log(celsius + '°C is ' + fahrenheit + '°F')

// // F -32 * 5/9

// var fafh = 50
// var cel = (fafh - 32) * (5/9)
// console.log(fafh + '°F is ' + cel + '°C')

//***// var temp = 50
// var string = ""
// var fahrenheit = temp * (9/5) + 32
// var celcius = (temp - 32) * (5/9)
// function celciusToFahrenheit(temp){
//     return temp + "°C " + "is " + fahrenheit + "°F "
// }
// function fahrenheitToCelcius(temp){
//     return temp + "°F " + "is " + celcius + "°C"
// }
// function convertTemp(temp, string){
//     if(string === "C"){
//         return fahrenheitToCelcius(temp)
//     } else if( string === "F") {
//         return celciusToFahrenheit(temp)
//     }
// }
// console.log(celciusToFahrenheit(temp))
// console.log(fahrenheitToCelcius(temp))
// console.log(convertTemp(temp))
// var temp = 90
// var fahrenheit = temp * (9/5) + 32
// var celcius = (temp - 32) * (5/9)
// function celciusToFahrenheit(temp){
//     return temp + "°C " + "is " + fahrenheit + "°F "
// }
// function fahrenheitToCelcius(temp){
//     return temp + "°F " + "is " + celcius + "°C"
// }
// function convertTemp(temp, unit){
//     if(unit === "C"){
//         return fahrenheitToCelcius(temp)
//     } else if (unit === "F"){
//         return celciusToFahrenheit(temp)
//     } else {
//         return "temp unit not given"
//     }
// }
// console.log(convertTemp(temp, "C"))

// function square(num) {
//     return num * num
// }
// function half(num) {
//     return num / 2
// } 
// function percentOf(num1, num2) {
//     var percentage = (num1 / num2) * 100
//     return num1 + ' is ' + percentage.toFixed(2) + '% of ' + num2
// }
// function areaOfCircle(rad) {
//     return (Math.PI * (rad * rad)).toFixed(2)
// }
// function doStuff(num) {
//     var squareNum = square(num);
//     var halfSquareNum = half(squareNum)
//     var area = areaOfCircle(halfSquareNum)
//     return percentOf(squareNum, area)
// }

// console.log(doStuff(3))


