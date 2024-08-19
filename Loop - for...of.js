/* How for...of Loop Works */

// When you need to iterate over the elements of an array, string, set, or map.
// When you don't need to use or access the index of the elements during iteration (otherwise, use for...in or a traditional for loop).
// It cannot be used to iterate over objects directly, but you can use Object.keys(), Object.values(), or Object.entries() to get an array of keys, values, or key-value pairs from an object.

for (const element of iterable) {
  // code to execute for each element
}
// element: A variable that represents the current value in the iterable object.
// iterable: An object that can be iterated over (e.g., an array, string, set, etc.).


/* Example 0: Iterating Over an Array */
const numbers = [10, 20, 30, 40, 50];

for (const num of numbers) {
  console.log(num);
}

Output:
10
20
30
40
50
// The loop iterates over each value in the numbers array, and num holds the value of each element during each iteration.


/* Example 1: Iterating Over a String */
const message = "Hello";

for (const char of message) {
  console.log(char);
}

Output:
H
e
l
l
o
// The loop iterates over each character in the string message, and char holds the value of each character.

/* Example 2: Iterating Over a Map */
const userRoles = new Map([
  ['Alice', 'Admin'],
  ['Bob', 'Editor'],
  ['Charlie', 'Subscriber']
]);

for (const [user, role] of userRoles) {
  console.log(`${user}: ${role}`);
}

Output:
Alice: Admin
Bob: Editor
Charlie: Subscriber

//  The loop iterates over the entries in the Map object userRoles. Each entry is a key-value pair, so you can use array destructuring to access the key (user) and value (role) in each iteration.

/* Example 3: Iterating Over an Object's Values (Using Object.values) */
const user = {
  name: 'John Doe',
  age: 30,
  occupation: 'Developer'
};

for (const value of Object.values(user)) {
  console.log(value);
}

Outout: 
John Doe
30
Developer
// Since objects aren't directly iterable with for...of, you can use Object.values() to get an array of the object's values, which can then be iterated over with for...of.


/* Example 4: Iterating Over an Array with for...of (Sum of Elements) */
const scores = [85, 90, 78, 92];

let total = 0;
for (const score of scores) {
  total += score;
}
console.log(`Total: ${total}`);

Outout: 
Total: 345
// The loop iterates over each score in the scores array, adding each score to total.


/* Example 5: Iterating Over a Set */
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);

for (const value of uniqueNumbers) {
  console.log(value);
}
// The loop iterates over the unique values in the Set object uniqueNumbers. Sets automatically remove duplicates, so only unique values are logged.
