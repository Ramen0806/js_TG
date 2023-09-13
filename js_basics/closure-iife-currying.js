

//Example of Closure:

function outerFunction() {
    const outerVar = 'I am from outerFunction';
    
    function innerFunction() {
        console.log(outerVar); // innerFunction has access to outerVar (closure)
    }
    
    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: I am from outerFunction


//Example of Currying:

function add(a) {
    return function(b) {
        return a + b;
    };
}

const addFive = add(5);
console.log(addFive(3)); // Output: 8 (5 + 3)
console.log(add(5)(3)); // Output: 8 (5 + 3)




//Example of IIFE:

(function () {
    const localVar = 'I am local';
    console.log(localVar);
})();
// Output: I am local

// localVar is not accessible here because it's scoped to the IIFE

console.log(localVar); // Error: localVar is not defined

