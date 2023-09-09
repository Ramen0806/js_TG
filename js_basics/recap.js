


const numbers = [1,2,3];

//log indexs for numbers

numbers.forEach((number, index) => console.log(index));

numbers.forEach((number, index) => console.log(`The number is ${number} and the index of the number is ${index}`));


//list keys of objects

const student = {
    name: 'Alan',
    age: 40,
    email: 'alan@gmail.com',
}
// [name, age, email]

let studentKeys = Object.keys(student);
let studentValues = Object.values(student);

console.log(studentKeys);
console.log(studentValues);


