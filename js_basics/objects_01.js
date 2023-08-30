

const person = {
    name: 'John',
    age: 25,
    city: 'Chicago'
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person ['age']);


person.lName = 'Doe';
console.log(person.lName);

console.log(person. name + ' ' + person.lName);

delete person.lName;
delete person.age;


console.log(person.lName);
console.log(person.age);
console.log(person);


person.age = 25;
person.mName = 'Max';
person.lName = 'Doe';
person['gender'] = 'Male';
person.name = 'Jane'

personAge = person.age;
console.log(personAge);
console.log(person);

delete person.gender;
delete person.mName;

for (let variable in person) {
    console.log(person[variable]);
}


/*
Create a car object with below information
    color : 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7'
Then, output all the values to the console.
    red
    2023
    BMW
    X7

    */



const car ={
    color: 'red',
    year: 2023,
    make: 'Bmw',
    model: 'X7',
    
}

car.color = 'Black'

for (let x in car) {
    console.log(car[x]);
}
