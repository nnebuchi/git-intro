const names = ["Lovelace", "Newton", "Einstein", "Archimedes", "Galileo", "Mendel"]
/*Array.array.forEach(element {
    code that applies instance
});*/

names.forEach(function(name){
    console.log("I love the works of "+name);
})


const users = [
    {id:"2", username:"john", age:"30"},
    {id:"3", username:"great", age:"22"},
    {id:"1", username:"maxwell", age:"24"},
    {id:"7", username:"buchess", age:"31"},
]

users.forEach(function(user){
    console.log(user.username +" is "+user.age+" years old")
})

const strings = ["wow", "People", "mansion"]
// write a forEach loop  to print each element in uppercase
/*strings.forEach(function(string){
    console.log(string.toUpperCase() );
})*/
function str(strings) {
    strings.forEach(function(string){
        console.log(string.toUpperCase() );
    })
}

const numbers = [1, 2, 3, 4, 5]
// write a forEach loop that calculates the square of each number and prints the result.
/*numbers.forEach(function(number){
    console.log(number**2);
})*/
function num(numbers) {
    numbers.forEach(function(number){
        console.log(number**2);
    })
}

const things = ["apple", "banana", "orange"]
//  write a forEach loop that adds a greeting "Hello, " before each name and prints the result.
/*things.forEach(function(thing){
    console.log("Hello " +thing+ " i would love to eat you for breakfast");
})*/

//create function for each of the task given

function forEachLoop(things) {
    things.forEach(function(thing){
        console.log("Hello " +thing+ " i would love to eat you for breakfast");
    })
}