import { Card } from "./Card";
import { CardIndex } from "./CardIndex";
import { shuffle } from "lodash";
import { RiskStrategy } from "./RiskStrategy";
import { cardIndex } from "./cardIndex";
import { BuyStrategy } from "./BuyStrategy";
import { CardId } from "./CardId";

export class Game {
    shuffleStrategy: RiskStrategy;
    riskStrategy: RiskStrategy;
    buyStrategy: BuyStrategy;
    turns: number;
    bustedTurns: number;
    hand: Card[];
    played: Card[];
    discard: Card[];
    constructor({ shuffleStrategy, riskStrategy, buyStrategy }: { shuffleStrategy: RiskStrategy, riskStrategy: RiskStrategy, buyStrategy: BuyStrategy }) {
        const startingHand = [
            cardIndex.residential,
            cardIndex.residential,
            cardIndex.residential,
            cardIndex.apartment,
            cardIndex.convenience_store,
            cardIndex.hospital,
            cardIndex.factory,
            cardIndex.central_park
        ];

        this.turns = 0;
        this.bustedTurns = 0;
        this.hand = shuffle(startingHand);
        this.discard = [];
        this.played = [];
        this.riskStrategy = riskStrategy;
        this.buyStrategy = buyStrategy;
        this.shuffleStrategy = shuffleStrategy;
    }
    get playedValue() {
        if (this.busted) {
            return 0;
        }

        return this.played.reduce((prev, curr) => {
            return prev + curr.value;
        }, 0);
    }
    get playedHappiness() {
        return this.played.reduce((prev, curr) => {
            return prev + curr.happiness;
        }, 0);
    }
    get playedAwards() {
        return this.played.reduce((prev, curr) => {
            return prev + curr.awards;
        }, 0)
    }
    get busted() {
        return this.playedHappiness === -3;
    }
    get won() {
        return this.busted === false && (this.played.length >= 18 || this.playedAwards >= 8);
    }
    get sumHappiness() {
        const all = [...this.hand, ...this.played, ...this.discard];
        return all.reduce((prev, curr) => {
            return prev + curr.happiness;
        }, 0);
    }
    play() {
        while(this.won === false) {
            this.turn();
        }

        console.log("Game won", this.turns);
    }
    turn() {
        this.turns++;

        while(this.canPlay()) {
            const card = this.hand.shift();

            // if the card played is a factory, we need to burn off the bottom card from the hand
            if (card.id === "factory" && this.hand.length > 0) {
                const burnCard = this.hand.pop();
                this.discard.push(burnCard);
            }

            this.played.push(card);

            if (this.busted) {
                break;
            }

            if (this.hand.length === 0 && this.discard.length > 0) {
                const willShuffle = this.shuffleStrategy();
                if (willShuffle) {
                    this.shuffle();
                }
            }
        }  

        if (this.won) {
            return;
        }

        if (this.busted === false) {
            this.buyStrategy();
        } else {
            this.bustedTurns++;
        }

        this.discard.push(...this.played);
        this.played = [];

        if (this.hand.length === 0) {
            this.shuffle();    
        }
    }
    flippable(card: Card) {
        return this.discard.includes(card);
    }
    flip(card: Card) {
        const index = this.discard.indexOf(card);
        this.discard[index] = cardIndex[card.flip.id];
    }
    shuffle() {
        this.hand.push(...shuffle(this.discard));
        this.discard = [];
    }
    canPlay() {
        if (this.playedHappiness === -3) {
            return false;
        }

        if (this.hand.length === 0) {
            return false;
        }

        if (this.hand[0].id === "residential") {
            return true;
        }

        if (this.won) {
            return false;
        }

        return this.riskStrategy();
    }
}