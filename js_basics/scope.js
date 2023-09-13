
console.log(global);

//What is Scope?

/*
Scope refers to variables or functions accesibility in certain parts of the code

1.Global Scope - can be used anywhere in the program
2.Local Scope: Cannot be accessed or modified outside the function declaration
    a. Block scope (let, const)
    b. function scope (var)
*/

let globalVariable = 'This is a global variable';

console.log(globalVariable); //This is a global variable

//Global Variable is accessible inside the function

function someFunction() {
    console.log(globalVariable);
}

someFunction(); //This is a global variable

//global variable is accessible block
if (true ) {
    console.log(globalVariable);
}


/*
Local Scope
*/

function printColor() {
    var color = 'blue';
    let color2 = 'red';
    const color3 = 'orange';
    console.log(color); //blue
}
printColor(); //
//console.log(color); //var cannot be accessed since it is inside the function 
//console.log(color2);  //let cannot be accessed since it is inside the function
//console.log(color3);   // const cannot be accessed since it is inside the function


if (true) {
    var color4 = 'blue';
    let color5 = 'red';
    const color6 = 'orange';
}

//console.log(color4); //var can still be logged from an if block
//console.log(color5); //let  cannot be accessed since it is inside the function
//console.log(color6); //const cannot be accessed since it is inside the function


/**
 * Var keyword respects function scope  but not block scope
 * let and const respects both function and block scope
 */


//Reassignment
var color7 = 'purple';
let color8 = 'purple2';
const color9 = 'purple3';


if(true) {
    color7 = 'black'
    color8 = 'white'
    //color9 = 'red' //error
    
    console.log('color7', color7)
    console.log('color8', color8)
    console.log('color9', color9)
}



