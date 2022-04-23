const calctempAmmplitude = function(t1, t2) {
    const temp = t1.concat(t2);
    console.log(temp);

    let max = temp[0];
    let min = temp[0];

    for (let i = 0; i < temp.length; i++) {
        const curtemp = temp[i];

        if (typeof curtemp !== "number") continue;
        if (curtemp > max) max = curtemp;
        if (curtemp < min) min = curtemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calctempAmmplitude([1, 5, 3], [9, 0, 5]);
console.log(amplitude);

// const temp = [3, -2, -6, -1, "error", 9, 13, 17, 14, 9, 5];
// //What is temp amplitude ? differnce between highest and lowest temp
// //How to compute max and min temperature
// //What's a sensor error? And what do do?

// const caltempAmp = function(temp) {
//     let max = temp[0];
//     let min = temp[0];
//     for (let i = 0; i < temp.length; i++) {
//         const curtemp = temp[i];
//         if (typeof curtemp !== "number") {
//             continue;
//         }

//         if (curtemp > max) max = curtemp;
//         if (curtemp < min) min = curtemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// // caltempAmp([3, 7, 4, 1, 8]);
// const Amplitude = caltempAmp(temp);
// console.log(Amplitude);

//With 2 Arrays , should we implement functionally twice No! Just two Arrays
// Breaking up two subproblems
// Merge Two Arrays