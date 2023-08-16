

//Ternary operator ? = if || else = :

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

let num = -10;

if(num % 2 === 0) console.log("EVEN");
else console.log("ODD");

num % 2 === 0 ? console.log("EVEN") : console.log("ODD")

num > 0 ? console.log("POS") : num < 0 ? console.log ("NEG") : console.log("ZERO")



/*
Assume you are given a number
print true if the number is divisible by 10
print false otherwise
10 -> true
20 -> true
30 -> true
5 -> false
8 -> false
32 -> false
*/


let number = 9;

number % 10 === 0 ? console.log("true") : console.log ("false");

console.log(number % 10 === 0 );