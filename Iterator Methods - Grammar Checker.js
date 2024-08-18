// Javascript - Grammar Checker - iterator methods

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
// console.log(storyWords)

let count = 0;


// Counting Words
//.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
storyWords.forEach(function(word){
  count++;
})
console.log(count); // Print: 181 / count words of storyWords array from 0 


// Filtering Words - remove word
// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria 
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
}) // 'literally' removed / find unnecessaryWord = literally from storyWords array and save to new storyWords array


// Replacing Words
//.map() works in a similar manner to .forEach()— executes the same code on every element in an array and returns a new array with the updated elements.
storyWords = storyWords.map((word) => {
  return word === misspelledWord ? 'beautiful': word;
}) // replaced with 'beautiful'/ if misspelledWord is found, replaced with beautiful and saved to new storyWords array


// Finding badword
// The .findIndex() callback function check each word to see if it equals the badWord variable declared on line 6, and return the index of the found word.
let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
})
console.log(badWordIndex) // Print: 78 /find how many badWord are in storyWords array


// Replacing badword
// Access the element inside the storyWords array that has the index of badWordIndex using bracket notation and replace
storyWords[badWordIndex] = 'really' // replacing the found badWords of storyWords array to 'really'


// Finding word longer than 10 
// The .every() method uses a callback function to test if every element in an array passes a specified condition. It returns true if all elements pass, and false if there is an element that does not pass.
let lengthCheck = storyWords.every((word) => {
  return word.length <= 10;
})
console.log(lengthCheck) // false, there is word longer than 10 character in storyWords array

// Replacing the word
storyWords[lengthCheck] = 'stunning';// replacing the found <= 10 word of storyWords array to 'stunning'


console.log(storyWords.join(' '));
