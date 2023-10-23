const noVowel = (str) => str.split('').filter(i => !('aeiou'.includes(i.toLowerCase()))).join('');


console.log(noVowel("TechGlobal"))
console.log(noVowel("AEOxyz"))
console.log(noVowel("Javascript"))
console.log(noVowel(""))
console.log(noVowel("125$"))