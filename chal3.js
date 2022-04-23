const mark = {
    fullname: 'varun maurya',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};

const john = {
    fullname: 'arun maurya',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }


};

mark.calcBMI();
console.log(mark.bmi)

john.calcBMI();
console.log(john.bmi);

console.log(mark.fullname);
console.log(mark.mass);
console.log(mark.height);


console.log(john.fullname)
console.log(john.height)

console.log(john.mass)

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullname}'s BMI (${mark.bmi})
    is greater than ${john.fullname}'s (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullname}'s BMI (${john.bmi})
    is greater than ${mark.fullname}'s (${mark.bmi})`);

}