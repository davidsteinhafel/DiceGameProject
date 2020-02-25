"use strict";

let round = 5;
let numPlayers = 10;
let roundScore = 6;
let player = {name:"player", roundScore: 0}
let players = [
    {name:"player1", roundScore: 0},
    {name:"player2", roundScore: 0},
    {name:"player3", roundScore: 0},
    {name:"player4", roundScore: 0},
    {name:"player5", roundScore: 0},
    {name:"player6", roundScore: 0},
    {name:"player7", roundScore: 0},
    {name:"player8", roundScore: 0},
    {name:"player9", roundScore: 0},
    {name:"player10", roundScore: 0}
];


function rollDice(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min; 
}
function rollDiceSet(){
    let die1 = rollDice(1,5);
    let die2 = rollDice(1,9);
    let die3 = rollDice(1,11);
    let die4 = rollDice(1,12);
    let die5 = rollDice(1,21);
    let setScore = die1 + die2 + die3 + die4 + die5;
    return setScore;
   
}
function playRound(){
       players.map(p =>p.roundScore += (rollDiceSet()));
       players.forEach(p => console.log(p.name + " " + p.roundScore));
    }
    playRound();