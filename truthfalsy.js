console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean("hello"));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

const money = 0;
if (money) {
    console.log("Don't spend it all!");

} else {
    console.log("You should get a job!");
}

let height = 1; //height(falsy)  height=1(True)
if (height) {
    console.log("Height is Defined");

} else {
    console.log("Height is Undefined!😊");
}