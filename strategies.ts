import { Game } from "./Game";
import { cardIndex } from "./CardIndex";

export function shuffle_risky(this: Game) {
    return true;
}

export function shuffle_safe(this: Game) {
    if (this.playedHappiness <= -2) {
        return false;
    }

    return true;
}

export function shuffle_verySafe(this: Game) {
    if (this.playedHappiness <= -1) {
        return false;
    }

    return true;
}

export function shuffle_never(this: Game) {
    return false;
}

export function play_risky(this: Game) {
    if (this.playedHappiness == -2 && this.hand[0].happiness === -1) {
        return false;
    }

    return true;
}

export function play_safe(this: Game) {
    if (this.playedHappiness == -1 && this.hand[0].happiness === -1) {
        return false;
    }

    return true;
}

export function buy_khloe(this: Game) {
    const sumHappiness = this.sumHappiness;
    const playedValue = this.playedValue;

    if (sumHappiness > -2 && playedValue >= 12) {
        this.discard.push(cardIndex.train_station);
        return;
    } else if (sumHappiness > -2 && playedValue >= 7) {
        this.discard.push(cardIndex.central_park);
        return;
    } else if (this.playedValue < 2) {
        if (this.flippable(cardIndex.residential)) {
            this.flip(cardIndex.residential);
        }

        return;
    } else if (this.playedValue < 5) {
        this.discard.push(cardIndex.convenience_store);
    } else if (this.playedValue < 8) {
        this.discard.push(cardIndex.factory);
    } else if (this.playedValue >= 8) {
        this.discard.push(cardIndex.church);
    }
}

export function buy_mostExpensive(this: Game) {
    const playedValue = this.playedValue;

    if (playedValue < 2) {
        return;
    } else if (playedValue < 4) {
        this.discard.push(cardIndex.convenience_store);
    } else if (playedValue < 5) {
        this.discard.push(cardIndex.hospital);
    } else if (playedValue < 6) {
        this.discard.push(cardIndex.factory);
    } else if (playedValue < 8) {
        this.discard.push(cardIndex.central_park);
    } else if (playedValue < 12) {
        this.discard.push(cardIndex.church);
    } else {
        this.discard.push(cardIndex.train_station);
    }
}