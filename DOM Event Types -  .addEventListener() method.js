/* Using the .addEventListener() method, we can have a DOM element listen for a specific event and execute a block of code when the event is detected. 
The DOM element that listens for an event is called the event target and the block of code that runs when the event happens is called the event handler. 
 */

// 1)We selected our event target from the DOM using 'document.getElementById('targetElement').'
// 2)We used the '.addEventListener()' method on the 'eventTarget' DOM element.
// 3)The '.addEventListener()' method takes two arguments: an event name in string format and an event handler function. We will learn about different values we can use as event names in a later lesson.
// 4)In this example, we used the 'click' event, which fires when the user clicks on 'eventTarget'.
// 5)The code block in the event handler function will execute when the 'click' event is detected.

let eventTarget = document.getElementById('targetElement');

eventTarget.addEventListener('click', function() {
  // this block of code will run when click event happens on eventTarget element
});

// 6)The named function eventHandlerFunction is passed as the second argument of the .addEventListener() method instead of defining an anonymous function within the method!

function eventHandlerFunction() {
  // this block of code will run when click event happens
}



/* .onevent property  
With .onevent, it allows for one event handler function to be attached to the event target(view). However, with the .addEventListener() method , we can add multiple event handler functions(view,close,img).*/ 
//eventTarget.onclick = eventHandlerFunction; vs eventTarget.addEventListener('click', eventHandlerFunction);


let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let img = document.getElementById('img'); // img

//  the open() function makes the codey and close elements visible by changing their .display properties to 'block'. 
let open = function() {
  img.style.display = 'block'; // img
  close.style.display = 'block'; // close btn
};

//  The hide() function hides the same elements by assigning a 'none' value to the .display properties
let hide = function() {
  img.style.display = 'none'; // img
  close.style.display = 'none'; // close btn
};

view.addEventListener('click', open);
close.addEventListener('click', hide);


// The selected code, view.innerHTML, is used to change the text inside the view button. When textChange is called, the button’s text changes to ‘Hello, World!’. This modifies what the user sees on the button from ‘View’ to ‘Hello, World!’.
// The 'innerHTML' property is used to set the HTML content inside an element. In this case, it changes the text inside the view button

function textChange(){
  view.innerHTML = 'Hello, World!'
}
// textReturn() function that changes the text of view element/button back to 'View'

function textReturn(){
  view.innerHTML = 'View'
}

// click on view button text changes to 'hello world'
// click for close button text changes back to 'View'

view.onclick = textChange; or view.addEventListener('click', textChange);
close.onclick = textReturn;
