

//Equality and comparison

// === vs == 

console.log(10 === '10');
console.log(10 == '10');

console.log(10 !== "10");
console.log(10 != "10");

console.log([] == false); //true
console.log([].length == false); //true

//console.log([] === false); // false : This condition will always return 'false' since JavaScript compares objects by reference, not value.


if({}) console.log(true); // true

//conditional statements


if ({}) {
    console.log('empty object true----'); // true
}
if (null) {
    console.log('null true----'); // false
}
if (true) {
    console.log('true is true----'); // true
}
if (false){
    console.log('false is true----'); // false
}

if (0) {
    console.log('0 is true----'); // false
}

if (NaN) {
    console.log('NaN true----'); // false
}
if("") {
    console.log(' "" true----'); // false
}
if("some string") {
    console.log("string is true") // true
}


//Nullish value

let nullishval = null;
let defualtval = "Defualt value"

console.log(nullishval ?? defualtval); //"Defualt value"

console.log(nullishval === true ? nullishval : defualtval)

const products ={
    prices: {
        regularPrice: 29.99,
        discountPrice: 25.99,
    },
    title: 'Mouse',
}

if(products?.isAvailable){
    console.log('products is available')
}

console.log(products?.isAvailable) //undefined

