const STAKE = 100;
const BET = 1;

class Gambling {
      gamble = () =>{
          let bet = Math.floor(Math.random() * 2);
          if (bet == 1) {
               console.log("Win");
          } else if (bet == 0) {
               console.log("Loss");
          }
      }
}
module.exports = new Gambling();