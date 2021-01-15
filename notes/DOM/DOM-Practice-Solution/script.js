let body = document.querySelector('body'); 

let addButton = document.createElement('button'); 
body.appendChild(addButton); 
addButton.innerHTML = "ADD"; 


let deleteButton = document.createElement('button');
body.appendChild(deleteButton);
deleteButton.innerHTML = 'DELETE' 

let i = 0

function addingWord() {
    console.log('hi')
    let addWord = document.createElement('div');
    addWord.setAttribute('id', i);
    addWord.innerHTML = 'adding'
    body.appendChild(addWord)
    i++
} 

function deleteWord(){
    let deleting = document.getElementById(i-1);
    deleting.parentNode.removeChild(deleting)
    i--
}

addButton.addEventListener('click', addingWord)
deleteButton.addEventListener('click', deleteWord)
