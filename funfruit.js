function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return (juice);

}
console.log(fruitProcessor(4, 2));

const applejuice = fruitProcessor(2, 2)
console.log(applejuice);

console.log(fruitProcessor(5, 0));