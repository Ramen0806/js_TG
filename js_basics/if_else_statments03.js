


function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}



/*
let score = 1 point 
Random number between 1 and 100 (both inclusive)

divisble by 10 -> multiply by 6
even -> 2 * point
7 -> point * 7
3 -> 1
10 -> 6
7 -> 7 
 */

let point = 1;
let score = getRandomNumber(1, 100);

console.log(score);

if (score % 10  === 0){
    console.log(point * 6);
}
else if (score % 2 === 0){
    console.log(point * 2);
}

else if(score === 7){
    console.log(point * 7);
}

else {
    console.log(point)
}

/*
Write a code that generates a random number between 0 and 6 (both inclusive)
0 represents Sunday, 1 represents Monday, 2 represents... 6 represents Saturday
0 -> "RED"
6 -> "GREEN"
1-5 -> "BLACK"
if weekend (0 & 6) -> "VACATION"
if weekday (1-5) -> "WORK"
*/

let day = getRandomNumber(0,6);

console.log(day)

if (day === 0){
    console.log("RED")
}

else if (day === 6){
    console.log("GREEN")
}

else {
    console.log("BLACK")
}

if (day === 0 || day === 6){
    console.log("VACATION")
}

else {
    console.log("WORK")
}

//Another way

if (day === 6 ) {
    console.log("VACATION")
    console.log("GREEN")
}

else if (day === 0){
    console.log("VACATION")
    console.log("RED")
}

else {
    console.log("WORK")
    console.log("BLACK")
}

//WAY 3

if (day === 0 || day === 6) {
    console.log("VACATION")
    if (day === 6) {
        console.log("GREEN")
    }
    else {
        console.log("RED")
    }
}

else{
    console.log("WORK")
    console.log("BLACK")
}