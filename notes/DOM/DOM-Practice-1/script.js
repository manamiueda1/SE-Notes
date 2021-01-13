console.log("hello world!"); 

let body = document.querySelector('body'); 

// select the body tag and add a css attribute: background-color: red

body.setAttribute('style', 'background-color: red'); 

// create an h1 element on the document

let h1 = document.createElement('h1'); 

// add a child element: h1 to body element

body.appendChild(h1); 

// add text inside the h1 tag 

h1.innerHTML = "123214135235";

// reassigning background color to blue

body.style.backgroundColor = "blue"; 

// add css attributes to the h1 tag

h1.setAttribute('style', 'color: white'); 

// add font size to h1

h1.style.fontSize = '90px'; 

/* -------------------------------------------------------------------------- */
// ADDING BUTTON

// create a button element/tag

let boxButton = document.createElement('button'); 

// add the button as the child of the body

body.appendChild(boxButton); 

// add text to the button tag

boxButton.innerHTML = "ADD"; 

// add a class to the button called: box-styling

boxButton.classList.add('button-styling'); 

/* -------------------------------------------------------------------------- */
// DELETE BUTTON

// create a delete button element

let deleteButton = document.createElement('button'); 


// add it as the child element to the body tag

body.appendChild(deleteButton); 

// add a class to the deleteButton element called button-styling

deleteButton.classList.add('button-styling'); 

// add text to the button

deleteButton.innerHTML = "DELETE"; 

// add a css sttribute background-color: orange

deleteButton.setAttribute('style', 'background-color: orange');

/* -------------------------------------------------------------------------- */
// FUNCTION TO ADD BOX

let i = 0; 

function addBox(){
    let box = document.createElement('div'); 
    box.classList.add('box'); 
    box.setAttribute('id', i);
    box.innerHTML = i;  
    box.style.fontSize = '100px'; 
    body.appendChild(box); 
    console.log(i)
    
    i++ 
    console.log(box); 
} 

/* -------------------------------------------------------------------------- */

// FUNCTION TO DELETE BOX

function deleteBox(){
    console.log(i) 

    let toDelete = document.getElementById(i - 1);
    toDelete.parentNode.removeChild(toDelete); 

    i --
}

boxButton.addEventListener('click', addBox); 
deleteButton.addEventListener('click', deleteBox); 

/* -------------------------------------------------------------------------- */

// exercise 

//  create a button called 'add' - add some styling to it
// create a button called 'delete' - add some styling to it

// add a eventListener on the add button - when the add button is clicked, render the word 'added' onto the page
//  add a evenListener on the delete button - when the delete button is clicked, delete the word 'added' every time the delete button is clicked 