const firstName = "Gopal";
const bithYear = 2000;
const year = 2024;
const job = "software developer"

const gopalInfo = "I'm " + firstName + ", a " + (year - bithYear) + " old " + job + "!";
console.log(gopalInfo);

const gopalInfoNew = `I'm ${firstName}, a ${year - bithYear} old ${job}!`
console.log(gopalInfoNew);

console.log(`Just regular String`);

console.log("String with \n\
multiple \n\
line");

console.log(`String with 
multiple
line`)