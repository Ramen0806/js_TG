



const employee = {
    name: 'Jane',
    lName: 'Doe',
    title: 'HR'
}

//prevent from updating above object

Object.freeze(employee);
employee.name = 'Joe';
console.log(employee);

const employee2 = employee;
employee2.title = 'instructor';
console.log(employee2);

//check if object is frozen

console.log(Object.isFrozen(employee)); //true

// How to know if property belongs to original object

const obj1  = {id: 1};
const obj2 = {...obj1, title: 'simple object'};

console.log(obj2); //
console.log(obj2.hasOwnProperty('title')); //
console.log(obj1.hasOwnProperty('title')); //
console.log(obj2.hasOwnProperty('id')); //