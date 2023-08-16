//replace() vs. replaceAll()

let str = "Can I can a can";
console.log(str.replace("can", "AAA"));
console.log(str.replace("cani", "AAA"));
console.log(str.replace(/can/g, "AAA"));
console.log(str.replaceAll("can", "AAA"));
console.log(str.replace(str, "***"));