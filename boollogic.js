const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);

const hr = true;
const br = false;

console.log(hr && br);
console.log(hr || br);

if (hr) {
    console.log("HR is true!");
} else {
    console.log("HR is false! ")
}

if (br) {
    console.log("BR is true!");
} else {
    console.log("BR is false!");
}

if (hasDriverLicense || hasGoodVision || isTired) {
    console.log("Sarah is driving License But she is tired!😊");

} else {
    console.log("Sarah is not  driving License And she is not tired!😊")
}

if (hasDriverLicense && hasGoodVision && isTired) {
    console.log("Varun is driving License and he is driving a car😀");
} else {
    console.log("Varun is not able to drive!");
}