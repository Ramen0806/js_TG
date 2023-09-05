


const names = ['John', 'Jane', 'Alex'];
const newArray = names.map((name) => name.toUpperCase())
console.log(newArray);



/*
    [
        { index: 0, value: 'John' },
        { index: 1, value: 'Jane' },
        { index: 2, value: 'Alex' }
    ]

    John -> [ {index: 0, value: 'John'},
    Jane -> {index: 1, value: 'Jane'},
    Alex -> {index: 2, value: 'Alex'} ]
*/

 const result = names.map((name, i) => ({
    index: i,
    value: name, 
}));

console.log(result);

const result2 = [];
let count = 0

for(const name of  names) {
    let object = {
        index: count++,
        value: name,
    }
    result2.push(object)
}

console.log(result2);

const result3 = [];

for(const [i,v] of Object.entries(names)) {
   result3.push({
    index: Number(i),
    value: v,
   });
}

console.log(result3);

