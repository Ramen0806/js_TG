
const fruits = ['Apple' , 'Orange' , 'Kiwi' , 'Pineapple' , 'Mango' ,'Melon'];


console.log(fruits.filter(fruit => fruit[0] === "M"));
console.log(fruits.filter(fruit => fruit.toLowerCase().includes("apple")));
console.log(fruits.filter(fruit => fruit.length === 5));
console.log(fruits.filter(fruit => fruit.length !== 5));
console.log(fruits.filter(fruit => {
    fruit = fruit.toLowerCase();
    return fruit.indexOf('a') >= 0 || fruit.indexOf('e') >= 0 
}
));

console.log(fruits.filter(fruit => fruit.toLowerCase().indexOf("i") >= 0).length);
console.log(fruits.filter(fruit => fruit.toLowerCase().endsWith("e")).length);


console.log(fruits.map((fruit) => fruit[0] + fruit[fruit.length - 1]));