//This is my first JS code!
// let person = {
//     name: 'Phil',
//     age: 35
// };

// person.name = "John";


// person['name'] = 'Mary';

// let selection = 'name';
// person[selection] = 'Luke';

// console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors[0]);
console.log(selectedColors.length);

function greet(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}

function square(number) {
    return number * number;
}

let number = square(2)
console.log(number);

greet('Phil', 'Gilligan');
greet('Ashley', 'Dealy');