'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl=document.querySelector('.dice');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');



score0El.textContent=0;
score1El .textContent=0;
diceEl.classList.add('hidden')

let currentScore=0;

btnRoll.addEventListener('click',function(){
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);

    // diceE1.classList.remove('hidden')
    // diceE1.scr = `dice-${dice}.png`;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    
    console.log( `dice-${dice}.png`);
    if(dice!== 1){
      currentScore+=dice; 
      current0El.textContent=currentScore;
    }
    else
    {
        
    }

});