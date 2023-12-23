const hasNumbers = (str) => {
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (!isNaN(parseInt(char))) {
        return true;
      }
    }
    return false;
  }

  console.log(hasNumbers("")); // false
  console.log(hasNumbers("abc")); // false
  console.log(hasNumbers("123")); // true
  console.log(hasNumbers("1bc")); // true
  console.log(hasNumbers("john25")); // true