

const arr1 = ['foo', 'bar'] , arr2 = ['fizz', 'buzz'];

console.log(arr1 + arr2);  //foo,barfizz,buzz - not merging it converts the arrays into strings and concatenates them as a single string
console.log(arr1.concat(arr2)); //[ 'foo', 'bar', 'fizz', 'buzz' ] - merges the two arrays into a single array by using .concat()

console.log(typeof (arr1 + arr2)); //string
console.log(typeof (arr1.concat(arr2))); //object

console.log(arr1.concat(arr1, arr2, arr1)); // [ 'foo',  'bar', 'foo',  'bar', 'fizz', 'buzz', 'foo',  'bar' ]


console.log([].concat([])); // []
console.log([].concat([5,2])); //[ 5, 2 ]
console.log([].concat([5,2], [3, 4])); // [ 5, 2, 3, 4 ]
console.log([].concat([5,2], [3, 4]).length); // 4
console.log([].concat([5,2], [3, 4]));








