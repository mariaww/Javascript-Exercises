//Javascript - Function - Sleep Debt Calculator


/*
The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
  
  Get the total sleep hours that you actually slept
  Get the ideal sleep hours that you prefer
  Calculate the sleep debt, if any.

*/


// Create a function to get the sleep hours you got each day of the week. Set day as an argument and return the number of hours slept on that day.
const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 6
            break;
        case 'wednesdays':
            return 5
            break;
        case 'thursday':
            return 6
            break;
        case 'friday':
            return 8
            break;
        case 'saturday':
            return 7
            break;
        case 'sunday':
            return 6
            break;
        default:
            return 'Error';
    }
};


// console.log(getSleepHours('monday'));


// Create a function to get actual sleep hours, inside the function body call the getSleepHours() function for each day of the week, sum up to get total sleep hours
const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesdays') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}


// console.log(getActualSleepHours());


//   const getIdealSleepHours=()=>{
//     const idealHours=8;
//     return idealHours*7;
//   };


// Create a function to get idea sleep hours with no parameters. Set the value of your ideal sleep hours and stored it to a variable. Then return the idealHours multiplied by 7 day(a week).
const getIdealSleepHours = idealHours => idealHours * 7;


// console.log(getIdealSleepHours());


// Create a function to calculate sleep debt with no parameters. Inside the function body, create a variable to store getActualSleepHours() function call and create another variable to store getIdealSleepHours() function call
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);

    //   Now that you have actualSleepHours and idealSleepHours, write a few if/else statements to output the result to the   console. The function should fulfill this logic:

    //   If actual sleep equals ideal sleep
    //   If the actual sleep is greater than the ideal sleep
    //   If the actual sleep is less than the ideal sleep

    //   To make this calculator more helpful, add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt(). 

    if (actualSleepHours === idealSleepHours) {
        console.log('Great, you have perfect amount of sleep!');
    }

    else if (actualSleepHours > idealSleepHours) {
        console.log('You have slept ' + (idealSleepHours - actualSleepHours) + ' hours more this week.');
    }

    else if (actualSleepHours < idealSleepHours) {
        console.log('You should get some rest, because you have slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have this week.');
    }
}

// Call the function
calculateSleepDebt();

/*
BUNUS:
getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week. 
*/
