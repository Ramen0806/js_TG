/**
 * Task 1
 * Requirement:
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces
Examples:
toCamelCase("first name")  ->"firstName"
toCamelCase("last     name")  ->"lastName"
toCamelCase("   ZIP CODE")  ->"zipCode"
toCamelCase(“I Learn Java Script”)    -> "iLearnJavaScript"
toCamelCase(“helloWorld”)     -> “helloWorld”
 */

const  toCamelCase = (str)  =>{
    if(!str.includes(' ')) return str
    let words = str.trim().toLowerCase().split(/\s+/);
  
    for (let i = 1; i < words.length; i++) {  
      let word = words[i];
      words[i] = word[0].toUpperCase() + word.slice(1); 
    }
  
    return words.join('');
  }

  console.log(toCamelCase("first name"))
  console.log(toCamelCase("I Learn Java Script"))
  console.log(toCamelCase("helloWorld") )
  console.log(toCamelCase("   ZIP CODE"))
  console.log(toCamelCase("last     name"))


/**
 * Task 2
 * Requirement:
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase.
Examples:
toSnakeCase("first name")  ->"first_name"
toSnakeCase("last    name")  ->"last_name"
toSnakeCase("    I love Java Script")  ->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")     -> "hello"
 */

const toSnakeCase = (str) => {
 
    arr = []

    for(const word of str.split(' ')){
        if(word.length >= 1) 
        arr.push(word.toLowerCase())
    }

    return arr.join('_')
}

console.log(toSnakeCase("first name"))
console.log(toSnakeCase("last    name"))
console.log(toSnakeCase("    I love Java Script"))
console.log(toSnakeCase("already_snake_case"))
console.log(toSnakeCase("hello"))



/***
 * Task 3
 * Requirement:
Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored.
Examples:
alternatingCases("Hello")  -> "HeLlO"
alternatingCases("basketball")  -> "BaSkEtBaLl"
alternatingCases("Tech Global")  -> "TeCh GlObAl"
alternatingCases("")  -> ""`    
alternatingCases("123!@#aB")  -> "123!@#Ab"
 */


const alternatingCases = (str) => {

    let result = '';
    let upper = true;
    
    for(let i = 0; i < str.length; i++) {
      let char = str[i];
      
      if(char >= 'a' && char <= 'z' ||char >= 'A' && char <= 'Z') {
        result += upper ? char.toUpperCase() : char.toLowerCase();
        upper = !upper;
      } else {
        result += char; 
      }
    }
    
    return result;
  
  }

  
  console.log(alternatingCases("Hello"))
  console.log(alternatingCases("basketball"))
  console.log(alternatingCases("Tech Global"))
  console.log(alternatingCases(""))
  console.log(alternatingCases("123!@#aB"))

/***
 * Task 4
 * Requirement:
Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length.
Examples
isNeutral("-", "+")      ->  "0"
isNeutral("-+", "-+")  ->   "-+"
isNeutral("-++-", "-+-+")            ->  "-+00"
isNeutral("--++--", "++--++")      ->  "000000"
isNeutral("+++", "+++")            ->  "+++"
 */


const isNeutral = (str1, str2) => {
    let result = "";
  
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === str2[i]) {
        result += str1[i]; 
      } else {
        result += "0";
      }
    }
  
    return result;
  }

  console.log(isNeutral("-", "+"))
  console.log(isNeutral("-+", "-+"))
  console.log(isNeutral("-++-", "-+-+"))
  console.log(isNeutral("--++--", "++--++") )
  console.log(isNeutral("+++", "+++"))


/***
 * Task 5
 * Requirement:
Write a function named isTrueOrFalse() which takes a string with sets of character/words 
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should 
be treated the same), you need to determine whether it falls into the positive/first half of the 
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or 
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
Examples
isTrueOrFalse("A big brown fox caught a bad rabbit")  -> true
isTrueOrFalse("Xylophones can obtain Xenon.")    ->  false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")  -> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")  -> true
isTrueOrFalse("Got stuck in the Traffic")  -> false
 */

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