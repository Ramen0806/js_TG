
const countOccurrence = (str1, str2) => {
  let duplicated = ""
  for (let i = 0; i < str1.length; i++) {
      if(str2.toLowerCase().includes(str1[i].toLowerCase())) {
      duplicated +=str1[i]
      }
  }
  if(duplicated.length >= str2.length)
   return Math.floor(duplicated.length / str2.length)
  else return 0
}

console.log(countOccurrence("Javascript", "Java")) 
console.log(countOccurrence("Hello", "World"))   
console.log(countOccurrence("Can I can a can", "anc")) 
console.log(countOccurrence("Hello", "l")) 
console.log(countOccurrence("IT conversations", "IT")) 