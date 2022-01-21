const regex =
    /^(\d*)d(\d+|%)(([+\-/*bw])(\d+))?(([+\-/*])(\d+|(\d*)d(\d+|%)(([+\-/*bw])(\d+))?))*$/;

const getRandomIntInclusive = (sides) => {
    const min = Math.ceil(1);
    const max = Math.floor(sides);
    return () => {
        return (Math.floor(Math.pow(10,14)*Math.random()*Math.random())%(max-min+1))+min;
    };
};

const discardMin = (rolled) => {
    const rolls = rolled.slice();
    const smallest = Math.min.apply(null, rolls);
    const smallestIndex = rolls.indexOf(smallest);
    return rolls.slice(0, smallestIndex).concat(rolls.slice(smallestIndex + 1));
};

const roll = (pattern, removeMin = false) => {
    const match = regex.exec(pattern);
    const quantity = parseInt(match[1], 10);
    const sides = parseInt(match[2], 10);
    const hasTransformation = !!match[3];
    let rolled = [];
    let value = 0;

    while (rolled.length < quantity) {
        rolled.push(getRandomIntInclusive(sides)());
    }

    if (removeMin) {
        rolled = discardMin(rolled);
    }

    value = rolled.reduce((acc, next) => acc + next, 0);

    if (hasTransformation) {
        value += parseInt(match[5], 10);
    }

    return {
        rolled,
        value,
    };
};

const d4 = () => roll("1d4");
const d6 = () => roll("1d6");
const d8 = () => roll("1d8");
const d10 = () => roll("1d10");
const d12 = () => roll("1d12");
const d20 = () => roll("1d20");
const d100 = () => roll("1d100");

const rollAbilities = () => roll("4d6", true);

export { d4, d6, d8, d10, d12, d20, d100, roll, rollAbilities };
