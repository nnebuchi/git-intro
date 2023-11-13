//write a for loop that prints the even numbers from one to ten
for (let i = 1; i <= 10; i++){
    console.log(i+' is a number from one to ten');
}
    
//write a forEach loop that prints double value forEach the element in an array
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(function(number){
    console.log(number*2);
})

/*write a for loop that iterate(i) through the array below and prints the sum of each value pair in the array

const nums[
    {initial:"23", final:"24"},
    {initial:"22.4", final:"22.6"},
    {initial: "23.7", final: "24.2"},
    {initial: "22.8", final: "23.1"},
]
*/

const nums =[
    {initial:"23", final:"24"},
    {initial:"22.4", final:"22.6"},
    {initial: "23.7", final: "24.2"},
    {initial: "22.8", final: "23.1"},
];
for (let i = 0; i < nums.length; i++){
    console.log(nums[i].initial+nums[i].final);
}
//write an forEach loop that prints the sum of the age and height of each user in the array below

const users =[
    {username: "Bright", age: 45, height: 4.3},
    {username: "John", age: 32, height: 6.0},
    {username: "Emma", age: 27, height: 5.5},
    {username: "Alex", age: 50, height: 5.9},
]
users.forEach(function(user){
    console.log(user.age+user.height +" is the sum of age and height of each user");
})

//write a while loop that prints the odd numbers from 3 to 20

let number = 4;

while (number <= 20) {
  console.log(number);
  number += 2; // Increment by 2 to skip even numbers
}