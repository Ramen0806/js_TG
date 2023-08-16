
//Write a function that takes an argument and prints "Hello ${argument}"

function sayHello(arg0) {
    console.log(`Hello ${arg0}`);
}

function sayHello(a){
    console.log(`Hello ${a}`);
}


//Write a function that takes two arguments and prints "Hello ${arg0} ${arg1}"

function sayHello2(arg0, arg1){
    console.log(`Hello ${arg0} ${arg1}`);
}


printGoodMorning();

function printGoodMorning(){
    console.log(`Good Morning`);
}

printGoodMorning(); 

sayHello("Alex");
sayHello("John");
sayHello("Alex", "John"); //Will print "Hello Alex"
sayHello2("Alex", "John"); //Will print "Hello Alex John"

//Tricky Part
sayHello("Igor", "Alex");
sayHello();
sayHello("");

//Write a function that takes two arguments and returns their sum

function sum(a, b){
    return a + b;

}
console.log(`The Sum is  ${sum(4, 5)}`);
console.log(`The Sum is  ${sum(4, 10)}`);
console.log(`The Sum is  ${sum(6, 7)}`);


//Write a function that takes two arguments and returns their product
function product(a, b){
    return a * b;

}
console.log(`The Product is  ${product(4, 5)}`);
console.log(`The Product is  ${product(4, 10)}`);
console.log(`The Product is  ${product(6, 7)}`);





