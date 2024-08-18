// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

// This colorChange function will generate 3 random value for rgb color based on randomColor function
function colorChange(event){
let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
button.style.backgroundColor = randomColor
}
// button element fires when it’s clicked and assign colorChange as the event handler function
button.addEventListener('click',colorChange);

// mysteryButton element fires when you rotate the mouse wheel or slide down on the mousepad
mysteryButton.addEventListener( 'wheel',colorChange);

//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
//https://developer.mozilla.org/en-US/docs/Web/Events
