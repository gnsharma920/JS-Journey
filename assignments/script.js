let country = "India";
let continent = "Asia";
let population = 40;
let isIsland = false;
let language;

console.log(country);
console.log(continent);
console.log(population);

console.log("Type of isIsland should be boolean : " + typeof isIsland);
console.log("Type of population should be number : " + typeof population);
console.log("Type of country should be string : " + typeof country);
console.log("Type of language should be undefine : " + typeof language);


const massMark = 78, heightMark = 1.69;
const massJohn = 92, heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);


if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})!`);
} else {
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`);
}

const bill = 430;
const tip = bill > 50 && bill < 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(`The bill was ${bill}, and tip was ${tip}, and total value ${bill + tip}`);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


//function
const calcAverage = (firstTimeScore, secondTimeScore, thirdTimeScore) => (firstTimeScore + secondTimeScore + thirdTimeScore) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins / 2 > avgKoalas) {
        console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgDolphins < avgKoalas / 2) {
        console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
}

let avgScoreDolphins = calcAverage(1, 23, 71);
let avgScoreKoalas = calcAverage(65, 54, 49);

checkWinner(avgScoreDolphins, avgScoreKoalas);

avgScoreDolphins = calcAverage(1, 4, 7);
avgScoreKoalas = calcAverage(65, 54, 49);

checkWinner(avgScoreDolphins, avgScoreKoalas);

// array
const calcTip = (bill) => bill > 50 && bill < 300 ? (bill * 15) / 100 : (bill * 20) / 100;

const bills = [125, 555, 44];

const tips = [];
const totals = [];
for (const bill of bills) {
    const tip = calcTip(bill);
    tips.push(tip);
    totals.push(bill + tip);
}

console.log(tips)
console.log(totals)

//Object
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: () => {
        this.bmi = this.mass / (this.height * this.height);
        return bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: () => {
        this.bmi = this.mass / (this.height * this.height);
        return bmi;
    }
}
mark.calcBMI()
john.calcBMI()

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}
