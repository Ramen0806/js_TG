const splitString = (str, num) => {
    if (str.length < num) return ""
    result = "";
    for(i = 0; i < num; i++){
        result += str[i];
    }
    result += " "
    for(i = num; i < str.length; i++){
        result += str[i];
    }
    return result;
}


console.log(splitString("Google",2));
console.log(splitString("JavaScript", 5));
console.log(splitString("Java", 2));
console.log(splitString("Automation", 3));
console.log(splitString("Hello", 6));
console.log(splitString("12", 1));