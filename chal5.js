//Understand The Problem
// Array tranformed to string, separated by ...
//What is the X days? Index+1

//Breaking Up The Sub Problems
// trnasfoerm array into string
// Transform each element to string with c
// String need to contain day (index+1)
// --Add... boolean elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(
    `...${data1[0]} degre c...${data2[1]} degree c ${data1[2]} degree c...`
);

const printforcast = function(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}degree c in ${i + 1} days...`;
    }
    console.log(str + "\t");
};
printforcast(data1);