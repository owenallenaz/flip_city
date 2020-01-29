import { CardId } from "./CardId";
import { Card } from "./Card";
import { cards } from "./cards";

export type CardIndex = {
    [index in CardId]: Card;
};

export const cardIndex = cards.reduce((prev, next: Card) => {
    prev[next.id] = next;
    return prev;
}, <CardIndex>{});