

/**
 * DOM Events
 */


/**
 * Mouse events
 */
const clickBtn = document.getElementById('clickBtn');

clickBtn.addEventListener('click',(event) => {
    console.log(event.target);
    console.log('Button Clicked! =>',event.target);
});

//dbclick

const dbclick = document.getElementById('dblclickBtn');

dbclick.addEventListener('dblclick', (event) => {
    console.log("you double clicked button", event.target);
});


//mousedownBtn

const mousedownBtn = document.getElementById('mousedownBtn');

mousedownBtn.addEventListener('mousedown', (event) => {
    console.log('You pressed down =>', event.target);
});


//mouseUp
const mouseupBtn = document.getElementById('mousedownUp');

mouseupBtn.addEventListener('mouseup', (event) => {
    console.log('You released button =>', event.target);
});


//mouse Move

const mouseMoveBtn = document.getElementById('mouseMoveBtn');

mouseMoveBtn.addEventListener('mousemove',(event) => {
    console.log('You moving inside button =>', event.target)
});


//Mouse Out


const mouseOutBtn = document.getElementById('mouseOutBtn');

mouseMoveBtn.addEventListener('mouseout',(event) => {
    console.log('You are going outside of the button =>', event.target)
});


/**
 * Keyword Events
 */


const body = document.querySelector('body');

//keydown
/*
body.addEventListener('keydown', (event) => {
    console.log('Keydown event => ', event.target);
});  

//key up

body.addEventListener('keyup', (event) => {
    console.log('Keyup event => ', event.target);
});  

//keypress
body.addEventListener('keypress', (event) => {
    console.log('Keypress event => ', event.target);
});  
*/


/**
 * Form events
 */

//change
const changeInput = document.getElementById('changeInput');

changeInput.addEventListener('change', (event) => {
    // event.target.value => whatever user types in input
    console.log(event.target.value);
});

//input
const inputInput = document.getElementById('inputInput');

inputInput.addEventListener('input', (event) => {
    console.log(event.target.value);
});

// focus 
const formInput = document.getElementById('formInput');

formInput.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = "darkred";
    event.target.style.color ='white';
});

//blur

formInput.addEventListener('blur', (event) => {
    let element = event.target
    element.style.backgroundColor = '';
    element.style.color = '';
})


const formEl = document.querySelector('form');

formEl.addEventListener('keypress', (event) => {
    event.preventDefault();
    console.log('Form successfully submitted!')
    console.log({
    name: 'Joe',
    email: 'joe@gmail.com'
    }) 
})


/**
 * 4. Window event
 */

//Scroll

window.addEventListener('scroll', (event) => {
    console.log('You are scrolling the page!');
    console.log(`And your coordinates are X: ${window.scrollX} and Y: ${window.scrollY}`);
} );


/*
   Activity: Todo list

    Step 1: Create an input to take a list

    Step 2: Either keypress or submit 

    Step 3: Show that list in the UI

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


