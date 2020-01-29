import { Game } from "./Game";
import { mean, min, max } from "lodash";
import * as strategies from "./strategies";

let games: Game[] = [];

for(var i = 0; i < 100; i++) {
    const game = new Game({
        riskStrategy: strategies.play_risky,
        buyStrategy: strategies.buy_khloe,
        shuffleStrategy: strategies.shuffle_safe
    });
    game.play();
    games.push(game);
}

const turns = games.map(val => val.turns);
const bustedTurns = games.map(val => val.bustedTurns);
const averageBustedTurns = mean(bustedTurns);
const averageTurns = mean(turns);
const minTurns = min(turns);
const maxTurns = max(turns);

// const busted = games.filter(val => val.busted).length;
// const averageValue = mean(games.filter(val => !val.busted).map(val => val.playedValue));
// const totalAverage = mean(games.map(val => val.playedValue));

console.log("averageTurns", averageTurns, averageBustedTurns, minTurns, maxTurns);