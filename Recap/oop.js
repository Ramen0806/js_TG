const person1 = {
    name: 'John',
    age: 25
}

const person2 = {
    name: 'Jane',
    age: 30
}

//before ES6 used constructor

function car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.driver = function () {
        console.log('Driving');
    };
}

const car1 = new car ('BMW', 'X6', 2022);
const car2 = new car ('Tesla', 'S', 2023);

console.log(car1);
console.log(car2);

car1.driver();
car2.driver();

//ES6 classes



class Cat {
    constructor(name, color , age){
        this.name = name;
        this.color = color;
        this.age = age;
    }
    makeSound() {
        console.log(`Meow`);
    }
}

const cat1 = new Cat('Tom', 'Gray', 5);
const cat2 = new Cat('Lucy', 'Yellow', 3);
const cat3 = new Cat('Simba', 'Black', 1);

console.log(cat1);
cat1.makeSound();
cat2.makeSound();