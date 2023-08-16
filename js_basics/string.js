
//primitive strings
let fname = "John";
let lname = "Doe";


console.log(typeof fname); //string
console.log(typeof lname); //string


//concatenation- combining strings together
let fullName = fname + " " + lname;

console.log(fullName); //John Doe


//String templates - String Literals
//let quote = "I\ncan\ndo\nit";
let quote = `I
can 
do
it`
console.log(quote); 


//String Interpolation -embding your code into string 

let firstName = "Jane";
let lastName = "Doe";
console.log("The full name is = " + firstName + " " + lastName + ".");
console.log(`The full name is = ${firstName} ${lastName}.`); //Same thing as above but much more efficient and professional


let quantity = 5, price = 1.5; //The total price is $7.5
console.log(`The total price is $${quantity * price}`)


//Primitive string vs Object string
let city1 = "Chicago"
let city2 = new String("Chicago")

console.log(city1); //Chicago
console.log(city2); //[String:'Chicago']

console.log(typeof city1); //String (Primitive less memory usage)
console.log(typeof city2); //Object (allocates more memory than primitives)

console.log(city1 == city2); // true
console.log(city1 === city2); // false

