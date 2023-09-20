

var a = 12;

(function(){
    console.log(a); //?
    //console.log(b)
    function f() {
        let b = 13;
        console.log(a)
    }
    f();
})();


//private name = 'cdc'

function generateToken () {
    let token = "cdscdc12323"
    return () => {
        console.log(token);
    }
}

const generatetokenforAdmins = generateToken()
const generatetokenforUsers = generateToken()

generatetokenforAdmins();
generatetokenforUsers();



var a = 5;
(function (){
    var a = 12;
    console.log(a);
})();

const a = 5;
(function (){
    const  a = 12;
    console.log(a);
})();

let a = 5;
(function (){
  a = 12;
    console.log(a);
})();

/*
const a = 5;
(function (){
   a = 12;
    console.log(a);
})();

*/ //error because a can not be redeclared 


//-----------------

var a = 10;
var x = (function () {
    var a = 12;
    return (function (){
        console.log(a)
    });
})();
x();

//-----------------
function a() {
    var a = 1
        console.log(a);
        var b = function(){
            console.log(a);
            var c = function () {
                console.log(a);
            }
            c();
        }
        b();
}
a();


//-----------------


var a = 1;
function b() {
    a = 10; 
    console.log(a);
    function a() {}  
} 
b(); // 10 
console.log(a); // 1

//-----------------


function parent() {

    var hoistedVar = 'I am a variable';
  
    function hoistedFunc() {
      return 'I am function';
    }
  
    return hoistedFunc();
  
  }
  
console.log(parent());






let place = 'Planet Earth';

function fullstackHQ(place) {
  return middleFunction('United States');

  function middleFunction(place1) {
    return innerFunction('Illinois');

    function innerFunction(place2) {
      let city = 'Chicago'; 
      return innermostFunction();

      function innermostFunction() {
        return 'Techglobal is at ' + place + ', ' + place1 + ', ' + place2 + ', ' + city; 
      }
    }
  }
}
console.log(fullstackHQ(place)); 

/*
Expected result:

HQ() => Techglobal is at Planet Earth, United States, Illinois, Chicago
*/ 


let counter = 0;

function incrementalChange(amount) {
  counter += amount;
  return counter;
}

console.log(incrementalChange(2));
console.log(incrementalChange(6));  
console.log(incrementalChange(-1));


let sum = 0;

function sumThings(num1, num2) {
  sum = num1 + num2
  return sum;
}

console.log(sumThings(2,4)); 
console.log(sumThings(4,6));   