

//DOM

// window object


 console.log("Window",window); //Reference Error: window is not defined


 //alert

 //window.alert('Here is the alert message!');

 //prompt

 //let promptResult = window.prompt();
 //console.log(promptResult); // 1. Null- if you cacel it  2. string value that user inputs to the prompt


 //confirm

 //let confirmResult = window.confirm('Are you ready ?')
 //console.log(confirmResult); //return type is boolen - true if you press Ok and false if you press cancel

 //innerWidth and innerHeight

 console.log(window.innerWidth);
 console.log(window.innerHeight);

 //ScrollTo(x,y);

 window.scrollTo(0,0); //scroll page to the Top

 //all of these methods also work without the window. part!


 //location - object

//window.location.reload(); reloads location

//localStorage
console.log(window.localStorage.length); // 0 meaning empty

//set item into localStorage
window.localStorage.setItem('Name','John');
window.localStorage.setItem('isLoggedIn',false);
window.localStorage.setItem('userId',1234);
window.localStorage.setItem('userInfo',JSON.stringify({name:'John',email:'John@gmail.com'}));
window.localStorage.setItem('userWalletType',JSON.stringify(['apple','google','cc']));


//Get item from localStorage
console.log(window.localStorage.getItem('Name'));
console.log(window.localStorage.getItem('isLoggedIn'));
console.log(window.localStorage.getItem('userId'));
console.log(JSON.parse(window.localStorage.getItem('userInfo')));
console.log(JSON.parse(window.localStorage.getItem('userWalletType')));

//remove item from localStorage

window.localStorage.removeItem('name');
window.localStorage.removeItem('userId');
window.localStorage.clear();


/**
 * Activity
 * 1. Ask for a username => prompt()
 *   a. Alert users name => alert()
 *   b. console log 'You didn't provide your name. Bye Bye' and quit
 * 
 * 2. Confirm if user wants to continue => confirm()
 *  a. If user says 'Yes' => Alert 'You have chosen to continue'
 *  b. If user says 'No' => Alert 'You canceled the action'
 * 
 * 3. Console.log users browser innerWidth and innerHeight
 * 
 * 4. Reload the page after 10 seconds to start again
 * 
 * 5. Ask if you want to 
 */

let userInfo = window.prompt('Input Username:');


if (userInfo || userInfo.length > 0){
    window.alert(`Hi welcome to our page : ${userInfo}`);

    const userConfirm = window.confirm('Do you want to continue');
   
    if(userConfirm){
        window.alert('You have chosen to continue');
    }
    else ( window.alert('You canceled the action'));


const userInnerHeight = window.innerHeight;
const userInnerWidth = window.innerWidth;

console.log(`Your device dimension are ${userInnerHeight} and ${userInnerWidth}.`)


console.log('Your webpage will reload in 10 seconds');

//Ask user if they want to go to a different page

const doesUserWantToRedirect = window.confirm('Do you want to go to google.com')

if (doesUserWantToRedirect) {
    console.log('Your webpage will reload in 10 seconds');
    setTimeout(() => {
        window.open('https://www.google.com/')
    },10000)
}
else {
    //Reload the page and start again
    console.log('Your webpage will reload in 10 seconds');
    setTimeout(()=> {
     window.reload();   
    },10000);
}

}
else{ 
    window.alert('You didnt provide your name Bye Bye ');
}

