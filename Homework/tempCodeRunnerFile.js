function capsOdds(arr) {
    return arr.map((item, index) => {
      if(index % 2 !== 0) {
        return item.toUpperCase();  
      } else {
        return item;
      }
    });
  }
  
  console.log(capsOdds(["Hello", "World"])); 
  console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]));  
  console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])); 
  console.log(capsOdds([]));
  console.log(capsOdds(["John !@#$%", "^&*() Doe"]))