const hasVowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) { return true; }
    }
    return false;
}
console.log(hasVowel(""));
console.log(hasVowel("JavaScript"));