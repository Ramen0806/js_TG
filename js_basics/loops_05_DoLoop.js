


let j = 0;

do{
    console.log(j);
    j++;
}

while (j < 5);



let num = 1
while (num <= 3){
    console.log(`While loop - Hello World`);
    num++;

}

num = 1
do {
    console.log("Do While loop -Hello world");
    num++;
}

while (num <= 3);





let number = 5;

let randomNumber;

let attempts = 0;


do {
    randomNumber = Math.floor(Math.random() *(10)) + 1;
    attempts++;
    console.log(randomNumber);
   
} while (number !== randomNumber)

console.log(`The random number is finally ${randomNumber} and it is the number we  are looking for and it took ${attempts} time/s to generate it`)



