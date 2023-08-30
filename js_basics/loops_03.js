


/*
Write a program that outputs numbers from 1 to 30 (both inclusive )
*/

for (let i = 1; i <= 30; i++) {
    console.log(i);
}



/*
Write a program that outputs numbers from 1 to 30 (both inclusive )
If number is divisible by 3 then print out "Fizz" instead of number
If number is divisible by 5 then print out "Buzz" instead of number
If number is divisible by 3 & 5 then print out "FizzBuzz" instead of number
(i % 3 === 0 && i % 5 === 0) => (i % 15 === 0 )

*/

for (let i = 1; i <= 30; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

}

const arr = [3, 4, 5, 6, 7];

let count = 0;

for(const number of arr){
    if (number > 5 ) count++;
}

console.log(count);

function more5(arr) {
    let count = 0; 
    
    for (const number of arr){
        if (number > 5 ) count++;
    }
    return count;
}

console.log(more5([3, 4, 5, 6, 7]));











