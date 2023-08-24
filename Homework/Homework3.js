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

