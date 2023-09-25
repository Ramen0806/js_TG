 const noXInVariables = arr =>{
        removedArr = arr.map(word =>{
           return (word.toString().split("").filter(letter =>!(letter.toUpperCase() === "X"))).join("")
        })
        return removedArr.filter(word => (word.length > 0))
    }
      
     
console.log(noXInVariables(["abc", 123, "#$%"]));
console.log(noXInVariables(["xyz", 123, "#$%"]));
console.log(noXInVariables(["x", 123, "#$%"]))
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));
