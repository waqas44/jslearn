'use strict';
/*
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
// console.log(arr);

const arr2 = ['text1', 'text 2', 'text 3'];
// console.log(arr2);
const [x1, y1, z1] = arr2;
console.log(x1, y1, z1);
*/
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // order: function (starterIndex, mainIndex) {
    //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // }
    // order(starterIndex, mainIndex) {
    //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // }
}
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
/*
//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log('old');

// Receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
* /
/*
// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i1, w1, j1] = nested;
//const [i, , [j, k]] = nested;
//console.log(i, j, k);
console.log(i1, w1, j1);
*/

// The Spread Operator (...)
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
//console.log(badNewArr);
console.log([...arr]);
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);


const newMenu = [...restaurant.mainMenu, 'Gnocci'];
//console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);


// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
console.log(`${letters} Schmedtmann`);
*/

// Real-world example
const ingredients = [
    prompt("Let's make pasta! Ingredient 1?"),
    prompt('Ingredient 2?'),
    prompt('Ingredient 3'),
];
console.log(ingredients);