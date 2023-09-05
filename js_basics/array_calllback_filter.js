


const numbers = [-5, 0, 5, 10, 23, -10];

console.log(numbers.filter( x => x >0));

const newArr2 = [];
numbers.forEach(number => {
     if(number > 0 ) newArr2.push(number);
})

console.log(newArr2);


console.log(numbers.filter(x => x % 2 === 0));
console.log(numbers.filter(x => x % 2 !== 0));

const noNegativs = numbers.map( x => {
    if (x < 0) return 0;
    else return x;
})

console.log(noNegativs); //[ 0, 0, 5, 10, 23, 0 ]

const newNumbers = [];

numbers.map(number => {
    if (number < 0) newNumbers.push(0);
    else newNumbers.push(number);
});


console.log(newNumbers); //[ 0, 0, 5, 10, 23, 0 ]

const noNegative = numbers.map(x => (x < 0 ? 0 : x));
console.log(noNegative); //[ 0, 0, 5, 10, 23, 0 ]




// Find all the fruits that starts with M   -> [ 'Mango', 'Melon' ]
// Find all the fruits that has apple  -> [ 'Apple', 'Pineapple' ]
// Find all the fruits that has length of 5  -> [ 'Apple', 'Mango', 'Melon' ]
// Find all the fruits that has length different than 5  -> [ 'Orange', 'Kiwi', 'Pineapple' ]
// Find all the fruits that has a or e  -> [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]
// Count how many fruits has i  -> 2
// Count how many fruits ends with e  -> 3
// Store the first and last letters of the fruits as shown -> ['Ae', 'Oe', 'Ki', 'Pe', 'Mo', 'Mn']


const fruits = ['Apple' , 'Orange' , 'Kiwi' , 'Pineapple' , 'Mango' ,'Melon'];


console.log(fruits.filter(fruit => fruit[0] === "M"));
console.log(fruits.filter(fruit => fruit.toLowerCase().includes("apple")));
console.log(fruits.filter(fruit => fruit.length === 5));
console.log(fruits.filter(fruit => fruit.length !== 5));

console.log(fruits.filter(fruit => {
    fruit = fruit.toLowerCase();
    return fruit.indexOf('a') >= 0 || fruit.indexOf('e') >= 0 
}
));

console.log(fruits.filter(fruit => fruit.toLowerCase().indexOf("i") >= 0).length);
console.log(fruits.filter(fruit => fruit.toLowerCase().endsWith("e")).length);
console.log(fruits.map((fruit) => fruit[0] + fruit[fruit.length - 1]));