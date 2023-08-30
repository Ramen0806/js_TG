
// Write a code that outputs "Hello" to the console 5 times




for (let i = 0; i < 5; i++) {
    console.log(i);
}


/*
Write a code that outputs numbers from 5 to 25
start: 5
termination: 25
update: ++ (increment)
*/
for (let i = 5; i < 26; i++) {
    console.log(i);
}


/*
Write program that outputs number between 15 to 1 in descending order
start: 15
termination: 1
update: -- (decrement)
*/

for (let i = 15; i >= 1; i--) {
    console.log(i);
}

/*
Write a program that outputs only even numbers from 0 to 10 (0 and 10 are included)
        Expected output:
        0
        2
        4
        6
        8
        10
*/


for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Easiest one 
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

//Way to impress interviewer, more creative

for (let i = 0; i <= 5; i++) {
    console.log(i * 2);
}


//For odd numbers between 0 and 10

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


/*

Write a program to check numbers from 1 to 50 (both included) and output all the numbers that can be divided by 5 

*/


for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

for (let i = 0; i < 25; i++) {
    if (i % 5 === 0) {
        console.log("YOUR MOM")
    }
}

/*
Find sum of the numbers from 1 to 5 (both inclusive) -> 15
*/

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);


/*
Find sum of the numbers from 10 to 15 (both inclusive) -> 75
*/

let newSum = 0

for (let i = 10; i <= 15; i++) {
    newSum += i;
}
console.log(newSum);


