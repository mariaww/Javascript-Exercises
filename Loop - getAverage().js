
/* Function purpose: */
// 1) The 'getAverage' function takes an array of numbers ('scores') as input.
// 2) It calculates the sum of all the numbers in the array.
// 3) It then returns the average of those numbers by dividing the sum by the number of elements in the array ('scores.length'). 


/* for...of (simple loop) */
// The for...of loop in JavaScript is a simple and convenient way to iterate over the values of an iterable object, such as arrays, strings, maps, sets, and more. Unlike the traditional for loop, which relies on indexing, the for...of loop allows you to directly access each element in the iterable.

// The 'for...of' loop is specifically designed to iterate over the values of iterable objects like arrays. In this case, 'scores' is an array, and you want to sum all of its values. The 'for...of' loop provides a direct way to access each value in the array without needing to reference it by index.

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) { // you want to iterate over each score in the 'scores' array and add it to the 'sum'.
    sum += score;
  }

  return sum / scores.length;
}





/* for..loop (tranditional loop) */
function getAverage(scores) {
  let sum = 0; // initializes the sum to 0 before starting the loop -> after the loop completes, sum holds the total sum of the elements in the scores array

  for (let i = 0; i < scores.length; i++) { // i < scores.length, ensuring that the loop runs for each element in the scores array
    sum += scores[i]; // Accumulate the sum -> sum = sum + scores[i];
  }

  const average = sum / scores.length; // Calculate the average
  return average; // The average is calculated and returned by the function, if the function does not return the calculated average,undefined will be returned by default.
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // Output: 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // Output: 85.4

/* Summary */
// The loop iterates over each element in the scores array, adding each value to sum.
// After the loop, the average is calculated by dividing sum by the number of elements in scores.
// The return average; statement ensures that the result is returned to wherever the function is called.


/* 
1) sum:
'sum' is a variable that stores the running total of the 'sum' of the elements in the 'scores' array. Initially, 'sum' is typically set to 0.


2) scores[i]:
'scores' is an array, and 'i' is the index that is used to access each element of the array during iteration (in a loop). scores[i] refers to the element at the index 'i' in the 'scores' array.

3) sum = sum + scores[i];:
This adds the current element of the array (scores[i]) to the existing value of 'sum'.
After adding the value, the new 'sum' is stored back into 'sum'.

4) += Operator:
The += operator is a shorthand for addition followed by assignment. It adds the right-hand side value to the left-hand side variable and then assigns the result back to the left-hand side variable.

 */
