const isTrueOrFalse = (str) =>{
    let positive = 0;
    let negative = 0;
    
    const words = str.split(' ');
    
    for (let word of words) {
      const  upperChar = word[0].toUpperCase();
      if (upperChar >= 'A' && upperChar <= 'M') {
        positive++;
      } else if (upperChar >= 'N' && upperChar <= 'Z') {
        negative++;
      }
    }
    
    return positive >= negative; 
  }

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"))
console.log(isTrueOrFalse("Xylophones can obtain Xenon."))
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"))
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe"))
console.log(isTrueOrFalse("Got stuck in the Traffic"))