

let name= "John"

//length property: it returns the total count of the characters in the string

let totalChars = name.length;
console.log(totalChars); //4 , stored in a variable
console.log(name.length); // 4, but not stored in a variable

console.log(typeof totalChars);   //number
console.log(typeof name.length); //number


//String - changing cases to UpperCase (camelcase rule is used to name it) vs toLowerCase.
let greeting ="Good Morning";

let lowerGreeting = greeting.toLowerCase();
let upperGreeting = lowerGreeting.toUpperCase();

console.log(greeting); //Good Morning -string
console.log(lowerGreeting); // good morning -string
console.log(greeting.toLowerCase()); // good morning -string
console.log(greeting.toUpperCase()); // GOOD MORNING -string


//Tricky Strings 
console.log("123ABC@#  $@  %$#%".toLowerCase()); //123 abc@#  $@  %$#%
console.log("".toLowerCase()); //
console.log("    ".toLowerCase) //// 

//String - Extracting Characters
// []-Property access - most common way to extract characters
let city = "CHICAGO";
console.log(city[0]); //C
console.log(city[3]); //C
console.log(city[6]); //O

let firstChar = city[0];
console.log(firstChar); //C
console.log(typeof firstChar); //String
//Tricky Part  
console.log(city[7]); //undefined


console.log("\n---------------\n"); //

//charAt() function
console.log(city.charAt(0)); //C
console.log(city.charAt(3)); //C
console.log(city.charAt(6)); //O
console.log(city.charAt(city.length - 1)); //O
//Tricky Part
console.log(city.charAt(7)); // Empty 
console.log(city.charAt(10)); // Empty 
console.log(city.charAt(100)); // Empty 
console.log(city.charAt(-3)); // Empty 

console.log(typeof city.charAt(0)); //string
console.log(typeof city.charAt(3)); //string
console.log(typeof city.charAt(6)); //string
console.log(typeof city.charAt(7)); //string
console.log(typeof city.charAt(100)); //string
console.log(typeof city.charAt(-3)); //string

//charCodeAt() -returns the Decimal representation of the character in the ASCII Table
let country = "USA";
console.log(country.charCodeAt(0)); //85
console.log(country.charCodeAt(1)); //83
console.log(country.charCodeAt(2)); //65
console.log(country.charCodeAt(3)); //NaN- because 3 doesn't 

