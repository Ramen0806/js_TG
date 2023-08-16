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



