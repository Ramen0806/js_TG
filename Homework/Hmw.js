/*Task1:
Requirement
-Write a program that outputs below sentences
-Double quotations must be displayed in your console when you run the code
-Every line below must be printed with a separate console.log() statement
 
I start to practice "JavaScript" today, and I like it.
The secret of getting ahead is getting started.
"Don't limit yourself. "
Invest in your dreams. Grind now. Shine later.
It's not the load that breaks you down, it's the way you carry it.
The hard days are what make you stronger.
You can waste your lives drawing lines. Or you can live your life crossing them
*/

console.log('I start to practice "JavaScript" today, and I like it.');
console.log('The secret of getting ahead is getting started.');
console.log(`"Don't limit yourself."`);
console.log('Invest in your dreams. Grind now. Shine later.');
console.log(`It's not the load that breaks you down, it's; the way you carry it.`);
console.log('The hard days are what make you stronger.');
console.log('You can waste your lives drawing lines. Or you can live your life crossing them');



/*Task2:
Requirement
-Write a program that prints the whole below text in ONLY 1 console.log() statement
 (you can use escape sequences to insert line or a tab)
 
   JavaScript is a high-level programming language primarily used to build web applications. It is not limited to the web; it can also be used for the backend development with technologies like Node.js.

    It is open source and has a huge community support, which means there are plenty of resources and support available for learning. It uses a syntax like other programming languages and easy to learn.

*/
console.log(
    "JavaScript is a high-level programming language primarily used to build web applications. It is not limited to the web; it can also be used for the backend development with technologies like Node.js.\n\n" +
    "It is open source and has a huge community support, which means there are plenty of resources and support available for learning. It uses a syntax like other programming languages and easy to learn."
  );
  
/*Task3:
Requirement
-Write a program that stores below information with proper data types and output all variables with separate console.log() statements.

myAge
myFavoriteNumber
myHeight
myWeight
myFavoriteLetter

*/

let myAge = 22, myFavoriteNumber = 8, myHeight = `5 ft 10"`, myWeight = "160lbs", myFavoriteLetter = "M";

console.log(myAge);
console.log(myFavoriteNumber);
console.log(myHeight);
console.log(myWeight);
console.log(myFavoriteLetter);


/*Task4:
Requirement
-Create 2 variables called as num1, num2 and and store values of 25, 35 in these variables, respectively. 
Then, output the sum of the numbers with a proper message as given below.

Test Data:25, 35

Expected output: 
The sum of the numbers = 60

*/

let num1 = 25 , num2 = 35;

console.log("The sum of the numbers = " + (num1 + num2));
/*Task5:
Requirement
-Create 2 variables called as n1, n2 and and store values of 5, 7 in these variables, respectively.
 Then, output the product of the numbers with a proper message as given below.

Test Data:5, 7

Expected output: 
The product of the numbers = 35

*/

let n1 = 5 , n2 = 7;
console.log("The product of the numbers = " + n1*n2);
 
/*Task6:
Requirement
-Create 2 variables called as number1, number2 and and store values of 24, 10 in these variables, respectively. 
Then, output the sum (addition), multiplication, subtraction, division and remainder of these numbers with a proper message as given below.

Test Data:24, 10

Expected output: 
The sum of the numbers is = 34
The product of the numbers is = 240
The subtraction of the numbers is = 14
The division of the numbers is = 2.4
The remainder of the numbers is = 4
*/

let number1 = 24, number2 = 10;
console.log("The sum of the numbers is = " + (number1 + number2));
console.log("The product of the numbers is = " + (number1 * number2));
console.log("The subtraction of the numbers is = " +(number1 - number2));
console.log("The division of the numbers is = " + (number1 / number2));
console.log("The remainder of the numbers is = " + (number1 % number2));

/*Task7:
Requirement:
- Create 2 variables called as i1, i2 and and store values of 7, 11 in these variables, respectively. Then, output the average of the numbers.
Test Data:7, 11
Expected Output:
The average of the numbers is: 9

*/

let i1 = 7, i2 = 11
console.log("The average of the numbers is: " + ((i1+i2)/2))


/*Task8:
Requirement:
- Create 5 variables called as a1, a2, a3, a4, a5 and and store values of 6, 10, 12, 15, 17 in these variables, respectively.
 Then, output the average of the numbers.
Test Data:6, 10, 12, 15, 17
Expected Output:
The average of the numbers is: 12

*/
let a1 = 6, a2 = 10, a3 = 12, a4 = 15 , a5 = 17;
console.log("The average of the numbers is: " + ((a1+ a2 + a3 + a4 + a5)/5));

/*Task9:
Requirement:
- Create 3 variables called as b1, b2, b3 and and store values of 5, 6, 10 in these variables, respectively. 
Then, output the square of each number entered by user.
NOTE: Square of number means number multiplied with itself
Test Data:5, 6, 10
Expected Output:
The 5 multiplied with 5 is = 25
The 6 multiplied with 6 is = 36
The 10 multiplied with 10 is = 100

*/

let b1 = 5, b2 = 6, b3 = 10;
console.log("The 5 multiplied with 5 is = " + b1 * b1 ); 
console.log("The 6 multiplied with 6 is = " + b2 * b2);
console.log("The 10 multiplied with 10 is = " + b3 * b3);


/*Task10:
Requirement:
- Create a variable called as side to be assumed as one side of a square and store value of 7 in that variable. 
Then, output the area and perimeter for that square.

NOTE: area of a square = side * side
            perimeter of a square = 4 * side
 
Test Data:7
Expected Output:
The perimeter of the square = 28 
The area of the square = 49
*/

let side = 7;
console.log("The perimeter of the square = " +(4 * side));
console.log("The area of the square = " + (side * side));

/*Task11:
Requirement
-Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
	favBook = JS Algorithms & Data Structures
	favColor = Blue
	favNumber = 7

Expected output: 
The favorite book is JS Algorithms & Data Structures 
The favorite color is  Blue
The favorite number is  7
*/

let favBook = "JS Algorithms & Data Structures" , favColor = "Blue" , favNumber = 7
console.log(`The favorite book is ${favBook}\n` +`The favorite color is ${favColor}\n` +`The favorite number is ${favNumber}`);


/*Task12:
Requirement
-Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
	firstName = John
	lastName = Doe
	age = 45
	emailAddress = johndoe@gmail.com
	phoneNumber = (123) 123 1234
	address = 123 St Chicago IL 12345

Expected output: (it should exactly be same as below paragraph)
          User who joined this program is John Doe. John’s age is 45. John’s email address is johndoe@gmail.com, phone number is (123) 123 1234, and address is 123 St Chicago IL 12345.


*/

let firstName = "John";
let lastName = "Doe";
let age = 45;
let emailAddress = "johndoe@gmail.com";
let phoneNumber = "(123) 123 1234";
let address = "123 St Chicago IL 12345";

console.log(`   User who joined this program is ${firstName} ${lastName}. ` + `${firstName}’s age is ${age}. ` + `${firstName}’s email address is ${emailAddress}, ` + `phone number is ${phoneNumber}, ` + `and address is ${address}.`);

/*
Task 1
Requirement:
Convert given Strings below to number data types and find their sum, product, division, subtraction, remainder and exponentiation.

let str1 = "5", str2 = "2";

Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25


NOTE: expected results should exactly match!!!
*/

let str1 = "5", str2 = "2";
let num1 = Number(str1) , num2 = Number(str2);
console.log("The sum of 5 and 2 is = " + (num1 +num2));
console.log("The product of 5 and 2 is = " + (num1 * num2));
console.log("The division of 5 and 2 is = " + (num1 / num2));
console.log("The subtraction of 5 and 2 is = " +(num1 - num2));
console.log("The remainder of 5 and 2 is = " + (num1 % num2));
console.log("The exponentiation of 5 and 2 is = " + (num1 ** num2));

/*
Task 2
Requirement:
Convert given Strings below to number data types and find the greatest and smallest values and find the average and absolute difference of them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

NOTE: expected results should exactly match!!!

*/

let s1= "200", s2= "-50";
let number1 = Number(s1), number2 = Number(s2);
let average = ((number1 + number2)/2)
console.log("The greatest value is = " + Math.max(number1, number2));
console.log("The smallest value is = " + Math.min(number1, number2));
console.log("The average is = " + average);
console.log("The absolute difference is = " + Math.abs(number1 - number2));


/*
Task 3
Requirement:
Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included)
 
Test Data: 5, 27
Expected Output:
The absolute difference between numbers is = 22

*/

//Homework for tmw: come up with a way to generate random number between x and y (both included)
//Math.floor(Math.random() * (y - x +1) + x
//Math.ceil(Math.random() * (y - x +1) + (x-1)

let n1 = Math.floor(Math.random() * (50)+1);
let n2 = Math.floor(Math.random() * (50)+1);

console.log("The absolute difference between numbers is = " + Math.abs(n1-n2));



/*
Task 4
Requirement:
Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included)
 
Test Data: 3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/

let n_1 = Math.floor(Math.random() * (50)+1);
let n_2 = Math.floor(Math.random() * (50)+1);
let n_3 = Math.floor(Math.random() * (50)+1);
let n_4 = Math.floor(Math.random() * (50)+1);
let n_5 = Math.floor(Math.random() * (50)+1);
console.log("The max value = " + Math.max(n_1,n_2,n_3,n_4,n_5));
console.log("The min value = " + Math.min(n_1,n_2,n_3,n_4,n_5));





/*
Task 5


Requirement:
Write a program that generates 3 random numbers between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 Test Data:55, 67, 90
 Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212

*/

let n$1 = Math.floor(Math.random() * (100-50)+ 50);
let n$2 = Math.floor(Math.random() * (100-50)+ 50);
let n$3 = Math.floor(Math.random() * (100-50)+ 50);

console.log("The number 1 =  " +(n$1));
console.log("The number 2 =  " +(n$2));
console.log("The number 3 =  " +(n$3));
console.log("The sum of numbers is =  " +(n$1 + n$2 + n$3));




/*
Task 6
Requirement:
Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) and find if all the numbers are more than 25.

Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 25.

*/

let n$1_ = Math.floor(Math.random() * (100-1)+ 1);
let n$2_= Math.floor(Math.random() * (100-1)+ 1);
let n$3_ = Math.floor(Math.random() * (100-1)+ 1);

let allGreaterThan25 = [n$1_, n$2_, n$3_].every(num => num > 25);

console.log(allGreaterThan25);




/*
Task 7
Requirement:
Assume you are given a name let name = "David"; 
Print out the length of the name
Find the first character in the name and print it
Find the last character in the name and print it
Find the first 3 characters in the name and print them
Find the last 3 characters in the name and print them

Expected Output:The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/


let name = "David";
let length = name.length;
let firstCharacter = name[0];
let lastCharacter = name[name.length - 1];
let firstThreeCharacters = name.substring(0, 3);
let lastThreeCharacters = name.substring(name.length - 3);

console.log(`The length of the name is = ${length}`);
console.log(`The first character in the name is = ${firstCharacter}`);
console.log(`The last character in the name is = ${lastCharacter}`);
console.log(`The first 3 characters in the name are = ${firstThreeCharacters}`);
console.log(`The last 3 characters in the name are = ${lastThreeCharacters}`);


//Task 1

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

let a = getRandomNumber(1, 100);
let b = getRandomNumber(1, 100);
let c = getRandomNumber(1, 100);

function randomAverage(a, b, c) {
    return (a + b + c) / 3
}

console.log(randomAverage(a, b, c));

if (randomAverage(a, b, c) >= 50) {
    console.log("true");
}

else {
    console.log("false");
}


//Task 2

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 


function main() {
    const randomNumber1 = getRandomNumber(1, 3);
    const randomNumber2 = getRandomNumber(1, 3);
    const randomNumber3 = getRandomNumber(1, 3);
    
    console.log(`The random generated numbers: ${randomNumber1}, ${randomNumber2}, ${randomNumber3}`);
    
    if (randomNumber1 !== randomNumber2 && randomNumber2 !== randomNumber3 && randomNumber1 !== randomNumber3) {
        console.log("NO MATCH");
    } else if (randomNumber1 === randomNumber2 || randomNumber2 === randomNumber3 || randomNumber1 === randomNumber3) {
        console.log("DOUBLE MATCH");
    } else {
        console.log("TRIPLE MATCH");
    }
}

main();


//Task 3

function hasA(word) {
    if (word.includes('a') || word.includes('A')) {
        return true;
    } else {
        return false;
    }
}

console.log(hasA("Tech"));    // false
console.log(hasA("Global"));  // true
console.log(hasA(""));        // false
console.log(hasA("Apple"));   // true



//Task 4

function doubleOrTripleWord(word) {
    if (word.length % 2 === 0) {
        return word + word + word; 
    } else {
        return word + word; 
    }
}


console.log(doubleOrTripleWord("Tech"));    // "TechTechTech"
console.log(doubleOrTripleWord("Apple"));   // "AppleApple"
console.log(doubleOrTripleWord(""));        // ""
console.log(doubleOrTripleWord(" "));       // " "
console.log(doubleOrTripleWord("1"));       // "11"
console.log(doubleOrTripleWord("22"));      // "222222"



//Task 5


function firstWord(sentence) {
    if (sentence.trim() === "") {
        return ""; 
    } else {
        const words = sentence.split(" ");
        return words[0]; 
    }
}

console.log(firstWord("Hello World"));          // "Hello"
console.log(firstWord("I like JavaScript"));    // "I"
console.log(firstWord("Hello"));                // "Hello"
console.log(firstWord(""));                     // ""
console.log(firstWord("    "));                 // ""


//Task 6

function lastWord(sentence) {
    if (sentence.trim() === "") {
        return ""; 
    } else {
        const words = sentence.split(" ");
        return words[words.length - 1]; 
    }
}

console.log(lastWord("Hello World"));          // "World"
console.log(lastWord("I like JavaScript"));    // "JavaScript"
console.log(lastWord("Hello"));                // "Hello"
console.log(lastWord(""));                     // ""
console.log(lastWord("    "));                 // ""


//Task 7


function firstLastWord(sentence) {
    if (sentence.trim() === "") {
        return ""; 
    } else {
        const words = sentence.split(" ");
        const firstWord = words[0];
        const lastWord = words[words.length - 1];
        return firstWord + lastWord; 
    }
}

console.log(firstLastWord("Hello World"));          // "HelloWorld"
console.log(firstLastWord("I like JavaScript"));    // "IJavaScript"
console.log(firstLastWord("Hello"));                // "HelloHello"
console.log(firstLastWord(""));                     // ""
console.log(firstLastWord("    "));                 // ""



//Task 8

function startVowel(word) {
    const firstLetter = word.trim()[0];
    
    if (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u' ||
        firstLetter === 'A' || firstLetter === 'E' || firstLetter === 'I' || firstLetter === 'O' || firstLetter === 'U') {
        return true;
    } else {
        return false;
    }
}

console.log(startVowel("Hello"));    // false
console.log(startVowel("Apple"));    // true
console.log(startVowel("orange"));   // true
console.log(startVowel(""));         // false
console.log(startVowel("    "));     // false
console.log(startVowel("123"));      // false


//Task 9

function swap4(word) {
    if (word.length >= 8) {
        const firstFour = word.substr(0, 4);
        const lastFour = word.substr(word.length - 4);
        const middle = word.substring(4, word.length - 4);
        return lastFour + middle + firstFour;
    } else {
        return ""; 
    }
}

console.log(swap4("abc"));            // ""
console.log(swap4("JavaScript"));     // "riptScJava"
console.log(swap4("TechGlobal"));     // "obalGlTech"
console.log(swap4(""));               // ""
console.log(swap4("    "));           // ""
console.log(swap4("Apple"));          // ""


//Task 10


function swapFirstLastWord(sentence) {
    const words = sentence.trim().split(" ");
    
    if (words.length >= 2) {
        const firstWord = words[0];
        const lastWord = words[words.length - 1];
        words[0] = lastWord;
        words[words.length - 1] = firstWord;
        return words.join(" ");
    } else {
        return ""; 
    }
}

console.log(swapFirstLastWord("Hello World"));           // "World Hello"
console.log(swapFirstLastWord("I like JavaScript"));     // "JavaScript like I"
console.log(swapFirstLastWord("foo bar foo bar"));      // "bar bar foo foo"
console.log(swapFirstLastWord(""));                      // ""
console.log(swapFirstLastWord("    "));                  // ""
console.log(swapFirstLastWord("Hello"));                 // ""
console.log(swapFirstLastWord("Hello   "));              // ""

/*
Task 1
Requirement:
Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).

Expected Output:
7 
14
21
.
.
.
.
91
98

*/

for (let i = 1; i <= 100; i++){
    if( i % 7 === 0){
        console.log(i);
    }
}


/*
Task 2
Requirement:
Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive).

Expected Output:
6
12
18 
.
.
36
42
48

*/

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i); // Output the number
    }
}



/*
Task 3
Requirement:
Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).

Expected Output:
100
95
90
85
.
.
.
60
55
50

*/

for (let i = 100; i >= 50 ; i --){
    if (i % 5 === 0){
        console.log(i)
    }
}


/*
Task 4
Requirement:
Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!

Expected Output:
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49

*/


for (let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i * i}`)
}

/*
Task 5
Requirement:
Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10

NOTE: Use loop!!!

Expected Output:
55
*/

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);



/*
Task 6
Requirement:
Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number.

Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/

const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(`Random Number: ${randomNumber}`);

let factorial = 1;
for (let i = 1; i <= randomNumber; i++) {
    factorial *= i;
}
console.log(`Factorial of ${randomNumber}: ${factorial}`);


/*
Task 7
Requirement:
Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.

The program should also count how many attempts it takes to generate such a number.

Eventually, print the random number divisible by 5 with the number of attempts as below.

Expected Output:
The random number is {randomNumber} and it took {attempts} attempt/s to generate it.

*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber$;
let attempts;

for (attempts = 1; ; attempts++) {
    randomNumber$ = getRandomNumber(1, 100);
    if (randomNumber$ % 5 === 0) {
        break;
    }
}

console.log(`The random number is ${randomNumber$} and it took ${attempts} attempt/s to generate it.`);


/*
Task 8
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically

Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]

*/

const countries =['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(countries);
console.log(countries.sort());


/*
Task 9 
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
    if it has Pluto, then output true
    if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true

*/

const cartoonD = ['Scooby Doo','Snoopy','Blue','Pluto','Dino','Sparky'];

console.log(cartoonD);

if( cartoonD.includes('Pluto') ) {
    console.log(true);
};


/*
Task 10 
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
    if it has both, then output true
    if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/

const cartoonCats = [  'Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(cartoonCats.sort());

const hasGarfield = cartoonCats.includes('Garfield');
const hasFelix = cartoonCats.includes('Felix');
const hasBoth = hasGarfield && hasFelix;

console.log(hasBoth);


/*
Task 11
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element

Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/

const numbers = [
    10.5, 20.75, 70, 80, 15.75
];

console.log(numbers);

for (const number of numbers) {
    console.log(number);
}


/*
Task 12
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 

*/

const items = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];

console.log(items);

let startWithBPCount = 0;
for (const item of items) {
    if (item.charAt(0).toUpperCase() === 'B' || item.charAt(0).toUpperCase() === 'P') {
        startWithBPCount++;
    }
}
console.log(`Elements starting with 'B' or 'P' = ${startWithBPCount}`);

let hasBookOrPenCount = 0;
for (const item of items) {
    if (item.toLowerCase().includes('book') || item.toLowerCase().includes('pen')) {
        hasBookOrPenCount++;
    }
}
console.log(`Elements having 'book' or 'pen' = ${hasBookOrPenCount}`);


/*
Task 13
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
*/

const numbers_1 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

console.log(numbers_1);

let moreThan10Count = 0;
let lessThan10Count = 0;
let equalTo10Count = 0;

for (const number of numbers_1) {
    if (number > 10) {
        moreThan10Count++;
    } else if (number < 10) {
        lessThan10Count++;
    } else {
        equalTo10Count++;
    }
}

console.log(`Elements that are more than 10 = ${moreThan10Count}`);
console.log(`Elements that are less than 10 = ${lessThan10Count}`);
console.log(`Elements that are 10 = ${equalTo10Count}`);



/*
Task 14
Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]

*/

const firstArray = [5, 8, 13, 1, 2];
const secondArray = [9, 3, 67, 1, 0];

console.log(`1st array is = [ ${firstArray} ]`);
console.log(`2nd array is = [ ${secondArray} ]`);

const thirdArray = [];

for (let i = 0; i < firstArray.length; i++) {
    thirdArray.push(Math.max(firstArray[i], secondArray[i]));
}

console.log(`3rd array is = [ ${thirdArray} ]`);


/*
Task 15
Requirement:
Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1

*/

function firstDuplicate(arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }

    return -1;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));   // Output: 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));   // Output: 5
console.log(firstDuplicate([5, '5', 3, 7, 4]));     // Output: -1
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc'])); // Output: 'abc'
console.log(firstDuplicate([1, 2, 3]));             // Output: -1
console.log(firstDuplicate(['foo', 'abc', '123', 'bar'])); // Output: -1



/*
Task 16
Requirement:
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]

*/

function getDuplicates(array) {

    const uniqueElements = new Set();
  
    const duplicates = [];
    for (const element of array) {
      if (uniqueElements.has(element)) {
        duplicates.push(element);
      } else {
        uniqueElements.add(element);
      }
    }
  
    return duplicates;
  }


console.log(getDuplicates([0,-4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));


/*
Task 17
Requirement:
Write a function named as reverseStringWords() which takes a string as an argument 
and returns string back with each word separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> ""

*/

function reverseStringWords(string) {
    const words = string.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split("").reverse().join("");
    }
  
    const reversedString = words.join(" ");
  
    return reversedString;
  }
  

console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(" "));
console.log(reverseStringWords(""));



/*
Task 18
Requirement:
Write a function named as getEvens() which takes 2 number arguments 
and returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ]

*/

function getEvens(x, y) {
   
    let new_X = Math.min(x,y)
    let new_Y = Math.max(x,y)
    const evenNumbers = [];

    for (let num = new_X; num <= new_Y; num++) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }

    return evenNumbers;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));



/*
Task 19
Requirement:
Write a function named as getMultipleOf5() which takes 2 number arguments 
and returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17)	-> [ 5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ]
*/



function getMultipleOf5(x, y){

    let newX = Math.min(x,y)
    let newY = Math.max(x,y)

    const MultipleOf5 = [];

  for (let i = newX; i <= newY; i++) {
        if( i % 5 === 0) {
           MultipleOf5.push(i);
        }
    }
    if( x < y) return MultipleOf5;
    else return  MultipleOf5.reverse();
    
}
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));





/*
Task 20
Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18)	-> 13 | 14 | FizzBuzz | 16 | 17 | Fizz 
fizzBuzz(12, 5)	-> Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz
fizzBuzz(5, 5)	-> Buzz
fizzBuzz(9, 6)	-> Fizz | 7 | 8 | Fizz

*/

function fizzBuzz3(x, y) {
    let $newX = Math.min(x, y);
    let $newY = Math.max(x, y);
    let result = " ";
for (let i = $newX; i <= $newY; i++) {
    if (i % 15 === 0) {
        result += 'FizzBuzz';
    }

    else if (i % 3 === 0) {
        result += 'Fizz';
    }
    else if (i % 5 === 0) {
       result += 'Buzz';
    }
    else {
       result += i;
    }
    if (i !== $newY) {
        result += ' | ';
    }
}
return result 
}

console.log(fizzBuzz3(13, 18));
console.log(fizzBuzz3(12, 5));
console.log(fizzBuzz3(5, 5));
console.log(fizzBuzz3(9, 6));


/*
Task 1
Requirement:
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0

*/

function countPos(array) {
    let countPositive = 0
    for (const element of array) {
        if (element > 0) countPositive++;

    }
    return countPositive;
}
console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

/*
Task 2
Requirement:
Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			-> 0
*/

function countA(string) {
    let count_A = 0;
    for (const element of string) {
        if (element.toUpperCase().includes("A")) count_A++;
    }
    return count_A
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));


/*
Task 3
Requirement: 
Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0

*/

function countVowels(string) {
    let countV = 0;
    for (const letters of string) {
        if ("aeouiAEOUI".includes(letters)) countV++;
    }
    return countV;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

/*
Task 4
Requirement: 
Write a function named as countConsonants() which takes a string word as an argument and returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			-> 0
*/

function countConsonants(string) {
    let countC = 0;
    for (const letters of string) {
        if (!"aeouiAEOUI".includes(letters)) countC++;
    }
    return countC;
}

console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

/*
Task 5
Requirement:
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 		-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 
countWords("1 2 3 4") 				-> 4

*/

function countWords(string) {
    const trimmedString = string.trim();
    const wordsArray = trimmedString.split(" ");
    let wordCount = 0;

    for (const word of wordsArray) {
        if (word !== '') wordCount++;
    }
    return wordCount;
}

const countWords_ = (str) => str.trim().split(' ').length

console.log(countWords_("     Javascript is fun     "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));



/*
Task 6
Requirement:
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1

*/

function factorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

/*
Task 7
Requirement: 
Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity


Examples:
isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		-> true
isPalindrome("") 		-> true

*/



function isPalindrome(string) {

    const reversedString = string.split('').reverse().join('');

    return string.toLowerCase() === reversedString.toLowerCase();
}

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));


/*
Task 8
Requirement: 
Write a function named as countMultipleWords() which takes an array as an argument and returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					-> 0


*/

function countMultipleWords(array) {
    let count = 0;

    for (const element of array) {

        const trimmedElement = element.trim();

        if (trimmedElement.split(" ").length > 1) {
            count++;
        }
    }

    return count;
}


console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"]));
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "]));
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "]));
console.log(countMultipleWords([]));

/*
Task 9
Requirement: 
Write a function named as count3OrLess() which takes a string word as an argument and returns the count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") 			-> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 		-> 2
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			-> 0
*/

function count3OrLess(string) {
    const words = string.split(" ");
    let count3 = 0;

    for (const word of words) {
        if (word.length > 0 && word.length <= 3) {
            count3++;
        }
    }

    return count3;
}

console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));


/*
Task 10
Requirement:
Write a function named as isPrime() which takes a number as an argument and returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 	-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false

*/
function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}



console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));


/*
Task 11
Requirement:
Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]

*/



function add(arr1, arr2) {
    const sum = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        const num1 = arr1[i] || 0;
        const num2 = arr2[i] || 0;
        sum.push(num1 + num2);
    }

    return sum;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));



/*
Task 12
Requirement: 
Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed when invoked.

Examples:
removeExtraSpaces("Hello") 		-> "Hello" 
removeExtraSpaces("      Hello    World     ") 	-> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			-> "" 

*/


function removeExtraSpaces(string) {

    return string.split(' ').filter(x => x.length > 1).join(' ');
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));


/*
Task 13
Requirement: 
Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
findClosestTo10([0, -1, -2]) 		-> 0


*/

function findClosestTo10_(arr) {
    let closest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - 10);
        if (arr[i] === 10) continue;
        else if (diff < Math.abs(closest - 10)) {
            closest = arr[i];
        }

        else if (diff === Math.abs(closest - 10) && arr[i] < closest) {
            closest = arr[i];
        }
    }
    return closest;
}


const findClosestTo10 = (arr) =>{
    let closestTo10 = Number.MAX_VALUE
    let closestDiff = Number.MAX_VALUE

    for(currentNum of arr){
        if(currentNum === 10) continue;

        let currentDiff = Math.abs(10 - currentNum);

        if(currentDiff < closestDiff || ((currentDiff === closestDiff) && currentNum < closestTo10)){
            closestTo10 = currentNum;
            closestDiff = currentDiff;
        }
    }
    return closestTo10;
}



console.log(findClosestTo10([10, 10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));





/*
Task 14
Requirement: 
Write a function named as isEmailValid() which takes a string email as an argument and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

Examples:
isEmailValid("") 			-> false
isEmailValid("@gmail.com") 		-> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 		-> true

*/


function isEmailValid(email) {
    if (email.includes(" ") || !email.includes(".com")) {
        return false;
    }

    const atCount = email.split("@").length - 1;
    if (atCount !== 1) return false;
    
    const beforeAtCount = email.split("@")[0].length;
    if (beforeAtCount < 2) return false;

    const afterAtCount = email.split("@")[1].split(".")[0].length;

    if (afterAtCount < 2) return false;

    return true;
}

console.log(isEmailValid("")); //false
console.log(isEmailValid("@gmail.com")); //false
console.log(isEmailValid("johndoe@yahoo")); //false
console.log(isEmailValid("a@outlook.com")); //false
console.log(isEmailValid("johndoe@@gmail.com"));//false
console.log(isEmailValid("johndoe@.com")); //false
console.log(isEmailValid("johndoe@a.com")); //false
console.log(isEmailValid("johndoe@gmail.com")); //true



/*
Task 15
Requirement: 
Write a function named as isPasswordValid() which takes a string email as an argument and returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

Examples:
isPasswordValid("") 			-> false
isPasswordValid("abcd") 			-> false
isPasswordValid("abcd1234") 		-> false
isPasswordValid("Abcd1234") 		-> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 		-> true
isPasswordValid("Chicago123$") 		-> true
isPasswordValid("Test1234#") 		-> true
*/


function isPasswordValid(password) {
    const criteria = {
        minLength: 8,
        maxLength: 16,
        hasDigit: false,
        hasUppercase: false,
        hasLowercase: false,
        hasSpecialChar: false,
        noSpace: true,
    };


    if (password.length < criteria.minLength || password.length > criteria.maxLength) {
        return false;
    }

    for (const char of password) {
        if (char >= '0' && char <= '9') {
            criteria.hasDigit = true;
        } else if (char >= 'A' && char <= 'Z') {
            criteria.hasUppercase = true;
        } else if (char >= 'a' && char <= 'z') {
            criteria.hasLowercase = true;
        } else if ("!@#$%^&*()_+{}[]:;<>,.?~\\/-".includes(char)) {
            criteria.hasSpecialChar = true;
        } else if (char === ' ') {
            criteria.noSpace = false;
        }
    }

    return (
        criteria.hasDigit &&
        criteria.hasUppercase &&
        criteria.hasLowercase &&
        criteria.hasSpecialChar &&
        criteria.noSpace
    );
}


console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));

/**
 * Task 1
 * Requirement:
Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.
Examples:
noSpace("") 			->  ""
noSpace("Javascript") 		->  "Javascript"
noSpace("    Hello   ") 		-> "Hello"
noSpace(" Hello World   ") 	-> "HelloWorld”
noSpace("Tech Global") 		-> "TechGlobal"
 */

const noSpace = (string) => { return string.replaceAll(" ", "") }

console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("     Hello  "));
console.log(noSpace(" Hello World    "));
console.log(noSpace("Tech Global"));

/**
 * Task 2
 * Requirement:
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") 		->  ""
replaceFirstLast("Hello") 		->  "oellH"
replaceFirstLast("Tech Global") 	-> "lech GlobaT"
replaceFirstLast("A") 		-> ""
replaceFirstLast("    A      ") 	-> ""
 */


const replaceFirstLast = (string) => {
    if (string.trim().length < 2) return "";
    return string[string.length - 1] + string.slice(1, string.length - 1) + string[0]
};

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("     A      "));


/**
 * Task 3
 * Requirement:
Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("") 		-> false
hasVowel("Javascript") 		-> true
hasVowel("Tech Global") 		-> true
hasVowel("1234") 		-> false
hasVowel("ABC") 		-> true
 */


const hasVowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) { return true; }
    }
    return false;
}

console.log(hasVowel("")) // false
console.log(hasVowel("Javascript")) // true 
console.log(hasVowel("Tech Global")) // true
console.log(hasVowel("1234")) // false
console.log(hasVowel("ABC")) // true


/**
 * Task 4
 * Requirement:
Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth and returns a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
 */

const checkAge = (yearOfBirth) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const age = currentYear - yearOfBirth;

    if (yearOfBirth > currentYear || age > 120) {
        return "AGE IS NOT VALID";
    }

    if (age < 16) {
        return "AGE IS NOT ALLOWED";
    }
    else if (age >= 16 && age <= 120) {
        return "AGE IS ALLOWED";
    }

}

console.log(checkAge(2015));
console.log(checkAge(2007))
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));


/**
 * Task 5
 * Requirement:
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers​.
Examples:
averageOfEdges(0, 0, 0) 		-> 0
averageOfEdges(0, 0, 6) 		-> 3
averageOfEdges(-2, -2, 10) 	-> 4
averageOfEdges(-3, 15, -3) 	-> 6
averageOfEdges(10, 13, 20) 	-> 15
 */

const averageOfEdges = (a, b, c) => {
    const min = Math.min(a, b, c);
    const max = Math.max(a, b, c);

    return (min + max) / 2;
}

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));


/**
 * Task 6
 * Requirement:
Write a function named noA() which takes an array of strings as argument and will return a new array with all elements starting with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"]) 	->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) 	->  ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) 	-> ["###", "###", "###", "###", "###"]
 */

const noA = (arr) => {
    return arr.map(str => {
        if (str.startsWith('a') || str.startsWith('A')) {
            return '###';
        } else {
            return str;
        }
    });
}

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));





/**
 * Task 7
 * Requirement:
Write a function named no3and5() which takes an array of integer numbers as argument and will return a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17]) 	-> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6]) 		-> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) 	-> [99, 11, 100, 13, 14, 101]

 */


const no3and5 = (arr) => {
    return arr.map(num => {
        if (num % 15 === 0) {
            return 101;
        } else if (num % 5 === 0) {
            return 99;
        } else if (num % 3 === 0) {
            return 100;
        } else {
            return num;
        }
    });
}

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));



/**
 * Task 8
 * Requirement:
Write a function named countPrimes() which takes an array of integer numbers as argument and will return the number of the prime numbers in the given array.
NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1]) 	-> 0
countPrimes([7, 4, 11, 23, 17]) 	-> 4
countPrimes([41, 53, 19, 47, 67]) 	-> 5
 */


const countPrimes = (arr) => {
    let count = 0;

    for (const num of arr) {
        if (num < 2) count;
        else if (num % Math.sqrt(num) === 0) count;

        else count++;
    }
    return count

}



console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));


/**
 * Task 9
 * Requirement:
Write a function named removeDuplicates() which takes an array argument and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) 		-> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) 			-> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) 			-> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) 	-> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) 		-> ["1", "2", "3"]
 */


const removeDuplicates = arr => {
    return arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    });
}


console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));


/**
 * Task 10
 * Requirement: 
Write a method named isDateFormatValid() that takes a string as an argument and returns true if the given date is valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>

Examples:
isDateFormatValid("") 			-> false
isDateFormatValid("15/30/2020") 		-> false
isDateFormatValid("10-30-2020 ") 		-> false
isDateFormatValid("10.30.2020") 		-> false
isDateFormatValid("5/30/2020") 		-> false
isDateFormatValid("05/30/2020 ") 		-> true
isDateFormatValid("10/2/2020") 		-> false
isDateFormatValid("10/02/2020 ") 		-> true
 */

const isDateFormatValid = (date) => {
    if (date.trim() === '') {
        return false;
    }

    const dateParts = date.split('/');

    if (dateParts.length !== 3) {
        return false;
    }
    if (dateParts[0].length !== 2) return false;
    if (dateParts[1].length !== 2) return false;
    if (dateParts[2].length !== 4) return false;

    const month = parseInt(dateParts[0]);
    const day = parseInt(dateParts[1]);

    if (day < 1 || day > 31) {
        return false
    }
    if (month < 1 || month > 12) {
        return false;
    }

    return true;
}

console.log(isDateFormatValid("")); //false
console.log(isDateFormatValid("15/30/2020")); //false
console.log(isDateFormatValid("10-30-2020")); //false
console.log(isDateFormatValid("10.30.2020")); //false 
console.log(isDateFormatValid("5/30/2020")); //false
console.log(isDateFormatValid("05/30/2020")); //true
console.log(isDateFormatValid("10/2/2020"));//false
console.log(isDateFormatValid("10/30/2020")); //true


/**
 * Task 11
 * Requirement: 
Write a method named secondMax() takes an array argument and returns the second max number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.

Examples:
secondMax([7, 4, 4, 4, 23, 23, 23]) 	-> 7
secondMax([3, 4, 5, 6]) 		-> 5
secondMax([10]) 		-> 10
 */

const secondMax = (arr) => {
    if (arr.length <= 1) {
        return arr[0];
    }
    const filteredArr = arr.filter((value, index, num) => num.indexOf(value) === index);
    const sortedArr = filteredArr.sort((a, b) => b - a);
    return sortedArr[1];
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]));



/**
 * Task 12
 * Requirement: 
Write a method named secondMin() takes an array argument and returns the second min number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.

Examples:
secondMax([7, 4, 4, 4, 23, 23, 23]) 	-> 7
secondMax([3, 4, 5, 6]) 		-> 4
secondMax([10]) 		-> 10
 */

const secondMin = (arr) => {
    if (arr.length <= 1) return arr[0];

    const filteredArr = arr.filter((value, index, num ) => num.indexOf(value) === index);
    const sortedArr = filteredArr.sort((a,b) => a - b)

    return sortedArr[1];
}

console.log(secondMin([7, 4, 3, 2, 4, 4, 23, 23, 23]));
console.log(secondMin([3, 4, 5, 6]));
console.log(secondMin([10]));

/**
 * Task 13
 * Requirement: 
Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.
Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) 			-> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) 	-> "pen"
mostRepeated([10]) 					-> 10
mostRepeated(["TechGlobal"]) 				-> "TechGlobal"

 */


/*const mostRepeated = (arr) => {
    if (arr.length <= 1) return arr[0];

    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++){
            if(arr[i] === arr[j] && !arr1.includes(arr2)) arr1.push(arr[i])
        }
        if(arr1.length > arr2.length) arr2 = arr1;
        arr1 = []
    }
    return arr2[0];
}
*/
function mostRepeated(arr) {
    let count = {};
  
    arr.forEach(element => {
      count[element] = (count[element] || 0) + 1; 
    });
  
    return arr.find(element => {
      return count[element] === Math.max(...Object.values(count)); 
    });
  }

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));
console.log(mostRepeated([10]));
console.log(mostRepeated(["TechGlobal"]));

/*
*Task 1
Requirement:
Write a function named hasUpperCase() which takes a string argument and return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript") 	-> false
hasUpperCase("John") 		-> true
hasUpperCase("$125.0") 	-> false
hasUpperCase("") 		-> false
*/


const hasUpperCase = (string) => string.split("").some(char => char >= "A" && char <= "Z")
console.log(hasUpperCase("javascript")) 
console.log(hasUpperCase("John"))  
console.log(hasUpperCase("$125.0")) 
console.log(hasUpperCase("")) 

/**
 * Task 2
 Requirement:
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string​.
Examples:
noDigit("") 			-> ""
noDigit("Javascript") 		-> "Javascript"
noDigit("123Hello") 		-> "Hello"
noDigit("123Hello World149") 	-> "Hello World”
noDigit("123Tech456Global149") 	-> "TechGlobal"
 */

function noDigit(string) {
    return string.replace(/\d/g, '');
  }
console.log(noDigit("")); 
console.log(noDigit("Javascript")); 
console.log(noDigit("123Hello")); 
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149")); 


/**
 * Task 3
 Requirement:
Write a function named noVowel() which takes a string argument and returns a new string with all vowels removed from the original string​.
Examples:
noVowel("TechGlobal") 	-> "TchGlbl"
noVowel("AEOxyz") 	-> "xyz"
noVowel("Javascript") 	-> "Jvscrpt"
noVowel("") 	-> ""
noVowel("125$") 	-> "125$"
 */


const noVowel = (string) => {
    const vowels = 'aeiou';
  return string.split('').filter(char => !vowels.includes(char.toLowerCase())).join('');
}


console.log(noVowel('TechGlobal'));
console.log(noVowel('AEOxyz'));
console.log(noVowel('Javascript'));
console.log(noVowel(''));
console.log('125$');


/**
 * Task 4
 Requirement:
Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s. ​
Examples:
no13([1, 2, 3 ,4]) 		-> [1, 2, 3 ,4] 
no13([13, 2, 3]) 		-> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) 	-> [0, 0, 0, 0, 0]
no13([]) 			-> []
 */

const no13 = (nums) => {return nums.map(num => num === 13 ? 0 : num);}
console.log([1,2,3,4]);
console.log(no13([13,13,13,13,13]));
console.log([13,2,3]);
console.log([]);

/**
 * Task 5
Requirement:
Write a function named middleInt() which takes three number arguments and return the middle number. ​
Examples:
middleInt(1, 2, 2) 	-> 2
middleInt(5, 5, 8) 	-> 5
middleInt(5, 3, 5) 	-> 5
middleInt(1, 1, 1) 	-> 1
middleInt(-1, 25, 10) 	-> 10
 */
function middleInt(...nums) {
    const sortedNums = [...nums].sort((a, b) => a - b);
    return sortedNums[Math.floor(sortedNums.length / 2)];
  }

console.log(middleInt(1,2,2));
console.log(middleInt(5,5,8));
console.log(middleInt(5,3,5));
console.log(middleInt(1,1,1));
console.log(middleInt(-1,25,10,6,5));

/**
 * Task 6
 Requirement:
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​
Examples:
sumOfDigits("Javascript") 	-> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		-> 8
sumOfDigits("") 		-> 0
 */

const sumOfDigits = (string) =>{
    let sum= 0;
    for (i= 0;i <string.length; i++){
        if ('0123456789'.includes(string[i])){
            sum += parseInt(string[i]);
        }
    }
    return sum;
}
console.log(sumOfDigits('Javascript'));
console.log(sumOfDigits("John's age is 29"));
console.log(sumOfDigits('$125.0'));
console.log(sumOfDigits(''));

/**
 * Task 7
 Requirement:
Write a function named arrFactorial() which takes an array of numbers as argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		-> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		-> []
 */


const arrFactorial = (arr) => {
    let factorials = [];
    
    for (let num of arr) {
      let factorial = 1;
      for (let i = 2; i <= num; i++) {
        factorial *= i;
      }
      factorials.push(factorial);
    }
  
    return factorials;
  }

console.log((arrFactorial([1, 2, 3 ,4])));
console.log((arrFactorial([0, 5])));
console.log((arrFactorial([5,0,6])));
console.log(arrFactorial([]));



/**
 * 
 * Task 8
 Requirement:
Write a function named categorizeCharacters() which takes a string word as argument and return an array as letters at index of 0, digits at index of 1 and specials at index of 2. 
Examples:
categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]
 */


function categorizeCharacters(word) {
    const result = [[], [], []];
    
    for (let char of word) {
      if (char >= '0' && char <= '9') {
        result[1] += char; 
      } else if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
        result[0] += char;
      } else {
        result[2] += char;
      }
    }
  
    return result;
  }

console.log(categorizeCharacters("1234")); 
console.log(categorizeCharacters("abc123$#%")); 
console.log(categorizeCharacters("12ab$%3c%")); 

/**
 * Task 1
 * Requirement:
Write a function named hasLowerCase() which takes a string argument and returns true if there is a lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("") 		-> false
hasLowerCase("JAVASCRIPT") 	-> false
hasLowerCase("hello") 		-> true
hasLowerCase("125$") 		-> false
hasLowerCase("   a   ") 		-> true
 */

/*function hasLowerCase(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        return true;
      }
    }
    return false; 
  }

*/

function hasLowerCase(str) {
    return /[a-z]/.test(str);
  }

const hasLowerCase = (string) => string.split().filter(x=> a )
console.log(hasLowerCase('JAVASCRIPT'));
console.log(hasLowerCase('hello'));
console.log(hasLowerCase('Hello'));


/**
 * Task 2
 * Requirement:
Write a function named noZero() which takes an array of numbers as argument and returns the array back with all zeros removed.
Examples:
noZero([1]) 		-> [1]
noZero( [1, 1, 10]​) 	-> [1, 1, 10]​
noZero([0, 1, 10]) 	-> [1, 10]
noZero([0, 0, 0]) 	-> []
noZero([10, 100, 0]) 	-> [10, 100]
 */

function noZero(numbers) {
    return numbers.filter(n => n !== 0); 
  }

console.log(noZero([1])); 
console.log(noZero([1, 1, 10])); 
console.log(noZero([0, 1, 10])); 
console.log(noZero([0, 0, 0])); 
console.log(noZero([10, 100, 0])); 


/**
 * Task 3
 * Requirement:
Write a function named numberAndSquare() which takes an array of numbers as argument and returns a multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3]) 	-> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6]) 	-> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4]) 	-> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0]) 	-> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10]) 	-> [[0, 0], [1, 1], [-10, 100]]
 */

function numberAndSquare(numbers) {
    return numbers.map(n => [n, n * n]);
  }


console.log(numberAndSquare([1, 2, 3])); 
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0])); 
console.log(numberAndSquare([0, 1, -10]));


/**
 * Task 4
 * Requirement:
Write a function named containsValue() which takes a string array and a string as arguments and returns a boolean value. Search the string variable inside of the array and return true if it exists in the array. If it doesn’t exist, return false. ​

NOTE: Assume that array size is at least 1.​
NOTE: The method is case-sensitive.
Examples:
containsValue(["abc", "foo", "javascript"], "hello") 			-> false
containsValue(["abc", "def", "123"], "Abc") 			-> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") 	-> true
 */

function containsValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }


console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc"));
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));


/**
 * Task 5
 * Requirement:
Write a function named reverseSentence() which takes a string as argument and returns the words in reverse order.​ 
If there is no enough words reverse, return "There is not enough words!".
Examples:
reverseSentence("Hello") 		-> "There is not enough words!"
reverseSentence("Javascript is fun") 		-> "Fun is javascript"
reverseSentence("This is a sentence") 	-> "Sentence a is this"
 */

function reverseSentence(sentence) {
    const words = sentence.split(' ');
    
    if (words.length <= 1) {
      return 'There is not enough words!'; 
    }
    let reversedWords = words.reverse().join(' ');
    return console.log(reversedWords[0].toUppercase()+reversedWords.slice(1).toLowerCase());
    
  }

console.log(reverseSentence("Hello"));
console.log(reverseSentence("Javascript is fun"));
console.log(reverseSentence("This is a sentence"));


/**
 * Task 6
 * Requirement:
Write a function named removeStringSpecialsDigits() which takes a string as argument and return a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun") 	-> "Javascript is fun" 
removeStringSpecialsDigits("Cypress") 		-> "Cypress"
removeStringSpecialsDigits("Automation123#$%") 
 */


function removeStringSpecialsDigits(str) {
    let result = '';
  
    for(const char of str) {
      if((char >= 'a' && char <= 'z') ||
         (char >= 'A' && char <= 'Z') || 
         char === ' ') {
           result += char;
      }
    }
  
    return result;
  }




/**
 * Task 7
 * Requirement:
 * Write a function named removeArraySpecialsDigits() which takes a string array as argument and return back without the special characters or digits.
 * 
 * Examples:
 * removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]) -> ["Javascript", "is", "fun"]
 * removeArraySpecialsDigits(["Cypress", "123$%", "###"]) -> ["Cypress", "", ""]
 * removeArraySpecialsDigits(["Automation", "123#$%tool"]) -> ["Automation", "tool"]
 */

function removeArraySpecialsDigits(arr) {

    return arr.map(str => {
      let result = '';
      
      for(const char of str) {
        if((char >= 'a' && char <= 'z') || 
           (char >= 'A' && char <= 'Z') ||
           char === ' ') {
             result += char;  
        }
      }
  
      return result;
    });
  
  }
  
  console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
  console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
  console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));


/**
 * Task 8
 * Requirement:
Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 		-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 	-> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ) 	-> ["C#"]
*/


  function getCommons(arr1, arr2) {
    let common = new Set();
  
    for (let word of arr1) {
      if (arr2.includes(word)) {
        common.add(word);
      }
    }
  
    return [...common];
  }

console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"]));
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]));
console.log(getCommons( ["Javascript", "C#", "C#","Javascript"], ["Python", "C#", "C++","Javascript"] ));


 /**
  * Task 9
  * Requirement:
Write a function named noXInVariables() which takes an array as argument and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove the element.
Examples:
noXInVariables(["abc", 123, "#$%"]) 		-> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"]) 		-> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"]) 		-> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"]) 	-> ["yyy", "ABC"]

  */

function noXInVariables$(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
          const element = arr[i];
          if (typeof element === "string") {
            const mElement = element.split('').filter(char => char.toLowerCase() !== 'x').join('');
            if (mElement !== "") {
              result.push(mElement);
            }
          } else {
            result.push(element);
          }
        }
        return result;
      }
  

 const noXInVariables = arr => {
  removedArr = arr.map(word => {
         return (word.toString().split("").filter(letter =>!(letter.toUpperCase() === "X"))).join("")
        });
     return removedArr.filter(word => (word.length > 0))
}
      
     
console.log(noXInVariables(["abc", 123, "#$%"]));
console.log(noXInVariables(["xyz", 123, "#$%"]));
console.log(noXInVariables(["x", 123, "#$%"]))
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));

console.log(noXInVariables$(["abc", 123, "#$%"]));
console.log(noXInVariables$(["xyz", 123, "#$%"]));
console.log(noXInVariables$(["x", 123, "#$%"]))
console.log(noXInVariables$(["xyXyxy", "Xx", "ABC"]));

/**
 * Task 1
 * Requirement:
Write a function named fizzBuzz1() which takes a number argument 
and returns "Fizz" if the given number is divisible by 3,
 "Buzz" if the number is divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
 Otherwise, it will return the number itself.​
Examples:
fizzBuzz1(0) 		-> "FizzBuzz"
fizzBuzz1(1) 		-> 1
fizzBuzz1(3) 		-> "Fizz"
fizzBuzz1(5) 		-> "Buzz"
fizzBuzz1(30) 	-> "FizzBuzz"
fizzBuzz1(10) 	-> "Buzz"
fizzBuzz1(15) 	-> "FizzBuzz"
fizzBuzz1(-15) 	-> "FizzBuzz
 */

const fizzBuzz1 = (num) => {
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
  }
console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(30));
console.log(fizzBuzz1(10));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(-15));


/**
 * Task 2
 * Requirement:
Write a function named fizzBuzz2() which takes a number argument and returns and array consist of numbers starting from 1 to given number. However, it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
fizzBuzz2(3) 		-> [ 1, 2, 'Fizz' ]
fizzBuzz2(5) 		-> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10) 	-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
fizzBuzz2(15) 	-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
fizzBuzz2(2) 		-> [ 
 *
 */
const fizzBuzz2 = (num) => {
        let result = [];
        for (let i = 1; i <= num; i++) {
          if (i % 15 === 0) result.push("FizzBuzz");
          else if (i % 3 === 0) result.push("Fizz");
          else if (i % 5 === 0) result.push("Buzz");
          else result.push(i);
        }
        return result;
      }

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(2));

/**
 * Task 3
 * Requirement:
Write a function named findSumNumbers() which takes a string argument and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13

 */

function findSumNumbers(string) {
    return string.split('').reduce((sum, char) => {
       if(!isNaN(parseInt(char))) {
         return sum + parseInt(char);
       }
       return sum;
     }, 0);
  }

  console.log(findSumNumbers("abc$"));
  console.log(findSumNumbers("a1b4c  6#"));
  console.log(findSumNumbers("ab110c045d"));
  console.log(findSumNumbers("525"));
  console.log(findSumNumbers("3 for 10 dollars"));

/**
 * Task 4
 * Requirement:
Write a function named findBiggestNumber() which takes a string argument and returns the biggest number appears in the string.
Examples:
findBiggestNumber("abc$") 		-> 0
findBiggestNumber("a1b4c  6#") 		-> 6
findBiggestNumber("ab110c045d") 		-> 110
findBiggestNumber("525") 		-> 525
findBiggestNumber("3 for 10 dollars") 	-> 10
 */

const findBiggestNumber = (string) => {
    let biggest = 0;
    for (let char of string) {
      let num = parseInt(char);
      if (!isNaN(digit) && digit > biggest) {
        biggest = digit; 
      }
    }
    return biggest;
  }

  console.log(findBiggestNumber("abc$"));
  console.log(findBiggestNumber("a1b4c  6#"));
  console.log(findBiggestNumber("ab110c045d"));
  console.log(findBiggestNumber("525"));
  console.log(findBiggestNumber("3 for 10 dollars"));

/**
 * Task 5
 * Requirement:
Write a function named countOccurrencesOfCharacters() which takes a string argument and returns the count of repeated characters in the String.​
NOTE: If given String is empty, then return empty String.​
NOTE: It is case sensitive.
Examples:
countOccurrencesOfCharacters("") 		-> ""
countOccurrencesOfCharacters("abc") 	-> "1a1b1c"
countOccurrencesOfCharacters("abbcca") 	-> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa") 	-> "2a2A1a”
countOccurrencesOfCharacters("www" ) 	-> "3w"
 */

const countOccurrencesOfCharacters = (string) => {
    if (string === " ") return "";
    let count = {};
    for (let char of string) {
      count[char] = count[char] + 1 || 1; 
    }
    return Object.entries(count).map(x => x.join("")).join("");
  }
  
console.log(countOccurrencesOfCharacters(""));
console.log(countOccurrencesOfCharacters("abc"));
console.log(countOccurrencesOfCharacters("abbcca"));
console.log(countOccurrencesOfCharacters("aaAAa"));
console.log(countOccurrencesOfCharacters("www"));

/**
 * Task 6
 * Requirement:
Write a function named fibonacciSeries1() which takes a number n argument and returns the n series of Fibonacci numbers as an array. ​
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3) 	-> [0, 1, 1]
fibonacciSeries1(5) 	-> [0, 1, 1, 2, 3]
fibonacciSeries1(7) 	-> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8) 	-> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1) 	-> [0]
fibonacciSeries1(2) 	-> [0, 1]

 */

function fibonacciSeries1(n) {
    let output = [0];
    let a = 0;
    let b = 1;
  
    for (let i = 1; i < n; i++) {
      output.push(b);
      let temp = b;
      b = a + b;
      a = temp;
    }
  
    return output;
  }

console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));


/**
 * Task 7
 * Requirement:
Write a function named fibonacciSeries2() which takes a number n argument and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2) 	-> 1
fibonacciSeries2(4) 	-> 2
fibonacciSeries2(8) 	-> 13
fibonacciSeries2(9) 	-> 21
fibonacciSeries2(1) 	-> 0
 */

function fibonacciSeries2(n) {
    let a = 0;
    let b = 1;
    if (n === 1) return a;
    for (let i = 2; i <= n - 1; i++) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b;
  }

  console.log(fibonacciSeries2(2));
  console.log(fibonacciSeries2(4));
  console.log(fibonacciSeries2(8));
  console.log(fibonacciSeries2(9));
  console.log(fibonacciSeries2(1));

/**
 * Task 8 
 * Requirement:
Write a function named findUniques() which takes two array of number arguments and returns the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.​
NOTE: If one of the array is empty, then return unique values from the other array.
Examples:
findUniques([], []) 		-> []
findUniques([], [1, 2, 3, 2]) 	-> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5]) 	-> [1, 2, 5]
findUniques([8, 9], [9, 8, 9]) 	-> []
findUniques([-1, -2], [1, 2]) 	-> [-1, -2, 1, 2]
 */

const findUniques = (arr1, arr2) => {
  const a = arr1.filter((value, index) => arr1.indexOf(value) === index)
  const b = arr2.filter((value, index) => arr2.indexOf(value) === index)
  const unique = a.concat(b);
  const uniqueList = [];
  for(const el of unique){
      if(!a.includes(el) || !b.includes(el)) uniqueList.push(el)
  }
  return uniqueList;

}
  console.log(findUniques([], [1, 2, 3, 2]));
  console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
  console.log(findUniques([], [1, 2, 3, 2]));
  console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
  console.log(findUniques([8, 9], [9, 8, 9]));
  console.log(findUniques([-1, -2], [1, 2]));

/**
 * Task 9
 * Requirement:
Write a function named isPowerOf3() which takes a number argument and returns true if given number is equal to 3 power of the X. Otherwise, return false.​
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1) 	-> true
isPowerOf3(2) 	-> false
isPowerOf3(3) 	-> true
isPowerOf3(27) 	-> true
isPowerOf3(100) 	-> false
isPowerOf3(81) 	-> true
isPowerOf3(9) 	-> true
 */

const isPowerOf3 = (num) => {
    if (num < 1) return false;
    while (num % 3 === 0) {num /= 3;}
    return num === 1; 
  }

  console.log(isPowerOf3(1));
  console.log(isPowerOf3(2));
  console.log(isPowerOf3(3));
  console.log(isPowerOf3(27));
  console.log(isPowerOf3(100));
  console.log(isPowerOf3(81));
  console.log(isPowerOf3(9));

  /** 
 * Task 2
 * Requirement:
    Write a function named calculateTotalPrice1() which takes an object of some 
    shopping items with their quantities as key-value pairs and returns the total 
    price of the given items based on the price list below.
    1 Apple is $2.00 
    1 Orange is 3.29
    1 Mango is $4.99
    1 Pineapple $5.25
    Examples:
    calculateTotalPrice1({ apple: 3, mango: 1 })  -> 10.99
    calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })  -> 19.12
    calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })  -> 0
    calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 })  -> 12.24
 */

const calculateTotalPrice1 = (items) => {
    const prices = {
        apple: 2.00,
        orange: 3.29, 
        mango: 4.99,
        pineapple: 5.25
      };

    let total = 0;

    for (let item in items) {
        const quantity = items[item];
        const price = prices[item];
        total += quantity * price;

    }
    return total;
}

console.log(calculateTotalPrice1({ apple: 3, mango: 1 }));
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }));
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }));
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 }));


/**
 * Requirement:
Write a function named calculateTotalPrice2() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total 
price of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Note: There will be some discounts as below .
There will be %50 discount for every second Apple 
There will be 1 free Mango if customer gets 3. So, fourth one is free.
Examples:
calculateTotalPrice2({ Apple: 3, Mango: 5 })  -> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })  -> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })  -> 0
calculateTotalPrice1({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })  -> 29.51
 */


const calculateTotalPrice2 = (items) => {
    const prices = {
        apple: 2.00,
        orange: 3.29, 
        mango: 4.99,
        pineapple: 5.25
      };

    let total = 0;

    let mangoCount = 0;

    let appleCount = 0;

    for (let item in items) {
        const quantity = items[item];
        
        if( item === 'mango'){
            mangoCount += quantity;
            const FreeMangos = Math.floor(mangoCount / 3);
            total += (quantity - FreeMangos) * prices.mango;
        }

        else if (item === 'apple'){
            appleCount +=quantity;
            const discountedApples = Math.floor(appleCount /2);
            total += (quantity - discountedApples) * prices.apple ;
            total += discountedApples * prices.apple * 0.5;
        }
        else {
            total += quantity * prices[item]; 
          }

    }
   
   return total;
}

console.log(calculateTotalPrice2({ apple: 3, mango: 5 }));
console.log(calculateTotalPrice2({ apple: 4, mango: 8, orange: 3 }));
console.log(calculateTotalPrice2({ apple: 0, mango: 0, orange: 0 }));
console.log(calculateTotalPrice2({ apple: 4, pineapple: 1, orange: 1, mango:1 }));


/**
 * Task 3
 * Requirement:
Write a function named nthWord() which takes a string and a number 
arguments and returns the nth word in the string. 
Note: Function should return empty string if the number argument is greater 
than the count of the words in the given string.
Examples:
nthWord("I like programming languages", 2)  -> "like"
nthWord("QA stands for Quality Assurance", 4)   -> "Quality"
nthWord("Hello World", 3)  -> ""
nthWord("Javascript", 1)  -> "Javascript”
nthWord("", 1)  -> ""
 */

const nthWord = (str,num) => {
  const words = str.split(' ');
     if (num > words.length) {
        return '';
    }
        
 return words[num-1]; 
}
console.log(nthWord("I like programming languages", 2)); 
console.log(nthWord("QA stands for Quality Assurance", 4)); 
console.log(nthWord("Hello World", 3)); 
console.log(nthWord("Javascript", 1)); 
console.log(nthWord("", 1)); 



/**
 * Task 4
 * Requirement:
Write a function named isArmstrong() which takes a number argument and 
returns true if given number is armstrong, return false otherwise. 
Note: An armstrong number is a number that is equal to the sum of cubes of its 
digits
Let's take an example to understand it better. Consider the number 153. 
To determine if 153 is an armstrong number, we need to check if the sum of 
its digits, each raised to the power of the number of digits, equals the original 
number. 
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
In this case, the sum of the individual digits raised to the power of 3 (the 
number of digits in 153) is equal to the original number, which means 153 is 
an armstrong number.
Examples:
isArmstrong(153)  -> true
isArmstrong(123)  -> false
isArmstrong(1634)  -> true
isArmstrong(153)  -> true
isArmstrong(1111)  -> false
 */

const isArmstrong = (num) => {
    const digits = num.toString().split('');
    const len = digits.length;
    let sum = 0;

    for(let i = 0; i < len; i++) {
        sum += Math.pow(parseInt(digits[i]), len); 
  }

  return sum === num;
}

console.log(isArmstrong(153)); 
console.log(isArmstrong(123)); 
console.log(isArmstrong(1634)); 
console.log(isArmstrong(1111)); 


/**
 * Task 5
 * Requirement:
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples:
reverseNumber(371)  -> 173
reverseNumber(123)  -> 321
reverseNumber(12)  -> 21
reverseNumber(0)  -> 0
reverseNumber(111)  -> 111
 */
  
    

const reverseNumber = (num) => {
    let result = 0
    while (num > 0) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
      }
      return result;
    
}

console.log(reverseNumber(371));
console.log(reverseNumber(123));
console.log(reverseNumber(12));
console.log(reverseNumber(0));
console.log(reverseNumber(111));
 

/**
 * Task 6
 * Requirement:
Write a function named doubleOrTriple() which takes an array of numbers as 
argument and a boolean value. It will return the array elements doubled if true 
or tripled if the boolean value is false. 
Examples:
doubleOrTriple([1, 5, 10], true)  -> [2, 10, 20]
doubleOrTriple([3, 7, 2], false) -> [9, 21, 6]
doubleOrTriple([-1, -2], true)  -> [-2, -4]
doubleOrTriple([0], false)  -> [0]
doubleOrTriple([-1, 0, 1], true)  -> [-2, 0, 2]
 */

const doubleOrTriple = (arr, double) => {
    return arr.map(num => {
      if (double) {
        return num * 2;
      } else {
        return num * 3; 
      }
    });
  }

  console.log(doubleOrTriple([1, 5, 10], true));
  console.log(doubleOrTriple([3, 7, 2], false));
  console.log(doubleOrTriple([-1, -2], true));
  console.log(doubleOrTriple([0], false))
  console.log(doubleOrTriple([-1, 0, 1], true))


  /**
   * Task 7
   * Requirement:
Write a function named splitString() which takes a string and a number 
arguments and returns the string back split by the given number. 
Note: Return empty string if the string shorter than splitting number or the 
string length is not divisible by the given number.
Examples:
splitString("JavaScript", 5)  -> "JavaS cript"
splitString("Java", 2)  -> "Ja va"
splitString("Automation", 3)  -> ""
splitString("Hello", 6)  -> ""
splitString("12", 1)  -> "1 2
   */

const splitString = (str, num) => {
    if (str.length < num) return ""
    result = "";
    for(i = 0; i < num; i++){
        result += str[i];
    }
    result += " "
    for(i = num; i < str.length; i++){
        result += str[i];
    }
    return result;
}


console.log(splitString("Google",2));
console.log(splitString("JavaScript", 5));
console.log(splitString("Java", 2));
console.log(splitString("Automation", 3));
console.log(splitString("Hello", 6));
console.log(splitString("12", 1));

/**
 * Task 1
 * Requirement:
Write a function named countPalindrome() which takes a string and returns 
the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and 
backwards. Example: level, radar, deed, refer.
Examples:
countPalindrome("Mom and Dad" )  -> 2
countPalindrome("See you at noon")  -> 1
countPalindrome("Kayak races attracts racecar drivers")  -> 2
countPalindrome("")  -> 0
countPalindrome("No palindrome here")  -> 0
 */

const countPalindrome = (str) =>{
   

    let words = str.toLowerCase().split(' '); 
 
    let palindromes = 0;
 
 
    for (const word of words) {
     let reversedWord = word.split('').reverse().join('')
     if (word !== '' && word === reversedWord ) {
       palindromes++;
     }}
 
 return palindromes;
 }
 
 console.log(countPalindrome("Mom and Dad")); 
 console.log(countPalindrome("See you at noon")); 
 console.log(countPalindrome("Kayak races attracts racecar drivers"));  
 console.log(countPalindrome("")); 
 console.log(countPalindrome("No palindrome here")); 
 
 
 /**
  * Task 2
  * Requirement:
 Write a function named sum() which takes an array of numbers and a boolean 
 value as arguments. It will return the sum of the numbers positioned at even 
 indexes if true. And, return sum of numbers positioned at odd indexes if false.
 Examples:
 sum([1, 5, 10], true)  -> 11
 sum([3, 7, 2, 5, 10], false)  -> 12
 sum([-1, 1, -2, 2], true)  -> -3
 sum([0, -1, 15, 1], false)  -> 0
 sum([1, 2, 3, 4, -4], true)  -> 0
  */
 
 const sum = (arr, isEven) => {
 
     let total = 0;
   
     for (let i = 0; i < arr.length; i++) {
   
       if (isEven && i % 2 === 0) {
         total += arr[i];
       }
       else if (!isEven && i % 2 !== 0) {
         total += arr[i];
       }
   
     }
     
     return total;
   
   }
   
 console.log(sum([1, 5, 10], true)); 
 console.log(sum([3, 7, 2, 5, 10], false)); 
 console.log(sum([-1, 1, -2, 2], true)); 
 console.log(sum([0, -1, 15, 1], false));
 console.log(sum([1, 2, 3, 4, -4], true)); 
 
 
 /**
  * Task 3
  * Requirement:
 Write a function named nthChars() which takes a string and a number as 
 arguments and returns the string back with every nth characters. 
 Examples:
 nthChars("Java", 2)  -> "aa"
 nthChars("JavaScript", 5)   -> "St"
 nthChars("Java", 3)   -> "v"
 nthChars("Hi", 4)   -> ""
 nthChars("0123456789", 2)  -> "13579"
  */
 
 const nthChars = (str, n) => {
     let result = '';
   
     for (let i = n - 1; i < str.length; i += n) {
       result += str[i];
     }
   
     return result;
   }
 
 console.log(nthChars("Java", 2)); 
 console.log(nthChars("JavaScript", 5)); 
 console.log(nthChars("Java", 3)); 
 console.log(nthChars("Hi", 4)); 
 console.log(nthChars("0123456789", 2)); 
 
 /**
  * Task 4
  * Requirement:
 Write a function named canFormString() which takes two string arguments 
 and returns true if the second string can be formed by rearranging the 
 characters of first string. Return false otherwise.
 NOTE: This method is case-insensitive and ignore the white spaces.
 Examples:
 canFormString("Hello", "Hi")   -> false
 canFormString("programming", "gaming")   -> true
 canFormString("halogen", "hello")   -> false
 canFormString("CONVERSATION", "voices rant on")   -> true
 canFormString("12", "123")  -> false
  */
 
 
 function canFormString(str1, str2) {
     const arr1 = str1.toLowerCase().split('');
     const arr2 = str2.toLowerCase().split('');
   
     const cleanArr1 = arr1.filter(char => char !== ' ');
     const cleanArr2 = arr2.filter(char => char !== ' ');
   
     let charCountMap = {};
 
     for (let char of cleanArr1) {
       charCountMap[char] = (charCountMap[char] || 0) + 1;
     }
   
     for (let char of cleanArr2) {
       if (!charCountMap[char]) {
         return false; 
       }
       charCountMap[char]--;
       if (charCountMap[char] < 0) {
         return false; 
       }
     }
   
     return true;
   }
 
 console.log(canFormString("Hello", "Hi"));   // false
 console.log(canFormString("programming", "gaming"));   // true
 console.log(canFormString("halogen", "hello"));   // false
 console.log(canFormString("CONVERSATION", "voices rant on"));   // true
 console.log(canFormString("12", "123")); // false
 
 
 /**
  * Task 5
  * Requirement:
 Write a function named isAnagram() which takes two string arguments and 
 returns true if the given strings are anagram. Return false otherwise.
 NOTE: An anagram is a word or phrase formed by rearranging the letters of 
 another word or phrase. In the context of strings, checking if two strings are 
 anagrams of each other means verifying if they contain the same characters in 
 the same quantities, regardless of the order of those characters.
 NOTE: This method is case-insensitive and ignore the white spaces.
 Examples:
 isAnagram("Apple", "Peach")   -> false
 isAnagram("listen", "silent")   -> true
 isAnagram("astronomer", "moon starer")   -> true
 isAnagram("CINEMA", "iceman")   -> true
 isAnagram("123", "1234")  -> false
  *
  */
 
 function isAnagram(str1, str2) {
 
  
     let s1 = str1.toLowerCase().split('').filter(char => char !== ' ').join('');
     let s2 = str2.toLowerCase().split('').filter(char => char !== ' ').join('');
     
 
     let charCounts = {};
     
     for(let char of s1) {
       if(!(char in charCounts)) {
         charCounts[char] = 1;
       } else {
         charCounts[char]++; 
       }
     }
     
     for(let char of s2) {
       if(!(char in charCounts)) {
         return false;
       } else {
         charCounts[char]--;
       }
     }
   
     for(let char in charCounts) {
       if(charCounts[char] !== 0) {
         return false;
       }
     }
   
     return true;
   }
 
   console.log(isAnagram("Apple", "Peach"));
   console.log(isAnagram("listen", "silent"));
   console.log(isAnagram("astronomer", "moon starer"));
   console.log(isAnagram("CINEMA", "iceman"));
   console.log(isAnagram("123", "1234"));
 
   /**
    * Task 6
    * Requirement:
 Write a function named count() which takes an array of numbers and a 
 boolean value as arguments. It will return the total count of the even numbers if 
 the boolean value is true. And return the total count of the odd numbers if the 
 boolean value is false. 
 Examples:
 count([1, 5, 10], true)  -> 1
 count([3, 7, 2, 5, 10], false)  -> 3
 count([-1, 1, -2, 2], true)  -> 2
 count([0, -1, 15, 1], false)  -> 3
 count([1, 2, 3, 4, -4], true)  -> 3
    */
 
   const count = (arr, isEven) => {
 
     let count = 0;
   
     for(let num of arr) {
       if(isEven) {
         if(num % 2 === 0) {
           count++; 
         }
       } else {
         if(num % 2 !== 0) {
           count++;
         }
       }
     }
     
     return count;
   
   }
 
     
 console.log(count([1, 5, 10], true)); 
 console.log(count([3, 7, 2, 5, 10], false)); 
 console.log(count([-1, 1, -2, 2], true)); 
 console.log(count([0, -1, 15, 1], false));
 console.log(count([1, 2, 3, 4, -4], true)); 
 
 /**
  * Task 7
  * Requirement:
 Write a function named sumDigitsDouble() which takes a string and returns 
 the sum of the digits in the given String multiplied by 2. Return -1 if the given 
 string does not have any digits. Ignore negative numbers.
 Examples:
 sumDigitsDouble("Javascript")  -> -1
 sumDigitsDouble("23abc45")   -> 28
 sumDigitsDouble("Hi-23")  -> 10
 sumDigitsDouble("ab12")  -> 6
 sumDigitsDouble("n0numh3r3")  -> 12
  */
 
 
 const sumDigitsDouble = (str) =>{
     let sum = 0;
     
     for(let char of str) {
       if(!isNaN(parseInt(char))) {
         sum += parseInt(char) * 2;
       }
     }
     
     if(sum === 0) {
       return -1; 
     } else {
       return sum;
     }
   }
 
 console.log(sumDigitsDouble('Javascript'));
 console.log(sumDigitsDouble('23abc45'));
 console.log(sumDigitsDouble('Hi-23'));
 console.log(sumDigitsDouble('ab12'));
 console.log(sumDigitsDouble('n0numh3r3'));
 
 
 
 
 /**
  * Task 8
  * Requirement:
 Write a function named countOccurrence() which takes two string arguments 
 and returns how many times that the first string can form the second string.
 Examples:
 countOccurrence("Javascript", "Java")  -> 1
 countOccurrence("Hello", "World")  -> 0
 countOccurrence("Can I can a can", "anc")   -> 3
 countOccurrence("Hello", "l")   -> 2
 countOccurrence("IT conversations", "IT")   -> 2
  */
 
 
 const countOccurrence = (str1, str2) => {
   
   let duplicated = ""
 
   for (let i = 0; i < str1.length; i++) {
       if(str2.toLowerCase().includes(str1[i].toLowerCase())) {
       duplicated +=str1[i]
       }
   }
 
   if(duplicated.length >= str2.length)
    return Math.floor(duplicated.length / str2.length)
   else return 0
 }
 
 console.log(countOccurrence("Javascript", "Java")) 
 console.log(countOccurrence("Hello", "World"))   
 console.log(countOccurrence("Can I can a can", "anc")) 
 console.log(countOccurrence("Hello", "l")) 
 console.log(countOccurrence("IT conversations", "IT")) 
 
 
 /**
 * Task 1
 * Requirement:
Write a function named makeNegative() that takes a number and returns its negative value.
NOTE: The number can be negative already, in which case no change is required.
NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. So, zero will stay as zero.
Examples
makeNegative(10)      	-> -10
makeNegative( -7)     	-> -7
makeNegative( 0)       	-> 0
makeNegative(0.45)   	-> -0.45
 */

const makeNegative = (num) => {
    if(num > 0){
        return num *= -1;
    }else{
        return num;
    }
}

console.log(makeNegative(10));
console.log(makeNegative(-7));
console.log(makeNegative(0));
console.log(makeNegative(0.45));

/**
 * Task 2
 * Requirement:
Write a function isSumEvenOrOdd() which takes three numbers as arguments and determines if the sum of these numbers is odd or even.
Examples:
isSumEvenOrOdd(0, 1, 4) 	-> "odd"
isSumEvenOrOdd(0, -1, -5)      	-> "even"
isSumEvenOrOdd(0, 0, 0) 	-> "even"
isSumEvenOrOdd(7, 1, 9)       	-> "odd"
isSumEvenOrOdd(1, 1, 1)       	-> "odd"
 */

const isSumEvenOrOdd = (num1, num2, num3) => {
    const sum = num1 + num2 + num3;
    if (sum % 2 === 0) {
      return "even";
    } else {
      return "odd"; 
    }
  }
  console.log(isSumEvenOrOdd(0, 1, 4));
  console.log(isSumEvenOrOdd(0, -1, -5));
  console.log(isSumEvenOrOdd(0, 0, 0));
  console.log(isSumEvenOrOdd(7, 1, 9));
  console.log(isSumEvenOrOdd(1, 1, 1));

/**
 * Task 3
 * Requirement:
Write a function named decimal2() which takes an array of numbers as an argument and returns the array with the same numbers rounded up or down and represented with only two decimals.
Examples:
decimal2( [94.356, 8.9752] ) 		-> [ 94.36, 8.98 ]
decimal2( [76.62, 128.4, 84] ) 		-> [ 76.62, 128.4, 84 ]
decimal2( [20987, 3.53245, 12.345, 32.9] ) 	-> [ 20987, 3.53, 12.35, 32.90 ]
decimal2( [ ] ) 			-> [  ]
decimal2( [4.35623, 8.9742] ) 		-> [ 4.36, 8.97 ]
 */
const decimal2_ = (arr) => {
    return arr.map(num => {
        return Number(num.toFixed(2)); 
      });
}
const decimal2 = (arr) => {
    return arr.map(num => {
        return Math.round(num * 100) / 100; 
      });
}

console.log(decimal2([94.356, 8.9752]));
console.log(decimal2([76.62, 128.4, 84]));
console.log(decimal2([20987, 3.53245, 12.345, 32.9]));
console.log(decimal2([20987, 3.53245, 12.345, 32.9]));
console.log(decimal2([ ]));
console.log(decimal2([4.35623, 8.9742]));

/**
 * Task 4
 * Requirement:
Write a function named myPow() which takes two numbers, x and n, as its arguments and returns x to the power of n without using Math.pow(). 3 to the power of 3 is 3*3*3 = 27. 
NOTE: Any number to the power of 0 equals 1. Any number to the power of 1 equals the number itself.
myPow(3, 3) 	-> 27
myPow(10, 1) 	-> 10
myPow(100, 0) 	-> 1
myPow(1, 1) 	-> 1
myPow(4, 2)  ​	-> 16
myPow(0, 0)  	​-> 1
myPow(5, 3)  ​	-> 125
 * 
 */

const myPow = (num1,num2) => {
    let result = 1;
  
  for(let i = 0; i < num2; i++) {
    result *= num1;
  }
  
  return result;
}

console.log(myPow(3, 3));
console.log(myPow(10, 1));
console.log(myPow(100, 0));
console.log(myPow(1, 1));
console.log(myPow(4, 2));
console.log(myPow(0, 0));
console.log(myPow(5, 3));


/**
 * Task 5
 * Requirement:
Write a function named findLongestWord() which takes a string as input and returns the longest word in the string.
NOTE: If the string is empty or consists of spaces only, then return empty string.
NOTE: If the string consists of multiple words having the longest word, then return the first occurrence.
findLongestWord("The quick brown fox jumped over the lazy dog") 	-> "jumped"
findLongestWord("This is a sample string for testing") 		->"testing" 
findLongestWord("One two ten") 				-> "One"
findLongestWord("") 					-> ""
findLongestWord(    "  ") 					-> ""
 */

const findLongestWord = (str) => {
    if (!str || str.trim().length === 0) {
        return '';
      }
    
      const words = str.split(' '); 
      let longest = words[0];
    
      for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
          longest = words[i];
        }
      }
    
      return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("This is a sample string for testing"));
console.log(findLongestWord("One two ten"));
console.log(findLongestWord(""));
console.log(findLongestWord("      "));


/**
 * Task 1
 * Requirement:
Write a function named countVC() which takes a string argument and returns 
an object with the count of vowels and consonants.
Examples:
countVC("Hello")               -> {vowels: 2, consonants: 3}
countVC("Programming")   -> {vowels: 3, consonants: 8}
countVC("123AbC")               -> {vowels: 1, consonants: 2}
countVC("123!@#xyz")             -> {vowels: 0, consonants: 3}
countVC("")                           -> {vowels: 0, consonants: 0}
 */


const countVC = (str) => {

    let vowels = 0;
    let consonants = 0;
      
      if(!str || str === "") {
        return {vowels: 0, consonants: 0}; 
      }
      
      const letters = str.toLowerCase().match(/[a-z]/gi);
      
      if(letters) {
        letters.forEach(char => {
            if("aeiou".includes(char)) {
            vowels++;
          } else {
            consonants++;  
          }
          
        });
      }
    
      return {
        vowels,
        consonants
      };
    
    }
    
    console.log(countVC("Hello"))
    console.log(countVC("Programming"))
    console.log(countVC("123AbC"))
    console.log(countVC("123!@#xyz"))
    console.log(countVC(" "))
    
    /**
     * Task 2
     * Requirement:
    Write a function named countChars() which takes a string argument and 
    returns an object with the count of letters, numbers, and specials.
    NOTE: If the count of a category is 0 then it should not be in the object. Also 
    spaces do not count towards any category
    Examples:
    countChars("Hello")                           -> {letters: 5}
    countChars("Programming 123")   -> {letters: 11, numbers: 3}
    countChars("123AbC!@#")               -> {letters: 3, numbers: 3, specials: 3}
    countChars("0987654321")               -> {numbers: 10}
    countChars("     ")                                  -> {}
    countChars("")                                       -> {}
     */
    
    const countChars = (str) => {
    
        const counts = {};
      
      if(!str) {
        return counts;
      }
    
      str = str.replace(/\s/g, '');
    
      if(str.match(/[a-z]/i)) {
        counts.letters = str.match(/[a-z]/gi).length;
      }
    
      if(str.match(/\d/)) {
        counts.numbers = str.match(/\d/g).length;
      }
    
      if(str.match(/[^a-z\d\s]/i)) {
        counts.specials = str.match(/[^a-z\d\s]/gi).length;
      }
    
      return counts;
    }
    
    console.log(countChars("Hello"))
    console.log(countChars("Programming 123")) 
    console.log(countChars("123AbC!@#")) 
    console.log(countChars("0987654321"))
    console.log(countChars(""))
    
    /**
     * Task 3
     * Requirement:
    Write a function named maxOccurrences() which takes a string argument and 
    returns the character that appears the most number of times in the string.
    NOTE: If there is a tie, return the first one that appears in the string. This task is 
    case sensitive. Ignore spaces. If the string is empty or consist of spaces only, 
    then return an empty string.
    Examples:
    maxOccurrences("Hello")             -> "l"
    maxOccurrences("Occurrences")  -> "c"
    maxOccurrences("    ab    ")      -> "al"
    maxOccurrences("12   3   21")    -> "1"
    maxOccurrences("      ")      -> ""
    maxOccurrences("")    -> ""
     */
    
    const maxOccurrences = (str) => {
        if (str.trim() === "") return "";
    
      const charMap = {};
      let maxChar = '';
      let maxCount = 0;
    
      for(let char of str) {
        if(char !== ' ') {
          if(!charMap[char]) {
            charMap[char] = 1; 
          } else {
            charMap[char]++;
          }
    
          if(charMap[char] > maxCount) {
            maxChar = char;
            maxCount = charMap[char];
          }
        }
      }
    
      return maxChar;
    
    }
    
    console.log(maxOccurrences("Hello"))
    console.log(maxOccurrences("Occurrences"))
    console.log(maxOccurrences("    ab    "))
    console.log(maxOccurrences("12   3   21"))
    console.log(maxOccurrences("      "))
    console.log(maxOccurrences(""))
    
    /**
     * Task 4
     * Requirement:
    Write a function named starOut() which takes a string argument and returns it 
    back with every star removed as well as the right and left of the star.
    NOTE: If there are 2 stars next to each other than remove the next non star
    So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
    Examples:
    starOut("ab*cd")  -> "ad"
    starOut("ab**cd")  -> "ad"
    starOut("xm*sm*sy")  -> "xy"
    starOut("abc")     -> "abc"
    starOut("***")    -> ""
    starOut("   ")      -> "   "
    starOut("")    -> ""
     */
    const starOut =(str) => {
    
        let result = "";
      
        let prevChar = "";
      
        for (let char of str) {
      
          if (char === "*" && prevChar !== "*") {
      
            prevChar = "";
      
            continue;
      
          } else if (char !== "*" && prevChar === "*") {
      
            prevChar = "";
      
            continue;  
      
          } else {
      
            result += char;
      
            prevChar = char;
      
          }
      
        }
      
        return result;
      
      }
      
    
    
    console.log(starOut("ab*cd")); 
    console.log(starOut("ab**cd")); 
    console.log(starOut("xm*sm*sy")); 
    console.log(starOut("abc"));
    console.log(starOut("***")); 
    console.log(starOut(" ")); 
    console.log(starOut(""));
    
    /**
     * Task 5
     * Requirement:
    Write a function named romanToInt() which takes a string roman numeral as 
    its arguments and return the roman numeral converted to the number. A roman 
    numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 
    112
    NOTE: 
    Symbol       Value
    I                  1
    V                 5
    X                10
    L                 50
    C                100
    D                500
    M               1000
    Examples:
    romanToInt("I")  -> 1
    romanToInt("IV")  -> 4
    romanToInt("CXII")  -> 112
    romanToInt("MMM")  -> 3000
    romanToInt("MMMDCCCLXXXVIII")   -> 3888
    romanToInt("MDCLXVI")    -> 1666
     */
    
    
    function romanToInt(roman) {
        const romans = {
          I: 1,
          V: 5,
          X: 10, 
          L: 50,
          C: 100,
          D: 500,
          M: 1000
        };
        
        let total = 0;
        let prev = 0;
        
        for(let i = roman.length - 1; i >= 0; i--) {
          let num = romans[roman[i]];
          if(num < prev) {
            total -= num;
          } else {
            total += num;
          }
          prev = num;
        }
        
        return total;
      }
    
    console.log(romanToInt("I"));
    console.log(romanToInt("IV"));  
    console.log(romanToInt("CXII")); 
    console.log(romanToInt("MMM")); 
    console.log(romanToInt("MMMDCCCLXXXVIII")); 
    console.log(romanToInt("MDCLXVI"));

    /**
 * Task 1
 * Requirement:
Write a function named repeatingX() which takes a string argument and returns true if the letter x is followed by another x. Otherwise, return false.
NOTE: This method should be case-insensitive.
Examples:
repeatingX("xTechxGlobalx") 	-> false
repeatingX("Hello Xx World") 	-> true
repeatingX("x x") 		-> false
repeatingX("") 		-> false
repeatingX("xxxxx") 		-> true
 */

const repeatingX = (str) => {
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++){
        if (str[i] === 'x'){
            if (i +1 < str.length && str[i+1] === 'x'){
                return true;
            }
        }
    }
    return false;
}

console.log(repeatingX("xTechxGlobalx")); 
console.log(repeatingX("Hello Xx World")); 
console.log(repeatingX("x x")); 
console.log(repeatingX(""));  
console.log(repeatingX("xxxxx"));

/**
 * Task 2
 * Requirement:
Write a function named isPerfectSquare() which takes a number as an argument and checks if it is a perfect square. It returns true if the number is a perfect square and false otherwise.
NOTE: A perfect square is a number that can be expressed as the product of an integer by itself or as the second exponent of an integer. For example, 25 is a perfect square because it is the product of integer 5 by itself, 5 × 5 = 25. However, 21 is not a perfect square number because it cannot be expressed as the product of two same integers.
Examples:
isPerfectSquare(25) 	-> true
isPerfectSquare(24) 	-> false
isPerfectSquare(0) 	-> true
isPerfectSquare(1) 	-> true
isPerfectSquare(-1) 	-> false
isPerfectSquare(144) 	-> true
 * 
 */

const isPerfectSquare = num => {
    if (num < 0) {
        return false;
    }

    const sqrtNum = Math.sqrt(num)
    return Math.floor(sqrtNum) === sqrtNum;
}

console.log(isPerfectSquare(25)); 
console.log(isPerfectSquare(24)); 
console.log(isPerfectSquare(0));   
console.log(isPerfectSquare(1)); 
console.log(isPerfectSquare(-1)); 
console.log(isPerfectSquare(144));

/**
 * Task 3
 * Requirement:
Write a function named convertTemperature() which takes a number and a string arguments to be considered as a temperature value and a unit (either Celsius or Fahrenheit) as arguments and converts the temperature to the other unit.
NOTE: Use below formulas to convert temperature:
Celsius to Fahrenheit: temp * 9/5) + 32
Fahrenheit to Celsius: temp - 32) * 5/9
Examples:
convertTemperature(100, 'Celsius’) 		-> 212
convertTemperature(32, 'Fahrenheit’) 	-> 0
convertTemperature(0, 'Celsius’) 		-> 32
convertTemperature(212, 'Fahrenheit’) 	-> 100
convertTemperature(-40, 'Celsius’) 		-> -40
convertTemperature(-40, 'Fahrenheit’) 	-> -40
 */

const convertTemperature = (temp, unit) => {

    const celsiusToFahrenheit = (temp) => temp * 9/5 + 32;
  
    const fahrenheitToCelsius = (temp) => (temp - 32) * 5/9;
  
    let convertedTemp;
  
    switch(unit.toLowerCase()) {
      case 'celsius':
        convertedTemp = celsiusToFahrenheit(temp);
        break;
  
      case 'fahrenheit':
        convertedTemp = fahrenheitToCelsius(temp);
        break;
      
      default:
        convertedTemp = null;
    }
  
    return convertedTemp;
  }
  
  // Test cases
  console.log(convertTemperature(100, 'Celsius')); 
  console.log(convertTemperature(32, 'Fahrenheit'));
  console.log(convertTemperature(0, 'Celsius'));
  console.log(convertTemperature(212, 'Fahrenheit')); 
  console.log(convertTemperature(-40, 'Celsius'));
  console.log(convertTemperature(-40, 'Fahrenheit'));




/**
 * Task 4
 *Requirement:
Write a function named sumOfEvenNumbers() which takes an array as an argument and returns the sum of all the even numbers in an array.
Examples:
sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ) 		-> 30
sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ) 	-> 110
sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ) 	-> 0
sumOfEvenNumbers( [ ] ) 			-> 0
sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ) 			-> 6
sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] ) 		-> 150
 */


const sumOfEvenNumbers = (arr) => {
    let sum = 0;
    
    arr.forEach(num => {
      if(num % 2 === 0) {
        sum += num;
      }
    });
    
    return sum;
  }
  
  console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
  console.log(sumOfEvenNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])); 
  console.log(sumOfEvenNumbers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])); 
  console.log(sumOfEvenNumbers([])); 
  console.log(sumOfEvenNumbers([1, 2, 3, 4 ,5])); 
  console.log(sumOfEvenNumbers([10, 20, 30, 40, 50])); 

/**
 * Task 5
 * Requirement:
Write a function named capsOdds() which takes an array argument and returns the array with all the odd index elements capitalized (converted to uppercase).
Examples:
capsOdds(["Hello", "World"]) 			-> ["Hello", "WORLD"]
capsOdds(["Jan", "Feb", "Mar", "Apr"]) 		-> ["Jan", "FEB", "Mar", "APR"]
capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]) 	-> ["Apple", "BANANA", "123", "456", "Peach", "KIWI"]
capsOdds([ ]) 				-> [ ]
capsOdds(["John !@#$%", "^&*() Doe"]) 		-> ["John !@#$%", "^&*() DOE"]
 */

function capsOdds(arr) {
    return arr.map((item, index) => {
      if(index % 2 !== 0) {
        return item.toUpperCase();  
      } else {
        return item;
      }
    });
  }
  
  console.log(capsOdds(["Hello", "World"])); 
  console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]));  
  console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])); 
  console.log(capsOdds([]));
  console.log(capsOdds(["John !@#$%", "^&*() Doe"]))

  /**
 * Task 1
 * Requirement:
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces
Examples:
toCamelCase("first name")  ->"firstName"
toCamelCase("last     name")  ->"lastName"
toCamelCase("   ZIP CODE")  ->"zipCode"
toCamelCase(“I Learn Java Script”)    -> "iLearnJavaScript"
toCamelCase(“helloWorld”)     -> “helloWorld”
 */

const  toCamelCase = (str)  =>{
    if(!str.includes(' ')) return str
    let words = str.trim().toLowerCase().split(/\s+/);
  
    for (let i = 1; i < words.length; i++) {  
      let word = words[i];
      words[i] = word[0].toUpperCase() + word.slice(1); 
    }
  
    return words.join('');
  }

  console.log(toCamelCase("first name"))
  console.log(toCamelCase("I Learn Java Script"))
  console.log(toCamelCase("helloWorld") )
  console.log(toCamelCase("   ZIP CODE"))
  console.log(toCamelCase("last     name"))


/**
 * Task 2
 * Requirement:
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase.
Examples:
toSnakeCase("first name")  ->"first_name"
toSnakeCase("last    name")  ->"last_name"
toSnakeCase("    I love Java Script")  ->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")     -> "hello"
 */

const toSnakeCase = (str) => {
 
    arr = []

    for(const word of str.split(' ')){
        if(word.length >= 1) 
        arr.push(word.toLowerCase())
    }

    return arr.join('_')
}

console.log(toSnakeCase("first name"))
console.log(toSnakeCase("last    name"))
console.log(toSnakeCase("    I love Java Script"))
console.log(toSnakeCase("already_snake_case"))
console.log(toSnakeCase("hello"))



/***
 * Task 3
 * Requirement:
Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored.
Examples:
alternatingCases("Hello")  -> "HeLlO"
alternatingCases("basketball")  -> "BaSkEtBaLl"
alternatingCases("Tech Global")  -> "TeCh GlObAl"
alternatingCases("")  -> ""`    
alternatingCases("123!@#aB")  -> "123!@#Ab"
 */


const alternatingCases = (str) => {

    let result = '';
    let upper = true;
    
    for(let i = 0; i < str.length; i++) {
      let char = str[i];
      
      if(char >= 'a' && char <= 'z' ||char >= 'A' && char <= 'Z') {
        result += upper ? char.toUpperCase() : char.toLowerCase();
        upper = !upper;
      } else {
        result += char; 
      }
    }
    
    return result;
  
  }

  
  console.log(alternatingCases("Hello"))
  console.log(alternatingCases("basketball"))
  console.log(alternatingCases("Tech Global"))
  console.log(alternatingCases(""))
  console.log(alternatingCases("123!@#aB"))

/***
 * Task 4
 * Requirement:
Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length.
Examples
isNeutral("-", "+")      ->  "0"
isNeutral("-+", "-+")  ->   "-+"
isNeutral("-++-", "-+-+")            ->  "-+00"
isNeutral("--++--", "++--++")      ->  "000000"
isNeutral("+++", "+++")            ->  "+++"
 */


const isNeutral = (str1, str2) => {
    let result = "";
  
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === str2[i]) {
        result += str1[i]; 
      } else {
        result += "0";
      }
    }
  
    return result;
  }

  console.log(isNeutral("-", "+"))
  console.log(isNeutral("-+", "-+"))
  console.log(isNeutral("-++-", "-+-+"))
  console.log(isNeutral("--++--", "++--++") )
  console.log(isNeutral("+++", "+++"))


/***
 * Task 5
 * Requirement:
Write a function named isTrueOrFalse() which takes a string with sets of character/words 
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should 
be treated the same), you need to determine whether it falls into the positive/first half of the 
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or 
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
Examples
isTrueOrFalse("A big brown fox caught a bad rabbit")  -> true
isTrueOrFalse("Xylophones can obtain Xenon.")    ->  false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")  -> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")  -> true
isTrueOrFalse("Got stuck in the Traffic")  -> false
 */

const isTrueOrFalse = (str) =>{
    let positive = 0;
    let negative = 0;
    
    const words = str.split(' ');
    
    for (let word of words) {
      const  upperChar = word[0].toUpperCase();
      if (upperChar >= 'A' && upperChar <= 'M') {
        positive++;
      } else if (upperChar >= 'N' && upperChar <= 'Z') {
        negative++;
      }
    }
    
    return positive >= negative; 
  }

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"))
console.log(isTrueOrFalse("Xylophones can obtain Xenon."))
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"))
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe"))
console.log(isTrueOrFalse("Got stuck in the Traffic"))
 

/**
 * TASK 1
 * Requirement:
Write a function named toInitials() which takes a string argument considered 
to be full name and returns initials of the given full name.
NOTE: Initials should be separated with a space and followed with a period.
Assume you will always be given first name and last name only. 
Examples:
toInitials( "Joe Doe")  -> "J. D."
toInitials( "Alex Reyes")  -> "A. R."
toInitials( "Tom Cruise")  -> "T. C."
toInitials( "Bruce Willis")  -> "B. W."
 */

const toInitials =(name) => {
    const names = name.split(' ');
    return `${names[0][0]}. ${names[1][0]}.`;
  }





/**
 * TASK 2
 * Requirement:
Write a function named hasNumbers() which takes a string argument and 
returns true if there is a number and false if there isn’t. 
Examples:
hasNumbers("")  -> false
hasNumbers("John is 34 years old")  -> true
hasNumbers("Hello 3")  -> true
hasNumbers("125$")  -> true
hasNumbers("   a   ")  -> false
hasNumbers("      ")  -> false
hasNumbers("!@#$%^&*()_+")  -> false
 */

const hasNumbers = (str) => {
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (!isNaN(parseInt(char))) {
        return true;
      }
    }
    return false;
  }

  console.log(hasNumbers("abc")); 
  console.log(hasNumbers("123")); 
  console.log(hasNumbers("1bc")); 


/**
 * TASK 3
 * Requirement:
Write a function named elementLength() which takes an array argument and returns the length of each element as a separate array.
Examples:
elementLength( [ "Hello", "World" ] ) 			-> [ 5, 5 ]
elementLength( [ "Apple", "Banana", "Orange", "Pear" ] ) 	-> [ 5, 6, 6, 4 ]
elementLength( ["BMW", "Mercedes", "Audi" ] ) 		-> [ 3, 8, 4 ]
elementLength( [ ] ) 				-> [ ]
elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] ) 	-> [ 10, 0, 6, 10 ]
 */

const elementLength = arr =>  arr.map(el => el.length); 
    
console.log(elementLength( [ "Hello", "World" ] ) );


/**
 * TASK 4
 * Requirement:
Write a function named isArraySumEvenOrOdd() which takes an array of numbers and calculates if the sum of its elements is even or odd.
Note: If the array is empty return even.
Examples:
isArraySumEvenOrOdd( [ ] ) 	-> "even"
isArraySumEvenOrOdd( [ 0,-1,-5 ] )      -> "even"
isArraySumEvenOrOdd( [ 7,1, 8,1 ] )     ->  "odd”
isArraySumEvenOrOdd( [ 0,0 ] ) 	->  "even"
isArraySumEvenOrOdd( [ 1,1,1,1,1 ] )   ->  "odd”
 */

const isArraySumEvenOrOdd =(arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum % 2 === 0 ? 'even' : 'odd';
  }

console.log(isArraySumEvenOrOdd( [ ] ))
console.log(isArraySumEvenOrOdd( [ 0,-1,-5 ] ))
console.log(isArraySumEvenOrOdd( [ 7,1, 8,1 ] ))

/**
 * TASK 5
 * Requirement:
Write a function named reverse() which takes a string argument and returns the given string reversed. 
Examples:
reverse("Hello World") 		-> "dlroW olleH"
reverse("TechGlobal") 		-> "labolGhceT"
reverse("Basketball is fun") 	-> "nuf si llabteksaB"
reverse("") 			-> ""
reverse("Apples 456") 		-> "654 selppA"
 */

const reverse = (str) =>  str.split('').reverse().join('');

console.log(reverse("Hello World"))


/**
 * TASK 6
 * Requirement:
Write a function named reverseWords() which takes a string argument and returns a string with each word within that string reversed but still in the same order as the initial string. 
Examples:
reverseWords("Hello World") 	-> "olleH dlroW"
reverseWords("TechGlobal") 	-> "labolGhceT"
reverseWords("Basketball is fun") 	-> "llabteksaB si nuf"
reverseWords("") 		-> "”
reverseWords("Apples 456") 	-> "selppA 654"
 */

const reverseWords =(str) => {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords("Hello World"))
  
/**
 * Task 1
 * Requirement:
Write a function named findMedian() which takes two arrays of numbers as its arguments and return the median of the two sorted arrays. 

NOTE: The median is the middle number of a sorted array. So the median of [1,3], [2] would be 2. 
If the array has an even length, you are to find the average of the 2 middle numbers
findMedian([1, 3], [2]) 		-> 2
findMedian([1, 2], [3, 4]) 		-> 2.5
findMedian([4], [3]) 		-> 3.5
findMedian([4], [])  		-> 4
findMedian([0], [0,1])  		​-> 0
 */

const findMedian = (arr1, arr2) => {
    const mergedArray = [...arr1,...arr2].sort((a,b) => a - b);
    const middleIn = Math.floor(mergedArray.length/2);

    if (mergedArray.length % 2 === 0) {
        return (mergedArray[middleIn - 1] + mergedArray[middleIn]) / 2; 
      } else {
        return mergedArray[middleIn];
      }
}

console.log(findMedian([1, 3], [2])); 
console.log(findMedian([1, 2], [3, 4]));
console.log(findMedian([4], [3]));
console.log(findMedian([4], []));
console.log(findMedian([0], [0, 1]));

/**
 * Task 2
 * Requirement:
Write a function named calculateFactorial() which takes a number as an argument and returns the factorial of that number.
Note: Factorial is the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point. Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is defined as equal to 1.
calculateFactorial(0) 	-> 1
calculateFactorial(1) 	-> 1
calculateFactorial(5) 	-> 120
calculateFactorial(6) 	-> 720
calculateFactorial(10) 	-> 3628800
calculateFactorial(4) 	-> 24

 */


const calculateFactorial = (num) => {

if (num <= 1) return 1;
let result = 1;
    for (let i = 1; i<= num; i++){
        result *=i;
    }
return result;
}

console.log(calculateFactorial(0))
console.log(calculateFactorial(1))
console.log(calculateFactorial(5))
console.log(calculateFactorial(6))
console.log(calculateFactorial(10))
console.log(calculateFactorial(4) )

/**
 * Task 3
 * Requirement:
Write a function named calculateGCD() which takes two numbers as arguments and returns the greatest common divisor of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that divides two or more integers without leaving a remainder. 
In other words, it is the largest number that is a common factor of two or more numbers.
Examples:
calculateGCD(8, 12) 	-> 4
calculateGCD(17, 5) 	-> 1
calculateGCD(48, 18) 	-> 6
calculateGCD(0, 5) 	-> 5
calculateGCD(21, 14) 	-> 7
calculateGCD(60, 48) 	-> 12

 */
const calculateGCD_ = (num1 , num2) =>{
        let gcd = 1;
        
        for(let i = 1; i <= Math.min(num1, num2); i++) {
          if(num1 % i == 0 && num2 % i == 0) {
            gcd = i; 
          }
        }
      
        return gcd;
      }
console.log(calculateGCD_(8, 12));
console.log(calculateGCD_(17, 5));
console.log(calculateGCD_(48, 18));
console.log(calculateGCD_(0, 5));
console.log(calculateGCD_(21, 14));
console.log(calculateGCD_(60, 48));



/**
 * Task 4
 * Requirement:
Write a function named calculateLCM() which takes two numbers as arguments and returns the least common multiple of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that divides two or more integers without leaving a remainder. 
In other words, it is the largest number that is a common factor of two or more numbers.
Examples:
calculateLCM(8, 12) 	-> 24
calculateLCM(17, 5) 	-> 85
calculateLCM(48, 18) 	-> 144
calculateLCM(0, 5) 	-> 0
calculateLCM(21, 14) 	-> 42
calculateLCM(60, 48) 	-> 240
 */

const calculateGCD = (num1 , num2) =>{
        let gcd = 1;
        
        for(let i = 1; i <= Math.min(num1, num2); i++) {
          if(num1 % i == 0 && num2 % i == 0) {
            gcd = i; 
          }
        }
      
        return gcd;
      }


const calculateLCM = (a, b) => {
    const gcd = calculateGCD(a,b);
    
    return (a * b) / gcd;
}

console.log(calculateLCM(8, 12));
console.log(calculateLCM(17, 5));
console.log(calculateLCM(48, 18));
console.log(calculateLCM(0, 5));
console.log(calculateLCM(21, 14));
console.log(calculateLCM(60, 48));