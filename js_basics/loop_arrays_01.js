


const names = ['John', 'Max', 'Alex', 'Jane'];

for (let name of names) {
    console.log(name);
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}

for (let name of names) {
    uppercaseName = name.toUpperCase()
    console.log(uppercaseName);
}


/*
Assume you are given an array that stores numbers
count how many positive numbers are in the array -> 4 
count how many negative numbers are in the array -> 3
count how many netural numbers are in the array -> 3
count how many even numbers are in the array  -> 7
count how many odd numbers are in the array -> 3
numbers divisible by __ ->
print each number multiplied by 5
*/

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0]

let count = 0;

for (const number of numbers) {
    if (number > 0) {
        count++;
    }
}
console.log(count);

let countEven = 0
for (const number of numbers) {
    if (number % 2 === 0) {
        countEven++;
    }
}
console.log(countEven);

let countOdd = 0
for (const number of numbers) {
    if (number % 2 !== 0) {
        countOdd++;
    }
}
console.log(countOdd);


for (const number of numbers) {
    console.log(number * 5);
}


numbers.forEach(function (multipliedby5) {
    console.log(multipliedby5 * 5);
});

numbers.forEach(function multiply5 (number) {
    console.log(number * 5);
});


/*
Write a function that takes a number returns it multiplied by 5
*/


function multiply5(x) {
    return x * 5
}


console.log(multiply5(4));
