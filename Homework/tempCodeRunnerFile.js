function categorizeCharacters(word) {
    const result = [[], [], []];
    
    for (let char of word) {
      if (char >= '0' && char <= '9') {
        result[1] += char; 
      } else if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
        result[0] += char;
      } else {
        result[2] += char;
      }
    }
  
    return result;
  }

console.log(categorizeCharacters("1234")); 
console.log(categorizeCharacters("abc123$#%")); 
console.log(categorizeCharacters("12ab$%3c%")); 