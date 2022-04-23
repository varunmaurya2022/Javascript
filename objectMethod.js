const jonas = {
    firstNmae: 'varun',
    lastName: 'Maurya',
    birthYear: 2000,
    job: 'teacher',
    friends: ['arun', 'kajal', 'mohit'],
    hasDriverLicense: true,

    //calcAge: function(birthYear) {
    //  return 2020 - birthYear;
    //}

    //calcAge: function(birthYear) {
    //  console.log(this)
    //return 2020 - this.birthYear;
    //}
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calAge} 
        year old ${jonas.job} and he has ${this.hasDriverLicense ?'a':'no'} driver's License.`

    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);


console.log(jonas.getSummary());