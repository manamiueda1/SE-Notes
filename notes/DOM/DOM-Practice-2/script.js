// editing existing elements (2 steps)
  // targeting elements in HTML from JS
  console.log('hello')
  let body = document.querySelector('body');
  let picture = document.querySelector('img');
  let allButtons = document.querySelectorAll('button');

  console.log(allButtons)
  // setting new features
  body.setAttribute('style', 'background-color: pink');
  picture.setAttribute('src', 'full-moon.jpg');
  picture.setAttribute('height', '200');

  // adding elements to the page (3 steps)
  // note: these elements dont exist yet

  // creating the elements
  let newText = document.createElement('h1');
  let newPara = document.createElement('p');
  // giving them text
  newText.innerHTML = "Hello World!";
  newPara.innerHTML = "This is a new P element.";
  // adding them to the page
  body.appendChild(newText);
  body.appendChild(newPara);



// Calculator example
function inputChange(event){
  // console.log('hit')
  // console.log(event); // some huge object showing precisely what happened when you clicked (TMI)
  // console.log(event.target); // the element that was clicked (SUPER COMMON AND HELPFUL)
  // console.log(event.target.innerHTML); // the text of that element

  // get access to the button that was clicked
  var char = event.target.innerHTML;

  // // target the screen
  var screen = document.querySelector('#screen');

  // // change the calculator screen's inner html
  screen.innerHTML += char;
  
}

function addAllEventListeners(arr){
console.log(arr)
  for(var i = 0; i < arr.length; i++){

    if(arr[i].innerHTML.match(/^[0-9]*$/) && arr[i].innerHTML != ''){
      console.log('that was a number');
    } 
    arr[i].addEventListener('click', inputChange);
  }
}
addAllEventListeners(allButtons);