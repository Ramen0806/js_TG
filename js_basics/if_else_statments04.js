

let name ="John";

if (name[0] === "j" || name[0] === "J"){ //name.toLowerCase() [0] === "j"
    console.log("PARTY");
}
else {
    console.log("SORRY");
}

/*
Second way
let name ="John";

if (name.toLowerCase() [0] === "j"){ //name.toUpperCase() [0] === "j"
    console.log("PARTY");
}
else {
    console.log("SORRY");
}

or 
*/ 

let name2 ="John"

if (name2.toLowerCase().startsWith("j")){
    console.log("PARTY");
}
else {
    console.log("SORRY");
}

if(name2.toLowerCase().startsWith("j")) console.log("PARTY");
else console.log("SORRY"); //short version for one line of code

/*
 Write a program that gen a random number between -3 and 3 (both inclusive).

 Print them being EVEN and ODD
 Print them being POS, NEGATIVE or ZERO
 */


 function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

let randomNumber = getRandomNumber(-3, 3);
console.log(randomNumber);

if (randomNumber % 2 === 0){
    console.log("EVEN");
}

else {
    console.log("ODD");
}

if (randomNumber > 0){
    console.log("POS");
}

else if (randomNumber < 0){
console.log("NEG");
}

else {
    console.log("ZERO");
}



/*Write a function named as checkDLAge it takes an argument as an age
And returns true if the age is more than 15
returns false if the age is less than 16
EXAMPLES:
checkDLAge(10)  -> false
checkDLAge(15)  -> false
checkDLAge(16)  -> true
checkDLAge(25)  -> true
*/


function checkDLAge (age) {
    if(age > 15)  return true;
    return false;
}
console.log(checkDLAge(15)); //false
console.log(checkDLAge(16)); //true

function checkDLAge (age) {
 return age >15 ;
    return false;
}
console.log(checkDLAge(2)); //false


/*
Retirement age = 65
If the age is more than or equal to 65 -> You can be retired!
If the age is less than 65;
    calculate how many years left to retire! 
        64-> You have 1 year left to get retired!
        55 -> you have  10 years left to get retired!
        43-> you have 22 years left to get retired!

*/

let age = 48;

if (age >= 65){
    console.log("You can be retired!");
}
else if (age === 64) {
    console.log("You have 1 year left to get retired!");
}
else {
    console.log("You have " + (65 - age ) + "years left to retired!")
}



