
//reverse() changes the orginal one doesn't matter if you create a new variable
const arr1 = [2, 3, 5];

const arr2 = arr1.reverse();



console.log(arr1); //[ 5, 3, 2 ]
console.log(arr2); //[ 5, 3, 2 ]

const arr3 = arr2.reverse();

console.log(arr1); //[ 2, 3, 5 ]
console.log(arr2); //[ 2, 3, 5 ]
console.log(arr3); //[ 2, 3, 5 ]




// slice() and splice()
// slice() -> slices out a pice of an array and returns a new array
// splice() -> is used to add or remove elements from an array 


const arr = ['Grapes', 'Kiwi', 'Apple', 'Orange'];

const sub_arrary_1 = arr.slice();
const sub_arrary_2 = arr.slice(0);
const sub_arrary_3 = arr.slice(1);


console.log(sub_arrary_1 ); //[ 'Grapes', 'Kiwi', 'Apple', 'Orange' ]
console.log(sub_arrary_2 ); //[ 'Grapes', 'Kiwi', 'Apple', 'Orange' ]
console.log(sub_arrary_3 ); //[ 'Kiwi', 'Apple', 'Orange' ]


const sub_arrary_4 = arr.slice(0, 1);
const sub_arrary_5 = arr.slice(1, 3);
const sub_arrary_6 = arr.slice(2, 8);


console.log(sub_arrary_4); //[ 'Grapes' ]
console.log(sub_arrary_5); //[ 'Kiwi', 'Apple' ]
console.log(sub_arrary_6); //[ 'Apple', 'Orange' ]


console.log(arr.slice(-Infinity, Infinity)); //[ 'Grapes', 'Kiwi', 'Apple', 'Orange' ]
console.log(arr[0].slice(2,4)); // ap


// const arr = ['Grapes', 'Kiwi', 'Apple', 'Orange']

arr.splice(1,0, 'Pineapple'); //['Grapes', 'Kiwi', 'Pineapple', 'Apple', 'Orange']
console.log(arr);

arr.splice(1, 3);
console.log(arr); //[ 'Grapes', 'Orange' ]

arr.splice(5,3);
console.log(arr); //[ 'Grapes', 'Orange' ] -- nothing exists in index 5 ,6 , 7

arr.splice(5,0, 'Peach', 'Berry')
console.log(arr) //[ 'Grapes', 'Orange', 'Peach', 'Berry' ]

arr.sort();
console.log(arr); //[ 'Berry', 'Grapes', 'Orange', 'Peach' ]

arr.push('apple') 
arr.push('Banana')
console.log(arr)  //[ 'Berry', 'Grapes', 'Orange', 'Peach', 'apple' ]

arr.sort();
console.log(arr); //[ 'Banana', 'Berry', 'Grapes', 'Orange', 'Peach', 'apple' ] - because in ASCII Table uppercase letters are before lowercase letters

const chars = [['a', 'b'], ['1', '2'], ['#', '&', '^', '('], ' '];
const chars_flat = chars.flat();

console.log(chars); //[ [ 'a', 'b' ], [ '1', '2' ], [ '#', '&', '^', '(' ], ' ' ]
console.log(chars_flat); // [  'a', 'b', '1', '2', '#', '&',  '^', '(', ' ' ]

