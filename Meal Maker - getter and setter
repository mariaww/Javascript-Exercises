// Javascript - Meal Maker - Object Method using getter and setter to access private propertie inside an object

//  Private properties _ is to encapsulate the data and restrict direct access to them from outside the object. This practice helps in maintaining data integrity and enforcing controlled access and modifications through getter and setter methods.

// The menu object is designed to manage meal and price data, including setters for setting the meal and price, and a getter for retrieving the special of the day.

const menu = {
  _meal:'', // A private property initialized as an empty string to store the name of the meal.
  _price: 0, // A private property initialized to 0 to store the price of the meal.

// The setter method checks if 'Pizza' is a string.
  set meal(whatMeal) {
if (typeof whatMeal === 'string') {
 return this._meal= whatMeal; 
   }
  },

// The setter method checks if whatPrice is a number.
  set price(whatPrice){
    if (typeof this._price === 'number') {
    return this._price = whatPrice;
    }
  },


// The getter checks if both _meal and _price have truthy values (i.e., they are not empty or zero).
  get todaysSpecial(){
    if(this._meal && this._price){
      return  `Today’s Special is ${this._meal} for $ ${this._price}!`
    } else {
      return 'Meal or price was not set correctly!'
    }
  }
};
// If both values are set correctly, it returns a string: Today’s Special is {meal} for ${price}!
// If either _meal or _price is not set correctly, it returns: Meal or price was not set correctly!



// Now reassign the two menu properties for todaysSpecial
menu.meal = 'Pizza'; // whatMeal takes the value 'Pizza'.
menu.price = 10; // whatPrice takes the value 10.
console.log(menu.todaysSpecial); // Since both _meal and _price are set correctly, the getter method returns the string: Today’s Special is Pizza for $10!


