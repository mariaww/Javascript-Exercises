//Javascript - Function - Rock, Paper, or Scissors

/*
Code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.

*/

// Create a function for user choice between rock paper and scissors
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error, You must enter rock, scissors or paper');
    }
};

// console.log(getUserChoice('apple'));

// Create a function for computer choice use Math.floor and Math.random to get a round number between 0-2, depending on the number it then return to either rock, paper or scissors
const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random() * 3));
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

// console.log(getComputerChoice());

// Create a function to determine the winner between userChoice and computerChoice with 4 possible outcomes. 
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie.';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, the computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }


    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, the computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }


    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, the computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }

    if (userChoice === 'bomb') {
        return 'Congratulations, you won!';
    }
};

// console.log(determineWinner('scissors','rock'));

// Create the game function and pass in acutal value of the user, computer value will generated by itself
const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();

    console.log('You threw: ' + userChoice); // Print user choice
    console.log('Computer threw: ' + computerChoice);  // Print computer choice
    console.log(determineWinner(userChoice, computerChoice)); // Print the result
};

// Call the function
playGame();


