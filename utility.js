const STAKE = 100;
const BET = 1;

class Gambling {
      gamble = () =>{
           let day = 0;
           let stake = STAKE;
           let bet = BET;
           let totalWin=0;
           let totalLoss=0;
           let winLuck=0;
           let lossLuck=0;
           do {
                day++;
                let luck = Math.floor(Math.random() * 2);
               if (luck == 1) {
                stake = stake+bet;
                winLuck = this.luck((stake/2),winLuck);
                totalWin = totalWin+(stake/2);
                console.log("Win->",day,"day","->",stake/2);
                stake = stake+(stake/2);
               } else if (luck == 0) {
                stake=stake-bet;
                lossLuck = this.luck((stake/2),lossLuck);
                totalLoss = totalLoss+(stake/2);
                stake = stake/2;
                if (stake<=0) {
                     break;
                }
                console.log("Loss->",day,"day","->",stake);
               }
           } while (day<20);
           console.log("Total win ->",totalWin,"$");
           console.log("Total loss ->",totalLoss,"$")
           console.log("Luckiest win ->",winLuck," ","Unluckiest Loss ->",lossLuck);
      }
      luck = (amount,base) =>{
          if (amount > base) {
               return amount;
          } else {
               return base;
          } 
      }
}
module.exports = new Gambling();