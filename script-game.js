'use strict';
//let elm = document.querySelector('.message');
let elm = document.querySelector('.message').textContent = 'New message here';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 15;
document.querySelector('.check').addEventListener('click', function () {


    document.querySelector('.guess').value = 17;

})




//console.log(elm)
//console.log(document.querySelector('.message'));

//console.log(document.querySelector('.guess').value);