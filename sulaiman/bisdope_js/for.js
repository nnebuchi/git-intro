/*
for (let i = 2; i <= 10; i += 2)
{
    console.log(i);
}


let number = 3;
while (number <= 20) {
    if (number % 2 !==0){
        console.log (number);
    }
    number++;
}

const numbers = [1,3,5,6,7]
numbers.forEach((element) =>{
    console.log(element*2);
});

const user=[
    {username:"Bright", age:"45", height: "4.3"},
    {username:"John", age: "45", height: "6.0"},
    {username:"Emma", age: "45", height:" 5.5"},
    {username:"Alex", age: "45", height: "5.9"},
]
user.forEach(function(user){
    console.log(user.username +" is "+user.age + " years old and " +user.height +" in height")
})
*/
const number=[
    {initial: "23", final:"24"},
    {initial:"22.4", final:"22.6"},
     {initial: "23.7", final: "24.2"},
     {initial: "22.8", final: "23.1"}
 ];
 for (let i = 0; i< number.length; i++){
    console.log(number[i].initial + number[i].final)
 }