const dwarf = {
  name: "Dwarf",
  allowedClasses: ["Cleric", "Fighter", "Thief"],
  minAbilities: ["CON"],
  maxAbilities: ["CHA"],
  hitDie: "Any",
  description:
    "Typically about 4' tall, stocky, lifespan of300-400 years. Thick hair and beards.",
  savingThrows: [4, 4, 4, 3, 4],
};

const elf = {
  name: "Elf",
  allowedClasses: ["Cleric", "Fighter", "Fighter Mage", "Mage", "Thief"],
  minAbilities: ["INT"],
  maxAbilities: ["CON"],
  description:
    "Typically about 4' tall, stocky, lifespan of300-400 years. Thick hair and beards.",
};

const halfling = {
  name: "Halfling",
  allowedClasses: ["Cleric", "Fighter", "Thief"],
  minAbilities: ["DEX"],
  maxAbilities: ["STR"],
  hitDie: "d6",
  languages: ["Common", "Halfling"],
  description:
    "Typically about 4' tall, stocky, lifespan of300-400 years. Thick hair and beards.",
  savingThrows: [4, 4, 4, 3, 4],
};

const human = {
  name: "Human",
  allowedClasses: ["Cleric", "Fighter", "Fighter Mage", "Mage", "Thief"],
  minAbilities: [],
  maxAbilities: [],
  description:
    "Typically about 4' tall, stocky, lifespan of300-400 years. Thick hair and beards.",
};

const racesObj = {
  dwarf,
  elf,
  halfling,
  human,
};

const raceList = [dwarf, elf, halfling, human];

export { racesObj, raceList };
