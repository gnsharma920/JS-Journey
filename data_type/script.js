
// Data Type: Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Int and Decimal ==> Number
// "" and '' ==> String
// true and false ==> Boolean
// let child; ==> Undefine
// Similar to Undifine ==> NULL
// Unique and cannot be changed ==>Symbol
// Larger integer ==> BigInt
// JS has dynamic typing ==> That means you do not have to difine datatype of the value stored in variable.
// Value has a type not a variable

let isJavaScriptGood = true;

console.log(isJavaScriptGood);
console.log("Should be boolean: " + typeof isJavaScriptGood);

isJavaScriptGood = "NOPE"

console.log(isJavaScriptGood);
console.log("Should be String: " + typeof isJavaScriptGood);

let year;
console.log(year);
console.log("Should be Undefine: " + typeof year);

year = 2000;
console.log(year);
console.log("Should be Number: " + typeof year);

console.log(typeof null);

// let,const,var

let age = 30;
age = 31;

const fullName = "Gopal Sharma";

// fullName = "Rohan shah";// Will throw error

// const job; initializer required

var job = "programmer";
job = "teacher"

lastName = "Sharma";
hello = 2;
console.log(hello);
console.log(lastName);


// Diffrence between let, const, var in JS
// var ==> global and local scope, redeclaration and reassignment, hoisting with default value
// let ==> global, block and local scope, reassignment, hoisting without default value
// var ==> global, block and local scope, hoisting without default value



