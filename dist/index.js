"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("./Game");
const lodash_1 = require("lodash");
const strategies = require("./strategies");
let games = [];
for (var i = 0; i < 100; i++) {
    const game = new Game_1.Game({
        riskStrategy: strategies.play_risky,
        buyStrategy: strategies.buy_khloe,
        shuffleStrategy: strategies.shuffle_safe
    });
    game.play();
    games.push(game);
}
const turns = games.map(val => val.turns);
const bustedTurns = games.map(val => val.bustedTurns);
const averageBustedTurns = lodash_1.mean(bustedTurns);
const averageTurns = lodash_1.mean(turns);
const minTurns = lodash_1.min(turns);
const maxTurns = lodash_1.max(turns);
// const busted = games.filter(val => val.busted).length;
// const averageValue = mean(games.filter(val => !val.busted).map(val => val.playedValue));
// const totalAverage = mean(games.map(val => val.playedValue));
console.log("averageTurns", averageTurns, averageBustedTurns, minTurns, maxTurns);
//# sourceMappingURL=index.js.map