

/**
 * Acessing A DOM Elements
 */


/**
 * getElementby Id method
 */


const pageHeading = document.getElementById('page-heading');

console.log(pageHeading);
console.log(typeof pageHeading);

const subheading = document.getElementById('subheading')
console.log(subheading);


/**
 *  getElementByClassName() - method
 */

const container = document.getElementsByClassName('container');
console.log(container) //HTMLCollection (think of it as an Array)

for(let i = 0; i < container.length; i++) {
    console.log(`Node ${i}: ${container[i]}`);
    console.log(container[i]);
}


//Manually
const firstContainer = container[0];
const secondContainer = container[1];
const thirdContainer = container[2];

console.log(firstContainer);
console.log(secondContainer);
console.log(thirdContainer);


/**
 * getElementsByTagName - Method
 */


const images = document.getElementsByTagName('img')

console.log(images);

for(let i = 0; i < images.length; i++) {
    console.log(`Node ${i}: ${images[i]}`);
    console.log(images[i]);
}

/**
 * querySelector() -method
 */

const par1 = document.querySelector('#par1'); //by using id
const par2 = document.querySelector('.par2'); //by using class
const section = document.querySelector('section'); //by using tagname


console.log(par1)
console.log(par2)
console.log(section)



/**
 * querySelectorAll( ) -method
 */

const allImages = document.querySelectorAll('img');
console.log(allImages)


for (img of allImages) {
    console.log(img)
}



/**
 * id => getElementById() - gets the single element
 * class => getElementsByClassName() - gets all elements with the same classname in HTMLCollection
 * tag => getElementsByTagName() - gets all same elements in HTMLCollection
 * querySelector(), querySelectorAll() => gets elements/nodes using id, class or tag 
 */




