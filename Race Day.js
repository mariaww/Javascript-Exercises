//Javascript - Conditional - Race Day

/*
There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
*/



// Create a variable to indicates whether a runner registered early or not
let registeredEarly = true;

// Create a variable for the runner’s age 
let runnerAge = 18;

// Create a control flow statement that checks whether the runner is an adult AND registered early. Add 1000 to their raceNumber if this is true
let raceNumber = Math.floor(Math.random() * 1000);
if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
}


// Create a control flow statement to check age and registration time to determine race time. There is 4 possible outcomes.
if (runnerAge > 18 && registeredEarly) {
    console.log(`Race starts at 9:30 am. Your race number is ${raceNumber}.`); // over 18 and registeredEarly
} else if (runnerAge > 18 && !registeredEarly) {
    console.log(`Race starts at 11:00 am. Your race number is ${raceNumber}.`) // over 18 and not registeredEarly
} else if (runnerAge < 18) {
    console.log(`Race starts at  12:30 pm. Your race number is ${raceNumber}.`)// under 18 
} else {
    console.log("Please see the registration desk.");
}

// Runners who are 25 years old and registered early will run at 9:30 am.

// Runners who are 25 years old and did NOT register early will run at 11:00 am.

// Runners who are 16 years old and registered early will run at 12:30 pm.

// Runners who are 16 years old and did NOT register early will run at 12:30 pm.
