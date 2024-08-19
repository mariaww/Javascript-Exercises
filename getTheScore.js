// 1)  getAverage Function:
// Takes an array of scores, sums them up, and returns the average.

  function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

// 2)  getGrade Function:
// Takes a score and returns a letter grade based on the score.
  
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// 3)  hasPassingGrade Function:
// Checks if the student's grade is not an "F", indicating they passed.
  
 // hasPassingGrade is a function that takes a score as an argument, call hasPassingGrade(studentScore) to check if the student's score is passing.
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// 4)  studentMsg Function:
// Determines if the student passed or failed based on their score, then constructs a message that includes the class average, the student's grade, and whether they passed or failed.

function studentMsg(totalScores, studentScore) {
  if (hasPassingGrade(studentScore)) {
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
  } 
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)); // Expect : Class average: 71.7. Your grade: F. You failed the course.
// studentMsg function call with two arguments:
// The first argument is the array of class scores.
// The second argument is the individual student's score.
