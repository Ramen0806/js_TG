/*Task 1
 Requirement:
Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)

Multiply number with 5 and print the result with below message

Expected result:
The random number * 5 = {result}


PSEUDO CODE: 
1. Find a random number between 0 and 50 (both 0 and 50 are included)
2. Multiply the result with 5 
3. print the result with message
*/ 

randomNumber = (Math.floor(Math.random() * 51));
console.log("The random number " + randomNumber);
console.log("The random number * 5 " + randomNumber * 5 );


//Task 2

/*
Requirement:
Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)

Find the min number
Find the max number
Find the absolute difference of the numbers

Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}
*/

randomNumber1 = (Math.ceil(Math.random() * 10));
randomNumber2 = (Math.ceil(Math.random() * 10));
Min =  Math.min((randomNumber1));
Max =  Math.max((randomNumber2));
console.log("Min number = " + Math.min(Min));
console.log("Max number = " +Math.max(Max));
console.log("Difference = " + Math.abs((Max - Min )));

//OR 
 
let random1 = Math.ceil(Math.random() * 10);
let random2 = Math.ceil(Math.random() * 10);
console.log("Max number = " + Math.max(random1, random2));
console.log("Min number = " + Math.min(random1, random2));
console.log("Difference = " + Math.abs(random1 - random2));


//Task 3
/*

Requirement:
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

Find the remainder of the number by 10

Expected result:
The random number % 10 = {result}

*/


//Homework for tmw: come up with a way to generate random number between x and y (both included)
//Math.floor(Math.random() * (y - x +1) + x

 randomNumber_ = Math.floor(Math.random()* (100 - 50 + 1) + 50);
 remainderNumber = (randomNumber_ % 10);
 console.log ("The random number % 10 =  " + remainderNumber )

//Task 4
/*

Requirement:
Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points

Test data:
3 7 2 1 8

Expected result:
59
*/

let _random1 = Math.ceil(Math.random() * 10);
let _random2 = Math.ceil(Math.random() * 10);
let _random3 = Math.ceil(Math.random() * 10);
let _random4 = Math.ceil(Math.random() * 10);
let _random5 = Math.ceil(Math.random() * 10);
console.log("Expected result: " +((_random1 * 5) + (_random2 * 4) +( _random3 * 3) +(_random4 * 2) +(_random5 * 1)));

//Task 5
/*
Requirement:
Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/

let $random1 = Math.floor((Math.random() * 25) + 1); //1-25
let $random2 = Math.floor(Math.random() * (50 - 26 + 1) + 26); //26-50
let $random3 = Math.floor(Math.random() * (75 - 51 + 1) + 51); //51-75
let $random4 = Math.floor(Math.random() * (100 - 76 + 1) + 76); //76-100
let maxNumber_ = Math.max($random1, $random2, $random3, $random4); //max
let minNumber_ = Math.min($random1, $random2, $random3, $random4); //min
diff_of_max_and_min = Math.abs(maxNumber_ - minNumber_);
diff_of_second_and_third = Math.abs($random2 - $random3);
$$average_of_all = (($random1 + $random2 + $random3 + $random4)/ 4);
console.log("Difference of max and min = " + diff_of_max_and_min);
console.log("Difference of second and third = " + diff_of_second_and_third);
console.log("Average of all = " + $$average_of_all);

//OR

let $$random1 = Math.floor((Math.random() * 25) + 1); //1-25
let $$random2 = Math.floor(Math.random() * (50 - 26 + 1) + 26); //26-50
let $$random3 = Math.floor(Math.random() * (75 - 51 + 1) + 51); //51-75
let $$random4 = Math.floor(Math.random() * (100 - 76 + 1) + 76); //76-100
console.log("Difference of max and min = " + ($$random4 - $$random3));
//continue the rest//