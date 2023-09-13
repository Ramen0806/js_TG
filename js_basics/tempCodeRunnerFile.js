
function add(a) {
    return function(b) {
        return a + b;
    };
}

const addFive = add(5);
console.log(addFive(3)); // Output: 8 (5 + 3)
add(5)(3); // Output: 8 (5 + 3)
