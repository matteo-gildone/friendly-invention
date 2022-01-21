import {rollAbilities} from "./roll";

export const getModifier = (score) => {
    switch (score) {
        case 3:
            return -3;
        case 4:
        case 5:
            return -2;
        case 6:
        case 7:
        case 8:
            return -1;
        case 9:
        case 10:
        case 11:
        case 12:
            return 0;
        case 13:
        case 14:
        case 15:
            return 1;
        case 16:
        case 17:
            return 2;
        case 18:
            return 3;
        default:
            return 0;
    }
};

export const createFromAttributes = (stats) => stats.reduce((acc, next) => {
    acc[next] = rollAbilities().value;
    return acc;
}, {});