import { CardId } from "./CardId";

export type Card = {
    id: CardId;
    title: string;
    awards: number;
    value: number;
    happiness: number;
    buy?: {
        cost: number;
    },
    flip?: {
        id: CardId;
        cost: number;
    }
    recycle?: {
        id: CardId;
        cost: number
    }
}