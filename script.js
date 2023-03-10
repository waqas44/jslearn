 	
//alert("hello");
/*
console.log("Liaqat");
console.log(typeof 23);

let firstName = "Waqas";

console.log(firstName);


// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "waqas";
let PI = 3.1415;
console.log(typeof PI);
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

console.log(typeof job2);
*/

/* let javascriptIsFun = true;
console.log(javascriptIsFun);


console.log(typeof javascriptIsFun);
console.log(typeof 23);
 console.log(typeof 'Waqas');

javascriptIsFun = 'YES!';
console.log('Yes type is : ' + typeof javascriptIsFun);

let year;
console.log(year);
console.log('year type is : ' + typeof year);

year = 1988;
console.log('year type after vale declaration : ' +  typeof year);

console.log(typeof null);
*/

// let, const and var
/* let age = 36;
age = 31;
console.log(age);
console.log(typeof age);


const birthYear = 1984;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Liaqat';
console.log(lastName);
const abc ="my DOB";

*/

//Data Type Conversion and Coercion
/*
console.log('9' - '5');
 console.log( '19' - '13' + '17');
console.log(  '19' - '13' + 17);
console.log('123' < 57);
console.log( 5 + 6 + '4' + 9 - 4 - 2);






// Basic Operators
// Math operators
const now = 2023;
const agePerson = now - 1991;
const ageXyz = now - 2018;
console.log(agePerson, ageXyz);

console.log(agePerson * 2, agePerson / 10, 2 ** 3);


const firstName = 'Ali';
const lastName = 'akram';
console.log(firstName + ' ' + lastName);



// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(agePerson > ageXyz); // >, <, >=, <=
console.log(ageXyz >= 18);

const isFullAge = ageXyz >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
// Strings and Template Literals
const firstName = 'Waqas';
const job = 'teacher';
const birthYear = 1984;
const year = 2023;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const waqasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(waqasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


*/

/*
// Taking Decisions: using if else Statements
const age = 17;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);




// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Spend with care ;)");
} else {
  console.log('Should Work!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}




// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 26) { 
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 8) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}



// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'waqas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink juice 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'juice 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'juice 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'juice 🍷' : 'water 💧'}`);



'use strict';


// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/

/*
// Functions
function logger() {
  console.log('My name is Waqas');
}

// calling / running / invoking function
logger();


function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// Function Declarations vs. Expressions

// Function declaration
const age1 = calcAge1(1991);
console.log(age1);
function calcAge1(birthYeah) {
  return 2024 - birthYeah;
}


// Function expression
const calcAge2 = function (birthYeah) {
  return 2023 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);



// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'waqas')); console.log(yearsUntilRetirement(1980, 'akram'));



// Functions Calling inside other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


*/
/*
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('waqas');
console.log(friends);
console.log(newLength);

friends.unshift('liaqat');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('akram '));
console.log(friends.indexOf('asghar'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/
// Objects Testing
const jonasArray = [
  'Waqas  ',
  'Liaqat',
  2037 - 1991,
  'teacher',
  ['Akram', 'Asghar', 'Ahmad']
];

const jonas = {
  firstName: 'waqas',
  lastName: 'Liaqat',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Akram', 'Asghar', 'Ahmad']
};






