"use strict";
const score_0_element=document.getElementById('score--0');
const score_1_element=document.getElementById('score--1');
const dice_element=document.querySelector('.dice')
const button_new=document.querySelector('.btn--new');
const button_roll=document.querySelector('.btn--roll');
const button_hold=document.querySelector('.btn--hold');
const current_player_0=document.getElementById('current--0');
const current_player_1=document.getElementById('current--1');


score_0_element.textContent=0;
score_1_element.textContent=0;
dice_element.classList.add('hidden');

let current_score=0;

//Button is rolled
button_roll.addEventListener('click',function(){
    //1. Generate random dice roll
    const dice=Math.trunc(Math.random()*6)+1;
    
    //2. Display the dice
    dice_element.classList.remove('hidden');
    dice_element.src=`dice-${dice}.png`;

    //3. Check is Dice face is 1
    if(dice!=1){
        current_score+=dice;
    }else{
        
    }
})