const varun = [
    'arun',
    'varun',
    2017 - 2000,
    'teacher', ['kajal', 'mohit', 'sagar'],
    true
];

//0,1---4
//4,3---0
for (let i = varun.length - 1; i >= 0; i--) {
    console.log(i, varun[i])
}

//Loop Inside The Loop
for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(`--------------Startung Exercise  ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        // console.log(`Lifing weight repetition ${rep}`)
        console.log(`Execise ${exercise}: Lifting Weight repetition ${rep}`)


    }
}