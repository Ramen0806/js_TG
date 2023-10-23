function enterCreds () {
    return new Promise (()=> {
        setTimeout(() => {
        console.log('Credentials entered')
        },3000);
    })

}

function validateCreds () {
        setTimeout(() => {
        console.log('Credentials Validated')
        },3000);

}


function login () {
    console.log('Logged IN')
}



enterCreds();
validateCreds();
login();
