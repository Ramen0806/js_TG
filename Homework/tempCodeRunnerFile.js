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