

function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}


/*
Write a code that generates a random number between 0 and 6 (both inclusive)
0 represents Sunday, 1 represents Monday, 2 represents... 6 represents Saturday
Print "WEEKEND" if number is 0 or 6
Print "WEEKDAY" if number is 1-5 
*/



let day1 = getRandomNumber(0, 6);

console.log(num1);

if (day1 === 0 || day1 === 6){
    console.log("WEEKEND");
}

else {
    console.log("WEEKDAY");
}

let day2 = getRandomNumber(0,6);

console.log(day2);

if (day2 === 0 ) {
    console.log("WEEKEND");
}

else if (day2 === 6) {
    console.log("WEEKEND")
}

else {
    console.log("WEEKDAY")
}


let day3 = getRandomNumber(0,6)

if (day3 !== 0 && day3 !== 6){
    console.log("WEEKDAY");
}

else {
    console.log("WEEKDAY")
}

if (day3 > 0 && day < 6){
    console.log("WEEKDAY")
}

else {
    console.log("WEEKEND")
}
