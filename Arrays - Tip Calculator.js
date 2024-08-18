// Javascript - Arrays - Tip Calculator 🥶

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 

*/

/* 
const calcTip = function (anyBill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bill = [125, 555, 44];

const bills = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(bills)

const total = [calcTip(bills[0]) + bill[0]];
console.log(total)
 */

/////////////////////Issue:////////////////////

// Issues:
// The 'calcTip' function should use the 'anyBill' parameter instead of 'bill'.
// The variable 'bill' is used inconsistently; it should be named 'bills' since it is an array of multiple bill values.
// The total calculation should correctly reference the bills array and not call 'calcTip' on the 'already computed tips'.

// Corrected Code:
// Correct the 'calcTip' function to use the 'anyBill' parameter.
// Use the correct variable names consistently. 'bills' 'tips'
// Compute the total tips and bill amounts properly.


/////////////////////Corrected Code:////////////////////

// Function to calculate the tip based on the bill amount
const calcTip = function (anyBill) {
    return anyBill >= 50 && anyBill <= 300 ? anyBill * 0.15 : anyBill * 0.2;
}
// const calcTip = anyBill => anyBill >= 50 && anyBill <= 300 ? anyBill * 0.15 : anyBill * 0.2;

// Array of bill values
const bills = [125, 555, 44];

// Calculate tips for each bill
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips) // Outputs: [18.75, 111, 8.8]]

// Calculate total amounts (bill + tip) for each bill
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals); // Outputs: [143.75, 666, 52.8]


