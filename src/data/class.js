const cleric = {
  name: "Cleric",
  minAbilities: ["WIS"],
};

const fighter = {
  name: "Fighter",
  minAbilities: ["STR"],
};

const mage = {
  name: "Mage",
  minAbilities: ["INT"],
};

const thief = {
  name: "Thief",
  minAbilities: ["DEX"],
};

const classObj = {
  cleric,
  fighter,
  mage,
  thief,
};

const classeList = [cleric, fighter, mage, thief];
export { classObj, classeList };
