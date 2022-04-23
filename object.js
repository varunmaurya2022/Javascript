const jonasArray = [ //Array
    'janas',
    'varun',
    2017 - 2000,
    'techer', ['michel', 'peter', 'steven']
];

const jonas = { //object holds key value pair
    firstName: 'varun',
    lastName: 'maurya',
    age: 2024 - 2000,
    job: 'teacher',
    friends: ['arun', 'kajal', 'Mohit']

};

//retrive data from object dot and bracket
console.log(jonas);

console.log(jonas.lastName); //dot

console.log(jonas['firstName']);
console.log(jonas['firstName', 'lastName']);

const namekey = 'Name';
console.log(jonas[`first` + namekey]);
console.log(jonas[`last` + namekey]);

const interest = prompt(`What do ypu know abour jonas! firstname, lastName,age ,job and 
friends`);
console.log(interest);

console.log(jonas[interest]);


if (jonas[interest]) {
    console.log(jonas[interest]);
} else {
    console.log(`Wrong request !Please Enter Valid Choice !`);
}

jonas.location = 'Farrukhabad';
jonas['email'] = 'amardeep@2018Gmail.com';
console.log(jonas);

//challange 
//'jonas has 3 friends , and his best friend
//called arun'

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]} `);