"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CardIndex_1 = require("./CardIndex");
function shuffle_risky() {
    return true;
}
exports.shuffle_risky = shuffle_risky;
function shuffle_safe() {
    if (this.playedHappiness <= -2) {
        return false;
    }
    return true;
}
exports.shuffle_safe = shuffle_safe;
function shuffle_verySafe() {
    if (this.playedHappiness <= -1) {
        return false;
    }
    return true;
}
exports.shuffle_verySafe = shuffle_verySafe;
function shuffle_never() {
    return false;
}
exports.shuffle_never = shuffle_never;
function play_risky() {
    if (this.playedHappiness == -2 && this.hand[0].happiness === -1) {
        return false;
    }
    return true;
}
exports.play_risky = play_risky;
function play_safe() {
    if (this.playedHappiness == -1 && this.hand[0].happiness === -1) {
        return false;
    }
    return true;
}
exports.play_safe = play_safe;
function buy_khloe() {
    const sumHappiness = this.sumHappiness;
    const playedValue = this.playedValue;
    if (sumHappiness > -2 && playedValue >= 12) {
        this.discard.push(CardIndex_1.cardIndex.train_station);
        return;
    }
    else if (sumHappiness > -2 && playedValue >= 7) {
        this.discard.push(CardIndex_1.cardIndex.central_park);
        return;
    }
    else if (this.playedValue < 2) {
        if (this.flippable(CardIndex_1.cardIndex.residential)) {
            this.flip(CardIndex_1.cardIndex.residential);
        }
        return;
    }
    else if (this.playedValue < 5) {
        this.discard.push(CardIndex_1.cardIndex.convenience_store);
    }
    else if (this.playedValue < 8) {
        this.discard.push(CardIndex_1.cardIndex.factory);
    }
    else if (this.playedValue >= 8) {
        this.discard.push(CardIndex_1.cardIndex.church);
    }
}
exports.buy_khloe = buy_khloe;
function buy_mostExpensive() {
    const playedValue = this.playedValue;
    if (playedValue < 2) {
        return;
    }
    else if (playedValue < 4) {
        this.discard.push(CardIndex_1.cardIndex.convenience_store);
    }
    else if (playedValue < 5) {
        this.discard.push(CardIndex_1.cardIndex.hospital);
    }
    else if (playedValue < 6) {
        this.discard.push(CardIndex_1.cardIndex.factory);
    }
    else if (playedValue < 8) {
        this.discard.push(CardIndex_1.cardIndex.central_park);
    }
    else if (playedValue < 12) {
        this.discard.push(CardIndex_1.cardIndex.church);
    }
    else {
        this.discard.push(CardIndex_1.cardIndex.train_station);
    }
}
exports.buy_mostExpensive = buy_mostExpensive;
//# sourceMappingURL=strategies.js.map