//Extracting substrings



let word = "JavaScript";

//slice() function - extract a part of a string
console.log(word.slice(0, 4)); //Java
console.log(word.slice(4)); //Script
console.log(word.slice(4, 10)); //Script

console.log(word.substring(2, 5)); //vaS
console.log(word.substring(4, 7)); //Scr
console.log(word.substring(7)); //ipt
console.log(word.substring(3, 8)); //aScri
console.log(word.slice(2, 5)); //vaS
console.log(word.slice(4, 7)); //Scr
console.log(word.slice(7)); //ipt
console.log(word.slice(3, 8)); //aScri


//Tricky Part

let car = "Tesla"; //0-4
//console.log(car.slice(2,15)); //sla
//console.log(car.substring(2,15)); //sla

console.log(car.slice(-3,2)); //
console.log(car.substring(-3,2)); //0,2
console.log(car.substring(3,-1)); 
console.log(car.slice(3,-1));

//split
let sentence = "JavaScript is the most used programming language";

console.log(sentence.split(" ")); //'JavaScript','is','the','most','used','programming','language'
console.log(sentence.split("")); // 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i','p', 't', ' ', 'i', 's', ' ', 't', 'h','e', ' ', 'm', 'o', 's', 't', ' ', 'u','s', 'e', 'd', ' ', 'p', 'r', 'o', 'g','r', 'a', 'm', 'm', 'i', 'n', 'g', ' ','l', 'a', 'n', 'g', 'u', 'a', 'g', 'e'
console.log(sentence.split("most"));



