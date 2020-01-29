"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cards = [
    {
        id: "residential",
        title: "Residential",
        awards: 0,
        value: 1,
        happiness: -1,
        flip: {
            id: "apartment",
            cost: 1
        }
    },
    {
        id: "apartment",
        title: "Apartment",
        awards: 0,
        value: 1,
        happiness: -1,
        recycle: {
            id: "residential",
            cost: 8
        }
    },
    {
        id: "convenience_store",
        title: "Convenience Store",
        awards: 0,
        value: 1,
        happiness: 0,
        buy: {
            cost: 2
        },
        flip: {
            id: "shopping_mall",
            cost: 3
        }
    },
    {
        id: "shopping_mall",
        title: "Shopping Mall",
        awards: 1,
        value: 2,
        happiness: 0,
        recycle: {
            id: "convenience_store",
            cost: NaN
        }
    },
    {
        id: "hospital",
        title: "Hospital",
        awards: 0,
        value: 1,
        happiness: -1,
        buy: {
            cost: 4
        },
        flip: {
            id: "church",
            cost: 4,
        }
    },
    {
        id: "church",
        title: "Church",
        awards: 0,
        value: 0,
        happiness: 1,
        recycle: {
            id: "hospital",
            cost: NaN
        }
    },
    {
        id: "factory",
        title: "Factory",
        awards: 0,
        value: 2,
        happiness: 0,
        buy: {
            cost: 5
        },
        flip: {
            id: "power_plant",
            cost: 6
        }
    },
    {
        id: "central_park",
        title: "Central Park",
        awards: 2,
        value: 0,
        happiness: 0,
        buy: {
            cost: 7
        },
        flip: {
            id: "train_station",
            cost: 5
        }
    },
    {
        id: "train_station",
        title: "Train Station",
        awards: 3,
        value: 0,
        happiness: 0
    }
];
//# sourceMappingURL=Cards.js.map