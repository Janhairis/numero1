// //var o = {quantity: 56, name: "gala"}

// var apples =[ 
//  {quantity: 56, name: "gala"},
//  {quantity: 99, name: "granny smith"},
//  {quantity: 1, name: "pink del"}
// ]
// //console.log(o.quantity)

// function howManyApples (a) {
//     var total = 0
//     for (var i = 0; i < a.lexgth; i++){
//         total += a[i].quantity
    
//     }
//     return total

// }
// console.log("number of apples", howManyApples(a))

// var rooms = [
//     {
//         price: 200,
//         location: "11 broadway, ny",
//         occupants: 3, 
//         amenities:["washer/dryer", "wifi"]
//     },
//     {
//         price: 100,
//         location: "11 Delancy, ny",
//         occupants: 1, 
//         amenities:[]
//     },
//     {
//         price: 2000,
//         location: "11 park pl, ny",
//         occupants: 2, 
//         amenities:["washer/dryer", "pool", "valet"]
//     }
// ] ;
// //make str as long as length
// function padTo (str,len){
//     if(str.length > len){
//         return str.slice(0, len - 3) + "..."
//     }
//     // else if(str.length === len){
//     //    return str 

//     // } else {
//     //     // var spacesNeeded = len - str.length
//     //     // for (var i = 0; i < spacesNeeded; i++) {
//     //         while(str.length < len) {
//     //         str += " ";
//     //     }
//     //     return str
//     // }
// }

// function padLeft (str,len){
//     var money = "$" + str
//     if(money.length > len){
//         return str.slice(0, len - 3) + "..."
//     } else {
//         while(money.length < len) {
//             money = " " + money;
//         }
//         return money
//     }
// }
// // function toMoney(num){

// // }

// function whatsAvailable(rooms){
//     for(var i = 0; i < rooms.length; i++){
//        console.log(
//         padTo(rooms[i].location, 20) +
//         " " + 
//         padLeft(rooms[i].price.toString(), 8));
//     }
   
// }
// whatsAvailable(rooms);



// var person = [
//   {
//     firstName: 'Erika',
//     lastName: 'Kim',
//     age: 25
//   },
//   {
//     firstName: 'katy',
//     lastName: 'love',
//     age: 25
//   }
// ]

// var myRecipe = 
// {
//     title: 'oreo truffles',
//     servings: 1,
//     ingredients: ['Oreos', 'Cream Cheese', 'melted chocolate']
// }

// function recipeLog(myRecipe){
//     for( var key in myRecipe){
//          if(key === 'ingredients'){
//             console.log(key + ": " + myRecipe[key].join(" > "));
//         } else {
//         console.log(key + ': ' + myRecipe[key]);
//         }
//      }
// }
// recipeLog(myRecipe)


// var recipe = {
//     name: 'Omelette',
//     servings: 2,
//     ingredients: ['eggs', 'salt', 'pepper', 'onion', 'tomato', 'mushroom']
//     }
    
//     function prettyLog(recipe) {
//           console.log('Name:' + ' ' + recipe.name + '\n' +
//             'Servings:' + ' ' +recipe.servings + '\n' +
//             'Ingredients:' + ' ' +recipe.ingredients.join(' > '))
//     }
    
//     prettyLog(recipe)


// var cat = 
// {
//     family: 'felidae',
//     genus: 'felis',
//     species: ['catus', 'bob']
// }

// // function getProps(cat){
// //     var array = []
// //     for( var key in cat){
// //             array.push(key);
// //     }
// //     return array
// // }
// // console.log(getProps(cat))

// function getObjLength(cat){
//     var numberOfProp = 0
//     for( var key in cat){
//         numberOfProp ++
        
//     } 
//     return numberOfProp;
// }
// console.log(getObjLength(cat))


// var films = [
//     {
//       name: 'Psycho',
//       director: 'Alfred Hitchcock',
//       watched: false
//     },
//     {
//       name: 'Citizen Kane',
//       director: 'Orson Welles',
//       watched: false
//     },
//     {
//       name: 'Wonder Woman',
//       director: 'Bryan Singer',
//       watched: true
//     }
//   ]

//  function arrayOfFIlms(films){
// //     for(var i = 0; i < films.length; i++){
// //         var nameAndDirector = films[i].name + ", directed by " + films[i].director + "."
// //          if(films[i].watched === true){
// //              console.log("You already watched " + nameAndDirector)
// //          }
// //          else {
//               console.log(films[0].name )
// //          }
// //     }
//  }
//  arrayOfFIlms(films)



// function arrayFilms(filmsArray) {
//     for( var i = 0; i < filmsArray.length; i++) {
//     //console.log(filmsArray[i].title + ", driected by " + filmsArray[i].director)
//     // first part
    
//     if(filmsArray[i].watched === true){
//     console.log("You already watched " + filmsArray[i].title + " by " + filmsArray[i].director)
//     } else {
//     console.log("You still need to watch" + filmsArray[i].title + " by " + filmsArray[i].director)
//     }
//     }
//     }
//     arrayFilms(filmsArray)




//  function adds(task, completed){
//     var listTodo = {
//     task: task,
//     completed: completed
//     }
//         todos.push(listTodo)
// }
// function showalltodos () {
//     for (var i = 0; i < todos.length; i++){
//         return todos[i]
//     }
// }
// function completes(index){
//     todos[index].completed = true
// }
// var list = { task: 'study loops', completed: true}
// var list2 = { task: 'take care of boys', completed: false}
// var todos = [list, list2]

//  function adds(task, completed){
//     var listTodo = {
//     task: task,
//     completed: completed
//     }
//         todos.push(listTodo)
// }
// function checkToDo(todos,number){
//     for( var key in todos) {
//     if (number > todos.length - 1){
//         console.log('Index does not exist')
//     }
//     else if (todos[number].completed === false){
//         todos[number].completed = true 
//         console.log(todos[key])
//     }
//     else {
//         console.log(todos[key])
//     }
// }
// }

// checkToDo(adds('walk dog', true))
// checkToDo(todos, 2)

 //console.log(todos)
