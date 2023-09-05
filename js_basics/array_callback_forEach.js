

//array-callback-functions-forEach()



const names = ['John', 'Jane', 'Alex', 'Max'];

//output each name to the console 
names.forEach(name => console.log(name));

//output each first letter of each name to the console
names.forEach(name => console.log(name[0]));

//output each name uppercase to the console
names.forEach(name => console.log(name.toUpperCase()));

//count how many names have 4 letters

let count = 0;
let count4 = 0

names.forEach(name => {
    if(name.length === 4) count++;
})

names.forEach((name) => name.length === 4 ? count4++ : count)

console.log(count); //3
console.log(count4); //3 

//Above is not good, we will learn filter() or reduce() could be used


const numbers = [5, 10, 3, 0, -2];

numbers.forEach(number => console.log(number));

numbers.forEach(number => console.log(number * 5));

numbers.forEach(number => {
    if( number % 2 === 0 ) console.log(true) ;
    else console.log(false);
})
//same as above
numbers.forEach(number => console.log(number % 2 === 0))
 
//create a new array that multiplies each of the numbers by 3 -> [15, 30, 9, 0, -6 ]
const newArr = [];
numbers.forEach((number) => newArr.push(number * 3))
console.log(newArr);

const newArray = numbers.map((x) => x * 3);
console.log(newArray);



