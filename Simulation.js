"use strict"
let round = 5;
let numPlayers = 10;
let roundScore = 6;
let player = {name:"player", roundScore}
let players = [];


function numberPlayers(numbPlayers){
    for(let i = 0; i < numbPlayers; i++){
        
        
        console.log(players.name)
    }
}
numberPlayers(numPlayers);
function rollDice(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min; 
}
function playRound(){
    
        this.roundScore = (rollDice(1,5) + rollDice(1,7) + rollDice(1,9) + rolllDice(1,11) + rollDice(1,12) +rollDice(1, 21));
        return console.log(roundScore);
    }
