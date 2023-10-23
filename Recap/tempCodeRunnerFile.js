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