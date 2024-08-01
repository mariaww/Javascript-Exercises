//Javascript - Conditional - Magic Eight Ball

/*
In this project we will build a Magic Eight Ball using control flow in JavaScript. 
The user will be able to input a question, then our program will output a random fortune. 
*/

// Create a variables for the usersname, a question to ask, a random number, and an empty variable for the eight ball
const userName = 'Jane';

const userQuestion = 'How long does it take to learn Javascript?';

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';


// If the user enters a name assign to userName, else, say hello.
userName ? console.log(`Hallo ${userName}`) :
    console.log('Hallo');

console.log(`${userName} asked:${userQuestion}`);


// Create each conditional statement to be assigned to eightBall depending on the number generated from random number
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
}


// Print the eightBalls answer to the console
console.log(`Magic Eightball: ${eightBall}`);
