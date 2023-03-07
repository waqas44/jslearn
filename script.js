 	
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
*/



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





