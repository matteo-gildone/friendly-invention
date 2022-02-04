import React, { createContext, useMemo, useReducer, useContext } from "react";

const ScreenContext = createContext();

const initialState = "intro";

const screenReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_SCREEN": {
      return action.payload;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const ScreenProvider = ({ children }) => {
  const [stateScreen, dispatchScreen] = useReducer(screenReducer, initialState);
  const value = useMemo(
    () => ({ stateScreen, dispatchScreen }),
    [stateScreen, dispatchScreen]
  );
  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
};

const useScreen = () => {
  const context = useContext(ScreenContext);
  if (context === undefined) {
    throw new Error("useScreen must be used within a ScreenProvider");
  }
  return context;
};

export { ScreenProvider, useScreen };
