

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

