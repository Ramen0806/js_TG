

/*
Write a function called product which takes 2 numbers and returns their product
product(3, 5)   -> 15
product(2, 0)   -> 0
product(4, 3)   -> 12
*/


function product1(a, b) {
    return a * b;
}

console.log(product1(3, 5));
console.log(product1(2, 0));
console.log(product1(4, 3));



const product2 = function (a, b) { return a * b };

console.log(product2(3, 5));
console.log(product2(2, 0));
console.log(product2(4, 3));


const product3 = (a, b) => a * b;

console.log(product3(3, 5));
console.log(product3(2, 0));
console.log(product3(4, 3));



/*
Write a function named as fizzBuzz that takes one number argument and
Outputs 'Fizz' if the number is divisible by 3
Outputs 'Buzz' if the number is divisible by 5
Outputs 'FizzBuzz' if the number is divisible by both 3 and 5
Outputs the number itself if it is not divisible by both 3 and 5

fizzBuzz(3)         -> 'Fizz'
fizzBuzz(10)        -> 'Buzz'
fizzBuzz(45)        -> 'FizzBuzz'
fizzBuzz(2)         -> '2'
*/



const fizzBuzz2 = function (number) {

    if (number % 15 === 0) console.log("FizzBuzz");
    else if (number % 3 === 0) console.log("Fizz")
    else if (number % 5 === 0) console.log('Buzz')
    else console.log(number);
};
console.log(fizzBuzz2(3));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(45));
console.log(fizzBuzz2(2));



const fizzBuzz3 = number => {
    if (number % 15 === 0) console.log("FizzBuzz");
    else if (number % 3 === 0) console.log("Fizz");
    else if (number % 5 === 0) console.log('Buzz');
    else console.log(number);
};


console.log(fizzBuzz3(3));
console.log(fizzBuzz3(10));
console.log(fizzBuzz3(45));
console.log(fizzBuzz3(2));

/*
Write a functionn named as greeting that outputs 'Hello'
*/


function greeting1 () {
    console.log('Hello');
}

greeting1();

const greeting2 = function () {
    console.log("Hello");
}

greeting2();

const greeting3 = () => console.log("Hello")

greeting3();

console.log(typeof fizzBuzz3);


