
const findLongestWord = (str) => {
    if (!str || str.trim().length === 0) {
        return '';
      }
    
      const words = str.split(' '); 
      let longest = words[0];
    
      for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
          longest = words[i];
        }
      }
    
      return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("This is a sample string for testing"));
console.log(findLongestWord("One two ten"));
console.log(findLongestWord(""));
console.log(findLongestWord("      "));