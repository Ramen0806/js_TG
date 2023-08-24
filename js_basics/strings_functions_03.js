
//String-Trimming

//trim- removes the whitspaces from the string
// trimStart - remoce the leading whitespace characters from the string
//trimEnd - remoce the ending whitespace characters from the string

let city = "  Chicago    ";

console.log(city.length); //13
console.log(city.trim()); //"Chicago"
console.log(city.trim().length); //"7"

console.log(city.trimStart()); //"Chicago   "
console.log(city.trimStart().length); //"11"

console.log(city.trimEnd()); //"   Chicago"
console.log(city.trimEnd().length); //"9"

let sentence = "    I like               chicago      ";
console.log(sentence.trimStart()); //"I like               chicago      "
console.log(sentence.trimEnd()); //"    I like               chicago"
console.log(sentence.trim()); //"I like               chicago"



//Padding
//padStart() & padEnd() - pad a string with another until the result string reaches the given length.

let number1 = "123"
let number2 = "43756384756"

console.log(number1.padStart(11, " "))
console.log(number2)


// Hello      -> --Hello--

let s1 = "Hello"
let _s1 = s1.padStart(7, "-")
let _s2 = _s1.padEnd(9, "-")
console.log(_s2)
// OR
console.log(s1.padStart(7, "-").padEnd(9, "-")); //
//OR
console.log(`--${s1}--`);

//Concatenation -concat() function - not too useful 

let str1 = "Hello", str2 = "World";
console.log(str1 + " " + str2); //Hello world
console.log(`${str1} ${str2}`); //Hello world

console.log(str1.concat(" ").concat(str2)); //Hello World
