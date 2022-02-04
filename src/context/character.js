import React, { createContext, useMemo, useReducer, useContext } from "react";
import { raceList } from "../data/race";
import { getRandomFromList } from "../utils/random";
import { rollAbilities } from "../utils/roll";
import { getClass } from "../utils/class";

const CharacterContext = createContext();

const characterReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "CREATE_CHARACTER": {
      const localRace = getRandomFromList(raceList);
      const localClass = getClass(
        getRandomFromList(localRace.allowedClasses).toLowerCase()
      );
      return {
        ...state,
        race: localRace,
        klass: localClass,
        abilities: {
          STR: rollAbilities().value,
          DEX: rollAbilities().value,
          CON: rollAbilities().value,
          INT: rollAbilities().value,
          WIS: rollAbilities().value,
          CHA: rollAbilities().value,
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
