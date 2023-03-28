'use strict';
//let elm = document.querySelector('.message');
//let elm = document.querySelector('.message').textContent = 'New message here';

// document.querySelector('.number').textContent = '';

// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 15;
// document.querySelector('.check').addEventListener('click', function () {


//     document.querySelector('.guess').value = 17;

// });
let number1 = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {


    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        let num = document.querySelector('.message').textContent = 'No Number !';
        console.log(num);

    } else if (guess === number1) {
        let num = document.querySelector('.message').textContent = 'correct number';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.highscore').textContent = score;
        //document.querySelector('.check').style.display = 'none';
    }
    else if (guess > number1) {
        if (score > 0) {
            let num = document.querySelector('.message').textContent = 'Too High';

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost';
        }

    }
    else if (guess < number1) {
        if (score > 0) {
            let num = document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost';
        }

    }
});
document.querySelector('.check').addEventListener('click', function () {



});

console.log(number1);
document.querySelector('.number').textContent = number1;
//console.log(elm)
//console.log(document.querySelector('.message'));

//console.log(document.querySelector('.guess').value);