
//String Searching functions

//search() string function

let text ="Can I can a can";

let result1 = text.search("can");
let result2 = text.search("Can");
let result3 = text.search("Cat");

console.log(result1); // 6 is the index where you can find the first can
console.log(result2); // 0 is the index where you can find the first Can
console.log(result3); // -1 because it doesn't exist

console.log(text.search("")); // 0 Becuase the first empty space is before the first letter
console.log(text.search(" ")); //3
console.log(text.search("  ")); //-1 because it doesn't exist
console.log(text.search(text)); //0 because the text starts at 0 index
console.log(text.search("a")); // 1 because the text starts at 1 index
console.log(text.search("n a")); // 8 because the text starts at 8 index
console.log(text.search("Can I can two cans")); // -1 because it doesn't exist



//includes() string function - contains a subtring

let quote = "I can do it";

let r1 = quote.includes("can");
let r2 = quote.includes("it");
let r3 = quote.includes("It");

console.log(r1); //true
console.log(r2); //true
console.log(r3); //false

console.log(quote.includes(quote)); //true
console.log(quote.includes("a")); //true
console.log(quote.includes("")); //true
console.log(quote.includes(" ")); //true
console.log(quote.includes("  ")); //false



//indexOf() string function vs. lastIndexOf() string function
let greeting = "GOOD MORNING";
console.log(greeting.indexOf("G")); //0
console.log(greeting.lastIndexOf("G")); //11
console.log(greeting.charAt(0)); //G

console.log(greeting.indexOf("GOOD")); //0
console.log(greeting.lastIndexOf("GOOD")); //0
console.log(greeting.indexOf("GOOD MORNING")); //0
console.log(greeting.lastIndexOf("GOOD MORNING")); //0

console.log(greeting.indexOf("GOOD")); //0
console.log(greeting.indexOf("MORNING")); //5
console.log(greeting.indexOf("ING")); //9
console.log(greeting.indexOf("RN")); //7

let sentence = "I like apple and pineapple";
console.log(sentence.indexOf("apple")); //7
console.log(sentence.lastIndexOf("apple")); //21
console.log(sentence.lastIndexOf("apple and grape")); //-1 because the string doesnt exist!
console.log(sentence.indexOf(" ")); //1
console.log(sentence.lastIndexOf(" ")); //16
console.log(sentence.lastIndexOf("")); //26
console.log(sentence.indexOf("")); //0


//startsWith() string function vs. endsWith() string function

let info = "My phone number iw 312-000-0000";

let b1 = info.startsWith("M");
let b2 = info.startsWith("My");
let b3 = info.endsWith("0000");
let b4 = info.startsWith("0000");

console.log(b1); //true 
console.log(b2); //true
console.log(b3); //true
console.log(b4); //false

console.log(info.startsWith("phone")); //false
console.log(info.endsWith("0")); //true
console.log(info.startsWith("info")); // true
console.log(info.endsWith("info")); //true
console.log(info.startsWith("")); //true
console.log(info.endsWith("")); //true






