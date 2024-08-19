function getAverage(scores) {
  let sum = 0; // Initialize sum to 0

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i]; // Accumulate the sum
  }

  const average = sum / scores.length; // Calculate the average
  return average; // Return the average
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // Output: 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // Output: 85.4
