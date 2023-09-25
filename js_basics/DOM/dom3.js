
//Import all elements
const parentElement = document.getElementById('parent');
console.log(parentElement);

/*
* Get all the child nodes of parentElement
*/

const childLIs = parentElement.childNodes;
console.log(childLIs); //nodes + text

const children = parentElement.children;
console.log(children); //nodes


/**
 * If you have to get nodes and extra info like test use childNodes, else use children
 */



/**
 *  Get parent element
 */

const countriesHeading = document.getElementById('countries');
const parentOfHeading = countriesHeading.parentElement;
console.log(parentOfHeading);




/**
 *  Get first and last child
 */

const firstLi = parentElement.firstChild;
const lastLi = parentElement.lastChild;
console.log(firstLi); //gives text
console.log(lastLi); //gives text


/**
 *  Get first and last child
 */

const firstLiElement = parentElement.firstElementChild;
const lastLiElement = parentElement.lastElementChild;
console.log(firstLiElement); //gives USA
console.log(lastLiElement); //gives Germany


/**
 *  Get sibiling elements
 */

const leftSibiling = firstLiElement.previousElementSibling;
const rightSibiling = firstLiElement.nextElementSibling;
console.log(leftSibiling); //null cuz there is nothing
console.log(rightSibiling); // Nigeria


const leftSibilingOfLast = lastLiElement.previousElementSibling;
const rightSibilingOfLast = lastLiElement.nextElementSibling;
console.log(leftSibilingOfLast); //Japan
console.log(rightSibilingOfLast); //null



/**
 *  Node attribues
 *  -getAttribute()
 *  -setAttribute()
 */

const container = document.querySelector('.container');
//const images = container.children  same as below
const images = document.querySelectorAll('img');

const firstImage = images[0];
//get src of image elememnt
console.log(firstImage.src); //url
console.log(firstImage.alt); //alt text


const newUrl = "https://cdn.pixabay.com/photo/2016/02/07/19/48/aurora-1185464_1280.jpg"
//update src of first image

firstImage.src = newUrl;
console.log(firstImage);

//getAttribute
const imgUrl = firstImage.getAttribute('src');
console.log(imgUrl === newUrl);

//setAttribute
firstImage.setAttribute('alt','Beautiful nature');
const altText = firstImage.getAttribute('alt');
console.log(altText === 'Beautiful nature');



const bodyEl = document.querySelector('body');
console.log(bodyEl)

bodyEl.style.backgroundColor = "lightgray";
bodyEl.style.textAlign = 'center'


for (let i = 0; i < images.length; i++){
    let imageEl = images[i];

    //style image element

    imageEl.style.width = '250px';
    imageEl.style.height = '150px';
    imageEl.style.border = '3px solid green';


    if(i > 1){
        imageEl.style.border = "3px solid blue"
    }
}

/**
 * className vs classList
 */

const boxEl = document.querySelector('.box');

console.log(boxEl.className);
console.log(boxEl.classList);


//boxEl.className = "box2"; //this will wipe out everything and just insert box2
boxEl.className += "box2";  // use this if you need to appemd extra class name

boxEl.classList.add('box3'); //this will add box3 to exisiting class names
boxEl.classList.remove('box');

//innerHTML
//bodyEl.innerHTML = '';

//Add HTML into dom
/*parentElement.innerHTML = `     
<li>USA</li>
<li>Nigeria</li>
<li>Japan</li>
<li>Germany</li> 
<li>France</li> ` ;
*/

//or append
parentElement.innerHTML += `<li>France</li> `

const p2 = document.createElement('p')
console.log(p2)
//add content to it

//1st way
//p2.innerHTML = "Box 2"
//console.log(p2);

//2nd way
const textNode = document.createTextNode('Box 2');
p2.appendChild(textNode);

//append p2 to box element

boxEl.append(p2);

//append -> takes node or text (String)
//appendChild -> only takes text (String)

parentElement.append(p2); //add p2 inside ul element



/**
 * 
 * Objective: Practice DOM
 * 
 * Instructions: create a simple ToDo list
 * 
 * 1. Ask user for a list
 * 
 * 2. Create an element based on users input
 * 
 * 3. Show that in the DOM (UI)
 * 
 * 4. Ask 3 lists from user
 * 
 */




let list1 = prompt('Enter first to do list');
console.log(list1);
let list2 = prompt('Enter second to do list');
console.log(list2);
let list3 = prompt('Enter third to do list');
console.log(list3)

let ul = document.createElement('ul');

let li1 = document.createElement('li');
li1.textContent = list1;

let li2 = document.createElement('li'); 
li2.textContent = list2;

let li3 = document.createElement('li');
li3.textContent = list3;

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.body.appendChild(ul);