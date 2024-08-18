/* Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program. */

// create a variable that will be translated to whale talk and an array for whale vowel
const input="turpentine and turtles";
const vowels=['a', 'e', 'i', 'o', 'u']

// create a variable to store the 'vowels' from 'input' string
let resultArray=[]

// Create a loop to iterate through each letter of the 'input 'variable and we will compare each letter with our 'vowels' array.
for (let i= 0; i <input.length;i++){
//  console.log(i)

//Whales double their e‘s and the u‘s. Write an if statement that checks if each letter in the 'input' string is equal to 'e'and 'u', if so push them to 'reresultArray'
//Note: This statement belongs before the inner for loop block inside the outer for loop. This is because you only want to perform this check once for every letter in the input.
if (input[i]==='e'){
  resultArray.push(input[i]);
}
if (input[i]==='u'){
  resultArray.push(input[i]);
}


// Compare 'input' letter to every letter in the 'vowels' array
for (let v = 0; v < vowels.length ;v++) {

// console.log(v)

// Create a nested loop for 'vowel' to check each letter of 'input' against all the 'vowels' elements during each iteration
if (input[i]===vowels[v]){

  // console.log(input[i])

   resultArray.push(input[i]);
}
}}
// console.log(resultArray)

// To produce proper whale language, we want to capitalize the array elements and put them together as one string.
const resultString= resultArray.join("").toUpperCase();
console.log(resultString)
