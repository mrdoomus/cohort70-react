import React, { useReducer } from "react";
import { TestReducer } from "./reducer";

const initialContext = {
  mottos: [
    "Set some goals, then demolish them.",
    "Luck is just probability taken personally.",
    "This too shall pass.",
  ],
};

export const Context = React.createContext(initialContext);

export const Provider = ({ children }) => {
  const [store, dispatch] = useReducer(TestReducer, initialContext);

  return (
    <Context.Provider value={{ store, dispatch }}>{children}</Context.Provider>
  );
};
