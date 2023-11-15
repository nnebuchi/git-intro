
/*for (let i = starting_point; i <= endpoint; increment){
    // code goes here
}


for (let i = 2; i <= 20; i+=3){
    console.log(i+" is a number between 1 and 20");
}
*/
//using for loop, interate through the aray below and print the scores of each student
const students = [
    {name:"Ali", score:30},
    {name:"Bala", score: 50},
    {name:"Ade", score: 64},
];

for (let i = 0; i < students.length; i++){
    console.log(students[i].name+' scored '+students[i].score+" marks")
}

for (let i = 0; i < students.length; i++){
    console.log(`${students[i].name} scored ${students[i].score} marks`)
}
// solution

/*
a+=3
a = a+3
a--
a= a-1


a-=3
*/