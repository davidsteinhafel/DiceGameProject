"use strict";


let roundCounter = 0;
let numPlayers = 10;
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
       roundCounter++;
       document.getElementById("myDiv").innerHTML=String(roundCounter);
       players.map(p =>p.roundScore = (rollDiceSet()));
       document.getElementById("myDiv1").innerHTML ="";
       players.forEach(p => document.getElementById("myDiv1").innerHTML+= String(p.name + " "));
       document.getElementById("myDiv2").innerHTML ="";
       players.forEach(p => document.getElementById("myDiv2").innerHTML+= String(" " + p.roundScore))
    }
function shootoutRound(){
        let selectD20 = rollDice(1, 5);
        let d20arr = [rollDice(1, 21), rollDice(1, 21), rollDice(1, 21), rollDice(1, 21)]
        d20arr.sort(function(a, b){return a-b});
        
        for(let i = 0; i < selectD20; i++){
            d20arr.shift();
        }
    }
function eliminate(){
    if(roundCounter < 4){
        players.sort(function(a, b){return a.roundScore-b.roundScore});
        players.shift();
        players.shift();

    }
    else if(roundCounter == 4 || 5){
        players.sort(function(a, b){return a.roundScore-b.roundScore});
        players.shift()
    }
    else{
        displayWinner();
    }
}
function displayWinner(){
    roundCounter++;
    document.getElementById("myDiv4").innerHTML=String(roundCounter);
    let player1 = shootoutRound();
    let player2 = shootoutRound();

    
    if (player1 > player2){
        alert(players[0].name + " " + "Congrats on winning!")
        document.getElementById("myDiv1").innerHTML=String(player[0].name);
    }
    else{
        alert(players[0].name + " " + "Congrats on winning!")
        document.getElementById("myDiv1").innerHTML=String(player[0].name);
    }
}
function playRoundMaster(){
    if(players.length > 1){
        playRound();
        eliminate();
    }
    else{
        displayWinner();
    }
}
    