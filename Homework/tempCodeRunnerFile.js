function isEmailValid(email) {
    if (email.includes(" ") || !email.includes(".com")) {
        return false;
    }

    const atCount = email.split("@").length - 1;
    if (atCount !== 1) {
        return false;
    }
    const beforeAtCount = email.split("@")[0].length;
    if (beforeAtCount < 2) return false;

    const afterAtCount = email.split("@")[1].split(".")[0].length;

    if (afterAtCount < 2) return false;

    return true;
}

//console.log(isEmailValid("")); //false
//console.log(isEmailValid("@gmail.com")); //false
//console.log(isEmailValid("johndoe@yahoo")); //false
console.log(isEmailValid("a@outlook.com")); //false