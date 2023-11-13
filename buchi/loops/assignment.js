// 1. Write a for loop that prints the even numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0){    
        // console.log(i)
    }
    // i % 2 == 0 && console.log(i);
}

//  Write a while loop that prints the odd numbers from 3 to 20
let x = 3
while (x >=3 && x <=20) {
    if(x % 2 !== 0){
        // console.log(x);
    }
    x++;
}

// Write a forEach loop that prints the  double value of each  element in an array 
function doubleArrEle(myArray){
    myArray.forEach(function(element){
        console.log(parseFloat(element) * 2);
    });
}

// doubleArrEle(["34", 50, "21", 32])

//Write an forEach loop that prints the sum of the age  and height of each user in the array below

const users = [
    {username:"Bright", age: 45, height: 4.3},
    {username: "John", age: 32, height: 6.0},
    {username: "Emma", age: 27, height: 5.5},
    {username: "Alex", age: 50, height: 5.9}
]


users.forEach(function(user){
    const result = user.height + user.age
    // console.log(result);
})

// 5. Write a for loop that iterate through the array below and prints the sum of each value pair in the array below

const nums = [
    {initial: "23", final: "24"},
    {initial: "22.4", final: "22.6"},
    {initial: "23.7", final: "24.2"},
    {initial: 22.8, final: 23.1},
];

for (let index = 0; index < nums.length; index++) {
    const element = parseFloat(nums[index].initial) + parseFloat(nums[index].final)
    console.log(element);
}