// Math operators
const now = 2024;

const rohanBirthYear = 1999;
const ageOfRohan = now - rohanBirthYear;
console.log(ageOfRohan);

const gopalBirthYear = 2000;
const ageOfGopal = now - gopalBirthYear;
console.log(ageOfGopal);

console.log("AGE OF ROHAN AND GOPAL : " + ageOfRohan, ageOfGopal);

console.log(ageOfRohan * 2, ageOfGopal * 2);

console.log(ageOfRohan / 2, ageOfGopal / 2);

console.log(ageOfRohan ** 3, ageOfGopal ** 3);

const firstName = "Gopal";
const lastName = "Sharma";

console.log(firstName + " " + lastName);

let isJavaScriptGood = true;

console.log(isJavaScriptGood);
console.log("Should be boolean: " + typeof isJavaScriptGood);

// Assignment operators
let result = 10 + 5; //15
result += 10; // 25
result -= 5;
result *= 2;
result /= 4;
result %= 3;
result++;
result--;
console.log(result);

// Comparison opeartors
console.log(ageOfGopal > ageOfRohan);
console.log(ageOfGopal < ageOfRohan);
console.log(ageOfGopal <= 24);
console.log(25 >= ageOfRohan);
console.log(ageOfGopal === ageOfRohan);
