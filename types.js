const varun = [
    'varun',
    'arun',
    2017 - 2000,
    'teacher', ['sagar', 'kajal', 'virat'],
    true
];
const types = [];


for (let i = 0; i < varun.length; i++) {

    //Reading from varun Array
    console.log(varun[i], typeof varun[i]);
    //Filling types Array

    types[i] = typeof varun[i];

}
console.log(types);