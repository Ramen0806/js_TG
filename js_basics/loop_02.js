


/*
Write a pro
*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomNumber(10, 20);


for (let i = 1; i <= randomNumber; i++) {
    if (i % 2 !== 0) console.log(i);
}


//Print all the numbers between two random numbers in the range of 1 to 10 both inclusice ascending order
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ranNum1 = getRandomNumber(1, 10);
let ranNum2 = getRandomNumber(1, 10);

console.log(ranNum1, ranNum2);

for (let i = Math.min(ranNum1, ranNum2); i <= Math.max(ranNum1, ranNum2); i++) {
    console.log(i);
}


/*
Output each character from TechGlobal School -> 
T 
e
c
h
G
l
 o b a l   S c h o o l
*/


let school = "TechGlobal School";

for (let i = 0 ; i <= school.length - 1; i++) {
    console.log(school [i]);
}

/*
Count the total occurrences of letter o in TechGlobal School  -> 3

*/

let count = 0;

for (let i = 0; i <= school.length - 1; i++) {
   if(school[i].toLowerCase() === "o") count++;
   
}
console.log(count);