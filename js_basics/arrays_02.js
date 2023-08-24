/*
TASK
Create an array named as names to store below data
Yulia
Alex
Bali
Igor
Ramez
Aziz

Retrieve and print Igor
Retrieve and print Aziz as AZIZ
*/

const names = ["Yulia", "Alex","Bali", "Igor", "Ramez", "Aziz"];
console.log(names[3]); //Igor
console.log(names[5].toUpperCase()); //AZIZ
console.log(names[names.length -1].toUpperCase()); //AZIZ

//How to get size of an array
//use length property
console.log(names.length); //6


/*
TASK 
Generate 5 random numbers between 1 and 10 (both inclusive)
store them in an array named Random numbers
Find firtst and last element from the array
Calculate and return their average

*/

let n1 =  Math.floor(Math.random() * (10)) + 1;
let n2 =  Math.floor(Math.random() * (10)) + 1;
let n3 =  Math.floor(Math.random() * (10)) + 1;
let n4 =  Math.floor(Math.random() * (10)) + 1;
let n5 =  Math.floor(Math.random() * (10)) + 1;

const random_Numbers = [n1, n2, n3, n4, n5];
let firstElement = random_Numbers[0];
let lastElement = random_Numbers[random_Numbers.length-1];
console.log(`The first element is ${firstElement} and the last element is ${lastElement}`);
console.log(`The average is ${((firstElement + lastElement) / 2)}`);

///////////////////////////////////////////////////
//You can also create an array using this method

const names2 = new Array("Ramez", "Igor", "Bali"); 

////////////////////////////////////////////////////







