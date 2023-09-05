
/*Requirement:
Write a function named as firstPos() which takes an array as an argument and returns the first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one positive element in the given array.
Examples:
firstPos([0, 3, -9,  5, 8])         -> 3
firstPos([-2, 0, -7, 10, -5])       -> 10
firstPos([1, 2, 3, -2])             -> 1
*/




function firstPos(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) return array[i];
    };
}

console.log(firstPos([0, 3, -9, 5, 8]));
console.log(firstPos([1, 2, 3, -2]));
console.log(firstPos([-2, 0, -7, 10, -5]));


function firstPost(array) {
    let firstPost = null;
    for (const number of array) {
        if (number > 0) {
            firstPost = number;
            break;
        }
    }
    return firstPost;
}


console.log(firstPost([0, 3, -9, 5, 8]));
console.log(firstPost([1, 2, 3, -2]));
console.log(firstPost([-2, 0, -7, 10, -5]));



/*

Requirement:
Write a function named as lastNeg() which takes an array as an argument and returns the last negative element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one negative element in the given array.
Examples:
firstNeg([0, 3, -9,  5, 8])         -> -9
firstNeg([-2, 0, -7, 10, -5])       -> -5
firstNeg([1, 2, 3, -2])             -> -2
*/


function lastNeg(array) {
    let lastNeg = null;

    for (const number of array.reverse()) {
        if (number < 0) {
            lastNeg = number;
            break;
        }
    }
    return lastNeg;
}

function lastNegt(array) {
    for (const number of array.reverse()) {
        if (number < 0) return number
    }
}

console.log(lastNeg([0, 3, -9, 5, 8]));
console.log(lastNeg([1, 2, 3, -2]));
console.log(lastNeg([-2, 0, -7, 10, -5]));


/*
Requirement:
Write a function named as firstLongest() which takes an array as an argument and returns the longest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 or more element having the longest count of characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])    -> "yellow"
firstLongest(["Apple", "Banana", "Orange"])         -> "Banana"
firstLongest(["purple", "yellow", "orange"])        -> "purple"
*/




function firstLongest(array) {
    let firstLongest = '';
    for (const str of array) {
        if (str.length > firstLongest.length) firstLongest = str;
    }
    return firstLongest;
}

console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Orange"]));
console.log(firstLongest(["purple", "yellow", "orange"]));


/*
Requirement:
Write a function named as lastShortest() which takes an array as an argument and returns the shortest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 element having the shortest count of characters, always return the last occurrence.
 
Examples:
lastShortest(["red", "blue", "yellow", "white"])    -> "red"
lastShortest(["Apple", "Banana", "Mango"])          -> "Mango"
lastShortest(["white", "yellow", "brown"])          -> "brown"
*/


/*
not preferred
function lastShortest(array) {

    let lastshortest = '';
    let maxLength = Infinity;

   for (const str of array) {
    if(str.length <= maxLength) {
    lastshortest = str;
    maxLength = str.length;
   
  }
  return lastshortest;
}
}
console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["purple", "yellow", "brown"]));
*/

function lastShortest(array) {
    let lastShortest = array[0];

    for (const str of array) {
        if (str.length <= lastShortest.length) lastShortest = str;
    }
    return lastShortest;
}
console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["purple", "yellow", "brown"]));




/*
Requirement:
Write a function named as max() which takes an array as an argument and returns the greatest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
Examples:
max([0, 3, -9,  5, 8]) 	    -> 8
max([-2, 0, -7, 10, -5]) 	-> 10
max([1, 2, 3, -2])          -> 3
max([-5, -2])               -> -2
*/


function max(array) {
    let least = -Infinity;
    let greatest = null;


    for (const number of array) {
        if (number > least) {
            greatest = number;
            least = greatest;
        }
    }
    return greatest;
}

console.log(max([0, 3, -9, 5, 8]));
console.log(max([-2, 0, -7, 10, -5]));
console.log(max([1, 2, 3, -2]));
console.log(max([-5, -2]));

/*
Requirement:
Write a function named as min() which takes an array as an argument and returns the greatest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])          -> 0
min([-2, 0, -7, 10, -5])    -> -7
min([1, 2, 3, 15])          -> 1
*/


function min(array) {
    let temp = Infinity;
    let least = null;

    for (const number of array) {
        if (number < temp) {
            least = number
            temp = least;
        }
    }
    return least;
}


console.log(min([0, 3, 5, 8]));
console.log(min([-2, 0, -7, 10, -5]));
console.log(min([1, 2, 3, 15]));
console.log(min([-9, -89,]));

/*
Requirement:
Write a function named as commonElements() which takes 2 arrays as arguments and 
returns all the matching elements from the both arrays when invoked.
NOTE: Assume you will not be given an empty array.
 
Examples:
commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]) 	    -> [ 20, 50, 70 ] 
commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]) 		    -> [ ] 
commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]) 	-> ["abc" ] 
*/

function commonElements(arr1, arr2) {
    const commonElements = [];
    for (const element of arr1) {
        for (const element2 of arr2) {
            if (element === element2) {
                commonElements.push(element)
            }
        }
    }
    return commonElements;
}

console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70]));

//Prefered Way

function commonElements$(array1, array2) {
    const commonElements$ = [];
    for (let element of array1) {
        if (array2.includes(element)) {
            commonElements$.push(element);
        }
    }
    return commonElements$;
}


console.log(commonElements$([10, 20, 30, 50, 70], [20, 50, 70]));
console.log(commonElements$([30, 50, 70], [20, 100, 300]));
console.log(commonElements$(["30", "abc", "hi"], [30, "Hi", "abc"]));


















