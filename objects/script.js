'use strict';

const johnInfo = {
    firstName: "John",
    lastName: "Sharma",
    age: 32,
    friends: ["Rohan", "Vivek", "Raj"]
}

console.log(johnInfo);

console.log(johnInfo.lastName);

console.log(johnInfo['lastName']);

const nameKey = 'Name';
console.log(johnInfo['first' + nameKey]);
console.log(johnInfo['last' + nameKey]);


let interestedIn = prompt('What do you want to about John? Choose between firstName, lastName, age, friends.');

let count = 0;
while (count < 3) {
    if (johnInfo[interestedIn]) {
        console.log(johnInfo[interestedIn]);
        break;
    } else {
        interestedIn = prompt('Wrong request! Choose between firstName, lastName, age, friends.');
        count++;
    }
}

johnInfo.location = "Ahmedabad";
johnInfo['twitter'] = "@john";

console.log(johnInfo);

console.log(`${johnInfo.firstName} has ${johnInfo.friends.length} frinends, and his best friend is ${johnInfo.friends[0]}`);

const john = {
    firstName: "John",
    lastName: "Sharma",
    birthYear: "2000",
    job: 'teacher',
    age: 32,
    friends: ["Rohan", "Vivek", "Raj"],
    hasDriverLicense: true,
    // calAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }

    // calAge: function () {
    //     console.log(this);
    //     return 2023 - this.birthYear;
    // }

    calAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    johnInfo: function () {
        return `${this.firstName} is ${this.calAge()}-year old ${this.job}. He has ${this.hasDriverLicense ? 'a' : 'not'} driving license `;
    }
}

// console.log(john.calAge(2000));
// console.log(john['calAge'](2000));

console.log(john.calAge());

console.log(john.age);
console.log(john.age);
console.log(john.age);

console.log(john.johnInfo());

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [], totals = [];

for (let i = 0; i < bill.length; i++) {
    const tip = calcTip(bill[i]);
    tips.push(tip);
    totals.push(bill[i] + tip);
}

console.log(tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (const element of arr) {
        sum += element;
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
