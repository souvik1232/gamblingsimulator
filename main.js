const readline = require('readline-sync')
const gamblng = require('./utility')
let reply;
do {
    console.log("Welcome to Gambling Simulator");
    gamblng.gamble();
    reply = readline.question("Do you want to try again? ");
} while (reply == 'Y');

 