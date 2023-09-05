function isPasswordValid(password) {
    const criteria = {
        minLength: 8,
        maxLength: 16,
        hasDigit: false,
        hasUppercase: false,
        hasLowercase: false,
        hasSpecialChar: false,
        noSpace: true,
    };


    if (password.length < criteria.minLength || password.length > criteria.maxLength) {
        return false;
    }

    for (const char of password) {
        if (char >= '0' && char <= '9') {
            criteria.hasDigit = true;
        } else if (char >= 'A' && char <= 'Z') {
            criteria.hasUppercase = true;
        } else if (char >= 'a' && char <= 'z') {
            criteria.hasLowercase = true;
        } else if ("!@#$%^&*()_+{}[]:;<>,.?~\\/-".includes(char)) {
            criteria.hasSpecialChar = true;
        } else if (char === ' ') {
            criteria.noSpace = false;
        }
    }

    return (
        criteria.hasDigit &&
        criteria.hasUppercase &&
        criteria.hasLowercase &&
        criteria.hasSpecialChar &&
        criteria.noSpace
    );
}


console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));
