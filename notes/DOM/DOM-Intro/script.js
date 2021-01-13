// target the body
// let body = document.body;
let allH1s = document.querySelectorAll('h1');

addAllListeners(allH1s);

function addAllListeners(param){
    for(let i = 0; i < param.length; i++){
        if( param[i].innerHTML === "World" ){
            param[i].addEventListener('click', change);
        } else {
            param[i].addEventListener('click', hit);
        }
    }
}

function hit(event){
    console.log(event.target);
}

function change(){
    console.log('changing');
}


console.log(allH1s);

// console.log(document)
// console.log(event)
// console.log(event.target)
// console.log(event.target.innerText)

/* -------------------------------------------------------------------------- */

// Exercise

// Create a button in index.html
// style it a little bit: add width, height and color
// add a event listener on click - on click, console.log('hit')
