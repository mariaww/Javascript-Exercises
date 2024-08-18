// The .onclick property allows you to assign a function to run on when a click event happens on an element:

let element = document.querySelector('button');

 // Add code to turn button red
element.onclick = function turnButtonRed(){
element.style.backgroundColor = 'red'
element.style.color = 'white'
element.innerHTML = 'Red Button'
};

// You can also assign the .onclick property to a function by name:

function turnButtonRed(){
element.style.backgroundColor = 'red'
element.style.color = 'white'
element.innerHTML = 'Red Button'
};

// trigger the turnButtonRed() function when the element detects a click event
element.onclick = turnButtonRed;


