console.log("hello world!"); 

let body = document.querySelector('body'); 

body.setAttribute('style', 'background-color: red'); 

let h1 = document.createElement('h1'); 

body.appendChild(h1); 

h1.innerHTML = "123214135235";

body.style.backgroundColor = "blue"; 

h1.setAttribute('style', 'color:white'); 

h1.style.fontSize = '90px'; 

let boxButton = document.createElement('button'); 
body.appendChild(boxButton); 

boxButton.innerHTML = "ADD"; 
boxButton.classList.add('button-styling'); 

let deleteButton = document.createElement('button'); 
body.appendChild(deleteButton); 
deleteButton.classList.add('button-styling'); 

deleteButton.innerHTML = "DELETE"; 
deleteButton.setAttribute('style', 'background-color: orange');

let i = 0; 

function addBox(){
    let box = document.createElement('div'); 
    box.classList.add('box'); 
    box.setAttribute('id', i);
    box.innerHTML = i;  
    box.style.fontSize = '100px'; 
    body.appendChild(box); 
    
    i++ 

    console.log(box); 
} 

function deleteBox(){

    let toDelete = document.getElementById(i - 1); 
    toDelete.parentNode.removeChild(toDelete); 

    i --
}

boxButton.addEventListener('click', addBox); 
deleteButton.addEventListener('click', deleteBox); 