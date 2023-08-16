

/*
Generate a random number between 0 and 1 both inclusive
Print "The number is ZERO" if the generated is zero.
Print "The number is ONE" if the generated is one.
*/


function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
let num = getRandomNumber(0, 1);

if (num === 1) {
    console.log("The number is ONE");
}

else {
    console.log("The number is ZERO");
}
 


/*
Generate a random number between 1 and 10 both inclusive
Print "The number is EVEN" if the generated is EVEN.
Print "The number is ODD" if the generated is odd.
*/

let num2= getRandomNumber(1, 10);

console.log("The number is = " + num2);

if (num2 % 2 === 0) {
 console.log("The number is EVEN");
}

else {
    console.log("The number is ODD");
}


/*
Generate a random number between -2 and 2 both inclusive
Print "The number is Positive" if the generated is Positive.
Print "The number is ODD" if the generated is odd.
*/

num3 = getRandomNumber(-2, 2);

console.log("The number is = " + num3);

if (num3 > 0){
    console.log("The number is POSITIVE");
}

else if (num3 < 0){
    console.log("The number is NEGATIVE");
}

else {
    console.log("The number is ZERO");
}





if(""){
    console.log("Hello");
}
else {
    console.log("HOLA!");
 } //falsly

 if("abc"){
    console.log("Hello");
}
else {
    console.log("HOLA!");
 } //truthy

 if(null){
    console.log("Hello");
}
else {
    console.log("HOLA!");
 } //falsly

 if(undefined){
    console.log("Hello");
}
else {
    console.log("HOLA!");
 } //falsly

 if(NaN){
    console.log("Hello");
}
else {
    console.log("HOLA!");
 }  //falsly

 