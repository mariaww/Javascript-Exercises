// return the letter grade as a string that the average corresponds to and return invalid grade. if any of the three grades are less than 0 or greater than 100

function finalGrade(grade1, grade2, grade3){
if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100) ){
  return 'You have entered an invalid grade.'
}

// if statement
let average = (grade1 + grade2 + grade3)/3 ;
if (average < 60){ 
  return 'F'
} else if (average < 70){ 
  return 'D';
} else if (average < 80){ 
  return 'C';
} else if (average < 90){ 
  return 'B';
} else {
  return 'A';
}
}


// switch statement
switch (true) {
case average > 0 && average < 59:
return (‘F’);
break;
case average > 60 && average < 69:
return (‘D’);
break;
case average > 70 && average < 79:
return (‘C’);
break;
case average > 80 && average < 89:
return (‘B’);
break;
case average > 90 && average < 100:
return (‘A’);
break;
default:
return ‘You have entered an invalid grade.’;
}



console.log(finalGrade(99, 92, 95)) // Should print 'A'

