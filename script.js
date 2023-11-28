'use strict';
const score_0_element=document.getElementById('score--0');
const score_1_element=document.getElementById('score--1');
const dice_element=document.querySelector('.dice')
const button_new=document.querySelector('.btn--new');
const button_roll=document.querySelector('.btn--roll');
const button_hold=document.querySelector('.btn--hold');
const current_player_0=document.getElementById('current--0');
const current_player_1=document.getElementById('current--1');
const player_0=document.querySelector('.player--0');
const player_1=document.querySelector('.player--1');

let scores;
let current_score;
let active_player;
let game_still_in_play;

const switching_players=function(){
    document.getElementById(`current--${active_player}`).textContent=0;
    active_player= active_player === 0?1:0;
    current_score=0;
    player_0.classList.toggle('player--active');
    player_1.classList.toggle('player--active');
}

const initialization=function(){
    score_0_element.textContent=0;
    score_1_element.textContent=0;
    dice_element.classList.add('hidden');

    scores=[0,0];
    current_score=0;
    active_player=0;
    game_still_in_play=true;

    score_0_element.textContent=0;
    score_1_element.textContent=0;
    current_player_0.textContent=0;
    current_player_1.textContent=0;
    player_0.classList.remove('player--winner');
    player_1.classList.remove('player--winner');
    player_0.classList.add('player--active');
    player_1.classList.remove('player--active');
}

initialization();

//Button is rolled
button_roll.addEventListener('click',function(){
    if(game_still_in_play){
        //1. Generate random dice roll
        const dice=Math.trunc(Math.random()*6)+1;
    
        //2. Display the dice
        dice_element.classList.remove('hidden');
        dice_element.src=`dice-${dice}.png`;

        //3. Check is Dice face is 1
        if(dice!=1){
            current_score+=dice;
            document.getElementById(`current--${active_player}`).textContent=current_score;
        }else{
            //Switch players
            switching_players();
        }
    }
})

button_hold.addEventListener('click',function(){
    if(game_still_in_play){
        //1. Add current score to score of active score
        scores[active_player]+=current_score;
        document.getElementById(`score--${active_player}`).textContent=scores[active_player];
        //2. Check if score>=100
        if(scores[active_player]>=100){
            //finish game
            game_still_in_play=false;
            dice_element.classList.add('hidden');
            document.querySelector(`.player--${active_player}`).classList.add('player--winner');
            document.querySelector(`.player--${active_player}`).classList.remove('player--active');
        }else{
            //3. Switch Players
            switching_players();
        }
    }  
})

button_new.addEventListener('click',initialization);