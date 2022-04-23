/*const massMark = 95;
const heightMark = 1.88;

const massJohn = 98;
const heightJohn = 1.91;
*/
const massMark = 93;
const heightMark = 1.88;

const massJohn = 97;
const heightJohn = 1.89;

const BMImark = (massMark / heightMark ** 2);
const BMIjohn = (massJohn / (heightJohn * heightJohn));
console.log(`BMImark:(${BMImark}), BMIjohn: (${BMIjohn})`)

if (BMImark > BMIjohn) {
    console.log(`BMImark is (${BMImark}) Greatare Than BMIjohn (${BMIjohn})`);
} else {
    console.log(`BMImark is (${BMImark})  Less Than BMIjohn (${BMIjohn})`);
}