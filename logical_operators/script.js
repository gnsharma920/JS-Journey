const hasDriverLicense = true;
const hasGoodVision = false;

console.log(!hasDriverLicense);
console.log(!hasGoodVision);

console.log(hasDriverLicense && hasGoodVision);
console.log(!hasDriverLicense && !hasGoodVision);
console.log(hasDriverLicense && !hasGoodVision);
console.log(!hasDriverLicense && hasGoodVision);

console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense || !hasGoodVision);
console.log(!hasDriverLicense || hasGoodVision);
console.log(hasDriverLicense || !hasGoodVision);

if (hasDriverLicense && hasGoodVision) {
    console("You can drive");
} else {
    console.log("You cannot drive");
}