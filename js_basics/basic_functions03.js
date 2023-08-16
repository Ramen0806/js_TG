

/*
Write a function called isPositive that takes an argument and returns true if the arg is positive and false otherwise.
*/


function isPositive(a){
    return a > 0;
}

console.log(isPositive(4)); //true
console.log(isPositive(-12));//false
console.log(isPositive(0));//false
console.log(isPositive(42));//true

/*
Write a function called isNegative that takes an argument and returns true if the arg is negatice and false otherwise.
*/

function isNegative(a){
    return a < 0;
}

console.log(isNegative(4)); //false
console.log(isNegative(-12));//true
console.log(isNegative(0));//false
console.log(isNegative(42));//false



/*
Write a function called getFirstChar that takes an argument and returns the first character from the argument
*/

function getFirstChar(a){
    return a.charAt(0);
}

console.log(getFirstChar("Hello")); //H
console.log(getFirstChar("12345")); //1
console.log(getFirstChar(""));  //Empty
console.log(getFirstChar("  ")); //Empty

function getFirstChar2(a){
    return a[0];
}
console.log(getFirstChar2("Hello")); //H
console.log(getFirstChar2("12345")); //1
console.log(getFirstChar2("")); //undefined
console.log(getFirstChar2("  ")); // Empty


/*
write a function called getFirstLastChar that takes an argument and returns the first and last character from the argument
*/

function getFirstLastChar(b){
    return b[0] +b[b.length - 1];

}
console.log(getFirstLastChar("Hello")); //H0
console.log(getFirstLastChar("12345")); //15
console.log(getFirstLastChar("")); //NaN -- because first character is undefined and last character is undefined
console.log(getFirstLastChar("  ")); //Empty
console.log(getFirstLastChar("a")); //aa -- because first character is a and last character is a

//Write a function called getRandomNumber that takes 2 arguments and returns a random number between both of them (both inclusive)

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
console.log(getRandomNumber(5,10)); //5-10
console.log(getRandomNumber(50,100)); //50-100
console.log(getRandomNumber(3,5)); //3-5
console.log(getRandomNumber(0,1)); //0-1


//HMW - Write a function called average5 that takes 5 argyments and returns their average.
function  average5(a, b, c, d, e){
    return (a + b + c + d + e) / 5
}

console.log(average5(1, 2, 3, 4, 5)); //3
console.log(average5(3, 7, 10, 5, 5)); //6