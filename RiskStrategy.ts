import { Game } from "./Game";

export interface RiskStrategy {
    (this: Game): boolean;
}