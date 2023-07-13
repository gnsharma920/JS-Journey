'use strict';

function logger() {
    console.log("Hello Logger");
}

logger();
logger();
logger();

// function declaration
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

console.log(fruitProcessor(2, 5));
console.log(fruitProcessor(6, 4));
console.log(fruitProcessor("RED", "ORANGE"));
console.log(fruitProcessor("TWO", 5));
console.log(fruitProcessor(true, 5));


// function expression
const appleAndOrageYummyJuice = function appleAndOragnedJuice(apples, oranges) {
    const juice = `Juice of ${apples} apples and ${oranges} oranges.`
    return juice;
}

console.log(appleAndOrageYummyJuice(6, 4));
console.log(appleAndOrageYummyJuice("RED", "ORANGE"));
console.log(appleAndOrageYummyJuice("TWO", 5));
console.log(appleAndOrageYummyJuice(true, 5));

// Arrow function
const appleAndOrageBestJuice = (apples, oranges) => {
    return `Juice of ${apples} apples and ${oranges} oranges.`;
}

console.log(appleAndOrageBestJuice(10, 20));


// calling function from other function

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitJuiceMaker(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
    return juice;
}

console.log(fruitJuiceMaker(2, 5));
console.log(fruitJuiceMaker(6, 4));
console.log(fruitJuiceMaker("RED", "ORANGE"));
console.log(fruitJuiceMaker("TWO", 5));
console.log(fruitJuiceMaker(true, 5));


