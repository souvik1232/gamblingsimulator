const STAKE = 100;
const BET = 1;

class Gambling {
      gamble = () =>{
           let stake = STAKE;
           let bet = BET;
           let luck = Math.floor(Math.random() * 2);
           if (luck == 1) {
                console.log("Win");
                stake = stake+bet;
           } else if (luck == 0) {
                console.log("Loss");
                stake=stake-bet;
                stake = stake/2;
          }
      }
}
module.exports = new Gambling();