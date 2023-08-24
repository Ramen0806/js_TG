

//Evaluting true and false expressions

console.log((3 == "3" || 2 + 5 === "7") && !(5 < 10 || !false)) //false
console.log((!true && !false)|| 5 * 2 === true * 10) //true
console.log(("3" * "5" >= 15 && true == 1 && " " == false && "" ===0)) //false
console.log((!(5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5))) //false
console.log(!(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) || 25 % 4 == "1") //true
console.log(((true && false) || (10 + 5 === "15" && "apple" !== "orange"))) //false
console.log(!(10<=20&&3*2==="6")&&(5+5!==11||false)) //true
console.log(("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false)) //true
console.log((4>=3&&5*2==="10")||!(7!=="7"&&"dog"==="cat")) //false
console.log((20%6!==0&&"apple"==="orange")||!(2+2===4&&true)) //false
console.log((!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10)) //false
console.log((5+3>="8"&&2**3==="8")||!(false||true)) //false
console.log((10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true)) //true
console.log(("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0)) //true
console.log((5*2===9||true)&&!(10-5!==5&&10%3===1)) //true




/*
Find if a number is even or not
Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is even, print true.
Otherwise, print false.
Examples:
1 -> false 2 -> true 5 -> false 10 -> true
*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

let randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
if (randomNumber % 2 === 0){
    console.log(true);
}
else {
console.log(false);
}



/*
Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is odd, print true.
Otherwise, print false.
Examples:
1 -> true 2 -> false 5 -> true 10 -> false
 */


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

let oddRandomNum = getRandomNumber(1,10);
console.log(oddRandomNum);

if (oddRandomNum % 2 !== 0) {
    console.log(true);
}
else{
    console.log(false);
}


/*
Find if a number is positive or not.
Write a program that generates a random number between -5 and 5 (both inclusive). If the random number is positive, print true.
Otherwise, print false.
Examples:
-5 -> false -1 -> false 0 -> false 1 -> true 5 -> true
 */

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max -min + 1)) + min;
}

let posRandomNum = getRandomNumber(-5, 5);
console.log(posRandomNum);

if (posRandomNum > 0) {
    console.log(true);
}

else {
    console.log(false)
}


/*
Find if a number is negative or not.
Write a program that generates a random number between -5 and 5 (both inclusive). If the random number is negative, print true.
Otherwise, print false.
Examples:
-5 -> true -1 -> true 0 -> false 1 -> false 5 -> false
*/

function getRandomNumber(min ,max) {
    return Math.floor(Math.random() * (max - min + 1)) +min;
}

let negRandomNum = getRandomNumber(-5, 5);
console.log(negRandomNum);

if (negRandomNum < 0) {
    console.log(true);
}

else{
    console.log(false);
}



/*
Find if a number is divisible by 5 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). If the random number is divisible by 5, print true.
Otherwise, print false.
Examples:
1 -> false 5 -> true 20 -> true 37 -> false 50 -> true
*/

function getRandomNumber(min , max) {
    return Math.floor(Math.random() * (max - min + 1)) +min;
}

let divisbleRandomNum = getRandomNumber(1 , 50);
console.log(divisbleRandomNum);

if (divisbleRandomNum % 5 === 0) {
    console.log(true);
}

else {
    console.log(false);
}



/*
Find if a number is divisible by 7 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). If the random number is divisible by 7, print true.
Otherwise, print false.
Examples:
1 -> false 7 -> true 35 -> true 49 -> true 50 -> false
*/

function getRandomNumber(min , max) {
    return Math.floor(Math.random() * (max - min +1)) +min;
}

let divisilbeRandomNum2 = getRandomNumber(1 , 50);
console.log(divisilbeRandomNum2);

if (divisilbeRandomNum2 % 7 === 0) {
    console.log(true);
} 

else {
    console.log(false);
}


/*
Calculate the sum of 2 random numbers.
Calculate the absolute difference between 2 random numbers.
Calculate the product of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Calculate the sum of the numbers and print it.
Examples: 3, 5
7, 3
5, 5
1, 10 10, 1
-> 8 -> 10 -> 10 -> 11 -> 11
*/

function getRandomNumber(min , max) {
   return Math.floor(Math.random() * (max - min + 1)) +min;
}

let ranNum1 = getRandomNumber(1, 10);
let ranNum2 = getRandomNumber(1, 10);
console.log(ranNum1);
console.log(ranNum2);
console.log(ranNum1 + ranNum2);

console.log(Math.abs(ranNum1 - ranNum2));
console.log((ranNum1 * ranNum2));

/*
Calculate the square of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). Calculate the square of the number and print it.
Examples:
1 -> 1
2 -> 4
5 -> 25 10 -> 100
Calculate the cube of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). Calculate the cube of the number and print it.
Examples:
1 -> 1
2 -> 8
5 -> 125 
10 -> 1000
*/

function getRandomNumber (min, max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

let squareRanNum = getRandomNumber(1, 10);
console.log(squareRanNum)
console.log(squareRanNum ** 2);

let cubeRanNum = getRandomNumber(1, 10);
console.log(cubeRanNum);
console.log(cubeRanNum ** 3);


/*
Convert miles to kilometers.
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
Examples:
1 -> 1.6 2 -> 3.2 5 -> 8
*/

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomSpeed = getRandomNumber(1, 10);
console.log(randomSpeed);
let milesToKm = (randomSpeed * 1.6);
console.log(milesToKm);



/*
Find if 2 numbers are equal or not.
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). If the numbers are equal, print true.
Otherwise, print false.
Examples: 1, 1
1, 2
2,3
2,2 3, 3
-> true -> false -> false -> true -> false
*/

function getRandomNumber (min, max) {
    return Math.floor(Math.random() *(max - min + 1)) + min;
}

let ranNumber1 = getRandomNumber(1 ,3);
let ranNumber2 = getRandomNumber(1, 3);

console.log(ranNumber1);
console.log(ranNumber2);

if (ranNumber1 === ranNumber2){
    console.log(true);
}

else {
    console.log(false);
}


/*
Find the greatest number between 2 random numbers.
Find the greatest number between 3 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Find the greatest of the numbers and print it.
Examples: 3, 5
7, 3
5, 5
1, 10 10, 1
->5 ->7 ->5 -> 10 -> 10
*/

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rando1 = getRandomNumber(1, 10);
let rando2 = getRandomNumber(1, 10);
let rando3 = getRandomNumber(1, 10);

console.log(rando1);
console.log(rando2);
console.log(rando3);
console.log(Math.max(rando1 , rando2));
console.log(Math.max(rando1 , rando2, rando3));

//Find the smallest number between 3 random numbers.
//Calculate the average of 3 random numbers.
console.log((rando1 + rando2 + rando3)/3);
console.log(Math.min(rando1 , rando2, rando3));


/*
Write a function named as hasFive() which takes a string word as an argument and
returns true if given string has at least 5 characters, and false otherwise when invoked.
*/


function hasFive(word) {
    return word.length >= 5;
}

console.log(hasFive("Tech"));    // Output: false
console.log(hasFive("Global"));  // Output: true
console.log(hasFive(""));        // Output: false
console.log(hasFive("12345"));   // Output: true
console.log(hasFive("hello"));   // Output: true



/*
Write a function named as middle() which takes a string word as an argument 
and returns the middle character if the string has odd length, 
and returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.
*/


function middle(word) {
    if (word.length === 0) {
      return "";
    }
    const middleIndex = Math.floor(word.length / 2);
     if (word.length % 2 === 1) {
      return word.charAt(middleIndex);

    } 
    else {
     
      return word.substring(middleIndex - 1, middleIndex + 1);
    }
  }
  
  // Examples
  console.log(middle("Tech"));    // Output: "e"
  console.log(middle("Global"));  // Output: "ob"
  console.log(middle("abcde"));   // Output: "c"
  console.log(middle("1"));       // Output: "1"
  console.log(middle("abc"));     // Output: "b"
  console.log(middle("1234"));    // Output: "23"
  

  /*
  Longer String
Write a function named as longer() which takes two string words as arguments and returns the string that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.
Examples: longer("Tech", "Global") longer("Hello", "Hi") longer("Hello", "World")

*/

function longer(word1, word2) {
    if (word1.length >= word2.length) {
      return word1;
    } else {
      return word2;
    }
  }
  
  console.log(longer("Tech", "Global"));  // Output: "Global"
  console.log(longer("Hello", "Hi"));     // Output: "Hello"
  console.log(longer("Hello", "World"));  // Output: "Hello"
  

/*
Shorter String
Write a function named as shorter() which takes two String words as arguments and returns the String has less characters when invoked.
NOTE: if both of the words have the same length, then return the second String.
Examples: shorter("Tech", "Global") shorter("Hello", "Hi") shorter("Hello", "World")
Concat Two String
-> "Tech" -> "Hi"
-> "World"
*/

function shorter(word1, word2) {
    if (word1.length < word2.length) {
      return word1;
    } else {
      return word2;
    }
  }
  
  console.log(shorter("Tech", "Global"));  // Output: "Tech"
  console.log(shorter("Hello", "Hi"));     // Output: "Hi"
  console.log(shorter("Hello", "World"));  // Output: "World"
  

/*
Write a function named as concat() which takes two string words as arguments and returns the words concatenated when invoked.
NOTE: Concatenation should always be as first string + second string .
Examples: concat("Tech", "Global") concat("Hello", "World") concat("", "abc") concat("123", "1234")
Starts With Vowel
-> "TechGlobal" -> "HelloWorld" -> "abc"
-> "1231234"
*/

function concat(word1, word2) {
  return word1 + word2;
}

console.log(concat("Tech", "Global"));  // Output: "TechGlobal"
console.log(concat("Hello", "World"));  // Output: "HelloWorld"
console.log(concat("", "abc"));        // Output: "abc"
console.log(concat("123", "1234"));    // Output: "1231234"


/*
Write a function named as startsVowel() which takes a string word as an argument and returns true if given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
Examples: startsVowel("Tech") startsVowel("Apple") startsVowel("abc")
-> false -> true -> true
*/

function startsVowel(word) {
    const firstCharacter = word.charAt(0).toLowerCase();
    return ['a', 'e', 'o', 'u', 'i'].includes(firstCharacter);
  }

  // Examples
  console.log(startsVowel("Tech"));   // Output: false
  console.log(startsVowel("Apple"));  // Output: true
  console.log(startsVowel("abc"));    // Output: true
  
  /*
  Find the quarter of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which quarter of the range the number falls into and print it. 1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
  */

// Generate a random number between 1 and 100 (inclusive)
function getRandomNumber (min , max){
    return Math.floor(Math.random() * (max - min + 1)) +min;
}

let randomNumber0 =  getRandomNumber(1,100);
// Determine the quarter
let quarter;
if (randomNumber0 >= 1 && randomNumber0 <= 25) {
  quarter = "1st";
} else if (randomNumber0 >= 26 && randomNumber0 <= 50) {
  quarter = "2nd";
} else if (randomNumber0 >= 51 && randomNumber0 <= 75) {
  quarter = "3rd";
} else {
  quarter = "4th";
}

// Print the random number and its quarter
console.log(`Random Number: ${randomNumber0}`);
console.log(`Quarter: ${quarter} quarter`);

/*
Area of a rectangle
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked. NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y
*/

function rectangleArea(x, y) {
    const area = x * y;
    return area;
  }
  // Examples
  console.log(rectangleArea(5, 4));  // Output: 20
  console.log(rectangleArea(3, 7));  // Output: 21
  console.log(rectangleArea(6, 10)); // Output: 60
  
/*
Perimeter of a rectangle.
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Perimeter = 2 * (x + y)
*/

function rectanglePerimeter(x, y) {
    const perimeter = 2 * (x + y);
    return perimeter;
  }
  // Examples
  console.log(rectanglePerimeter(5, 4));  // Output: 18
  console.log(rectanglePerimeter(3, 7));  // Output: 20
  console.log(rectanglePerimeter(6, 10)); // Output: 32
  

/*
Write a function named as doubleWord() which takes a string word as an argument and returns the given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
*/

function doubleWord(word) {
    const doubledWord = word + word;
    return doubledWord;
  }
  // Examples
  console.log(doubleWord("Tech"));    // Output: "TechTech"
  console.log(doubleWord("Global"));  // Output: "GlobalGlobal"
  


  /*
First Character
Write a function named as firstCharacter() which takes a string word as an argument and returns the first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
  */

function firstCharacter(word) {
    return word.charAt(0);
  }
  // Examples
  console.log(firstCharacter("Tech"));    // Output: "T"
  console.log(firstCharacter("Global"));  // Output: "G"


/*
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
*/
function firstTwoCharacters(word) {
    if (word.length >= 2) {
      return word.substring(0, 2);
    } 
    else {
 
      return word;
    }
  }
  // Examples
  console.log(firstTwoCharacters("Tech"));    // Output: "Te"
  console.log(firstTwoCharacters("Global"));  // Output: "Gl"
  console.log(firstTwoCharacters("A"));       // Output: "A"




  /*
Write a function named as lastCharacter() which takes a string word as an argument and returns the last character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
  */
  
function lastCharacter(word) {
  return word.charAt(word.length - 1);
}

// Examples
console.log(lastCharacter("Tech"));    // Output: "h"
console.log(lastCharacter("Global"));  // Output: "l"
console.log(lastCharacter(" "));       // Output: " "
console.log(lastCharacter("123"));     // Output: "3"


/*
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/

function lastTwoCharacters(word) {
    if (word.length >= 2) {
      return word.substring(word.length - 2);
    } 
    else {
      return word;
    }
  }
  // Examples
  console.log(lastTwoCharacters("Tech"));    // Output: "ch"
  console.log(lastTwoCharacters("Global"));  // Output: "al"
  console.log(lastTwoCharacters(""));        // Output: ""
  console.log(lastTwoCharacters(" "));       // Output: " "
  console.log(lastTwoCharacters("1"));       // Output: "1"
  

  /*
Write a function named as firstLast() which takes a string word as an argument and returns the first and the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
  */

function firstLast(word) {
    if (word.length >= 2) {
      return word.charAt(0) + word.charAt(word.length - 1);
    } 
    else {
      return word;
    }
  }
  
  // Examples
  console.log(firstLast("Tech"));    // Output: "Th"
  console.log(firstLast("Global"));  // Output: "Gl"
  console.log(firstLast(""));        // Output: ""
  console.log(firstLast(" "));       // Output: " "
  console.log(firstLast("1"));       // Output: "1"
  

  