// Javascript - Scope - Training Days 🥶

/* Ideally, the getRandEvent() function selects an event at random. The getTrainingDays() function returns the number of days to train based on the event selected. The logEvent() and logTime() functions print the athlete name, event, and number of days to the console. */


// The random variable is defined in the global scope. Each time getRandEvent() is called, it uses the same value. Lets move the random variable from the global scope to block scope within the getRandEvent function
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};


// To avoid the ReferenceError, declare days within the getTrainingDays function
const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }

    return days;
};


// The log functions–logEvent() and logTime()–use the same name variable. 
// Let’s avoid this repetition by adding name as the first parameter for each function and move the name variable to global scope.
const name = 'Nala';

const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};




const event = getRandEvent();
const days = getTrainingDays(event);

// Pass name as the first argument to logEvent() and logTime().
logEvent(name, event);
logTime(name, days);



const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
