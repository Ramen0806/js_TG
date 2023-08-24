

const students = [];

students.push('Alex'); //1

console.log(students); // [ 'Alex' ]

students.push('John', 'John', 'Jane'); //4

console.log(students); // [ 'Alex','John', 'John', 'Jane' ]

students.push(['Mark', 'Max', 'Maria']); // 5

console.log(students); //[ 'Alex', 'John', 'John', 'Jane', [ 'Mark', 'Max', 'Maria' ] ]

console.log(students.length); //5

students.push(students, students); //

console.log(students); // [[ 'Alex', 'John', 'John', 'Jane', [ 'Mark', 'Max', 'Maria' ]], [[ 'Alex', 'John', 'John', 'Jane', [ 'Mark', 'Max', 'Maria' ] ] ]
console.log(students.length); // 7

students.pop('Alex');
console.log(students.length); //6
students.pop('Alex');

console.log(students); //[ 'Alex', 'John', 'John', 'Jane', [ 'Mark', 'Max', 'Maria' ] ]
console.log(students.length); //5



const cars = [ 'BMW', 'Mercedes', 'Tesla'];

cars.unshift('Toyota');

console.log(cars); // [ 'Toyota', 'BMW', 'Mercedes', 'Tesla' ]

cars.unshift('Honda', 'Kia');
console.log(cars); // [ 'Honda', 'Kia', 'Toyota', 'BMW', 'Mercedes', 'Tesla' ]

cars.unshift(); // returns the removed element -Honda
console.log(cars); // [ 'Kia','Toyota', 'BMW', 'Mercedes', 'Tesla' ]


const newArr = [];
let result = newArr.pop(); 
let result2 = newArr.shift(); 

console.log(result); // undefined
console.log(result2); // undefined
console.log(newArr); // []


