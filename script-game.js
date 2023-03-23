'use strict';
//let elm = document.querySelector('.message');
//let elm = document.querySelector('.message').textContent = 'New message here';

document.querySelector('.number').textContent = '';

document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 15;
// document.querySelector('.check').addEventListener('click', function () {


//     document.querySelector('.guess').value = 17;

// });
let number1 = Math.trunc(Math.random() * 20);
document.querySelector('.check').addEventListener('click', function () {


    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        let num = document.querySelector('.message').textContent = 'No Number !';
        console.log(num);

    }
});

console.log(number1);
document.querySelector('.number').textContent = number1;
//console.log(elm)
//console.log(document.querySelector('.message'));

//console.log(document.querySelector('.guess').value);