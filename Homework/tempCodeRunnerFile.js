
function romanToInt(roman) {
    const romans = {
      I: 1,
      V: 5,
      X: 10, 
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    
    let total = 0;
    let prev = 0;
    
    for(let i = roman.length - 1; i >= 0; i--) {
      let num = romans[roman[i]];
      if(num < prev) {
        total -= num;
      } else {
        total += num;
      }
      prev = num;
    }
    
    return total;
  }

console.log(romanToInt("I")); // 1
console.log(romanToInt("IV")); // 4 
console.log(romanToInt("CXII")); // 112
console.log(romanToInt("MMM")); // 3000  
console.log(romanToInt("MMMDCCCLXXXVIII")); // 3888
console.log(romanToInt("MDCLXVI")); // 1666