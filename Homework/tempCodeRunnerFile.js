function noXInVariables$(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
          const element = arr[i];
          if (typeof element === "string") {
            const mElement = element.split('').filter(char => char.toLowerCase() !== 'x').join('');
            if (mElement !== "") {
              result.push(mElement);
            }
          } else {
            result.push(element);
          }
        }
        return result;
      }
  

 const noXInVariables = arr => {
  removedArr = arr.map(word => {
         return (word.toString().split("").filter(letter =>!(letter.toUpperCase() === "X"))).join("")
        });
     return removedArr.filter(word => (word.length > 0))
}
      
     
console.log(noXInVariables(["abc", 123, "#$%"]));
console.log(noXInVariables(["xyz", 123, "#$%"]));
console.log(noXInVariables(["x", 123, "#$%"]))
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));

console.log(noXInVariables$(["abc", 123, "#$%"]));
console.log(noXInVariables$(["xyz", 123, "#$%"]));
console.log(noXInVariables$(["x", 123, "#$%"]))
console.log(noXInVariables$(["xyXyxy", "Xx", "ABC"]));
