
//Number properties
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324 
//Number is an object

console.log(Number.length); // 1

//Number functions
console.log(123 + "5") //1235
console.log(123 * "2") //246
console.log(123 + 2) //125

console.log((123).toString() + 2); //1232
console.log((123).toString() * 2); //246 

console.log((10.521).toFixed(2)); //10.52
console.log((10.521).toFixed(1)); //10.5
console.log((10.577).toFixed(2)); //10.58
console.log((10.577).toFixed(1)); //10.6
console.log((10.575).toFixed(1)); //10.6
console.log((10.574).toFixed(2)); //10.57

console.log(120000 / 52); //2307.6923076923076
console.log((120000 / 52).toFixed(0)); //2308

console.log((1.23).toPrecision(2)); // 1.2
console.log((1.12345).toPrecision(2)); // 1.12
console.log((2307.6923076923076).toPrecision(5)); //2307.7 

console.log((100.25).toFixed(1)); //100.3 //.toFixed is the most used one!
console.log((100.25).toPrecision(1)); //1e+2 //.toPrecision is not used as much

//console.log(("123.123").toFixed(1)); //.toFixed is not a function for a string



//convering other data types into numbers
console.log(true + 1); // 2  
console.log(false + 1); //1
console.log(Number(true) + 1) // 2
console.log(Number(false) + 1) //1
console.log(Number("Five") + 1); //NaN
console.log(Number("5") + 1); //6
console.log(parseInt("5") + 1); //6
console.log(("5") + 1); //51


console.log(Number("5.5") + 1); //6.5
console.log(parseInt("5.5") + 1); //6
console.log(parseFloat("5.5") + 1); //6.5

console.log(Number("Hello") + 1); //NaN
console.log(parseInt("Hello") + 1); //NaN
console.log(parseFloat("Hello") + 1); //NaN

console.log(Number("") + 1); //1
console.log(parseInt("") + 1); //NaN because space can not be converted to an integer
console.log(parseFloat("") + 1); //NaN because space can not be converted to a number


console.log(Number(true) == 1); //true
console.log(Number(true) === 1); //true
console.log(typeof Number(true)); //number
console.log(parseInt(true)) //NaN

//How to check if a number is integer or safe integer
//1, 1000, "1", "1234596024545913213123"
let number1 = 1 , number2 = 1000 , number3 = "1" ,number4 = 1234596024545913213123
console.log(Number.isInteger(number1)); //true
console.log(Number.isInteger(number2)); // true
console.log(Number.isInteger(number3)); //false 
console.log(Number.isInteger(number4)); // true

console.log(Number.isSafeInteger(number1)); //true
console.log(Number.isSafeInteger(number2)); //true
console.log(Number.isSafeInteger(number3)); //false
console.log(Number.isSafeInteger(number4)); //false

console.log(number4 <= Number.MAX_SAFE_INTEGER); //false

console.log(Number.isInteger(25.5)); //false
console.log(Number.isInteger("123")); //false
console.log(Number.isInteger(Number("123"))); //true

 console.log(Number.isInteger("3" * 5)); //true
 console.log(Number.isSafeInteger("3" * 5)); //true





