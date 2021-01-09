const STAKE = 100;
const BET = 1;

class Gambling {
      gamble = () =>{
           let day = 0;
           let stake = STAKE;
           let bet = BET;
           let totalWin=0;
           let totalLoss=0;
           do {
                day++;
                let luck = Math.floor(Math.random() * 2);
               if (luck == 1) {
                console.log("Win");
                stake = stake+bet;
                totalWin = totalWin+(stake/2);
                stake = stake+(stake/2);
                //console.log("Win->",day,"day","->",stake);
               } else if (luck == 0) {
                console.log("Loss");
                stake=stake-bet;
                totalLoss = totalLoss+(stake/2);
                stake = stake/2;
                if (stake<=0) {
                     break;
                }
                //console.log("Loss->",day,"day","->",stake);
               }
           } while (day<20);
           console.log("Total win ->",totalWin,"$");
           console.log("Total loss ->",totalLoss,"$")
           
      }
}
module.exports = new Gambling();