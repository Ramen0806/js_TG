

//Write a function called product3 that takes 3 arguments and returns their multiplication

function product3(a, b, c){
    return a * b *c;
}

console.log(`The product is ${product3(2, 3, 4)}`); //The product is 24
console.log(`The product is ${product3(1, 3, 4)}`); //The product is 12
console.log(`The product is ${product3(5, 2, 2)}`); //The product is 20



//Tricky Part

console.log(`The product is ${product3("2", "5", "3")}`); //The product is 30
console.log(`The product is ${product3(null, "", false)}`); //The product is 0
console.log(`The product is ${product3("   ", true, "10abc")}`); //The product is NaN
console.log(`The product is ${product3("   ", true, "10")}`); //The product is 0


//Write a function called isOdd which takes an argument and returns true if the argument is odd and false otherwise

function isOdd(a) { 
    return a % 2 !== 0
}

console.log(isOdd(5)); //true
console.log(isOdd(67)); //true
console.log(isOdd(46)); //false
console.log(isOdd(92)); //false
console.log(isOdd(-5)); //true
console.log(isOdd(-12)); //false
console.log(isOdd(-48));//false
console.log(isOdd(10)); //false
console.log(isOdd(23)); //true
console.log(isOdd(2.3)); //true
console.log(isOdd(2.6)); //true


//Write a function called isEven that takes an argument and return true if the arg is even, false otherwise
function isEven(a) { 
    return a % 2 == 0
}

console.log(isEven(5)); //false
console.log(isEven(67)); //false
console.log(isEven(46)); //true
console.log(isEven(92)); //true
console.log(isEven(-5)); //false
console.log(isEven(-12)); //true
console.log(isEven(-48));//true
console.log(isEven(10)); //true
console.log(isEven(23)); //false

//Tricky Part
console.log(isOdd("")); //false
console.log(isEven("")); //true
console.log(isOdd("" * 5 + true)); //true
console.log(isEven("2" / 1 +8)); //true



















