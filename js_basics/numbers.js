let num1 = 5, num2 = 10.5;

console.log(num1); //5
console.log(num2); //10.5


console.log(num1 + num2); // 15.5
console.log(num1 * num2); // 52.5
console.log(num1 - num2); // -5.5


let a = 2, b = 5, c = "10", d= "20";
console.log(a + b); //7
console.log(c + d); //"1020" because it is a string concetantion
console.log(d / a); //10 

//NaN operator - Not a Number operator
console.log(NaN); // NaN
console.log(typeof NaN); // number

console.log("  " * 5); //0 empty string multiplied by number is a 0
console.log("" * 5); //0
console.log("Hello" * 5); //NaN
console.log("Hello" + NaN); //HelloNaN

console.log( 0 / 0); //NaN
console.log(0 / 5); //0
console.log(5 / 0); // Infinity

//Infinity & -Infinity
console.log(Infinity); //Infinity
console.log(-Infinity); //-Infinity
console.log(typeof Infinity);  //number
console.log(typeof -Infinity);  //number
console.log(Infinity + Infinity); // Infinity
console.log(Infinity - Infinity); //NaN


//isNaN() function
console.log(isNaN(5)); //false
console.log(isNaN(10.5)); //false
console.log(!isNaN(5)); //true (because ! is not NaN)
console.log(isNaN("Hello")); //true 

console.log(isNaN(true)); //false (because it is booleng)
console.log(isNaN(true + 5)); // true is converted to 1 so then + 5 = 6 therefore it is false


let number = new Number(20); //this allocates more memory to store the data
console.log(typeof number) // therefore it will store it as an object



//BigInt
let i1 = 12345678901234567890;
let i2 = 12345678901234567890n; // n is used for big integer
let i3 = BigInt(12345678901234567890n);
let i4 = 1;
console.log(i1); // 12345678901234567000 (not accurate)
console.log(i2); //12345678901234567890n
console.log(i3); //12345678901234567890n
//console.log(i2 + i4);  arithmetic between a Number and a BigInt is not allowed (type conversion required).
console.log(i2 + BigInt(i4)); // 12345678901234567891n



