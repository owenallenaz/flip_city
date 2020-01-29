"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cards_1 = require("./cards");
exports.cardIndex = cards_1.cards.reduce((prev, next) => {
    prev[next.id] = next;
    return prev;
}, {});
//# sourceMappingURL=CardIndex.js.map