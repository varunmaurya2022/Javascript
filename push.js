const varun = [
    'varun',
    'arun',
    2017 - 2000,
    'teacher', ['kajal', 'mohit', 'sagar']
];

const types = [];

for (let i = 0; i < varun.length; i++) {
    console.log(varun[i], typeof varun[i]);

    types.push(typeof varun[i]);
}
console.log(types)


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log('--------------------ONLY STRING------------')
for (let i = 0; i < varun.length; i++) {
    if (typeof varun[i] != 'string') continue;

    console.log(varun[i], typeof varun[i]);
}
//Break with number
console.log('--------------Break With Number------------')
for (let i = 0; i < varun.length; i++) {
    if (typeof varun[i] === 'number') break;

    console.log(varun[i], typeof varun[i]);
}