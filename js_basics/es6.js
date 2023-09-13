

/**
 * Let and Const
 */

//reassignment

let fname = 'Alex';
const lname = 'Hunter';

fname ='Jane'; //ok
lname = 'Doe'; //error cannot reassign const variable

console.log(fname);
//console.log(lname); //error cannot reassign const variable

let num1 = 10;
const num2 = 12;

num1 = 11;
num2 = 13; //error cannot reassign const variable

console.log(num1);
//console.log(num2); //error cannot reassign const variable



//Boolean

let bool1 = false; // ok
const bool2 = false; // ok


bool1 = true; // ok
//bool2 = false; //error cannot reassign const variable



const car = {
    type: 'sport',
    year: 2008
};

car.year = 2023;

console.log(car);

car.type = "Suv";
console.log(car);



