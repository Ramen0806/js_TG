/*let name = "John"; let age = "25"; let address = "chicago" horrible line of code even though it works,
 should be divided into 3 lines of code */

 let fname = "John"; //string
 let age = "25";  //number - integer
 let address = "chicago"; //string

 console.log("My name is " + fname); //concatenation helps to bring multiple strings together
 console.log("I am " + age + " Years old"); //concatenation helps to bring multiple strings together
 console.log("I live in " + address);


 
//console.log(city); //ReferenceError: city is not defined

var lname; //declaration
console.log(lname); 
lname = "Doe"; //assignment 
console.log(lname);
lname ="Morgan"; //re-assignment 
console.log(lname); //Doe


//Differences between let and const

let street = " s River Rd";
console.log(street);// s River Rd
 street = "N River"  //re-assignment
 console.log(street); //N River

/*const estreet = " s River Rd";
console.log(estreet);// s River Rd
 estreet = "N River"  //re-assignment
 console.log(estreet); //N River */
 // const makes it a constant and does allow you to reassign the value

age = "45"; //reassignment
console.log(age);