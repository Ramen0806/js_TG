function removeExtraSpaces(string) {

    return string.split(' ').filter(x => x.length >= 1).join(' ');
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));
