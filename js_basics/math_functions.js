 //Math Object Functions:

 let num1 = 5, num2 = 10, num3 = 7, num4 = -5, num5 = -8

 //-8, -5, 5, 7, 10


let maxNumber = Math.max(num1, num2, num3, num4, num5);
let minNumber = Math.min(num1, num2, num3, num4, num5);
console.log(maxNumber);//10
console.log(minNumber);//-8
console.log(Math.max(num1, num2, num3, num4, num5)); //10
console.log(Math.min(num1, num2, num3, num4, num5)); //-8

 //Math Properties
 console.log(Math.PI); //3.141592653589793

 //Math.min() & Math.Max()
 console.log(Math.min(2, 5)); //2
 console.log(Math.min(2, 5, -10)); //-10

//Math.abs() [absolute value]
console.log(Math.abs(num4)); //5
console.log(Math.abs(num5)); //8

console.log(Math.abs(num1 - num2)); // 5
console.log(Math.abs(num1 * num5 - num4)); // 5* (-8) - (-5) 


//Math.ceil, Math.floor, Math.round, Math.trunc [Rounding Numbers] 
console.log(Math.ceil(5.11));6
console.log(Math.ceil(5.99));6
console.log(Math.floor(5.11));5
console.log(Math.floor(5.99));5
console.log(Math.round(5.11));5
console.log(Math.round(5.99));6
console.log(Math.round(5.50));6
console.log(Math.round(5.49));5
console.log(Math.trunc(5.11));5
console.log(Math.trunc(5.99));5

//Math.pow 
console.log(2 ** 5); //32
console.log(Math.pow(2, 5)); //32
console.log(Math.pow(3, 2)); //9
console.log(3 ** 2); //9

//Square root
console.log(Math.sqrt(64)); //8

//Math.random()
console.log(Math.random()); //0 to 0.9999999999..
console.log(Math.random()); //0 to 0.9999999999..
console.log(Math.random()); //0 to 0.9999999999..
console.log(Math.random()); //0 to 0.9999999999..
console.log(Math.random()); //0 to 0.9999999999..
console.log(Math.random()); //0 to 0.9999999999..

//Find a random number between 1 and 10 (both included)

console.log(Math.ceil(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 included)
console.log(Math.ceil(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 included)
console.log(Math.ceil(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 included)
console.log(Math.ceil(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 included)
console.log(Math.ceil(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 included)
console.log(Math.ceil(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 included)
console.log(Math.ceil(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 included)
console.log(Math.ceil(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 included)
console.log(Math.ceil(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 included)
console.log(Math.ceil(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 included)
console.log(Math.ceil(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 included)
console.log(Math.ceil(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 included)

console.log(Math.floor(Math.random() * 10));// Random decimal number between 0 and 10 (0 included but 10 excluded)


//Homework for tmw: come up with a way to generate random number between 10 and 20 (both included)
console.log(Math.floor(Math.random() * 11) + 10);
console.log(Math.ceil(Math.random() * 11) + 9); //Alternative way to generate random number between 10 and 20
console.log(Math.round(Math.random() * 10) + 10); //Alternative way to generate random number between 10 and 20 but with less oppourtiny to be displayed

//Homework for tmw: come up with a way to generate random number between x and y (both included)
//Math.floor(Math.random() * (y - x +1) + x
//Math.ceil(Math.random() * (y - x +1) + (x-1)

