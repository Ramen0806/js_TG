

let city1 = "Chicago"
let city2 = "Miami"
let city3 = "San Francisco"

//Let's do the best way and store this in an array


const cities = ["Chicago" , "Miami" , "San Francisco"];
console.log(cities); // ['Chicago', 'Miami', 'San Francisco'
console.log(typeof cities); //object
console.log(cities[0]); //Chicago
console.log(cities[1]); //Miami
console.log(cities[2]); //San Francisco

console.log(cities[1][0]); //M

console.log(cities[1][cities[1].length - 1]); //i


//Update your values in the array witht their index
cities[2] = "Berlin"; 
console.log(cities)  //[ 'Chicago', 'Miami', 'Berlin' ]
console.log(cities[2])  //'Berlin'
console.log(cities[2].toUpperCase)  //'BERLIN'


const numbers = [5, 3, 2, 10];
console.log(numbers [-5]);
console.log(numbers [-1]);
console.log[100]

console.log(typeof numbers); //object
console.log(typeof cities); //object

numbers[4] = 25;
console.log(numbers);

numbers[-1] =100;
console.log(numbers);
console.log(numbers[-1]);
console.log(numbers[5]);

