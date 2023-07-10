//type conversion ==> When we convert type manually
//type coercion ==> When JS convert automatically behind the scenes for us


//type conversion
const inputYear = "2000";
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("firstName"));
console.log(typeof NaN);
console.log(String(23), 23)

//type coercion
console.log("I'm " + 23 + " year old");
console.log('23' - '10' - 3); // 10
console.log('23' * '2');// 46
console.log('50' / '2');// 25
console.log('10' % '2');// 0

console.log('23' + '10' + 2) // 23102

let n = '1' + 1; // 11
n = n - 1; // 10
console.log(n);

const x = 2 + 3 + 4 + '5'; //95
const y = '10' - '3' - '4' - 2 + '5'; //15


// 5 falsy value ==> 0, '',undefind, null, NaN
// Other than these, All are truthy value.

console.log(Boolean(0));
console.log(Boolean(1));

console.log(Boolean(""));
console.log(Boolean("Hello"));

console.log(Boolean(undefined));
console.log(Boolean(null));

console.log(Boolean(NaN));

console.log(Boolean({}));

const money = 1000;
if (money) {
    console.log("Don't spend all money");
} else {
    console.log("You should get a job");
}

let height;// What if height is defined and value is 0? 
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is not UNDEFINDED");
}


