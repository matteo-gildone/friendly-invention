const isDwarf = (scores) => {
    return scores.CON > 8 && scores.CHA < 18
};

const isElf = (scores) => {
    return scores.INT > 8 && scores.CON < 18
};

const isHalfling = (scores) => {
    return scores.DEX > 8 && scores.STR < 18
};

const isHuman = (scores) => {
    return true
};

export {isDwarf, isElf, isHalfling, isHuman}