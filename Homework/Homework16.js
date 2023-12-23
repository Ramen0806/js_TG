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
  