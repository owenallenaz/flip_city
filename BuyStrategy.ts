import { Game } from "./Game";

export interface BuyStrategy {
    (this: Game): void;
}