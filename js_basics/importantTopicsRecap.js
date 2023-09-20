

function printName (name) {
    console.log(this); //window or object
    console.log(name);
}

printName('Ulan');

//Implicit binding

const person = {
    name: 'Alan',
    age: 29,
      printName (name) {
        console.log(this.name);
    },
    mother: {
        hobbies: ['running','baking'],
        name: 'Jane',
        printName() {
            console.log(this.name);
            console.log(this);
        }
    }
}

person.printName(); // Alan, this = person object
person.mother.printName(); //this = mother


// function is not inside the object

const person1 = {
    name:'Alan',
    age: 29
}

const person2 = {
    name: "Alex",
    age: 32
}

function printName1() {
    console.log(this.name); // Alan
    //this(window) => this(person1)
 
}

printName1(); //undefined , this = window

//call()

printName1.call(person1);

function printHobbies(h1, h2, h3) {
    console.log(`Hi. My name is ${this.name} and my hobbies are ${h1}, ${h2}, ${h3}`)
}

const hobbies = ['Reading', 'Coding', 'Fishing'];

printHobbies.call(person1,hobbies[0],hobbies[1],hobbies[2]);
printHobbies.call(person2,hobbies[0],hobbies[1],hobbies[2]);

//Apply

printHobbies.apply(person1,hobbies);

//Bind

const bindedPrintHobbies = printHobbies.bind(person1,hobbies[0],hobbies[1],hobbies[2]);


// this keyword inside normal function vs arrow function


function logMessage() {
    console.log('this inside normal function', this);
}

const logMessage1 = () => {
    console.log('this inside arrow function', this);
}

logMessage();
logMessage1();

const person3 = {
    name: 'Bali',
    languages: ['English', 'Albaninan', 'Arabic', 'Chinese'],
    printLanguages() {
        const self = this;
        const modifedLang = this.languages.map(function (lang){
           this.languages =['Spanish']
            console.log(lang);
            //console.log(this);
            return `--- ${self.languages.length} - ${lang}`; 
        })
        console.log(modifedLang)
    }
}

person3.printLanguages();