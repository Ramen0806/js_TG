

const schoolName = "Tech Global";

function schoolProfile() {
    const schoolName = "Global Tech"
    function saySchoolName() {
        const schoolName ="Tech"
        function writesSchoolName() {
            return schoolName; // "Tech Global"
        }
       return writesSchoolName();
    }
   return saySchoolName();
}



console.log(schoolProfile()); // "Tech Global"

//Scope Chaining
// writeSchoolName() scope -> saySchoolName() scope -> schoolProfile() scope -> global scope



//Define a function:
function getCityName() {
    const cityName= "Des Plaines"
    return cityName;
}

/*function showAddress() {
    return "2860 S River Rd " + cityName;
}
cityName is not defined;
*/

function showAddress() {
    return "2860 S River Rd " + getCityName();
}

console.log(showAddress());

//Hoisting

console.log("foo:",foo); //undefined
//console.log("bar:",bar); // bar is not defined
var foo = 'foo';

console.log(foo) // cannot access "foo" before initialization 
let foo = 'foo';




hello();

//bye(); // bye is in the local scope so it will return as bye is not defined.

function hello (){
    console.log("Hello");

    function bye(){
        console.log('Bye');
    }

}

//bind(), this(), apply(), call()

let nameObj = {
	name: "Tony"
}

let PrintName = {
	name: "steve",
	sayHi: function () {

		console.log(this.name);
	}
}

const sayHiBind = PrintName.sayHi.bind(nameObj);
sayHiBind();

PrintName.sayHi();
console.log(PrintName.name);
console.log(nameObj.name);








