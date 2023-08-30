
const person = {
    fName: 'John',
    lName: 'Doe',
    age: 25,
    city: 'Chicago',

    fullname: function () {
        return `${this.fName} ${this.lName}`;
    },

    info: function () {
        return `${this.fullname()}'s age is ${this.age} and the city is ${this.city}.`;
    },
}

console.log(person.fullname());
console.log(person.info());

const student ={
    fName: 'Alex',
    lName: 'Doe',
    age: 30,
    fullname: function () {
        return `${this.fName} ${this.lName}`;
    },
    info: function () {
        return `${this.fullname()}'s age is ${this.age}.`;
    }

}

console.log(student.fullname());
console.log(student.info());