import React, { createContext, useMemo, useReducer, useContext } from "react";

const CharacterContext = createContext();

const characterReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "CREATE_CHARACTER": {
      return {
        ...state,
        race: {
          name: "Dwarf",
          allowedClasses: ["Cleric", "Fighter", "Thief"],
          minAbilities: ["CON"],
          maxAbilities: ["CHA"],
          hitDie: "Any",
          languages: ["Common", "Dwarvish"],
          description:
            "Typically about 4' tall, stocky, lifespan of300-400 years. Thick hair and beards.",
          special: [
            "Darkvision 60'",
            "Detect new construction, shifting walls slanting passages, traps w/ 1-2 on d6",
          ],
          savingThrows: [4, 4, 4, 3, 4],
        },
        klass: {
          name: "Fighter",
          minAbilities: [],
        },
        abilities: {
          STR: 10,
          DEX: 10,
          CON: 10,
          INT: 10,
          WIS: 10,
          CHA: 10,
        },
      };
    }

    case "SET_ABILITY": {
      const { abilities } = state;
      return {
        ...state,
        abilities: { ...abilities, [action.label]: action.value },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const initialState = {
  race: {
    name: "",
    allowedClasses: [],
    minAbilities: [],
    maxAbilities: [],
  },
  klass: {
    name: "",
    minAbilities: [],
  },
  abilities: {
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  },
};

const CharacterProvider = ({ children }) => {
  const [stateCharacter, dispatchCharacter] = useReducer(
    characterReducer,
    initialState
  );
  const value = useMemo(
    () => ({ stateCharacter, dispatchCharacter }),
    [stateCharacter, dispatchCharacter]
  );
  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};

const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }
  return context;
};

export { CharacterProvider, useCharacter };
