



const car = {
    color: 'red',
    year: 2023,
    make: 'Bmw',
    model: 'X7',

}
const keys = Object.keys(car);
console.log(keys);


for (const key of keys) {
    console.log(key);
}

const values = Object.values(car);
console.log(values);


for (const value of values) {
    console.log(value);
}


const pairs = Object.entries(car);
console.log(pairs);


for (const entry of pairs) {
    console.log(entry);
}

for (const [key, value] of pairs) {
    console.log(`${key} = ${value}`);
}


for (const x in car) {
    console.log(car[x]);
}

