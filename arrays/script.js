'use strict';

const friend1 = 'Gopal';
const frinend2 = 'Rohan';
const frinend3 = 'Vivek';

const friends = ["Gopal", "Rohan", "Vivek"];

console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[friends.length - 1]);

friends[1] = "Jay";
console.log(friends);

// friends = ["Bhavesh", "Vishal", "Devang"];

const firstName = "John";
const johnInfo = [firstName, "Sharma", 2023 - 2000, friends];
console.log(johnInfo);


//Excercise

const calcAge = (bithYear) => 2023 - bithYear;

const years = [1999, 2000, 2009, 2011, 2005];

// Add method
const currentAge = [];
for (const year of years) {
    currentAge.push(calcAge(year)); // add value at last
}
console.log(currentAge);
currentAge.unshift(18); // add value from at start
console.log(currentAge);
//Remove method
currentAge.pop(); // remove value from the last
console.log(currentAge);
currentAge.shift(); // remove value from the first
console.log(currentAge);
console.log(currentAge.indexOf(24));
console.log(currentAge.includes(24));





