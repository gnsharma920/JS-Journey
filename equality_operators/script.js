//rules for type coercion in JavaScript:

// If either operand is a string, the other operand will be converted to a string.
// If either operand is a number, the other operand will be converted to a number.
// If either operand is a boolean, it will be converted to a number(true becomes 1 and false becomes 0).
// If one operand is an object and the other is a primitive value, the object will be converted to a primitive value before the comparison is made.
// If one of the operands is null or undefined, the other must also be null or undefined to return true.Otherwise it will return false.

// If either operand is a string, the other operand will be converted to a string.
const c1 = 100;
const c2 = '100';
console.log(c1 == c2);
console.log(c1 === c2);

// If either operand is a boolean, it will be converted to a number(true becomes 1 and false becomes 0).
const c3 = true;
const c4 = true;
console.log(c3 == c4);
console.log(c3 === c4);

const c5 = true;
const c6 = 1;
console.log(c5 == c6);
console.log(c5 === c6);

// If either operand is a boolean, it will be converted to a number(true becomes 1 and false becomes 0).
// If either operand is a string, the other operand will be converted to a string.
const c7 = true;
const c8 = "1";
console.log(c7 == c8);
console.log(c7 === c8);

let age = '18';

if (age === 18) console.log("You just became an adult :D (Strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favouroite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amzaing number");
} else if (favourite === 7) {
    console.log("7 is also an amzaing number");
} else {
    console.log("Nahh! It's not cool");
}


if (favourite !== 23) {
    console.log("Why not 23?");
}
