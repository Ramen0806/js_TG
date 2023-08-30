


for (let i = 1; i < 10; i++) {
    console.log(i);
}

//While version of the above loop


let i = 1;

while (i < 10) {
    console.log(i);
    i++;

}


/*
 these would be an infinite loop

while (true) {
    console.log("Hello Batch 7"); 
}


while (1 === 1) {
     console.log("Hello Batch 7"); 

}
*/


let num = 1;
let countE = 0;

while (num < 10) {
    if (num % 2 === 0) countE++;
    num++;
}

console.log(countE);


/*
Assume that we are playing a game and one person in the class is just writing a number on a paper and others are trying to guess the number 
NOTE: number can only be between 1 to 10 ( 1 and 10 are included)
See how many attempts it is going to take to find the number?

*/



let number = 5;

let randomNumber = Math.floor(Math.random() * (10)) + 1;

let attempts = 1;

while (number !== randomNumber) {
    console.log(randomNumber);
    randomNumber = Math.floor(Math.random() * (10)) + 1;


    attempts++;

}

console.log(`The random number is finally ${randomNumber} and it is fthe number we  are looking for and it took ${attempts} time/s to generate it`)



/*
Generate a random number between 1 to 50 (both inclusive) continue generating until you get a random number divisble by 10.

*/


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let randomNumber$ = getRandomNumber(1, 50);
let countD = 0

while(randomNumber$ % 10 !== 0) {
    console.log(randomNumber$);
    randomNumber$ = getRandomNumber(1, 50);
    countD++

}
console.log(`The random number is ${randomNumber$} and it took ${countD} time/s to generate it`)

let ranNum;
let att = 0;

while( ranNum % 10 !== 0 ) {
    ranNum = Math.ceil(Math.random() * 50);
    att++;
    console.log(ranNum);
}

console.log(`Above random generator got the ${ranNum} finally after ${att} time/s`)

//Doing it using a for loop

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber_$;
let attempts$;

for (attempts$ = 1; ; attempts$++) {
    randomNumber_$ = getRandomNumber(1, 50);
    if (randomNumber_$ % 10 === 0) {
        break;
    }
}

console.log(`The random number is ${randomNumber_$} and it took ${attempts$} attempt/s to generate it.`);


