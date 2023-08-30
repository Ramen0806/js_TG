

let word = "John Doe";
let countO = 0;
for (let i = 0; i < word.length; i++) {
   if (word[i] === "o") console.log(word[i]);
}

for (let i = 0; i < word.length; i++) {
    if (word[i] === 'o') countO++;
}

console.log(countO);

let countV = 0

for (let i = 0; i < word.length; i++) {
    if ('AEOUIaeiuio'.includes(word[i])) countV++;
}

console.log(countV);



