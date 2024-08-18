// Javascript - Object Method - BMI Calculator 🥶


/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter) 

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

*/

// Create Object for Mark with property name, mass and height
const mark = {
    name: 'Marks Miller',
    mass: 78,
    height: 1.69,

    // Create a method to calc the BMI of Mark
    calcBMI: function () {  // this is a function value (method)
        this.BMI = Math.round(this.mass / (this.height ** 2)); // mark.BMI dot operator creates new 'BMI' property to mark's 'object', we only need to calc BMI once and return the value
        return this.BMI;
    }
};


// Create Object for John 
const john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = Math.round(this.mass / (this.height ** 2));
        return this.BMI;
    }
};

// mark.calcBMI();
// john.calcBMI();
console.log(`John's BMI is ${john.calcBMI()}, Mark's BMI is ${mark.calcBMI()}`);


// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// Create if statement or tenary to determine who has higher BMI
if (john.BMI > mark.BMI) {
    console.log(`${john.name}'s BMI (${john.BMI}) is higher than ${mark.name}'s (${mark.BMI})!`);
} else if (john.BMI < mark.BMI) {
    console.log(`${mark.name}'s BMI (${mark.BMI}) is higher than ${john.name}'s (${john.BMI})!`);
}

